import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../FooterPage/Footer';
import Navbar4 from '../Navbar/Navbar4';
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
    return <div className="text-center py-24 text-pink-600 text-xl font-semibold animate-pulse">Loading profile...</div>;
  }

  return (
    <>
      <Navbar4 />
      <div className="bg-gradient-to-tr from-rose-100 via-pink-50 to-rose-200 bg-[url('/hearts-bg.svg')] bg-fixed bg-cover min-h-screen py-10 px-2">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-lg p-2 md:p-10 rounded-[10px]  border border-rose-200 space-y-10">

          <div className="text-left">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow transition-all duration-300"
            >
              ⬅ Back
            </button>
          </div>

          {/* Profile Header */}
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src={profile.userId?.profileImage}
              alt="Profile"
              className="w-44 h-44 object-cover rounded-full border-4 border-rose-400 shadow-lg hover:scale-105 transition duration-300"
            />
            <h2 className="text-4xl font-bold text-gray-800 italic">
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
                className="bg-white border border-pink-100 p-3 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-pink-600 mb-4 border-b border-rose-200 pb-2">
                  {section.title}
                </h3>
                <div className="flex flex-wrap gap-6 text-gray-700 text-base">
                  {section.data.map(([label, value], i) => (
                    <p key={i} className="flex items-center space-x-2 min-w-[250px]">
                      <span className="text-pink-500">{iconMap[label]}</span>
                      <span><strong>{label}:</strong> {value || 'N/A'}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfileDetails;
