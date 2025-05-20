import React, { useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import { IoSend } from "react-icons/io5";

const users = [
  { id: 1, name: 'Ayushi', location: 'Chandigarh, India', image: 'https://randomuser.me/api/portraits/women/1.jpg', online: true },
  { id: 2, name: 'Raj', location: 'Delhi, India', image: 'https://randomuser.me/api/portraits/men/2.jpg', online: false },
  { id: 3, name: 'Priya', location: 'Mumbai, India', image: 'https://randomuser.me/api/portraits/women/3.jpg', online: true },
  { id: 4, name: 'Arjun', location: 'Bangalore, India', image: 'https://randomuser.me/api/portraits/men/4.jpg', online: false },
  { id: 5, name: 'Aarti', location: 'Pune, India', image: 'https://randomuser.me/api/portraits/women/5.jpg', online: true },
  { id: 6, name: 'Kabir', location: 'Lucknow, India', image: 'https://randomuser.me/api/portraits/men/6.jpg', online: true },
  { id: 7, name: 'Neha', location: 'Jaipur, India', image: 'https://randomuser.me/api/portraits/women/7.jpg', online: false },
  { id: 8, name: 'Rohan', location: 'Hyderabad, India', image: 'https://randomuser.me/api/portraits/men/8.jpg', online: true },
  { id: 9, name: 'Simran', location: 'Amritsar, India', image: 'https://randomuser.me/api/portraits/women/9.jpg', online: false },
  { id: 10, name: 'Aman', location: 'Noida, India', image: 'https://randomuser.me/api/portraits/men/10.jpg', online: true },
];

export default function ProfileShow() {
  const [filter, setFilter] = useState('All');
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter(user => {
    if (filter === 'All') return true;
    return filter === 'Online' ? user.online : !user.online;
  });

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden py-1">
      {/* Contacts Panel */}
      <div className={`w-full  md:w-1/3 border-r ${selectedUser ? 'hidden md:block' : 'block'} overflow-y-auto scrollbar-hide`}>
        <div className="p-4">
          {/* Search */}
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg mb-4">
            <Search className="w-5 h-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search for people..."
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 mb-4 overflow-x-auto">
            {['All', 'Online', 'Offline'].map(option => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-4 py-1.5 rounded-full text-sm transition ${
                  filter === option
                    ? 'bg-red-100 text-red-500 font-medium'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Contact List */}
          <div className="flex flex-col gap-3">
            {filteredUsers.map(user => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition"
              >
                <div className="relative">
                  <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                      user.online ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Panel */}
      <div className={`w-full md:w-2/3 ${!selectedUser ? 'hidden md:flex' : 'flex'} flex-col `}>
        {selectedUser ? (
          <div className="flex flex-col h-full">
            {/* Chat Header */}
            <div className="flex items-center gap-4 p-4 border-b bg-[#FFEADC]">
              <button onClick={() => setSelectedUser(null)} className="md:hidden">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <img src={selectedUser.image} alt={selectedUser.name} className="w-10 h-10 rounded-full" />
              <div>
                <h2 className="font-semibold text-lg">{selectedUser.name}</h2>
                <p className="text-sm text-gray-500">{selectedUser.online ? 'Online' : 'Offline'}</p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#FFCCA8] space-y-4">
              {/* Received Message */}
              <div className="flex items-start gap-2 max-w-xs">
                <img src={selectedUser.image} alt="user" className="w-8 h-8 rounded-full object-cover" />
                <div className="bg-white px-4 py-2 rounded-2xl shadow text-sm text-gray-800">
                  Hey! How are you?
                </div>
              </div>

              {/* Sent Message */}
              <div className="flex justify-end">
                <div className="bg-red-500 text-white px-4 py-2 rounded-2xl shadow text-sm max-w-xs">
                  I'm doing great! What about you?
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t bg-[#FF9A56]">
              <div className="flex items-center gap-2  rounded-full focus:ring focus:ring-red-200 pr-3">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-full  focus:outline-none "
                />
                <IoSend className='text-xl cursor-pointer' />
                {/* <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
                  Send
                </button> */}
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center text-gray-400 italic">
            Select a user to start chatting.
          </div>
        )}
      </div>
    </div>
  );
}
