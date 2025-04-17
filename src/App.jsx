import { Route, Routes } from 'react-router-dom'
import StepThree from './Component/FormPage/StepThree';
import { useState } from 'react';
import HomePage from './Pages/HomePage';
import LoginNavbarPage from './Pages/LoginNavbarPage';
import StepOne from './Component/FormPage/StepOne';
import StepTwo from './Component/FormPage/StepTwo';
import VerifyOtp from './Component/FormPage/VerifyOtp';
import ProfileSubmitPage from './Pages/ProfileSubmitPage';
import UserDetailPage from './Pages/UserDetailPage';
import CardsPage from './Pages/CardsPage';
import DashBoardPage from './Pages/DashBoardPage';
import SettingFour from './Component/SettingFour';
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
        <Route path='/CardsPage' element={<CardsPage/> } />
        <Route path='/StepThree' element={<StepThree/> }/>
        <Route path="/VerifyOtp" element={<VerifyOtp/> }/>
        <Route path='/dashboard' element={<DashBoardPage/> }/>
        <Route path='/CardsPage' element={<CardsPage/> } />
    </Routes>
    </>
  )
  }

export default App;
