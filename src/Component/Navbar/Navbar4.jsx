import React, { useState } from 'react';
import Group from '../../assets/Images/Group 22.png';
import { FaChevronDown, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navbar4() {
    const navigate = useNavigate();
    const [activeTopNav, setActiveTopNav] = useState('');
    const [activeBottomNav, setActiveBottomNav] = useState('');
    const [animate, setAnimate] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const triggerHeartAnimation = () => {
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
        }, 600);
    };

    const handleBottomNavClick = (path, label) => {
        setActiveBottomNav(label);
        triggerHeartAnimation();
        setTimeout(() => {
            navigate(path);
        }, 600);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const bottomNavItems = {
        'MY SHAADI': [
            { label: 'Dashboard', path: '/dashboard' },
            { label: 'My Profile', path: '/userprofile' },
            { label: 'My Photos', path: '/photo' },
            { label: 'Settings', path: '/setting' },
        ],
        MATCHES: [
            { label: 'New Matches', path: '/matches' },
            { label: 'Todays Matches', path: '/shortlisted' },
            { label: 'Near Me', path: '/recently-viewed' },
            { label: 'More', path: '/recently-viewed' },
        ],
        SEARCH: [
            { label: 'Search Profiles', path: '/search' },
            { label: 'Advanced Search', path: '/advanced-search' },
            { label: 'Saved Searches', path: '/saved-searches' },
        ],
        INBOX: [
            { label: 'Messages', path: '/messages' },
            { label: 'Sent Requests', path: '/sent-requests' },
            { label: 'Received Requests', path: '/received-requests' },
        ],
    };

    return (
        <div className='sticky top-0 jost z-50'>
        <div className="flex flex-col items-center bg-white relative ">
            <div className="w-full flex flex-col items-center shadow-md bg-gradient-to-b from-[#FFCCA8] ">
                {/* {/ Top Navbar /} */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-4">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <img src={Group} alt="Group" className="w-18 h-10" />
                        <div className="md:hidden text-black" onClick={toggleMobileMenu}>
                            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                        </div>
                    </div>

                    {/* {/ Desktop Top Nav /} */}
                    <div className="hidden md:flex justify-center gap-6 text-black font-semibold">
                        {Object.keys(bottomNavItems).map((item) => (
                            <h1
                                key={item}
                                className={`cursor-pointer hover:text-[#EB5757] ${activeTopNav === item ? 'text-[#EB5757]' : ''}`}
                                onClick={() => {
                                    setActiveTopNav(item);
                                    setActiveBottomNav('');
                                }}
                            >
                                {item}
                            </h1>
                        ))}
                    </div>

                    {/* {/ Desktop Buttons /} */}
                    <div className="hidden md:flex items-center gap-6">
                        <button className="bg-black text-white px-4 py-2 rounded-xl">
                            Upgrade Now
                        </button>
                        <div className="flex items-center gap-1 cursor-pointer text-black">
                            <h2>Help</h2>
                            <FaChevronDown size={14} />
                        </div>
                    </div>
                </div>

                {/* {/ Mobile Menu Dropdown /} */}
                {mobileMenuOpen && (
                    <div className="flex flex-col md:hidden gap-4 px-6 pb-4 text-[#5c2c12] font-semibold bg-[#FFCCA8] w-full">
                        {Object.keys(bottomNavItems).map((item) => (
                            <h1
                                key={item}
                                className={`cursor-pointer hover:text-[#EB5757] ${activeTopNav === item ? 'text-[#EB5757]' : ''}`}
                                onClick={() => {
                                    setActiveTopNav(item);
                                    setActiveBottomNav('');
                                    setMobileMenuOpen(false);
                                }}
                            >
                                {item}
                            </h1>
                        ))}
                        <button className="bg-[#EB5757] text-white px-4 py-2 rounded hover:bg-red-600 transition mt-2">
                            Upgrade Now
                        </button>
                        <div className="flex items-center gap-1 cursor-pointer hover:text-[#EB5757]">
                            <h2>Help</h2>
                            <FaChevronDown size={14} />
                        </div>
                    </div>
                )}

                {/* {/ Bottom Navbar /} */}
                {activeTopNav && bottomNavItems[activeTopNav] && (
  <div className="w-full flex flex-col items-center py-2 shadow-inner gap-2 bg-[#FF5A60] transition-all duration-300">
    <div className="flex justify-center gap-6 lg:gap-16 text-white text-sm md:text-lg font-medium px-4">
      {bottomNavItems[activeTopNav].map((item) => (
        <div key={item.label} className="flex flex-col items-center ">
          <div className="h-4 mb-0.5 flex items-center justify-center ">
            {activeBottomNav === item.label ? (
              <FaHeart className={`text-white h-4 w-4 transition-all duration-300 ${animate ? 'scale-125' : ''}`} />
            ) : (
              <div className="h-4 w-4" /> // 👈 blank space to reserve height
            )}
          </div>
          <h1
             className={`cursor-pointer hover:text-yellow-200 ${
              activeBottomNav === item.label ? 'underline' : ''
            }`}
            onClick={() => handleBottomNavClick(item.path, item.label)}
          >
            {item.label}
          </h1>
        </div>
      ))}
    </div>
  </div>
)}


            </div>
        </div>
        </div>
    );
}

export default Navbar4;
