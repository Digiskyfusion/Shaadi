import React from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
function DetailFour() {
  return (
    <div className='px-5 py-5'>
            <div className='bg-[#FFE7D6] p-5 rounded-md'>
              <div className='md:flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <LuDot className='text-4xl text-red-600' />
                  <h1 className='text-red-600 text-base md:text-xl font-bold'>
                  Family details
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
                          <span className='font-semibold min-w-[150px]'>Mother details :</span> 28
                          </p>
                          <p className='flex'>
                          <span className='font-semibold min-w-[150px]'>Father details :</span> 14 April 1997
                          </p>
                          <p className='flex'>
                          <span className='font-semibold min-w-[150px]'>Family Location :</span> Never Married
                          </p>
                          
                      </div>
      
                      {/* Right Column */}
                      <div className='flex flex-col space-y-3'>
                          <p className='flex'>
                          <span className='font-semibold min-w-[150px]'>No. of sister :</span> Vegetarian
                          </p>
                          <p className='flex'>
                          <span className='font-semibold min-w-[150px]'>No. of brother :</span> B+
                          </p>
                          <p className='flex'>
                          <span className='font-semibold min-w-[150px]'>Family FinancialStatus :</span> Fit & Healthy
                          </p>
                          
                      </div>
                      </div>
      
                </div>
              </div>
            </div>
          </div>
  )
}

export default DetailFour
