import { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'

function App() {

  return (
    <>
    <Navbar />
    <Routes >
      <Route path="/" element={<HomePage/> }/>
    </Routes>
   
      
    </>
  )
}

export default App
