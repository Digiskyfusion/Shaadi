import React, { useState, useEffect } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import axios from 'axios';

export default function DetailFive() {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    highestqualification: '',
    collegesattended: '',
    annualincome: '',
    workingwith: '',
    workingas: '',
    employername: ''
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
          highestqualification: res.data.highestqualification,
          collegesattended: res.data.collegesattended,
          annualincome: res.data.annualincome,
          workingwith: res.data.workingwith,
          workingas: res.data.workingas,
          employername: res.data.employername
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
              Education & Career
            </h1>
          </div>
          <div className='flex justify-center'>
            <div
              onClick={() => setIsEditing(true)}
              className='flex items-center mt-2 md:mt-0 gap-1 bg-black rounded-full text-white px-4 py-1 cursor-pointer hover:bg-gray-800 transition'
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
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>Highest Qualification:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.highestqualification}
                      onChange={(e) => setEditData({ ...editData, highestqualification: e.target.value })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.highestqualification}</span>
                  )}
                </p>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>Colleges Attended:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.collegesattended}
                      onChange={(e) => setEditData({ ...editData, collegesattended: e.target.value })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.collegesattended}</span>
                  )}
                </p>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>Annual Income:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.annualincome}
                      onChange={(e) => setEditData({ ...editData, annualincome: e.target.value })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.annualincome}</span>
                  )}
                </p>
              </div>

              {/* Right Column */}
              <div className='flex flex-col space-y-3'>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>Working With:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.workingwith}
                      onChange={(e) => setEditData({ ...editData, workingwith: e.target.value })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.workingwith}</span>
                  )}
                </p>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>Working As:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.workingas}
                      onChange={(e) => setEditData({ ...editData, workingas: e.target.value })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.workingas}</span>
                  )}
                </p>
                <p className='flex flex-col md:flex-row'>
                  <span className='font-semibold min-w-[150px]'>Employer Name:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.employername}
                      onChange={(e) => setEditData({ ...editData, employername: e.target.value })}
                      className="border rounded-md px-2 py-1 mt-2 md:mt-0 w-full"
                    />
                  ) : (
                    <span>{profile.employername}</span>
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
