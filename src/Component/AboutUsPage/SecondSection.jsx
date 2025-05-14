import React from 'react';
import Image15 from '../../assets/Images/Image15.png';
import Ellipse1 from '../../assets/Images/Ellipse1.png';
import ballon from '../../assets/Images/ballon.png';
import Ellipse2 from '../../assets/Images/Ellipse2.png';
import Ellipse3 from '../../assets/Images/Ellipse3.png';
import Ellipse4 from '../../assets/Images/Ellipse4.png';
import Heart from '../../assets/Images/Heart.png';

function SecondSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-12 px-6">
      {/* Text Section */}
      <div className="lg:w-1/2 text-left">
        <h1 className="text-4xl font-semibold mb-4 gilda-display-regular">
          We Care About Your <span className="text-[#EB5757]">Happiness</span>
        </h1>
        <p className="text-lg leading-relaxed break-words jost">
          Challenges of traditional dating force more and more people to look for soul mates in the cyberspace. In fact, online dating has radically changed the way lonely hearts meet each other today. One of its advantages is a possibility to remove the location barrier, which allows singles to expand the scope of their search.
          We all know that true love finds itself, but the world is so spacious that you may miss a rare chance to encounter your one and only in the daily life. What’s more, most loners are too shy to approach the person they cherish warm feelings for. This is when a dating site comes in handy, as it allows for comfortable communication by exchanging letters or via live chats.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative lg:w-1/2 w-full max-w-sm mx-auto mt-8 lg:mt-0">
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
          className="absolute top-1/2 -translate-y-1/2 -right-8 sm:-right-44 md:-right-[4rem] w-20 md:w-28 xl:-right-[10rem] xl:w-50"
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
  );
}

export default SecondSection;
