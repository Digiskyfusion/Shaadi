import React from 'react';
import Image3 from '../../assets/Images/Image3.png';
import Image4 from '../../assets/Images/Image4.png';
import Image5 from '../../assets/Images/Image5.png';
import Image6 from '../../assets/Images/Image6.png';

const stories = [
  { id: 1, image: Image3, name: 'Anjali & Raj', text: 'We met through this platform, and within months, we knew we were meant to be. Thank you for making our dream come true!' },
  { id: 2, image: Image4, name: 'Aisika & Aaman', text: 'We met through this platform, and within months, we knew we were meant to be. Thank you for making our dream come true!' },
  { id: 3, image: Image5, name: 'Lumi & Luma', text: 'We met through this platform, and within months, we knew we were meant to be. Thank you for making our dream come true!' },
  { id: 4, image: Image6, name: 'Miti & Jot', text: 'We met through this platform, and within months, we knew we were meant to be. Thank you for making our dream come true!' },
];

function SecondSection() {
  return (
    <section className="success-stories p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Success Stories</h1>
      <div className="space-y-8">
        {stories.map((story, index) => (
          <div 
            key={story.id} 
            className={`flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <img src={story.image} alt={`Photo of ${story.name}`} className="w-1/3 rounded-lg shadow-lg" />
            <div className="md:w-2/3 text-left">
              <h2 className="text-xl font-semibold">{story.name}</h2>
              <p className="text-gray-600">{story.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SecondSection;
