import React, { useState, useEffect } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import axios from 'axios';

function DetailSix() {
  const [locationData, setLocationData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  // Fetch location details when the component mounts
  const fetchLocationData = async () => {
    try {
      const userProfile = JSON.parse(localStorage.getItem("userProfile"));
      const userId = userProfile?._id;
      if (!userId) return;

      const res = await axios.get(`http://localhost:3000/api/user/getuser/${userId}`);
      // console.log(res.data);
      setLocationData(res.data); // Directly set location data
      setEditData(res.data); // Set the editable data as the same as fetched data
    } catch (err) {
      console.error("Error fetching location data", err);
    }
  };

  useEffect(() => {
    fetchLocationData();
  }, []);

  // Handle save (update the location data in the backend)
  const handleSave = async () => {
    try {
      const userProfile = JSON.parse(localStorage.getItem("userProfile"));
      const userId = userProfile?._id;
      if (!userId) return;

      // Directly send updated editData
      await axios.put(`http://localhost:3000/api/user/updateuser/${userId}`, editData);
      setLocationData(editData); // Update the displayed data with the edited data
      setIsEditing(false); // Switch back to view mode
    } catch (err) {
      console.error("Error updating location data", err);
    }
  };

  return (
    <div className='px-5 py-5'>
      <div className='bg-[#FFE7D6] p-5 rounded-md'>
        <div className='md:flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <LuDot className='text-4xl text-red-600' />
            <h1 className='text-red-600 text-base md:text-xl font-bold'>
              Location
            </h1>
          </div>
          <div className='flex justify-center'>
            <div
              onClick={() => setIsEditing(true)}
              className='flex items-center mt-2 md:mt-0 gap-1 bg-black rounded-full text-white px-4 py-1 cursor-pointer hover:bg-gray-800 transition'>
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
                  <span className='font-semibold min-w-[150px]'>Current Residence :</span>
                  {isEditing ? (
                    <input
                      type="text"
                      className="border p-2 rounded-md"
                      value={editData.currentresidence || ''}
                      onChange={(e) => setEditData({ ...editData, currentresidence: e.target.value })}
                    />
                  ) : (
                    locationData.currentresidence
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>State of Residence :</span>
                  {isEditing ? (
                    <input
                      type="text"
                      className="border p-2 rounded-md"
                      value={editData.stateofresidence || ''}
                      onChange={(e) => setEditData({ ...editData, stateofresidence: e.target.value })}
                    />
                  ) : (
                    locationData.stateofresidence
                  )}
                </p>
              </div>

              {/* Right Column */}
              <div className='flex flex-col space-y-3'>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Residence Status :</span>
                  {isEditing ? (
                    <input
                      type="text"
                      className="border p-2 rounded-md"
                      value={editData.residencystatus || ''}
                      onChange={(e) => setEditData({ ...editData, residencystatus: e.target.value })}
                    />
                  ) : (
                    locationData.residencystatus
                  )}
                </p>
                <p className='md:flex'>
                  <span className='font-semibold min-w-[150px]'>Zip / Pin Code :</span>
                  {isEditing ? (
                    <input
                      type="text"
                      className="border p-2 rounded-md"
                      value={editData.zippincode || ''}
                      onChange={(e) => setEditData({ ...editData, zippincode: e.target.value })}
                    />
                  ) : (
                    locationData.zippincode
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Changes Button */}
      {isEditing && (
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={() => setIsEditing(false)} className="px-4 py-2 cursor-pointer bg-gray-300 rounded">
            Cancel
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-[#FF5A60] cursor-pointer text-white rounded">
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default DetailSix;
