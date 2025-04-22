import React from "react";
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
import DetailFormTwo from "../Component/PatnerPrefrenceDetails.jsx/DetailFormTwo";
import DetailFormThree from "../Component/PatnerPrefrenceDetails.jsx/DetailFormThree";
import DetailFormFour from "../Component/PatnerPrefrenceDetails.jsx/DetailFormFour";
import DetailFormFive from "../Component/PatnerPrefrenceDetails.jsx/DetailFormFive";
import DetailFormSix from "../Component/PatnerPrefrenceDetails.jsx/DetailFormSix";

function ProfilePage() {
  return (
    <div className="jost ">
      <Navbar4 />
      <ProfileFull />
      <div className="md:flex gap-3 p-4 md:px-7">
        <button className="bg-red-600 text-white px-5 py-1 rounded-full">
          About Myself
        </button>
        <button className="bg-black text-white px-5 py-1 mt-3 md:mt-0 rounded-full">
          About Myself
        </button>
      </div>
      <DetailOne />
      <DetailTwo />
      <DetailThree />
      <DetailFour />
      <DetailFive />
      <DetailSix />
      <DetailSeven />
      <div className="md:flex gap-3 p-4 md:px-7">
        <button className="bg-red-600 text-white px-5 py-1 rounded-full">
          Partner Prefrences
        </button>
      </div>
      <DetailFromOne />
      <DetailFormTwo />
      <DetailFormThree />
      <DetailFormFour />
      <DetailFormFive />
      <DetailFormSix />
      <div className="md:flex gap-3 p-4 md:px-7">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#FFE7D6] text-black font-bold px-5 py-1 cursor-pointer rounded-full"
        >
          Back To Top
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
