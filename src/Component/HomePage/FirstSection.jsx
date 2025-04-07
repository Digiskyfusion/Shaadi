import React, { useState, useEffect } from 'react'; 
import { FiSearch } from 'react-icons/fi'; 
import Image2 from '../../assets/Images/Image2.png';
import Image1 from '../../assets/Images/Image1.png';

const images = [Image1, Image2];

function FirstSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload images to prevent flickering
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* {/ Background Image Section /} */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Matchmaking Visual"
            className={`absolute w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50  flex flex-col items-center justify-center text-center px-4">

          {/* {/ Heading and Description /} */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl  text-white gilda-display-regular">
            F
            <span className="relative inline-block">
              <span className="inline-block">
                <svg className="w-[10px] h-[13px] md:h-[24px] lg:w-[10px] lg:h-[24px]" viewBox="0 0 6 100" xmlns="http://www.w3.org/2000/svg">
                  <line x1="3" y1="0" x2="3" y2="100" stroke="white" strokeWidth="20" />
                </svg>
              </span>
              <span className="absolute top-[-12px] sm:top-[-15px] left-1/2 transform -translate-x-1/2 text-red-500 text-lg">
                ❤️
              </span>
            </span>
            nd Your Perfect Match Today!
          </h1>

          <p className="text-white mt-4 text-lg max-w-2xl gilda-display-regular">
            Love knows no boundaries! Whether you're looking for a life partner in India or worldwide, we bring people together with our advanced matchmaking system.
          </p>

          {/* {/ Buttons Section /} */}
          <div className="mt-6 flex flex-col  md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <button className="flex items-center cursor-pointer space-x-2 bg-[#EB5757] text-white px-6 py-3 gilda-display-regular rounded-full text-lg font-medium shadow-lg hover:bg-red-700 transition">
              <FiSearch size={24} />
              <span>Find Your Match</span>
            </button>
            <button className="bg-white text-[#EB5757] px-6 gilda-display-regular py-3 cursor-pointer rounded-full text-lg font-medium shadow-lg hover:bg-gray-100 transition">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
