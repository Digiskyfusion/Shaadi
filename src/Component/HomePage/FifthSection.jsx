import React from 'react';

const HoverHeart = () => (
  <>
    <span className="group-hover:hidden text-[#53321B]">❤️</span>
    <span className="hidden group-hover:inline text-white">🤍</span>
  </>
);

const FifthSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-10">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#000000] gilda-display-regular mb-7 ml-20">
          Upgrade to Prem
          <span className="relative inline-block">
            <span className="inline-block">
              <svg className="w-[10px] h-[13px] md:h-[24px] lg:w-[10px] lg:h-[24px]" viewBox="0 0 6 100" xmlns="http://www.w3.org/2000/svg">
                <line x1="3" y1="0" x2="3" y2="100" stroke="black" strokeWidth="20" />
              </svg>
            </span>
            <span className="absolute top-[-12px] sm:top-[-15px] left-1/2 transform -translate-x-1/2 text-red-500 text-lg mt-2">
              ❤️
            </span>
          </span>
          um & Unlock
          <p className="ml-40">Exclusive Features</p>
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Features */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-300 hover:bg-[#EB5757] hover:text-white hover:shadow-neutral-700 transition-transform transform hover:scale-105 flex flex-col items-center text-center w-full sm:w-72 group">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-white">Feature</h2>
            <ul className="text-red-700 space-y-2 text-base sm:text-lg group-hover:text-white">
              <li><span><HoverHeart /></span> Profile Viewing</li>
              <li className="mr-7"><span><HoverHeart /></span> Messaging</li>
              <li><span><HoverHeart /></span> Match Priority</li>
              <li><span><HoverHeart /></span> Direct Contact</li>
              <li className="mr-4"><span><HoverHeart /></span> Profile Boost</li>
            </ul>
          </div>

          {/* Free Users Plan */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-300 hover:bg-[#EB5757] hover:text-white hover:shadow-neutral-700 transition-transform transform hover:scale-105 flex flex-col items-center text-center w-full sm:w-72 group">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-white">Free Users</h2>
            <ul className="space-y-2 text-base sm:text-lg text-red-700 group-hover:text-white">
              <li><span><HoverHeart /></span> Limited</li>
              <li className="ml-4"><span><HoverHeart /></span> Restricted</li>
              <li className="mr-8"><span><HoverHeart /></span> No</li>
              <li className="mr-8"><span><HoverHeart /></span> No</li>
              <li className="mr-8"><span><HoverHeart /></span> No</li>
            </ul>
            <button className="mt-6 bg-black text-white py-2 px-6 rounded-full text-base sm:text-lg shadow-md hover:bg-gray-800 transition">
              Choose Plan
            </button>
          </div>

          {/* Premium Users Plan */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-300 hover:bg-[#EB5757] hover:text-white hover:shadow-neutral-700 transition-transform transform hover:scale-105 flex flex-col items-center text-center w-full sm:w-72 group relative z-0">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-white">Premium Users</h2>
            <ul className="text-red-700 space-y-2 text-base sm:text-lg group-hover:text-white">
              <li><span><HoverHeart /></span> Unlimited</li>
              <li><span><HoverHeart /></span> Unlimited</li>
              <li className="mr-12"><span><HoverHeart /></span> Yes</li>
              <li className="mr-12"><span><HoverHeart /></span> Yes</li>
              <li className="mr-12"><span><HoverHeart /></span> Yes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
  