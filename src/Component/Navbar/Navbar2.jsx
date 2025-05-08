import React from 'react';
import Group from '../../assets/Images/Group 22.png';
import { Link } from 'react-router-dom';

function Navbar2() {
  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      {/* Logo */}
     <Link to="/">
     <div className="w-28 sm:w-32 md:w-40">
        <img src={Group} alt="Logo" className="w-full h-auto object-contain" />
      </div>

     </Link>
      {/* Help Button */}
      <button className="bg-[#DE5353] cursor-pointer text-white px-4 py-2 rounded-full text-sm hover:bg-red-600 transition">
        Help
      </button>
    </nav>
  );
}

export default Navbar2;
