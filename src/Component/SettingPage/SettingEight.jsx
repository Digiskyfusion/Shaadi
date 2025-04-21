import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function SettingEight() {
  const [selectedReason, setSelectedReason] = useState('');
  const navigate = useNavigate();

  const reasons = [
    "Other matching sites/services",
    "Offline matchmaker",
    "Relatives and Friends",
    "Other reason"
  ];



  return (
    <div className="flex items-center jost justify-center px-4 py-6">
      <div className="relative w-full max-w-md bg-[#FF5A60] shadow-md rounded-xl p-6 space-y-6">

        {/* Arrow + Skip text */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <div className="bg-black p-2 rounded-full cursor-pointer">
            <ArrowLeft className="text-white w-4 h-4" />
          </div>
          <span className="text-white text-sm sm:text-base cursor-pointer font-normal">Skip</span>
        </div>

        {/* Heart in Circle */}
        <div className="flex justify-center mt-14 sm:mt-20">
          <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full">
            <FaHeart className="text-red-500 text-4xl" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center px-2">
          <h1 className="text-lg sm:text-xl font-semibold text-white">
            Why do you want to delete your profile?
          </h1>
        </div>

        {/* Reason Options */}
        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <label
              key={index}
              className="flex items-center space-x-3 border border-white rounded-full px-4 py-2 cursor-pointer transition bg-[#FF5A60]"
            >
              <input
                type="radio"
                name="deleteReason"
                value={reason}
                // checked={selectedReason === reason}
                // onChange={() => setSelectedReason(reason)}
                className="appearance-none w-4 h-4 border-2 border-white rounded-full checked:bg-white checked:border-white transition"
              />
              <span className="text-white text-sm sm:text-base">{reason}</span>
            </label>
          ))}
        </div>

        {/* Continue Button */}
        <div className="flex justify-center sm:justify-end pt-2">
         <Link to="/confirm">
         <button
            
            className="bg-black text-white font-semibold px-6 py-2 cursor-pointer rounded-full w-full sm:w-auto"
          >
            Continue
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
}

export default SettingEight;
