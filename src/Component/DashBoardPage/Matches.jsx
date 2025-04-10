import React from 'react';

import Ellipse1 from '../../assets/Images/Ellipse1.png';
import Ellipse2 from '../../assets/Images/Ellipse2.png';
import Ellipse3 from '../../assets/Images/Ellipse3.png';
import Ellipse57 from '../../assets/Images/Ellipse 57.png';
import Ellipse59 from '../../assets/Images/Ellipse 59.png';

function Matches() {
  const matchData = [
    { img: Ellipse1, details: `22 yrs, 4' 5", Never Married, Punjabi` },
    { img: Ellipse2, details: `22 yrs, 4' 5", Never Married, Punjabi` },
    { img: Ellipse3, details: `22 yrs, 4' 5", Never Married, Punjabi` },
    { img: Ellipse57, details: `22 yrs, 4' 5", Never Married, Punjabi` },
    { img: Ellipse59, details: `22 yrs, 4' 5", Never Married, Punjabi` },
  ];

  return (
    <div className="min-h-screen bg-[#FAF4EE] p-6">
      <div className='md:flex md:justify-center md:items-center md:gap-5'>
      <div className="p-6 bg-[#FFE7D6] max-w-2xl w-full  rounded-md shadow-md">
        <div className="space-y-6 text-black">
          {matchData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4"
            >
              {/* Left: Image + Details */}
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt="match"
                  className="w-20 h-20 rounded-full object-cover"
                /> 
                <div>
                <h1>Manisha</h1>
                <h1 className="text-sm max-w-[7.3rem]">{item.details}</h1>
                </div>
              </div>

              {/* Right: Accept/Cancel Buttons */}
              <div className="flex flex-col gap-2 items-center">
                <button
                  aria-label="Accept Match"
                  className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center shadow"
                >
                  ✅
                </button>
                <button
                  aria-label="Reject Match"
                  className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center shadow"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* second card  */}
      <div className="p-6 bg-[#FFE7D6] max-w-2xl w-full  rounded-md shadow-md">
        <div className="space-y-6 text-black">
          {matchData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4"
            >
              {/* Left: Image + Details */}
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt="match"
                  className="w-20 h-20 rounded-full object-cover"
                /> 
                <div>
                <h1>Manisha</h1>
                <h1 className="text-sm max-w-[7.3rem]">{item.details}</h1>
                </div>
              </div>

              {/* Right: Accept/Cancel Buttons */}
              <div className="flex flex-col gap-2 items-center">
                <button
                  aria-label="Accept Match"
                  className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center shadow"
                >
                  ✅
                </button>
                <button
                  aria-label="Reject Match"
                  className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center shadow"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Matches;
