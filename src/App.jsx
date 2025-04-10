import { Route, Routes } from 'react-router-dom'
import Footer from './Component/FooterPage/Footer';
import StepThree from './Component/FormPage/StepThree';
import { useState } from 'react';
import HomePage from './Pages/HomePage';
import LoginNavbarPage from './Pages/LoginNavbarPage';
import StepOne from './Component/FormPage/StepOne';
import StepTwo from './Component/FormPage/StepTwo';
import VerifyOtp from './Component/FormPage/VerifyOtp';
import ProfileSubmitPage from './Pages/ProfileSubmitPage';
import UserDetailPage from './Pages/UserDetailPage';

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
        <Route path='/StepThree' element={<ProfileSubmitPage /> }/>
        <Route path='/verifyOtp' element={<VerifyOtp /> }/>
        <Route path="/user/:id" element={<UserDetailPage />} />
       
    </Routes>
    
  <Footer />
   
      
    </>
  )
}

export default App
