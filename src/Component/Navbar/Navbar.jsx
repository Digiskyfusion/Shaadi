import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Shadi from "../../assets/Images/Group 22.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-10 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      } py-4 px-6`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={Shadi} alt="Shadi" className="h-12" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="  focus:outline-none"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Navigation Links (Responsive) */}
        <nav
          className={`absolute top-16 text-centerw-full shadow-md md:shadow-none md:static md:flex md:items-center md:space-x-6  font-medium 
            ${isOpen ? "block" : "hidden"} md:block`}
        >
          <div className="flex flex-col md:flex-row lg:space-x-4 text-center">
            <NavLink to="/" className="block py-2 px-6">
              HOME
            </NavLink>
            <NavLink to="/Matchmaking" className="block py-2 px-6">
              MATCHMAKING
            </NavLink>
            <NavLink to="/MarriageServices" className="block py-2 px-6">
              MARRIAGE SERVICES
            </NavLink>
            <NavLink to="/Blog" className="block py-2 px-6">
              BLOG
            </NavLink>

            {/* Mobile Register Button */}
            <div className="md:hidden  py-2">
              <NavLink to="/register">
                <button className="w-full bg-[#C34040] text-white px-5 py-2 rounded-full">
                  Register Now
                </button>
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Register Button (Desktop) */}
        <div className="hidden md:block">
          <NavLink to="/register">
            <button className="bg-[#C34040] cursor-pointer hover:bg-black text-white px-5 py-2 rounded-full">
              Register Now
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
