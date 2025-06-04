import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import marriageImage from '../../assets/Images/Rectangle 41.png';

function LegalMarriagePage() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-6 py-16">
      
      {/* Heading with typing effect */}
      <h1 className="text-2xl sm:text-5xl font-extrabold text-[#C34040] mb-12 min-h-[3rem] text-center ">
        <Typewriter
          words={['Legal Marriage Made Easy with ShaadiSanskar']}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>
      
      <div className=" w-full flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side - Image with fade-in animation */}
        <motion.div 
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src={marriageImage}
            alt="Legal Marriage illustration"
            className="w-full rounded-2xl shadow-xl object-cover max-h-[450px]"
            loading="lazy"
          />
        </motion.div>
        
        {/* Right Side - Content with fade-in animation */}
        <motion.div 
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <p className="text-lg text-gray-700 mb-10 max-w-xl leading-relaxed">
            ShaadiSanskar has partnered with <strong>Vivah Sanskar Nagpur</strong> to offer you legal court marriage and registration services – all in one convenient place.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            What We Offer
          </h2>

          <ul className="space-y-5 text-lg text-gray-700 mb-12 max-w-xl">
            {[
              'Special Marriage Act Registration',
              'Arya Samaj Marriages',
              'Inter-caste / Inter-religion Marriages',
              'Government-approved Legal Certificates',
            ].map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span className="text-green-600 text-2xl select-none">✔</span> {item}
              </li>
            ))}
          </ul>

          <div className=" ">
            <h3 className="text-2xl font-semibold text-[#C34040] mb-4">
              No stress, no delays
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We provide easy, hassle-free legal marriage support for couples who met on ShaadiSanskar.
            </p>
            {/* <button 
              onClick={() => alert('Redirecting to signup/contact page...')} 
              className="bg-[#C34040] text-white px-8 py-3 rounded-full font-semibold cursor-pointer transition duration-300 shadow-lg"
              aria-label="Get Started Today"
            >
              Get Started Today
            </button> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LegalMarriagePage;
