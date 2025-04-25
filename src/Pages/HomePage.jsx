import React from 'react'
import FirstSection from '../Component/HomePage/FirstSection'
import SecondSection from '../Component/HomePage/SecondSection'
import ThirdSection from '../Component/HomePage/ThirdSection'
import FourthSection from '../Component/HomePage/FourthSection'
import Navbar from '../Component/Navbar/Navbar'

import Footer from '../Component/FooterPage/Footer'
import FifthSection from '../Component/HomePage/FifthSection'

function HomePage() {
  return (
    <>
     
     <Navbar />
    <FirstSection />
    <div> <h1 className="text-3xl  mt-10 sm:text-4xl md:text-5xl font-bold text-black text-center gilda-display-regular">
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
              </h1></div>
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <Footer />
        
    </>
  )
}

export default HomePage
