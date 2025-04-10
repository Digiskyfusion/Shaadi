import React, { useRef } from 'react';
import { MdEdit, MdVerified, MdPhotoCamera } from 'react-icons/md';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image7 from '../../assets/Images/Image7.png';
import Dash from '../../assets/Images/Dash.png';

function DashBoard() {
  const invitations = [
    { name: 'jainmia', age: 23, location: 'Punjab, India', img: Image7 },
    { name: 'rahul123', age: 25, location: 'Delhi, India', img: Image7 },
    { name: 'simran22', age: 22, location: 'Mumbai, India', img: Image7 },
    { name: 'aarti_89', age: 26, location: 'Jaipur, India', img: Image7 },
    { name: 'mohit_', age: 24, location: 'Hyderabad, India', img: Image7 },
  ];

  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className=" bg-[#FAF4EE] p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 mt-4">

        {/* Left - Profile Section */}
        <div className="bg-[#FF5A60] rounded-2xl shadow-md p-6 w-full lg:w-1/3 flex flex-col items-center text-left">
          <div className="relative mb-4">
            <img src={Dash} alt="Dashboard User" className="w-28 h-28 rounded-full object-cover" />
            <MdPhotoCamera className="absolute bottom-1 right-1 bg-white rounded-full text-[#824A23] p-1 text-4xl shadow-sm" />
          </div>


    <div className='bg-white w-full rounded-md px-6 py-6 mt-6 md:mt-10'>
          <div className="w-full   flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold text-black leading-tight">Jashanpreet Preet</h1>
              <p className="text-sm text-gray-500 mt-1">SB4645164716</p>
            </div>
            <button className="flex items-center text-black">
              <MdEdit className="mr-1" /> Edit
            </button>
          </div>

          <hr className="my-4 border-t border-black w-full" />

          <div className="w-full space-y-6">
            <div className="flex justify-between mt-2 items-center">
              <div>
                <h3 className="text-sm font-semibold text-black mb-1">Account Type</h3>
                <span className="text-gray-500 text-sm">Free Membership</span>
              </div>
              <button className="text-black text-sm hover:underline whitespace-nowrap">Upgrade</button>
            </div>

            <hr className="border-t border-black" />

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-semibold text-black mb-1">Blue Tick Verified</h3>
                <span className="text-gray-500 text-sm">Valid till 2-Apr-26</span>
              </div>
              <MdVerified className="text-blue-500 text-2xl" />
            </div>
             <hr className="border-t border-black" />
</div>            
          </div>
        </div>

        {/* Right - Activity & Invitations */}
        <div className="flex-1 flex flex-col gap-6">

          {/* Activity Section */}
          <div className="bg-[#FF5A60] rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-white mb-8">Your Activity</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Pending Invitations', ' No Accepted Invitations', ' No Recent Visitors'].map((label, index) => (
                <div key={index} className="bg-[#FAF4EE] rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
                  <span className="text-2xl font-bold text-black">0</span>
                  <span className="text-sm text-black">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Invitations Carousel with Scroll Buttons */}
          <div className=" rounded-2xl   relative">
            <h2 className="text-lg font-semibold text-black mb-4 text-center">Invitations</h2>

            {/* Scroll Buttons */}
            <button
              onClick={() => handleScroll('left')}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white border shadow-md rounded-full p-2 z-10 hover:bg-[#f4ece7]"
            >
              <FaChevronLeft className="text-[#824A23]" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border shadow-md rounded-full p-2 z-10 hover:bg-[#f4ece7]"
            >
              <FaChevronRight className="text-[#824A23]" />
            </button>

            {/* Carousel Content */}
            <div
              ref={scrollRef}
              className="flex gap-5 lg:max-w-3xl  overflow-x-auto no-scrollbar px-2  scroll-smooth"
           
            >
              {invitations.map((invitation, index) => (
                <div
                  key={index}
                  className="w-[235px] bg-[#FF5A60] rounded-2xl shadow-lg py-10   text-center flex-shrink-0
                  flex flex-col items-center justify-between "
                >
                  <img
                    src={invitation.img}
                    alt={invitation.name}
                    className="w-24 h-24 rounded-md object-cover mb-3 border-4 border-white shadow-md"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-black capitalize">{invitation.name}</h3>
                    
                    <p className="text-sm text-black mt-1">
                      {invitation.age} yrs, 
                     <p>{invitation.location}</p>
                    </p>
                    
                  </div>
                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DashBoard;
