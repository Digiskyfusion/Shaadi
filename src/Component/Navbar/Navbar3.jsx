import React from 'react';
import Group from '../../assets/Images/Group 22.png'; // Make sure this image has white content

function Navbar3() {
  return (
    <div className="p-4 bg-transparent shadow-none sticky top-0">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="w-28 sm:w-32 md:w-40">
          <img
            src={Group}
            alt="Group"
            className="w-full h-auto object-contain filter brightness-0 invert"
          />
        </div>

        {/* Help Button */}
        <div>
          <button className="bg-[#DE5353] text-white px-4 py-2 jost rounded-full text-sm hover:bg-red-600 transition">
            Help
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar3;
