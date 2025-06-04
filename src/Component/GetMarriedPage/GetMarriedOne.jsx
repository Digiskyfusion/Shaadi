import React from 'react';
import Image4 from '../../assets/Images/Image4.png';
import { FaCheckCircle } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

function GetMarriedOne() {
  const headingText = 'Your Legal Marriage, Simplified by ShaadiSanskar.';

  return (
    <div className="w-full p-8 bg-gradient-to-r from-green-100 via-green-50 to-white rounded-xl shadow-xl mt-25 lg:mt-25 animate-fadeIn">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Image4}
            alt="Couple getting married"
            className="rounded-md shadow-2xl object-cover w-full transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 px-4 md:px-0">
          <h1 className="text-4xl font-extrabold text-[#C34040] leading-tight drop-shadow-md">
            <Typewriter
              words={[headingText]}
              loop={1} // Type once, change to 0 for infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            ShaadiSanskar proudly integrates with{' '}
            <strong className="text-[#C34040]">Vivah Sanskar Nagpur</strong> — a trusted platform for legal court marriages and marriage registration services in Nagpur and nearby regions.
            Now, couples who meet on ShaadiSanskar can easily proceed with a hassle-free legal marriage process, including:
          </p>

          <ul className="space-y-3 text-gray-800 text-lg">
            {[
              'Special Marriage Act Registration',
              'Arya Samaj Marriage',
              'Inter-caste / Inter-religion Marriages',
              'Government-approved Legal Certificates',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <FaCheckCircle className="text-[#C34040] text-xl flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="https://www.vivahsanskarnagpur.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-black border-2 hover:text-white border-[#C34040] hover:bg-[#C34040] rounded-lg shadow-lg font-semibold text-center  transition"
            >
              Visit Vivah Sanskar Nagpur
            </a>
            <a
              href="https://www.shaadisanskar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-black border-2 border-[#C34040] rounded-lg font-semibold text-center hover:bg-[#C34040] hover:text-white transition"
            >
              Visit ShaadiSanskar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetMarriedOne;
