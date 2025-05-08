import React from 'react'
import ProfileThree from '../MyProfilePage/ProfileThree'
import profileone from '../../assets/Images/Rectangle 181.png';
import profiletwo from '../../assets/Images/Rectangle 182.png';
import profilethree from '../../assets/Images/Rectangle 183.png';
import profilefour from '../../assets/Images/Rectangle 184.png';
import { Link } from 'react-router-dom';


function UploadSection() {
  return (
    <>
    <div className=' p-2 md:p-4 jost md:px-10 md:py-5'>
      <div className='bg-[#FFCCA8]  p-2 md:py-3 md:px-5 rounded-md'>

      <div className='flex justify-center gap-3  mt-3 '>
        <button className='px-5 py-1 cursor-pointer bg-[#FF5A60] text-white text-center rounded-full'>
            Photo
        </button>
        {/* <Link  to="/photosetting">
        <button className='px-5 py-1 cursor-pointer  bg-black text-white text-center rounded-full'>
            Settings
        </button>
        </Link> */}
      </div>

      <ProfileThree />  
     <div className='md:w-3/4 lg:w-1/2 mx-auto'>
     <p className='text-center'>
      Note: You can upload 20 photos to your profile. Each photos must be less than 15 MB and in jpg, jpeg, png or webp format. All photos uploaded are screened as per Photo Guidelines  and 98% of those get activated within 2 hours.
      </p>
     </div>
      </div>
    </div>

    <div className="p-6">
  <h1 className="text-center text-2xl font-semibold gilda-display-regular  mb-4">My Photos</h1>
  <div className="flex justify-center gap-4 flex-wrap">
    <img src={profileone} alt="Profile One" className="w-40 h-40 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
    <img src={profiletwo} alt="Profile Two" className="w-40 h-40 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
    <img src={profilethree} alt="Profile Three" className="w-40 h-40 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
    <img src={profilefour} alt="Profile Four" className="w-40 h-40 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />


    
  </div>
</div>

    </>
  )
}

export default UploadSection
