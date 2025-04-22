import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./Pages/HomePage";
import LoginNavbarPage from "./Pages/LoginNavbarPage";
import StepOne from "./Component/FormPage/StepOne";
import StepTwo from "./Component/FormPage/StepTwo";
import VerifyOtp from "./Component/FormPage/VerifyOtp";
import CardsPage from "./Pages/CardsPage";
import DashBoardPage from "./Pages/DashBoardPage";
import ProfilePage from "./Pages/ProfilePage";
import UploadPage from "./Pages/UploadPage";
import PhotoSetting from "./Pages/PhotoSetting";
import SettingPage from "./Pages/SettingPage";
import DeletePage from "./Pages/DeletePage";
import ConfirmPage from "./Pages/ConfirmPage";
import ProfileDeletePage from "./Pages/ProfileDeletePage";
import DeleteOtpPage from "./Pages/DeleteOtpPage";
import ProfileSubmitPage from "./Pages/ProfileSubmitPage";
import ProfileFull from "./Component/MyProfilePage/ProfileFull";
import MultiStepForm from "./Component/DetailsFormUser/MultiStepForm";
import FirstProfilePage from "./Pages/FirstProfilePage";
import ThirdProfilePage from "./Pages/ThirdProfilePage";
import FourthSectionPage from "./Pages/FourthProfilePage";
import FifthProfilePage from "./Pages/FifthProfilePage";
import FourthProfilePage from "./Pages/FourthProfilePage";
import SixthProfilePage from "./Pages/SixthProfilePage";
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register/step-one"
          element={<StepOne formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/register/step-two"
          element={<StepTwo formData={formData} setFormData={setFormData} />}
        />
        <Route path="/StepThree" element={<ProfileSubmitPage />} />
        <Route path="/verifyOtp" element={<VerifyOtp />} />
        <Route path="/Login" element={<LoginNavbarPage />} />
        <Route path="/CardsPage" element={<CardsPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/profile" element={<ProfileFull />} />
        <Route path="/userprofile" element={<ProfilePage />} />
        <Route path="/photo" element={<UploadPage />} />
        <Route path="/photosetting" element={<PhotoSetting />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/delete" element={<DeletePage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/profiledelete" element={<ProfileDeletePage />} />
        <Route path="/deleteotp" element={<DeleteOtpPage />} />
        <Route path="/multifrom" element={<MultiStepForm />} />
        <Route path='/FirstProfile' element={<FirstProfilePage /> }/>
        <Route path='/ThirdProfile' element={<ThirdProfilePage/> }/>
        <Route path='/FourthProfile' element={<FourthProfilePage /> }/>
        <Route path='/FifthProfile' element={<FifthProfilePage/> }/>
        <Route path='/SixthProfile' element={<SixthProfilePage/> }/>
      </Routes>
    </>
  );
}

export default App;
