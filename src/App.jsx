import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginNavbarPage from './Pages/LoginNavbarPage'
import StepOne from './Component/FormPage/StepOne';
import StepTwo from './Component/FormPage/StepTwo';
import Footer from './Component/FooterPage/Footer';
import WebsiteName from './Component/WebsitePage/WebsiteName';
import PlansPage from './Component/UpgradePlans/PlansPage';
import MoneybackPage from './Component/UpgradePlans/MoneybackPage';
import CardsPage from './Pages/CardsPage';
import SecondFooter from './Component/FooterPage/SecondFooter';


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
        
        <Route path='/CardsPage' element={<CardsPage/> } />
    </Routes>
    
  <Footer />
  
  <SecondFooter />
 
  
   
      
    </>
  )
  }

export default App;
