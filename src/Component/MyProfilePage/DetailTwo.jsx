import React from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

function DetailTwo() {
  return (
    <div className='px-5 py-5'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
             Basic & Lifestyle
            </h1>
          </div>
         <div className='flex justify-center'>
         <div className='flex items-center  mt-2 md:mt-0 gap-1 bg-black rounded-full text-white px-4 py-1 cursor-pointer hover:bg-gray-800 transition'>
            <FaPencilAlt />
            <span>Edit</span>
          </div>
         </div>
        </div>

        {/* Inner Section */}
        <div className='py-3 '>
          <div className='bg-white text-black p-4 rounded-md md:px-10'>
          <div className='md:flex md:justify-between md:items-start gap-10'>
                {/* Left Column */}
                <div className='flex flex-col space-y-3'>
                    <p className='flex'>
                    <span className='font-semibold min-w-[150px]'>Age:</span> 28
                    </p>
                    <p className='flex'>
                    <span className='font-semibold min-w-[150px]'>Date Of Birth:</span> 14 April 1997
                    </p>
                    <p className='flex'>
                    <span className='font-semibold min-w-[150px]'>Marital Status:</span> Never Married
                    </p>
                    <p className='flex'>
                    <span className='font-semibold min-w-[150px]'>Height:</span> 5'9"
                    </p>
                    <p className='flex'>
                    <span className='font-semibold min-w-[150px]'>Grew up in:</span> Mumbai, India
                    </p>
                </div>

                {/* Right Column */}
                <div className='flex flex-col space-y-3'>
                    <p className='flex'>
                    <span className='font-semibold min-w-[150px]'>Diet:</span> Vegetarian
                    </p>
                    <p className='flex'>
                    <span className='font-semibold min-w-[150px]'>Blood Group:</span> B+
                    </p>
                    <p className='flex'>
                    <span className='font-semibold min-w-[150px]'>Health Information:</span> Fit & Healthy
                    </p>
                    <p className='flex'>
                    <span className='font-semibold min-w-[150px]'>Disability:</span> None
                    </p>
                </div>
                </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailTwo;
