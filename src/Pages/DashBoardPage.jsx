import React from 'react'
import MatchesFull from '../Component/DashBoardPage/MatchesFull'
import DashBoard from '../Component/DashBoardPage/DashBoard'
import Footer from '../Component/FooterPage/Footer'
import Navbar4 from '../Component/Navbar/Navbar4'
import ErrorBoundary from '../Component/ErrorBoundring/ErrorBoundary'



function DashBoardPage() {
  return (
    <div>
    
      <ErrorBoundary>
    <Navbar4 />
    <DashBoard />
    <MatchesFull />
      <Footer />
      
      </ErrorBoundary>
    </div>
  )
}

export default DashBoardPage
