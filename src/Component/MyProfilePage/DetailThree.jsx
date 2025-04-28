import React, { useEffect, useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import axios from 'axios';

function DetailThree() {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    religion: '',
    community: '',
    subcommunity: '',
    gothram: '',
    mothertongue: '',
    manglik: '',
    dob: '',
    timeofbirth: '',
    cityofbirth: ''
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
          religion: res.data.religion,
          community: res.data.community,
          subcommunity: res.data.subcommunity,
          gothram: res.data.gothram,
          mothertongue: res.data.mothertongue,
          manglik: res.data.manglik,
          dob: res.data.dob,
          timeofbirth: res.data.timeofbirth,
          cityofbirth: res.data.cityofbirth
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
              Religious Background & Astro Details
            </h1>
          </div>
          <div className='flex justify-center'>
            <div
              onClick={() => setIsEditing(true)}
              className='flex items-center mt-2 md:mt-0 gap-1 cursor-pointer bg-black rounded-full text-white px-4 py-1 cursor-pointer hover:bg-gray-800 transition'
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
                  <span className='font-semibold min-w-[150px]'>Religion:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.religion}
                      onChange={(e) => setEditData({ ...editData, religion: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.religion}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Community:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.community}
                      onChange={(e) => setEditData({ ...editData, community: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.community}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Sub Community:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.subcommunity}
                      onChange={(e) => setEditData({ ...editData, subcommunity: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.subcommunity}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Gothra / Gothram:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.gothram}
                      onChange={(e) => setEditData({ ...editData, gothram: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.gothram}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Mother Tongue:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.mothertongue}
                      onChange={(e) => setEditData({ ...editData, mothertongue: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.mothertongue}</span>
                  )}
                </p>
              </div>

              {/* Right Column */}
              <div className='flex flex-col space-y-3'>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Manglik / Chevvai Doshani:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.manglik}
                      onChange={(e) => setEditData({ ...editData, manglik: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.manglik}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Date of Birth:</span>
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
                  <span className='font-semibold min-w-[150px]'>Time of Birth:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.timeofbirth}
                      onChange={(e) => setEditData({ ...editData, timeofbirth: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.timeofbirth}</span>
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>City of Birth:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.cityofbirth}
                      onChange={(e) => setEditData({ ...editData, cityofbirth: e.target.value })}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{profile.cityofbirth}</span>
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

export default DetailThree;
