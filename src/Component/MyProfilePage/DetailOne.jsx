import React, { useEffect, useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import axios from 'axios';

function DetailOne() {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        const userId = userProfile?._id;
        if (!userId) return;

        const res = await axios.get(`http://localhost:3000/api/user/getuser/${userId}`);
        setProfile(res.data);
        setEditContent(res.data.familydetail || '');
      } catch (err) {
        console.error("Error fetching user details", err);
      }
    };

    fetchUserDetails();
  }, []);

  const handleSave = async () => {
    try {
      const userProfile = JSON.parse(localStorage.getItem("userProfile"));
      const userId = userProfile?._id;
      if (!userId) return;

      const updatedProfile = {
        ...profile,
        familydetail: editContent,
      };

      await axios.put(`http://localhost:3000/api/user/updateuser/${userId}`, updatedProfile);
      setProfile(updatedProfile);
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating details", err);
    }
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div className='px-5 py-2'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex justify-between'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              Personality, Family Details, Career, Partner Expectations, etc.
            </h1>
          </div>
          {!isEditing && (
            <div className='flex justify-center'>
              <div
                onClick={() => {
                  setEditContent(profile.familydetail || '');
                  setIsEditing(true);
                }}
                className='flex items-center gap-1 mt-2 cursor-pointer md:mt-0 bg-black rounded-full text-white px-4 md:px-6 py-1 hover:bg-gray-800 transition'
              >
                <FaPencilAlt />
                Edit
              </div>
            </div>
          )}
        </div>

        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md'>
            {isEditing ? (
              <>
                <textarea
                  rows={6}
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-red-600 cursor-pointer text-white rounded hover:bg-red-700"
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <p>{profile.familydetail || "No details added yet."}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailOne;
