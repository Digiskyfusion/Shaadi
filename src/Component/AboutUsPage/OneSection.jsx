import React from 'react';
import emoji from '../../assets/Images/emoji.png';

function OneSection({name}) {
  return (
    <div className="relative w-full  h-60 sm:h-auto flex justify-center items-center">
      {/* Background Image */}
      <img src={emoji} alt="emoji" className="w-full h-full object-cover" />

      {/* Responsive "About Us" Text */}
      <h1 className="absolute left-1/4 sm:left-3 md:left-20 lg:left-40 top-1/2 transform -translate-y-1/2 
                      text-[40px] sm:text-[50px] md:text-[80px] lg:text-[120px] 
                      font-medium text-transparent bg-clip-text bg-white tracking-widest">
       {name}
      </h1>
    </div>
  );
}

export default OneSection;
