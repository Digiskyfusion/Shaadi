import { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import StepOne from './Component/Forms/StepOne';
import StepTwo from './Component/Forms/StepTwo';

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
    
    {/* <Navbar /> */}
    <Routes >
      <Route path="/" element={<HomePage/> }/>
      <Route
          path="/register/step-one"
          element={<StepOne formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/register/step-two"
          element={<StepTwo formData={formData} setFormData={setFormData} />}
        />
    </Routes>
   
      
    </>
  )
}

export default App
