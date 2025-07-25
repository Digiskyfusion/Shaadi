import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar4 from "../Component/Navbar/Navbar4";
import ProfileFull from "../Component/MyProfilePage/ProfileFull";
import Footer from "../Component/FooterPage/Footer";
import DetailOne from "../Component/MyProfilePage/DetailOne";
import DetailTwo from "../Component/MyProfilePage/DetailTwo";
import DetailThree from "../Component/MyProfilePage/DetailThree";
import DetailFour from "../Component/MyProfilePage/DetailFour";
import DetailFive from "../Component/MyProfilePage/DetailFive";
import DetailSix from "../Component/MyProfilePage/DetailSix";
import DetailSeven from "../Component/MyProfilePage/DetailSeven";
import DetailFromOne from "../Component/PatnerPrefrenceDetails.jsx/DetailFromOne";
import ErrorBoundary from "../Component/ErrorBoundring/ErrorBoundary";

function ProfilePage() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    const popupShown = localStorage.getItem("profilePopupShown");
    if (!popupShown) {
      setShowPopup(true);
      localStorage.setItem("profilePopupShown", "true");
    }
  }, [navigate]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="jost relative">
      {/* Blurred Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <div className="bg-white rounded-2xl shadow-xl px-6 py-8 max-w-md w-[90%] text-center relative">
            <h2 className="text-xl font-semibold text-red-600 mb-4">
             If you haven't filled it, then please fill it.
            </h2>
            <p className="text-gray-600 mb-6">
              Your profile seems incomplete. Kindly fill in all the required
              information to proceed.
            </p>
            <button
              onClick={closePopup}
              className="bg-red-600 hover:bg-red-700 transition cursor-pointer text-white px-5 py-2 rounded-full font-medium"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Main content container with conditional blur */}
      <div className={`${showPopup ? "blur-sm pointer-events-none select-none" : ""}`}>
        <Navbar4 />
        <ErrorBoundary>
          <ProfileFull />
          <div className="md:flex items-center gap-3 p-4 md:px-7">
            <button className="bg-red-600 text-white px-5 py-1 cursor-pointer rounded-full">
              About Myself
            </button>
          </div>
          <p className="text-center text-red-500 text-sm mb-3 font-medium mt-2 animate-pulse">
            Please fill in all the details if not already filled.
          </p>

          <DetailOne />
          <DetailTwo />
          <DetailThree />
          <DetailFour />
          <DetailFive />
          <DetailSix />
          <DetailSeven />
          <div className="md:flex gap-3 p-4 md:px-7">
            <button className="bg-red-600 text-white px-5 py-1 cursor-pointer rounded-full">
              Partner Preferences
            </button>
          </div>
          <DetailFromOne />
          <div className="md:flex gap-3 p-4 md:px-7">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-[#FFE7D6] text-black font-bold px-5 py-1 cursor-pointer rounded-full"
            >
              Back To Top
            </button>
          </div>
        </ErrorBoundary>
        <Footer />
      </div>
    </div>
  );
}

export default ProfilePage;
