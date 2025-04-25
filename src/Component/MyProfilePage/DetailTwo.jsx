import React, { useEffect, useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import axios from 'axios';

function DetailTwo() {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    age: '',
    dob: '',
    maritalStatus: '',
    height: '',
    growup: '',
    diet: '',
    bloodGroup: '',
    healthinformation: '',
    disability: ''
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        const userId = userProfile?._id;
        if (!userId) return;

        const res = await axios.get(`http://localhost:3000/api/user/getuser/${userId}`);
        setProfile(res.data);
        // console.log(res.data)
        setEditData({
          age: res.data.age,
          dob: res.data.dob,
          maritalStatus: res.data.maritalstatus,
          height: res.data.height,
          growup: res.data.growup,
          diet: res.data.diet,
          bloodGroup: res.data.bloodgroup,
          healthealthinformationhInfo: res.data.healthinformation,
          disability: res.data.disability
        });
      } catch (err) {
        console.error("Error fetching profile data", err);
      }
    };

    fetchProfileData();
  }, []);

  const handleSave = async () => {
    try {
      const userProfile = JSON.parse(localStorage.getItem("userProfile"));
      const userId = userProfile?._id;
      if (!userId) return;

      const updatedData = {
        ...profile,
        ...editData,
      };

      await axios.put(`http://localhost:3000/api/user/updateuser/${userId}`, updatedData);
      setProfile(updatedData);
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating details", err);
    }
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div className='px-5 py-5'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              Basic & Lifestyle
            </h1>
          </div>
          <div className='flex justify-center'>
            <div
              onClick={() => setIsEditing(true)}
              className='flex items-center mt-2 md:mt-0 gap-1 bg-black cursor-pointer rounded-full text-white px-4 py-1 cursor-pointer hover:bg-gray-800 transition'
            >
              <FaPencilAlt />
              <span>Edit</span>
            </div>
          </div>
        </div>

        {/* Inner Section */}
        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md md:px-10'>
            <div className='md:flex md:justify-between md:items-start gap-10'>
              {/* Left Column */}
              <div className='flex flex-col space-y-3'>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Age:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.age}
                      onChange={(e) => setEditData({ ...editData, age: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.age}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Date Of Birth:</span>
                  {isEditing ? (
                    <input
                      type="date"
                      value={editData.dob}
                      onChange={(e) => setEditData({ ...editData, dob: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{new Date(profile.dob).toLocaleDateString('en-GB')}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Marital Status:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.maritalStatus}
                      onChange={(e) => setEditData({ ...editData, maritalStatus: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.maritalstatus}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Height:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.height}
                      onChange={(e) => setEditData({ ...editData, height: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.height}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Grew up in:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.growup}
                      onChange={(e) => setEditData({ ...editData, growup: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.growup}</span>
                  )}
                </p>
              </div>

              {/* Right Column */}
              <div className='flex flex-col space-y-3'>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Diet:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.diet}
                      onChange={(e) => setEditData({ ...editData, diet: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.diet}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Blood Group:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.bloodGroup}
                      onChange={(e) => setEditData({ ...editData, bloodGroup: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.bloodgroup}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Health Information:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.healthinformation}
                      onChange={(e) => setEditData({ ...editData, healthinformation: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.healthinformation}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Disability:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.disability}
                      onChange={(e) => setEditData({ ...editData, disability: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.disability}</span>
                  )}
                </p>
              </div>
            </div>

            {isEditing && (
              <div className="mt-4 flex justify-end gap-4">
                <button onClick={() => setIsEditing(false)} className="px-4 cursor-pointer py-2 bg-gray-300 rounded">
                  Cancel
                </button>
                <button onClick={handleSave} className="px-4 py-2 bg-[#FF5A60] cursor-pointer text-white rounded">
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailTwo;
