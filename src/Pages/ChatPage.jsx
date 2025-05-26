import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useNavigate
import Navbar4 from '../Component/Navbar/Navbar4';
import ProfileShow from '../Component/ChatPage/ProfileShow';
import Message from '../Component/ChatPage/Message';
import Footer from '../Component/FooterPage/Footer';

function ChatPage() {
  const { id } = useParams(); 
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user._id) {
      setCurrentUserId(user._id);
    }
  }, []);

  return (
    <>
      <Navbar4 />
      <div className='md:flex h-full'>
        <div className="w-1/4 shadow-md hidden md:flex flex-col"> 
          <ProfileShow currentUserId={currentUserId} />
        </div>
        <div className="flex-1">
          {id ? (
            <Message recipientId={id} />
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400 italic">
              Select a user to start chatting.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ChatPage;