import React from 'react'
import FirstSection from '../Component/HomePage/FirstSection'
import SecondSection from '../Component/HomePage/SecondSection'
import ThirdSection from '../Component/HomePage/ThirdSection'
import FourthSection from '../Component/HomePage/FourthSection'
import Navbar from '../Component/Navbar/Navbar'

function HomePage() {
  return (
    <>
     <div>
     <Navbar />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    </div>
      
    </>
  )
}

export default HomePage
