import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image7 from '../../assets/Images/Image7.png';
import ProfileOne from '../MyProfilePage/ProfileOne';

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
    <div className="bg-[#FAF4EE] p-4 jost md:p-8">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:px-10 items-center gap-6 mt-4">
        {/* Left - Profile Section */}
        <div className=" max-w-sm w-full">
          <ProfileOne />
        </div>

        {/* Right - Activity & Invitations */}
        <div className="flex flex-col gap-6 w-full">
          {/* Activity Section */}
          <div className="bg-[#FF5A60] rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-white mb-8">Your Activity</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Pending Invitations', 'No Accepted Invitations', 'No Recent Visitors'].map((label, index) => (
                <div
                  key={index}
                  className="bg-[#FAF4EE] rounded-xl p-4 flex flex-col items-center text-center shadow-sm"
                >
                  <span className="text-2xl font-bold text-black">0</span>
                  <span className="text-sm text-black">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Invitations Carousel with Scroll Buttons */}
          <div className="rounded-2xl relative">
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
              className="flex justify-center items-center gap-5 lg:max-w-xl xl:max-w-4xl overflow-x-auto no-scrollbar px-2 scroll-smooth mx-auto"
            >
              {invitations.map((invitation, index) => (
                <div
                  key={index}
                  className="w-[235px] sm:w-[200px] md:w-[170px] xl:w-[272px] bg-[#FF5A60] rounded-2xl shadow-lg py-10 text-center flex-shrink-0 flex flex-col items-center justify-between"
                >
                  <img
                    src={invitation.img}
                    alt={`Profile picture of ${invitation.name}`}
                    className="w-24 h-24 rounded-md object-cover mb-3 border-4 border-white shadow-md"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-black capitalize">{invitation.name}</h3>
                    <p className="text-sm text-black mt-1">
                      {invitation.age} yrs, {invitation.location}
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
