import React, { useState } from 'react';
import { Search } from 'lucide-react';

const users = [
  { id: 1, name: 'Manisha', location: 'Chandigarh, India', image: 'https://randomuser.me/api/portraits/women/1.jpg', online: true },
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

function ProfileShow() {
  const [filter, setFilter] = useState('All');

  const filteredUsers = users.filter(user => {
    if (filter === 'All') return true;
    return filter === 'Online' ? user.online : !user.online;
  });

  return (
    <div className="p-6 jost">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-lg w-fit">
          <Search className="w-12 h-5 text-gray-600" />
          <h1 className=" jost text-lg  font-semibold">Search for people...</h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mt-4  flex-wrap">
          {['All', 'Online', 'Offline'].map(option => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-2 cursor-pointer rounded-full  ${
                filter === option ? 'bg-gray-300 text-red-500' : 'bg-white text-black'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Contacts List */}
      <div>
        <h2 className="text-xl jost font-semibold mb-4">Contacts</h2>
        <div className="flex flex-col gap-4">
          {filteredUsers.map(user => (
            <div key={user.id} className="flex items-center justify-between p-2 rounded-lg flex-wrap sm:flex-nowrap">
              {/* Left side: Image + info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                      user.online ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.location}</p>
                </div>
              </div>

    
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileShow;
