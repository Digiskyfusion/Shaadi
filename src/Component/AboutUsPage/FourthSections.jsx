import React from 'react';
import sunimage from '../../assets/Images/sunimage.png';
import Filter from '../../assets/Images/Filter.png';

function FourthSections() {
  return (
    <div className="relative w-full h-auto">
      {/* Background Image - Full Width */}
      <img
        src={sunimage}
        alt="sunimage"
        className="w-full h-full object-cover"
      />

      {/* Filter Image over the background */}
      <img
        src={Filter}
        alt="Filter"
        className="absolute inset-0 h-full object-cover z-10"
      />

      {/* Text Content */}
      <div className="absolute top-1/2 left-8 sm:left-16 transform -translate-y-1/2 z-20 text-black max-w-md">
        <h1 className="text-2xl sm:text-4xl font-medium mb-2">
          Best Ways Find Your True
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-[#EB5757]">Sole Mate</h2>
        <button className="bg-[#EB5757] text-white px-6 py-2 rounded-full font-medium ">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default FourthSections;
