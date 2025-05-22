import React from 'react'
import MatchesFull from '../Component/DashBoardPage/MatchesFull'
import DashBoard from '../Component/DashBoardPage/DashBoard'
import Footer from '../Component/FooterPage/Footer'
import Navbar4 from '../Component/Navbar/Navbar4'



function DashBoardPage() {
  return (
    <div>
    
    <Navbar4 />
    <DashBoard />
    <MatchesFull />
      <Footer />
      
    </div>
  )
}

export default DashBoardPage
