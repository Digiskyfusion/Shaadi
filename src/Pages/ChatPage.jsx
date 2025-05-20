import React from 'react'
import Navbar4 from '../Component/Navbar/Navbar4'
import ProfileShow from '../Component/ChatPage/ProfileShow'
import Footer from '../Component/FooterPage/Footer'
import Message from "../Component/ChatPage/Message"
function ChatPage() {
  return (
    <>
    <Navbar4 />
    <div className='md:flex '>
      <ProfileShow />
    {/* <Message /> */}
    </div>
    <Footer />
      
    </>
  )
}

export default ChatPage
