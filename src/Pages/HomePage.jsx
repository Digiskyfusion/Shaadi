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
    <div>
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-24 gilda-display-regular">
    Success Stor
    <span className="relative inline-block">
      <span className="inline-block">
        <svg
          className="w-[10px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[35px] "
          viewBox="0 0 6 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="3" y1="0" x2="3" y2="100" stroke="black" strokeWidth="15"  />
        </svg>
      </span>
      <span className="absolute top-[-18px] sm:top-[-14px] md:top-[-16px] lg:top-[-18px] left-1/2 transform -translate-x-1/2 text-[#EB5757] text-xl sm:text-2xl md:text-3xl">
        ❤️
      </span>
    </span>
    es
  </h1>
</div>


    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    
    <Footer />
        
    </>
  )
}

export default HomePage
