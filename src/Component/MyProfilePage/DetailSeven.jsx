import React, { useEffect, useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import axios from 'axios';

function DetailSeven() {
  const [hobbies, setHobbies] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editHobbies, setEditHobbies] = useState("");

  const fetchUserHobbies = async () => {
    try {
      const userProfile = JSON.parse(localStorage.getItem("userProfile"));
      const userId = userProfile?._id;
      if (!userId) return;

      const res = await axios.get(`http://localhost:3000/api/user/getuser/${userId}`);
      setHobbies(res.data.hobbies || "");
      setEditHobbies(res.data.hobbies || "");
    } catch (err) {
      console.error("Error fetching hobbies", err);
    }
  };

  useEffect(() => {
    fetchUserHobbies();
  }, []);

  const handleSave = async () => {
    try {
      const userProfile = JSON.parse(localStorage.getItem("userProfile"));
      const userId = userProfile?._id;
      if (!userId) return;

      const updatedProfile = {
        hobbies: editHobbies
      };

      await axios.put(`http://localhost:3000/api/user/updateuser/${userId}`, updatedProfile);
      setIsEditing(false);
      await fetchUserHobbies(); // refresh data
    } catch (err) {
      console.error("Error updating hobbies", err);
    }
  };

  return (
    <div className='px-5 py-5'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              Hobbies
            </h1>
          </div>
          <div className='flex justify-center'>
            {!isEditing && (
              <div
                onClick={() => setIsEditing(true)}
                className='flex items-center mt-2 md:mt-0 gap-1 bg-black rounded-full text-white px-4 py-1 cursor-pointer hover:bg-gray-800 transition'
              >
                <FaPencilAlt />
                <span>Edit</span>
              </div>
            )}
          </div>
        </div>

        {/* Inner Section */}
        <div className='py-3'>
          <div className='bg-white text-black p-4 rounded-md md:px-10'>
            {/* Hobbies Section */}
            <div className=''>
              {isEditing ? (
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="border p-2 rounded-md"
                    value={editHobbies}
                    onChange={(e) => setEditHobbies(e.target.value)}
                    placeholder="e.g., Photography, Gaming, Hiking"
                  />
                  <div className="flex justify-end gap-4 mt-4">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 cursor-pointer bg-gray-300 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 cursor-pointer bg-[#FF5A60] text-white rounded"
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <p className=' flex flex-wrap pl-6 space-y-1 space-x-5'>
                  {hobbies.split(",").map((hobby, index) => (
                    <p className='bg-rose-200 px-3 py-1 rounded-md' key={index}>
                      {hobby.trim()}
                    </p>
                  ))}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSeven;
