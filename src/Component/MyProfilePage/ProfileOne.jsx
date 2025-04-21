import React from 'react'
import Dash from '../../assets/Images/Dash.png'
import { MdPhotoCamera, MdEdit, MdVerified } from 'react-icons/md'

function ProfileOne() {
  return (
    <div className="p-6 bg-[#FF5A60] rounded-2xl shadow-2xl  space-y-6">
      
      {/* Profile Picture */}
      <div className="relative w-32 h-32 mx-auto drop-shadow-lg">
        <img
          src={Dash}
          alt="Dash"
          className="w-full h-full object-cover rounded-full border-4 "
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white rounded-full p-1 cursor-pointer hover:scale-105 transition duration-300">
          <MdPhotoCamera className="text-xl" />
        </div>
      </div>

      {/* User Info */}
      <div className='bg-[#FFE2CE] px-6 py-10  rounded-xl shadow-sm space-y-4'>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-black">Jashanpreet</h1>
            <p className="text-gray-600 text-sm mt-1 tracking-wide">SB46451525962</p>
          </div>
          <button className="flex items-center text-black hover:text-gray-700 transition">
            <MdEdit className="mr-1" />
            Edit
          </button>
        </div>

        <div className="border-t border-gray-400" />

        {/* Account Type */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-black">Account Type</h2>
            <span className="text-sm text-gray-600">Free Membership</span>
          </div>
          <button className="text-sm text-black hover:underline hover:text-blue-600 transition whitespace-nowrap">
            Upgrade
          </button>
        </div>

        <div className="border-t border-gray-400" />

        {/* Verified Badge */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm text-black font-semibold">Blue Tick Verified</h2>
            <span className="text-sm text-gray-600">Valid till 2-April-26</span>
          </div>
          
            <MdVerified className="text-blue-500 text-2xl" />
          </div>
        

        <div className="border-t border-gray-400" />
      </div>
    </div>
  )
}

export default ProfileOne
