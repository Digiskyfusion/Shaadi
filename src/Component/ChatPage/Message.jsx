import React, { useState, useEffect, useRef } from 'react';
import { Paperclip, Send } from 'lucide-react';
import { initializeSocket } from '../../utils/socket';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import jsQR from "jsqr";

const API_URL = import.meta.env.VITE_APP_API_URL;

const Message = ({ recipientId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState(null);
  const [recipient, setRecipient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState(null);
  const chatEndRef = useRef(null);
  const user = JSON.parse(localStorage.getItem('userProfile'));
  const currentUserId = user?._id;
  const [UserCredits, setUserCredits] = useState(null);
  const [newChat, setNewChat] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const isSuspicious = (text) => {
  const suspiciousPatterns = [
    /\b\w+@\w+\b/, // UPI IDs (e.g. abc@paytm)
    /(paytm\.me|phonepe|gpay|google\.com\/pay|pay\.google)/i, // known payment links
    /(qr|scan.*pay|payment link|donate|send.*money)/i, // QR/payment-related keywords
    ];
    return suspiciousPatterns.some((regex) => regex.test(text));
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    const newSocket = initializeSocket(token);
    setSocket(newSocket);
  }, []);

  useEffect(() => {
    if (!socket || !conversation) return;

    socket.emit('join_conversation', conversation._id);

    socket.on('receive_message', (message) => {
  if (message.conversationId === conversation._id) {
    setMessages(prev => [...prev, message]);
    
  } else {
    console.log("Message belongs to different conversation:", message.conversationId);
  }
});


    socket.on('message_delivered', (message) => {
      console.log('Message delivered confirmation:', message);
    });

    socket.on('message_error', (error) => {
      console.error('Message error:', error);
      toast.error('Failed to send message.');
    });

    socket.on('message_read', ({ conversationId, currentUserId }) => {
  if (conversation?._id !== conversationId) return;

  setMessages(prevMessages =>
    prevMessages.map(msg =>
      msg.sender?._id === currentUserId ? { ...msg, read: true } : msg
    )
  );
});

    return () => {
      socket.off('receive_message');
      socket.off('message_delivered');
      socket.off('message_error');
    };
  }, [socket, conversation]);

  useEffect(() => {
  if (file) {
    sendFileMessage();
  }
}, [file]);

useEffect(() => {
  if (chatEndRef.current) {
    chatEndRef.current.scrollIntoView({ behavior: messages.length > 1 ? 'smooth' : 'auto' });
  }
}, [messages]);


  useEffect(() => {
    if (!currentUserId || !recipientId) {
      setLoading(false);
      return;
    }

    const fetchConversation = async () => {
      try {
        const token = localStorage.getItem("token");
        const conversationResponse = await axios.get(
          `${API_URL}chat/conversation/${currentUserId}/${recipientId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const conversationData = conversationResponse.data.data;
        setConversation(conversationData);
        setMessages(conversationData.messages);
        setRecipient(
          conversationData.participants.find((p) => p._id !== currentUserId)
        );

        const userCreditsResponse = await axios.get(
          `${API_URL}user/${currentUserId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (userCreditsResponse.status === 200) {
          setUserCredits(userCreditsResponse.data['user'].credits);
          if (conversationData.messages?.length < 1) {
            setNewChat(true);
          }
        }

      } catch (err) {
        console.error("Error fetching conversation:", err);
        toast.error("Error loading chat.");
      } finally {
        setLoading(false);
        
      }
    };

    

    fetchConversation().then(()=>{
markMessagesAsRead();
    });
  }, [currentUserId, recipientId]);

const markMessagesAsRead = async () => {
  try {
    await axios.post(`${API_URL}chat/message/read`, {
      conversationId: conversation._id,
      userId: currentUserId,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
  } catch (err) {
    console.error("Failed to mark messages as read:", err);
  }
};

  const uploadFileToFirebase = async (file) => {
  const fileRef = ref(storage, `chat_files/${Date.now()}_${file.name}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
};

const scanQRInImage = async (file) => {
  const img = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const code = jsQR(imageData.data, imageData.width, imageData.height);
  return code ? true : false;
};

const sendFileMessage = async () => {
  if (!file) return;
  try {
    setUploading(true);
    const fileType = file.type.startsWith("image/") ? "image" : "file";

    if(fileType == 'image'){
        const hasQR = await scanQRInImage(file);
  if (hasQR) {
    setUploading(false);
    toast.error("QR codes are not allowed for security reasons as it may lead to payment related frauds.");
    return;
  }

    }

    const fileUrl = await uploadFileToFirebase(file);
    

    
    const messageData = {
      conversationId: conversation._id,
      senderId: currentUserId,
      fileUrl,
      fileType,
      fileName: file.name,
      timestamp: new Date().toISOString()
    };

    socket.emit("send_message", messageData);
    await axios.post(`${API_URL}chat/message`, messageData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });

    setMessages(prev => [...prev, { ...messageData, sender: { _id: currentUserId } }]);
    setFile(null);
    setUploading(false);
  } catch (err) {
    toast.error("File upload failed.");
    console.error(err);
  }
};

  const sendMessage = async () => {
    if (input.trim() === '' || !conversation || !currentUserId) return;

    if (isSuspicious(input)) {
    toast.error("This message is not allowed to share as it may contain unsafe or fraudulent content related to payment methods.");
    return;
  }

    const messageData = {
      conversationId: conversation._id,
      senderId: currentUserId,
      text: input,
      timestamp: new Date().toISOString()
    };

    try {
      setMessages(prev => [...prev, { ...messageData, sender: { _id: currentUserId } }]);
      setInput('');

      socket.emit('send_message', messageData);

      await axios.post(`${API_URL}chat/message`, {
        conversationId: conversation._id,
        senderId: currentUserId,
        text: input
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (newChat && UserCredits > 0) {
        const response = await axios.post(
          `${API_URL}user/credits/${currentUserId}`,
          {},
          { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        );

        if (response.status === 200) {
          setUserCredits(prev => prev - 1);
          toast.success("Your credits are reduced by one.");
        }
        setNewChat(false);
      }

    } catch (err) {
      console.error('Error sending message:', err);
      toast.error('Failed to send message.');
      setMessages(prev => prev.filter(msg => msg.timestamp !== messageData.timestamp));
    }
  };

  if (loading) {
    return <div className="flex-1 flex items-center justify-center">Loading chat...</div>;
  }

  if (!recipientId) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400 italic">
        Select a user to start chatting.
      </div>
    );
  }

  if (!recipient) {
    return <div className="flex-1 flex items-center justify-center text-red-500">Recipient not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto flex flex-col h-screen overflow-hidden bg-[#FFCCA8] rounded-t-2xl rounded-b-2xl mt-2 mb-4">
      <Toaster />

      {/* Header */}
      <div className="flex items-center p-5 bg-[#FFEADC] rounded-t-2xl shrink-0">
        <div className="relative">
          <img
            src={recipient.profileImage}
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div className="ml-4">
          <h2 className="font-semibold text-black">{(recipient.firstName + " " + recipient.lastName) || "Loading..."}</h2>
          <p className="text-sm text-gray-800">{recipient.location || ""}</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">

        {Object.entries(
  messages.reduce((acc, msg) => {
    const dateKey = new Date(msg.timestamp).toDateString();
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(msg);
    return acc;
  }, {})
).map(([dateKey, msgs], i) => {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  let dateLabel = dateKey;
  if (dateKey === today) dateLabel = "Today";
  else if (dateKey === yesterday) dateLabel = "Yesterday";
  else
    dateLabel = new Date(dateKey).toLocaleDateString(undefined, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

   

  return (
    <div key={i}>
      <div className="text-center my-4">
        <span className="inline-block bg-white text-gray-600 px-3 py-1 text-sm rounded-full shadow-sm">
          {dateLabel}
        </span>
      </div>

      {msgs.map((msg, index) => (
        <div
          key={index}
          className={`flex items-start ${
            (msg.sender?._id || msg.senderId) === currentUserId
              ? 'justify-end'
              : 'justify-start'
          } space-x-2`}
        >
          {(msg.sender?._id || msg.senderId) !== currentUserId && (
            <div className="">
              <img
                src={recipient.profileImage}
                alt="user"
                className="w-8 h-8 rounded-full object-cover"
              />
              </div>
            )}
          <div>
            {msg.fileUrl ? (
  msg.fileType === "image" ? (
    <img
      src={msg.fileUrl}
      alt="uploaded"
      className="rounded-xl max-w-[10rem] md:max-w-[15rem] mt-1"
    />
  ) : (
    <a
      href={msg.fileUrl}
      download={msg.fileName}
      className="text-blue-600 underline text-sm"
      target="_blank"
      rel="noopener noreferrer"
    >
      📎 {msg.fileName}
    </a>
  )
) : (
  <div
    className={`px-4 py-2 rounded-2xl shadow text-sm break-words max-w-[13rem] md:max-w-md ${
      (msg.sender?._id || msg.senderId) === currentUserId
        ? 'bg-[#FF5A60] text-white'
        : 'bg-white text-gray-800'
    }`}
  >
    {msg.text}
  </div>
)}

            <div className="text-xs text-[#000000] mt-1 flex items-center gap-1">
  {new Date(msg.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}
  {/* {(msg.sender?._id || msg.senderId) === currentUserId && (
    msg.read ? (
      <span title="Read">✅✅</span>
    ) : (
      <span title="Delivered">✅</span>
    )
  )} */}
</div>

            
          </div>
          {(msg.sender?._id || msg.senderId) === currentUserId && (
            <img
              src={user?.profileImage}
              alt="receiver"
              className="w-8 h-8 rounded-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
})}

        <div ref={chatEndRef}></div>
      </div>

      {/* Input */}
      <div className="flex items-center p-3 bg-[#FF9A56] rounded-xl m-4 shrink-0">
        <input
          disabled={messages.length === 0 && (UserCredits === 0 || !UserCredits)}
          type="text"
          placeholder="Type your message here"
          className={`flex-1 p-2 bg-transparent outline-none text-gray-800 placeholder-gray-800 text-sm ${
            messages.length === 0 && (UserCredits === 0 || !UserCredits)
              ? 'cursor-not-allowed'
              : ''
          }`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        {uploading && (
  <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-800">
    <svg className="animate-spin h-5 w-5 text-[#FF5A60]" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
    Uploading file...
  </div>
)}

        <button
          onClick={sendMessage}
          className="ml-2 text-white bg-[#FF5A60] hover:bg-[#e14b52] px-4 py-2 rounded-full"
        >
          <Send className="w-4 h-4" />
        </button>
        <input
  type="file"
  className="hidden"
  id="fileInput"
  onChange={(e) => setFile(e.target.files[0])}
/>
<label className='ml-1' htmlFor="fileInput">
  <Paperclip className="w-5 h-5 text-gray-800 mr-3 cursor-pointer" />
</label>
      </div>
      {messages.length == 0 && (UserCredits == 0 || !UserCredits) && (
        <div className="px-2 py-1 bg-red-50 text-red-600 text-sm rounded-md border border-red-200 mx-4 mb-4">
          You have <strong>zero credits</strong>. Please <a href="/plans" className="underline hover:text-red-800">upgrade</a>.
        </div>
      )}
    </div>
  );
};

export default Message;
