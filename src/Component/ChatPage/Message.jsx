import React, { useState, useEffect, useRef } from 'react';
import { Paperclip, Send } from 'lucide-react';
import { initializeSocket } from '../../utils/socket';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const API_URL = import.meta.env.VITE_APP_API_URL; // Ensure you have this in your .env file

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
  const [UserCredits, setUserCredits] = useState(null); // Assuming credit system from previous app
  const [newChat, setNewChat] = useState(false); // To track if it's a new conversation for credit deduction

  useEffect(() => {
    const token = localStorage.getItem('token');
    const newSocket = initializeSocket(token); // Initialize socket
    setSocket(newSocket);

    return () => {
      // You might want to disconnect the socket here if it's no longer needed
      // or if you have a global socket managed in App.jsx.
      // If `initializeSocket` returns a new socket on every call, ensure proper cleanup.
      // If it's a singleton, you might not need to disconnect here.
    };
  }, []);

  useEffect(() => {
    if (!socket || !conversation) return;

    // Join the conversation room
    socket.emit('join_conversation', conversation._id);

    // Listen for new messages
    socket.on('receive_message', (message) => {
      setMessages(prev => [...prev, message]);
      toast.success('New message received!'); // Or a more subtle notification
    });

    socket.on('message_delivered', (message) => {
      // Optional: Update message status to delivered in UI
      console.log('Message delivered confirmation:', message);
    });

    socket.on('message_error', (error) => {
      console.error('Message error:', error);
      toast.error('Failed to send message.');
    });

    return () => {
      socket.off('receive_message');
      socket.off('message_delivered');
      socket.off('message_error');
    };
  }, [socket, conversation]);

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
          `${API_URL}user/${currentUserId}`, // Adjust this endpoint if needed
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

        // Mark messages as read
        // await axios.patch(
        //   `${API_URL}chat/mark-as-read`,
        //   {
        //     conversationId: conversationData._id,
        //     userId: currentUserId,
        //   },
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization: `Bearer ${token}`,
        //     },
        //   }
        // );
        console.log(messages,UserCredits,12);

      } catch (err) {
        console.error("Error fetching conversation:", err);
        toast.error("Error loading chat.");
      } finally {
        setLoading(false);
      }
    };

    fetchConversation();
  }, [currentUserId, recipientId]);

  const sendMessage = async () => {
    if (input.trim() === '' || !conversation || !currentUserId) return;

    // if (messages.length === 0 && UserCredits === 0) {
    //   toast.error("You have zero credits. Please upgrade.");
    //   return;
    // }

    const messageData = {
      conversationId: conversation._id,
      senderId: currentUserId,
      text: input,
      timestamp: new Date().toISOString() // Use ISO string for consistent date
    };

    try {
      // Optimistically add message to UI
      setMessages(prev => [...prev, { ...messageData, sender: { _id: currentUserId } }]);
      setInput('');

      // Emit message via Socket.IO
      socket.emit('send_message', messageData);

      // Save message to database via API
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

      // Deduct credits for the first message in a new chat
      if (newChat && UserCredits > 0) {
        const response = await axios.post(
          `${API_URL}user/credits/${currentUserId}`,
          { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        );

        if (response.status === 200) {
          setUserCredits(prev => prev - 1);
          toast.success("Your credits are reduced by one.");
        }
        setNewChat(false); // Mark as not a new chat anymore
      }

    } catch (err) {
      console.error('Error sending message:', err);
      toast.error('Failed to send message.');
      // Optional: Revert optimistic update if send fails
      setMessages(prev => prev.filter(msg => msg.timestamp !== messageData.timestamp));
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

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
    <div className="w-full flex flex-col h-full bg-[#FFCCA8] rounded-t-2xl rounded-b-2xl mt-4 mb-4">
      <Toaster />

      {/* Header with recipient info */}
      <div className="flex items-center p-5 bg-[#FFEADC] rounded-t-2xl shrink-0">
        <div className="relative">
          <img
            src={recipient.image}
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          {/* You might want to display online status if implemented */}
          {/* <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span> */}
        </div>
        <div className="ml-4">
          <h2 className="font-semibold text-black">{(recipient.firstName + " " + recipient.lastName) || "Loading..."}</h2>
          <p className="text-sm text-gray-800">{recipient.location || ""}</p>
        </div>
      </div>

      {/* Chat messages */}
      <div className="p-4 space-y-4 flex-1 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start ${
              (msg.sender?._id || msg.senderId) === currentUserId ? 'justify-end' : 'justify-start'
            } space-x-2`}
          >
            {(msg.sender?._id || msg.senderId) !== currentUserId && (
              <img
                src={msg.sender?.image}
                alt="user"
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <div>
              <div
                className={`px-4 py-2 rounded-2xl shadow text-sm ${
                  (msg.sender?._id || msg.senderId) === currentUserId
                    ? 'bg-[#FF5A60] text-white'
                    : 'bg-white text-gray-800'
                }`}
              >
                {msg.text}
              </div>
              <div className="text-xs text-[#000000] mt-1">
                {new Date(msg.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
            {(msg.sender?._id || msg.senderId) === currentUserId && (
              <img
                src={user?.image}
                alt="receiver"
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* Message input */}
      <div className="flex items-center p-3 bg-[#FF9A56] rounded-xl m-4 mb-6 shrink-0">
        <Paperclip className="w-5 h-5 text-gray-800 mr-3" />
        <input
          disabled={messages.length == 0 && (UserCredits == 0 || !UserCredits)}
          type="text"
          placeholder="Type your message here"
          className={`flex-1 p-2 bg-transparent outline-none text-gray-800 placeholder-gray-800 text-sm ${
           messages.length == 0 && (UserCredits == 0 || !UserCredits)
              ? 'cursor-not-allowed'
              : ''
          }`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          disabled={messages.length == 0 && (UserCredits == 0 || !UserCredits)}
          className={`${
            messages.length == 0 && (UserCredits == 0 || !UserCredits)
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-800 cursor-pointer'
          }`}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
      {messages.length == 0 && (UserCredits == 0 || !UserCredits) && (
        <div className="mt-2 px-2 py-1 bg-red-50 text-red-600 text-sm rounded-md border border-red-200 mx-4 mb-4">
          You have <strong>zero credits</strong>. Please <a href="/plans" className="underline hover:text-red-800">upgrade</a>.
        </div>
      )}
    </div>
  );
};

export default Message;