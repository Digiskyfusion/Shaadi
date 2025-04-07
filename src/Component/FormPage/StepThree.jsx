import React from 'react';
import Image18 from '../../assets/Images/Image18.png';
import { FaArrowCircleLeft, FaChevronDown } from "react-icons/fa";

function StepThree() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="flex flex-row max-w-6xl w-full gap-10 items-start">

        {/* Left Side - Image */}
        <div className="w-1/2 flex justify-center">
          <img src={Image18} alt="Profile Step" className="w-full max-w-md h-auto rounded-lg" />
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 space-y-6">
          <form className="space-y-4">
            <button type="button" className="flex items-center text-[#824A23] ">
              <FaArrowCircleLeft className="mr-4 text-2xl" />
            </button>

            <h2 className="text-2xl text-center font-semibold">Create your profile now!</h2>

            {/* City */}
            <div>
              <label className="block font-medium">City you live in?*</label>
              <input type="text" placeholder="Enter city" className="mt-1 w-full border rounded-lg p-2" />
            </div>

            {/* Live with family */}
            <div>
              <label className="block font-medium">Do you live with your family?*</label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-2">
                <button className="bg-[#E9D8C0] text-white font-semibold py-2 px-4 rounded-lg">
                 Yes
                </button>
                </label>
                <label className="flex items-center gap-2">
                 <button>No</button>
                 
                </label>
              </div>
            </div>

            {/* Living in India since */}
            <div className="relative">
              <label className="block font-medium">You are living in India since?*</label>
              <input
                type="text"
                placeholder="e.g. 2010"
                className="mt-1 w-full border-0 border-b border-gray-400 py-2 pr-6 focus:outline-none focus:border-blue-600"
              />
              <FaChevronDown className="absolute right-2 bottom-2 text-gray-400 text-sm" />
            </div>

            {/* Marital status */}
            <div className="relative">
              <label className="block font-medium">Your marital status*</label>
              <select
                className="mt-1 w-full border-0 border-b border-gray-400 py-2 pr-6 bg-transparent focus:outline-none focus:border-blue-600 appearance-none"
              >
                <option>Select one</option>
                <option>Single</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </select>
              <FaChevronDown className="absolute right-2 bottom-2 text-gray-400 text-sm pointer-events-none" />
            </div>

            {/* Diet */}
            <div>
              <label className="block font-medium">Your diet</label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {["Veg", "Non Veg", "Occasionally Non Veg", "Eggitarian", "Jain", "Vegan"].map((diet) => (
                  <label key={diet} className="flex items-center gap-2">
                    <input type="radio" name="diet" value={diet} />
                    {diet}
                  </label>
                ))}
              </div>
            </div>

            {/* Height */}
            <div className="relative">
              <label className="block font-medium">Your height?*</label>
              <input
                type="text"
                placeholder="e.g. 5'8"
                className="mt-1 w-full border-0 border-b border-gray-400 py-2 pr-6 focus:outline-none focus:border-blue-600"
              />
              <FaChevronDown className="absolute right-2 bottom-2 text-gray-400 text-sm" />
            </div>

            {/* Sub-community */}
            <div className="relative">
              <label className="block font-medium">Your sub-community?*</label>
              <input
                type="text"
                placeholder="Enter sub-community"
                className="mt-1 w-full border-0 border-b border-gray-400 py-2 pr-6 focus:outline-none focus:border-blue-600"
              />
              <FaChevronDown className="absolute right-2 bottom-2 text-gray-400 text-sm" />
            </div>

            {/* Submit Button */}
           
           <div className="flex justify-center">
            <button
             type="submit"
                className="bg-[#824A23] text-white px-8 py-2 rounded-full"
                >
             Continue
             </button>
          </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default StepThree;
