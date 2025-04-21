import React from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

function DetailOne() {
  return (
    <div className='px-5 py-5'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex justify-between'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              Personality, Family Details, Career, Partner Expectations, etc.
            </h1>
          </div>
         <div className='flex justify-center'>
         <div className='flex items-center gap-1 mt-2 md:mt-0 bg-black rounded-full text-white px-4 md:px-6  py-1 cursor-pointer hover:bg-gray-800 transition'>
            <FaPencilAlt />
            Edit
          </div>
         </div>
        </div>

        {/* Inner Section */}
        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md'>
            {/* Replace with actual profile details */}
            Life is a journey filled with countless moments, each shaping who we are. Family values, personal beliefs, and career ambitions all intertwine to define one’s personality. A partner who understands, supports, and grows alongside you makes the path more fulfilling. Whether through shared laughter, overcoming challenges, or pursuing dreams, the right connection adds meaning to life’s story. It’s these little things that make a lifetime of difference.
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailOne;
