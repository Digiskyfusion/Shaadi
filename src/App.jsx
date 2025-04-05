import { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import FifthSection from './Component/HomePage/FifthSection'
import Footer from './Component/FooterPage/Footer'

function App() {

  return (
    <>
    <Navbar />
    
    <Routes >
      <Route path="/" element={<HomePage/> }/>
      
    </Routes>
    <FifthSection/>
    <Footer/>
   
      
    </>
  )
}

export default App
