import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaHeart } from 'react-icons/fa';
import Image3 from '../../assets/Images/Image3.png';
import Image4 from '../../assets/Images/Image4.png';
import Image5 from '../../assets/Images/Image5.png';
import Image6 from '../../assets/Images/Image6.png';
import Image7 from '../../assets/Images/Group95.png';

const stories = [
  {
    id: 1,
    image: Image3,
    name: 'Anjali & Raj',
    text: 'We met through this platform, and within months, we knew we were meant to be. Thank you for making our dream come true!',
  },
  {
    id: 2,
    image: Image4,
    name: 'Aisika & Aaman',
    text: 'We met through this platform, and within months, we knew we were meant to be. Thank you for making our dream come true!',
  },
  {
    id: 3,
    image: Image5,
    name: 'Lumi & Luma',
    text: 'We met through this platform, and within months, we knew we were meant to be. Thank you for making our dream come true!',
  },
  {
    id: 4,
    image: Image6,
    name: 'Miti & Jot',
    text: 'We met through this platform, and within months, we knew we were meant to be. Thank you for making our dream come true!',
  },
];

function SecondSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="success-stories py-16 px-4">
      <h1 className="text-5xl font-bold text-center mb-14 text-rose-600 drop-shadow-md font-serif">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center gilda-display-regular">
      Success Stor

            <span className="relative inline-block">
              <span className="inline-block ">
                <svg className="w-[7px] h-[15px] md:h-[22px] lg:w-[10px] lg:h-[23px]" viewBox="0 0 6 100" xmlns="http://www.w3.org/2000/svg">
                  <line x1="3" y1="0" x2="3" y2="100" stroke="black" strokeWidth="15" />
                </svg>
              </span>
              <span className="absolute top-[-13px] sm:top-[-8px] lg:top-[-10px] left-1/2 transform -translate-x-1/2 text-[#EB5757] text-lg">
                ❤️
              </span>
            </span>
            es
          </h1>
      </h1>

      <div className="mt-10">
        <Carousel
          selectedItem={currentSlide}
          onChange={(index) => setCurrentSlide(index)}
          showThumbs={false}
          autoPlay
          interval={4500}
          showStatus={false}
          showIndicators={false} // turn this off
          showArrows={false}
          swipeable={true}
          emulateTouch={true}
        >
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex flex-col md:flex-row w-full transition-opacity duration-1000 ease-in-out"
            >
              {/* Image Section */}
              <div className="relative md:w-1/2 w-full shadow-md overflow-hidden">
                <img
                  src={story.image}
                  alt={`Photo of ${story.name}`}
                  className="w-full h-[450px] object-cover transform transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-1 border-4 border-white pointer-events-none"></div>
                <FaHeart className="absolute top-4 right-4 text-pink-500 text-2xl drop-shadow-lg hover:scale-125 transition-transform duration-300" />
              </div>

              {/* Text Section */}
              <div
                className="relative md:w-1/2 w-full flex shadow-md items-center justify-center text-center p-4"
                style={{
                  backgroundImage: `url(${Image7})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className=" p-8  max-w-lg mx-auto space-y-4 gilda-display-regular">
                  <h2 className="text-2xl font-bold text-rose-600 ">{story.name}</h2>
                  <p className="text-gray-700 italic text-lg leading-relaxed">{story.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Custom Dots Below Section */}
        <div className="md:mt-10 flex justify-center">
          {stories.map((_, index) => {
            const isActive = index === currentSlide;
            return (
              <span
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 mx-2 rounded-full cursor-pointer transition-colors duration-300 ${
                  isActive ? 'bg-rose-500' : 'bg-gray-300'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
