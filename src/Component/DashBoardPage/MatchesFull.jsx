import React from 'react';
import Ellipse1 from '../../assets/Images/Ellipse1.png';
import Ellipse2 from '../../assets/Images/Ellipse2.png';
import Ellipse3 from '../../assets/Images/Ellipse3.png';
import Ellipse59 from '../../assets/Images/Ellipse 59.png';
import Ellipse57 from '../../assets/Images/Ellipse 59.png';
import Matches from './Matches';

function MatchesFull() {
  const matchData = [
    { img: Ellipse1, details: `22 yrs, 4' 5", Never Married, Punjabi` },
    { img: Ellipse2, details: `22 yrs, 4' 5", Never Married, Punjabi` },
    { img: Ellipse3, details: `22 yrs, 4' 5", Never Married, Punjabi` },
    { img: Ellipse57, details: `22 yrs, 4' 5", Never Married, Punjabi` },
    { img: Ellipse59, details: `22 yrs, 4' 5", Never Married, Punjabi` },
  ];

  return (
    <div className="bg-[#FAF4EE] jost py-6 px-4">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-start">
        <div className="w-full max-w-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 gilda-display-regular text-center">My Matches</h2>
          <Matches data={matchData} />
        </div>
        <div className="w-full max-w-md">
          <h2 className="text-lg font-semibold text-gray-800 gilda-display-regular mb-3 text-center">New Matches for You</h2>
          <Matches data={matchData} />
        </div>
      </div>
    </div>
  );
}

export default MatchesFull;
