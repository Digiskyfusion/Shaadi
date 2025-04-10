import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginNavbarPage from './Pages/LoginNavbarPage'
import StepOne from './Component/FormPage/StepOne';
import StepTwo from './Component/FormPage/StepTwo';
import Footer from './Component/FooterPage/Footer';
import StepThree from './Component/FormPage/StepThree';
import VerifyOtp from './Component/FormPage/VerifyOtp';
import Navbar4 from './Component/Navbar/Navbar4';
import DashBoard from './Component/DashBoardPage/DashBoard';
import Matches from './Component/DashBoardPage/Matches';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    profileFor: "",
    firstName: "",
    lastName: "",
    religion: "",
    community: "",
    mobileNumber: "",
    emailId: "",
    dob: "",
    location: "",
    password: "",
  });


  return (
    <>
    <Routes >
      <Route path="/" element={<HomePage/> }/>
      <Route path='/Login' element={<LoginNavbarPage/> }/>
       <Route
          path="/register/step-one"
          element={<StepOne formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/register/step-two"
          element={<StepTwo formData={formData} setFormData={setFormData} />}
        />

        <Route path='/StepThree' element={<StepThree/> }/>
        <Route path="/VerifyOtp" element={<VerifyOtp/> }/>
        <Route path='/DashBoard' element={<DashBoard/> }/>
        <Route path='/Matches' element={<Matches/> }/>

    </Routes>
    {/* <Navbar4 /> */}
    
  <Footer />
   
      
    </>
  )
}

export default App
