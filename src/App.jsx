import { Route, Routes } from 'react-router-dom'
import Footer from './Component/FooterPage/Footer';
import StepThree from './Component/FormPage/StepThree';
import { useState } from 'react';
import HomePage from './Pages/HomePage';
import LoginNavbarPage from './Pages/LoginNavbarPage';
import StepOne from './Component/FormPage/StepOne';
import StepTwo from './Component/FormPage/StepTwo';
<<<<<<< HEAD
import VerifyOtp from './Component/FormPage/VerifyOtp';
import ProfileSubmitPage from './Pages/ProfileSubmitPage';
import UserDetailPage from './Pages/UserDetailPage';
=======
import Footer from './Component/FooterPage/Footer';
import WebsiteName from './Component/WebsitePage/WebsiteName';
import PlansPage from './Component/UpgradePlans/PlansPage';
import MoneybackPage from './Component/UpgradePlans/MoneybackPage';
import CardsPage from './Pages/CardsPage';
import SecondFooter from './Component/FooterPage/SecondFooter';

>>>>>>> 6fbe8be4f74644ad6f4931978dc0279be86d4491

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
<<<<<<< HEAD
        <Route path='/StepThree' element={<ProfileSubmitPage /> }/>
        <Route path='/verifyOtp' element={<VerifyOtp /> }/>
        <Route path="/user/:id" element={<UserDetailPage />} />
       
=======
        
        <Route path='/CardsPage' element={<CardsPage/> } />
>>>>>>> 6fbe8be4f74644ad6f4931978dc0279be86d4491
    </Routes>
    
  <Footer />
  
  <SecondFooter />
 
  
   
      
    </>
  )
  }

export default App;
