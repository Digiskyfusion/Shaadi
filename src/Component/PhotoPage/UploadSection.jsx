import React from 'react';
import ProfileThree from '../MyProfilePage/ProfileThree';
import profileone from '../../assets/Images/Rectangle 181.png';
import profiletwo from '../../assets/Images/Rectangle 182.png';
import profilethree from '../../assets/Images/Rectangle 183.png';
import profilefour from '../../assets/Images/Rectangle 184.png';
import { Link } from 'react-router-dom';

const images = [
  { src: profileone, alt: 'Profile One' },
  { src: profiletwo, alt: 'Profile Two' },
  { src: profilethree, alt: 'Profile Three' },
  { src: profilefour, alt: 'Profile Four' },
];

function UploadSection() {
  return (
    <>
      <div className='p-2 md:p-4 jost md:px-10 md:py-5'>
        <div className='bg-[#FFCCA8] py-2 md:py-3 md:px-5 rounded-md'>

          <div className='flex justify-center gap-3 mt-3'>
            <button className='px-5 py-1 cursor-pointer bg-[#FF5A60] text-white text-center rounded-full'>
              Photo
            </button>
            <Link to="/setting">
              <button className='px-5 py-1 cursor-pointer bg-[#FF5A60] text-white text-center rounded-full'>
              Setting
            </button>
            </Link>
          </div>

          <ProfileThree />

          <div className='md:w-3/4 lg:w-1/2 mx-auto'>
            <p className='text-center'>
              Note: You can upload 20 photos to your profile. Each photo must be less than 15 MB and in jpg, jpeg, png or webp format. All photos uploaded are screened as per Photo Guidelines and 98% of those get activated within 2 hours.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h1 className="text-center text-2xl font-semibold gilda-display-regular mb-4">My Photos</h1>
        <div className="flex justify-center gap-4 flex-wrap">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-24 h-24 sm:w-40 sm:h-40 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default UploadSection;
