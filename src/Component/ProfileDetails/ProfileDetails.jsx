import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../FooterPage/Footer';
import Navbar4 from '../Navbar/Navbar4';
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

function ProfileDetails() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/user-Profile/${userId}`)
      .then((response) => setProfile(response.data))
      .catch((error) => console.error('Error fetching profile data:', error));
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

  // Determine theme based on gender
  const gender = profile.userId?.gender;
  console.log(gender);
  
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
    // Other gender - brown theme
    bgGradient = "bg-gradient-to-tr from-yellow-100 via-yellow-50 to-yellow-200"; // warm brownish yellow
    borderColor = "border-yellow-400";
    textColor = "text-yellow-700";
    cardBg = "bg-yellow-50 hover:bg-yellow-100";
    cardBorder = "border-yellow-300";
    buttonBg = "bg-yellow-600 hover:bg-yellow-700";
    backgroundImage = "none";
  }

  return (
    <>
    
      <div
        className={`${bgGradient} bg-fixed bg-cover min-h-screen py-10 px-2`}
        style={{ backgroundImage: backgroundImage }}
      >
        <div className={`max-w-6xl mx-auto bg-white/80 backdrop-blur-lg p-4 md:p-10 rounded-3xl border ${borderColor} shadow-xl space-y-10`}>

          {/* Top Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate(-1)}
              className={`px-5 py-2 ${buttonBg} cursor-pointer text-white rounded-full shadow-lg transition duration-300`}
            >
              ⬅ Back
            </button>

            <button
              onClick={() => navigate(-1)}
              className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${buttonBg} text-white rounded-full shadow-lg transition duration-300`}
            >
              <BsChatRightHeartFill />
              Connect Now
            </button>
          </div>

          {/* Profile Header */}
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src={profile.userId?.profileImage}
              alt="Profile"
              className={`w-44 h-44 object-cover rounded-full border-4 ${borderColor} shadow-xl hover:scale-105 transition duration-300`}
            />
            <h2 className={`text-4xl font-bold italic ${textColor}`}>
              {profile.userId?.firstName} {profile.userId?.lastName}
            </h2>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {[
              {
                title: '💖 Personal Information',
                data: [
                  ['Age', profile.age],
                  ['Gender', profile.userId?.gender],
                  ['Blood Group', profile.bloodgroup],
                  ['City', profile.city],
                  ['Height', profile.height],
                  ['Diet', profile.diet],
                  ['Hobbies', profile.hobbies],
                  ['Marital Status', profile.maritalStatus],
                  ['Religion', profile.religion],
                  ['Community', profile.community],
                  ['Sub Community', profile.subCommunity],
                  ['Mother Tongue', profile.mothertongue],
                  ['Manglik', profile.manglik],
                  ['Grow Up Location', profile.growup],
                  ['Health Information', profile.healthinformation],
                  ['Disability', profile.disability],
                  ['Gothram', profile.gothram]
                ]
              },
              {
                title: '🏠 Family Information',
                data: [
                  ['Family Details', profile.familydetail],
                  ['Father', profile.fatherdetails],
                  ['Mother', profile.motherdetails],
                  ['Location', profile.familylocation],
                  ['No. of Sisters', profile.nosisters],
                  ['No. of Brothers', profile.nobrothers],
                  ['Family Financial Status', profile.familyfinancialstatus]
                ]
              },
              {
                title: '💼 Professional Information',
                data: [
                  ['Qualification', profile.highestqualification],
                  ['Colleges Attended', profile.collegesattended],
                  ['Working As', profile.workingas],
                  ['Employer', profile.employername],
                  ['Annual Income', profile.annualincome],
                  ['Working With', profile.workingwith],
                  ['Current Residence', profile.currentresidence],
                  ['State of Residence', profile.stateofresidence],
                  ['Residency Status', profile.residencystatus]
                ]
              },
              {
                title: '📍 Location & Contact',
                data: [
                  ['City of Birth', profile.cityofbirth],
                  ['Time of Birth', profile.timeofbirth],
                  ['Zip Code', profile.zippincode],
                  ['Living In India Since', profile.livingInIndiaSince],
                  ['Live with Family', profile.liveWithFamily ? 'Yes' : 'No']
                ]
              }
            ].map((section, idx) => (
              <div
                key={idx}
                className={`bg-white/70 border ${cardBorder} p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300`}
              >
                <h3 className={`text-2xl font-bold ${textColor} mb-6 border-b pb-2`}>
                  {section.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800">
                  {section.data.map(([label, value], i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 ${cardBg} p-3 rounded-xl shadow-sm transition`}
                    >
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
      </div>
    
    </>
  );
}

export default ProfileDetails;
