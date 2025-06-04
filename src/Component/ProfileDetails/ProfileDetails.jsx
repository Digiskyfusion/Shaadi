import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../FooterPage/Footer';
import Navbar4 from '../Navbar/Navbar4';
import { FaWhatsapp } from "react-icons/fa";
import { BsChatRightHeartFill } from "react-icons/bs";
import {
  FaUser, FaVenusMars, FaCity, FaBirthdayCake, FaHeartbeat, FaUsers, FaUniversity,
  FaBuilding, FaMoneyBillWave, FaHome, FaLanguage, FaBalanceScale, FaMapMarkerAlt,
  FaRegClock, FaUtensils
} from 'react-icons/fa';
import {
  GiFamilyTree, GiLoveMystery, GiHealthNormal, GiIndiaGate,
  GiBodyHeight, GiGothicCross
} from 'react-icons/gi';
import { ToastContainer, toast } from 'react-toastify';

function ProfileDetails() {
  let API = import.meta.env.VITE_APP_API_URL;
  const { userId } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [CurrentUser, setCurrentUser] = useState(null);
  const [userImages, setUserImages] = useState([]);
  const [showNumber, setShowNumber] = useState(false);
  const [hasDeductedCredits, setHasDeductedCredits] = useState(false);

  let a = JSON.parse(localStorage.getItem("userProfile"));
  let id = a?._id;

  useEffect(() => {
    // userprofile
    axios
      .get(`${API}user/user-Profile/${userId}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => console.error('Error fetching profile data:', error));
// credits
    axios.get(`${API}user/${id}`)
      .then((res) => {
        setCurrentUser(res.data.user.credits);
      });
  }, [userId]);

  useEffect(() => {
    // images
    axios
      .get(`${API}api/images/user/${userId}`)
      .then((res) => {
        console.log("User Images Response:", res.data);
        setUserImages(res.data.images || []);
      })
      .catch((err) => {
        console.error("Error fetching user images:", err);
      });
  }, [userId]);

  const iconMap = {
    'Age': <FaBirthdayCake />,
    'Gender': <FaVenusMars />,
    'Blood Group': <FaHeartbeat />,
    'City': <FaCity />,
    'Height': <GiBodyHeight />,
    'Diet': <FaUtensils />,
    'Hobbies': <FaUsers />,
    'Marital Status': <GiLoveMystery />,
    'Religion': <FaBalanceScale />,
    'Community': <FaUsers />,
    'Sub Community': <FaUsers />,
    'Mother Tongue': <FaLanguage />,
    'Manglik': <FaBalanceScale />,
    'Grow Up Location': <FaMapMarkerAlt />,
    'Health Information': <GiHealthNormal />,
    'Disability': <GiHealthNormal />,
    'Gothram': <GiGothicCross />,
    'Family Details': <GiFamilyTree />,
    'Father': <FaUser />,
    'Mother': <FaUser />,
    'Location': <FaMapMarkerAlt />,
    'No. of Sisters': <FaUsers />,
    'No. of Brothers': <FaUsers />,
    'Family Financial Status': <FaMoneyBillWave />,
    'Qualification': <FaUniversity />,
    'Colleges Attended': <FaUniversity />,
    'Working As': <FaBuilding />,
    'Employer': <FaBuilding />,
    'Annual Income': <FaMoneyBillWave />,
    'Working With': <FaBuilding />,
    'Current Residence': <FaHome />,
    'State of Residence': <GiIndiaGate />,
    'Residency Status': <FaHome />,
    'City of Birth': <FaCity />,
    'Time of Birth': <FaRegClock />,
    'Zip Code': <FaMapMarkerAlt />,
    'Living In India Since': <GiIndiaGate />,
    'Live with Family': <FaHome />
  };

  if (!profile) {
    return (
      <div className="text-center py-24 text-pink-600 text-xl font-semibold animate-pulse">
        Loading profile...
      </div>
    );
  }

  // Theme based on gender
  const gender = profile.userId?.gender;
  let bgGradient, borderColor, textColor, cardBg, cardBorder, buttonBg, backgroundImage;

  if (gender === "Female") {
    bgGradient = "bg-gradient-to-tr from-rose-100 via-pink-50 to-rose-200";
    borderColor = "border-rose-300";
    textColor = "text-pink-600";
    cardBg = "bg-rose-50 hover:bg-rose-100";
    cardBorder = "border-rose-200";
    buttonBg = "bg-pink-600 hover:bg-pink-700";
    backgroundImage = "url('/hearts-bg.svg')";
  } else if (gender === "Male") {
    bgGradient = "bg-gradient-to-tr from-blue-100 via-blue-50 to-blue-200";
    borderColor = "border-blue-300";
    textColor = "text-blue-600";
    cardBg = "bg-blue-50 hover:bg-blue-100";
    cardBorder = "border-blue-200";
    buttonBg = "bg-blue-600 hover:bg-blue-700";
    backgroundImage = "none";
  } else {
    bgGradient = "bg-gradient-to-tr from-yellow-100 via-yellow-50 to-yellow-200";
    borderColor = "border-yellow-400";
    textColor = "text-yellow-700";
    cardBg = "bg-yellow-50 hover:bg-yellow-100";
    cardBorder = "border-yellow-300";
    buttonBg = "bg-yellow-600 hover:bg-yellow-700";
    backgroundImage = "none";
  }

  return (
    <>
      
      <div className={`${bgGradient} bg-fixed bg-cover min-h-screen py-10 px-2`} style={{ backgroundImage }}>
        <ToastContainer />
        <div className={`max-w-6xl mx-auto bg-white/80 backdrop-blur-lg p-4 md:p-10 rounded-3xl border ${borderColor} shadow-xl space-y-10`}>
          
          {/* Top Buttons */}
          <div className="flex justify-between cursor-pointer">
            <button onClick={() => navigate(-1)} className={`px-5 py-2 ${buttonBg} text-white rounded-full shadow-md`}>
              ⬅ Back
            </button>
            <button onClick={() => navigate(`/Chat/${userId}`)} className={`flex items-center gap-2 cursor-pointer px-5 py-2 ${buttonBg} text-white rounded-full shadow-md`}>
              <BsChatRightHeartFill /> Connect Now
            </button>
          </div>

          {/* Profile Header */}
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src={profile.userId?.profileImage}
              alt="Profile"
              className={`w-44 h-44 object-cover rounded-full border-4 ${borderColor} shadow-xl`}
            />
            <h2 className={`text-4xl font-bold italic ${textColor}`}>
              {profile.userId?.firstName} {profile.userId?.lastName}
            </h2>
          </div>

          {/* Detail Sections */}
          <div className="space-y-10">
            {[
              {
                title: '💖 Personal Information',
                data: [
                  ['Age', profile.age], ['Gender', profile.userId?.gender], ['Blood Group', profile.bloodgroup],
                  ['City', profile.city], ['Height', profile.height], ['Diet', profile.diet],
                  ['Hobbies', profile.hobbies], ['Marital Status', profile.maritalStatus],
                  ['Religion', profile.religion], ['Community', profile.community], ['Sub Community', profile.subCommunity],
                  ['Mother Tongue', profile.mothertongue], ['Manglik', profile.manglik],
                  ['Grow Up Location', profile.growup], ['Health Information', profile.healthinformation],
                  ['Disability', profile.disability], ['Gothram', profile.gothram]
                ]
              },
              {
                title: '🏠 Family Information',
                data: [
                  ['Family Details', profile.familydetail], ['Father', profile.fatherdetails],
                  ['Mother', profile.motherdetails], ['Location', profile.familylocation],
                  ['No. of Sisters', profile.nosisters], ['No. of Brothers', profile.nobrothers],
                  ['Family Financial Status', profile.familyfinancialstatus]
                ]
              },
              {
                title: '💼 Professional Information',
                data: [
                  ['Qualification', profile.highestqualification], ['Colleges Attended', profile.collegesattended],
                  ['Working As', profile.workingas], ['Employer', profile.employername],
                  ['Annual Income', profile.annualincome], ['Working With', profile.workingwith],
                  ['Current Residence', profile.currentresidence], ['State of Residence', profile.stateofresidence],
                  ['Residency Status', profile.residencystatus]
                ]
              },
              {
                title: '📍 Location & Contact',
                data: [
                  ['City of Birth', profile.cityofbirth], ['Time of Birth', profile.timeofbirth],
                  ['Zip Code', profile.zippincode], ['Living In India Since', profile.livingInIndiaSince],
                  ['Live with Family', profile.liveWithFamily ? 'Yes' : 'No']
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className={`bg-white/70 border ${cardBorder} p-5 rounded-2xl shadow-md`}>
                <h3 className={`text-2xl font-bold ${textColor} mb-4`}>{section.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {section.data.map(([label, value], i) => (
                    <div key={i} className={`flex gap-3 items-center ${cardBg} p-3 rounded-xl`}>
                      <div className={`${textColor} text-xl`}>{iconMap[label]}</div>
                      <div className="text-sm">
                        <strong>{label}:</strong> {value || 'N/A'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="max-w-6xl mx-auto mt-10 bg-white/80 p-6 rounded-2xl border shadow-md">
          <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>📸 Photo Gallery</h3>
          {userImages.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {userImages.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`User Image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-xl shadow-sm border"
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No images uploaded.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileDetails;
