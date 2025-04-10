import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginNavbarPage from './Pages/LoginNavbarPage'
import StepOne from './Component/FormPage/StepOne';
import StepTwo from './Component/FormPage/StepTwo';
import StepThree from './Component/FormPage/StepThree';
import VerifyOtp from './Component/FormPage/VerifyOtp';
import CardsPage from './Pages/CardsPage';
import DashBoardPage from './Pages/DashBoardPage';


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
        <Route path='/dashboard' element={<DashBoardPage/> }/>

        
        <Route path='/CardsPage' element={<CardsPage/> } />
    </Routes>
 
  
   
      
    </>
  )
  }

export default App;
