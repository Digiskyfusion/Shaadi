import React from "react";
import Image15 from "../../assets/Images/Image15.png";
import ballon from "../../assets/Images/ballon.png";
import Ellipse1 from "../../assets/Images/Ellipse1.png";
import Ellipse2 from "../../assets/Images/Ellipse2.png";
import Ellipse3 from "../../assets/Images/Ellipse3.png";
import Heart from "../../assets/Images/Heart.png";
import Ellipse4 from "../../assets/Images/Ellipse4.png";

function FourthSection() {
  return (
    <div>
    <h1 className="text-3xl mt-9 sm:text-4xl md:text-5xl gilda-display-regular text-black text-center">
          Featured Prof
            <span className="relative inline-block">
              <span className="inline-block">
                <svg className="w-[10px] h-[16px] lg:w-[15px] lg:h-[25px]" viewBox="0 0 6 100" xmlns="http://www.w3.org/2000/svg">
                  <line x1="3" y1="0" x2="3" y2="100" stroke="black" strokeWidth="15" />
                </svg>
              </span>
              <span className="absolute top-[-10px] sm:top-[-8px] left-1/2 transform -translate-x-1/2 text-[#EB5757] text-sm">
                ❤️
              </span>
            </span>
            les
          </h1>

    <section className="relative  py-20 px-6 md:px-16 text-[#53321B] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 z-10 relative">
        {/* Text Content */}
        <div className="space-y-6">
        
          <h2 className="text-3xl sm:text-4xl md:text-5xl ">
       Meet Prem
            <span className="relative inline-block">
              <span className="inline-block">
                <svg className="w-[10px] h-[16px] lg:w-[15px] lg:h-[25px]" viewBox="0 0 6 100" xmlns="http://www.w3.org/2000/svg">
                  <line x1="3" y1="0" x2="3" y2="100" stroke="#53321B" strokeWidth="15" />
                </svg>
              </span>
              <span className="absolute top-[-10px] sm:top-[-8px] left-1/2 transform -translate-x-1/2  text-lg">
                ❤️
              </span>
            </span>
         num Members Looking for Love
          </h2>
          <p className="text-gray-600 text-base jost">
            Check out our handpicked profiles of genuine individuals seeking a
            lifelong commitment.
          </p>
          <button className="bg-[#DE5353] text-white px-6 py-2 rounded-full  jost shadow">
            View Profile
          </button>
        </div>

        {/* Main Image with Floating Elements */}
        <div className="relative w-full max-w-md mx-auto">
          {/* Main Circle Image */}
          <img
            src={Image15}
            alt="Profile Highlight"
            className="rounded-full shadow-xl w-full"
          />

          {/* Floating Images Around the Circle */}
          <img
            src={ballon}
            alt="ballon"
            className="absolute top-1/2 -translate-y-1/2 -right-8 sm:-right-44 md:-right-[12.4rem] w-20 md:w-80"
          />
          <img
            src={Ellipse1}
            alt="Ellipse1"
            className="absolute top-16 -left-10 sm:top-24 sm:-left-16 w-12 sm:w-16"
          />
          <img
            src={Ellipse2}
            alt="Ellipse2"
            className="absolute top-2 -right-13 sm:top-3 sm:-right-20 transform -translate-x-1/2 w-14 sm:w-20"
          />
          <img
            src={Ellipse3}
            alt="Ellipse3"
            className="absolute -bottom-12 left-10 sm:-bottom-16 sm:left-14 w-12 sm:w-16"
          />
          <img
            src={Heart}
            alt="Heart"
            className="absolute top-10 left-2 sm:left-4 w-6 sm:w-8"
          />
          <img
            src={Ellipse4}
            alt="Ellipse4"
            className="absolute top-64 -right-1 sm:top-80 sm:-right-14 w-12 sm:w-16"
          />
        </div>
      </div>
    </section>
    </div>
  );
}

export default FourthSection;
