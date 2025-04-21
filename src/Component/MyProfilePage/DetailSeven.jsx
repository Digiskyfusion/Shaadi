import React from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

function DetailSeven() {
  const hobbies = ["Reading", "Traveling", "Photography", "Cooking"]; // You can change this list or pass it as props

  return (
    <div className='px-5 py-5'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              Hobbies
            </h1>
          </div>
          <div className='flex justify-center'>
            <div className='flex items-center mt-2 md:mt-0 gap-1 bg-black rounded-full text-white px-4 py-1 cursor-pointer hover:bg-gray-800 transition'>
              <FaPencilAlt />
              <span>Edit</span>
            </div>
          </div>
        </div>

        {/* Inner Section */}
        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md md:px-10'>
            {/* Hobbies Section */}
            <div className=''>
              <p className=' flex flex-wrap pl-6 space-y-1 space-x-5'>
                {hobbies.map((hobby, index) => (
                  <p className='bg-rose-200 px-3 py-1 rounded-md' key={index}>{hobby}</p>
                ))}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailSeven
