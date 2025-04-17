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
import ProfileOne from './Component/MyProfilePage/ProfileOne';
import ProfileTwo from './Component/MyProfilePage/profileTwo';
import ProfileThree from './Component/MyProfilePage/ProfileThree';
import DetailOne from './Component/MyProfilePage/DetailOne';
import ProfileFour from './Component/MyProfilePage/ProfileFour';
import ProfileFull from './Component/MyProfilePage/ProfileFull';
import ProfilePage from './Pages/ProfilePage';
import DetailTwo from './Component/MyProfilePage/DetailTwo';
import DetailThree from './Component/MyProfilePage/DetailThree';
import DetailFour from './Component/MyProfilePage/DetailFour';
import DetailFive from './Component/MyProfilePage/DetailFive';
import DetailSix from './Component/MyProfilePage/DetailSix';
import DetailSeven from './Component/MyProfilePage/DetailSeven';
import UploadPage from './Pages/UploadPage';
import SettingOne from './Component/SettingPage/SettingOne';
import SettingTwo from './Component/SettingPage/SettingTwo';
import SettingThree from './Component/SettingPage/SettingThree';
import SettingFour from './Component/SettingPage/SettingFour';
import SettingFive from './Component/SettingPage/SettingFive';
import SettingSix from './Component/SettingPage/SettingSix';
import SettingSeven from './Component/SettingPage/SettingSeven';
import SettingEight from './Component/SettingPage/SettingEight';
import SettingNine from './Component/SettingPage/SettingNine';
import SettingTen from './Component/SettingPage/SettingTen';
import SettingEleven from './Component/SettingPage/SettingEleven';
import PhotoSetting from './Pages/PhotoSetting';
import SettingPage from './Pages/SettingPage';
import DeletePage from './Pages/DeletePage';
import ConfirmPage from './Pages/ConfirmPage';
import ProfileDeletePage from './Pages/ProfileDeletePage';
import DeleteOtpPage from './Pages/DeleteOtpPage';


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
        <Route path='/Login' element={<LoginNavbarPage/> }/>
        <Route path='/CardsPage' element={<CardsPage/> } />
        <Route path='/dashboard' element={<DashBoardPage/> }/>
        <Route path='/profile' element={<ProfileFull  /> } />
        <Route path='/userprofile' element={<ProfilePage  /> } />
        <Route path='/photo' element={<UploadPage  /> } />
        <Route path='/photosetting' element={<PhotoSetting  /> } />
        <Route path='/setting' element={<SettingPage  /> } />
        <Route path='/delete' element={<DeletePage  /> } />
        <Route path='/confirm' element={<ConfirmPage  /> } />
        <Route path='/profiledelete' element={<ProfileDeletePage  /> } />
        <Route path='/deleteotp' element={<DeleteOtpPage  /> } />
        

      
       
    </Routes>
    

   
      
    </>
  )
  }

export default App;
