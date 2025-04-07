import React from 'react'
import FirstSection from '../Component/HomePage/FirstSection'
import SecondSection from '../Component/HomePage/SecondSection'
import ThirdSection from '../Component/HomePage/ThirdSection'
import FourthSection from '../Component/HomePage/FourthSection'
import Navbar from '../Component/Navbar/Navbar'
import FifthSection from '../Component/HomePage/FifthSection'

function HomePage() {
  return (
    <>
     <div>
     <Navbar />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    </div>
      
    </>
  )
}

export default HomePage
