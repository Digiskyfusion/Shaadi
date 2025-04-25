import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ProfileFour = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        const userId = userProfile._id;

        if (!userId) {
          console.error("User ID not found in localStorage");
          return;
        }

        const response = await axios.get(
          `http://localhost:3000/api/user/getuser/${userId}`
        );
        setProfile(response.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);

  const handleEditClick = () => {
    setEditData(profile);
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const userProfile = JSON.parse(localStorage.getItem("userProfile"));
      const userId = userProfile._id;

      await axios.put(
        `http://localhost:3000/api/user/updateuser/${userId}`,
        editData
      );
      setProfile(editData);
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="relative bg-[#FF5A60] rounded-2xl p-4 sm:p-6 w-full max-w-4xl mx-auto text-white">
      {isEditing ? (
        // Inline Edit Form
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  text-black">
          <input
            name="age"
            value={editData.age}
            onChange={handleInputChange}
            placeholder="Age"
            className="border p-2 rounded"
          />
          <input
            name="height"
            value={editData.height}
            onChange={handleInputChange}
            placeholder="Height"
            className="border p-2 rounded"
          />
          <input
            name="maritalstatus"
            value={editData.maritalstatus}
            onChange={handleInputChange}
            placeholder="Marital Status"
            className="border p-2 rounded"
          />
          <input
            name="bloodgroup"
            value={editData.bloodgroup}
            onChange={handleInputChange}
            placeholder="Blood Group"
            className="border p-2 rounded"
          />
          <input
            name="religion"
            value={editData.religion}
            onChange={handleInputChange}
            placeholder="Religion"
            className="border p-2 rounded"
          />
          <input
            name="community"
            value={editData.community}
            onChange={handleInputChange}
            placeholder="Community"
            className="border p-2 rounded"
          />
          <input
            name="dob"
            type="date"
            value={editData.dob?.split("T")[0]}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            name="mothertongue"
            value={editData.mothertongue}
            onChange={handleInputChange}
            placeholder="Mother Tongue"
            className="border p-2 rounded"
          />

          <div className="col-span-1 sm:col-span-2 cursor-pointer flex justify-end gap-4 mt-4">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 cursor-pointer bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#4ac429] cursor-pointer text-white rounded"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        // View Mode
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
          <div className="space-y-6 w-full sm:w-1/2">
            <div className="flex">
              <span className="w-32">Age / Height</span>
              <span className="mr-2">:</span>
              <span>
                {profile.age} / {profile.height}
              </span>
            </div>
            <div className="flex">
              <span className="w-32">Marital Status</span>
              <span className="mr-2">:</span>
              <span>{profile.maritalstatus}</span>
            </div>
            <div className="flex">
              <span className="w-32">Blood Group</span>
              <span className="mr-2">:</span>
              <span>{profile.bloodgroup}</span>
            </div>
          </div>

          <div className="space-y-6 w-full sm:w-1/2">
            <div className="flex">
              <span className="w-40">Religion/Community</span>
              <span className="mr-2">:</span>
              <span>
                {profile.religion} / {profile.community}
              </span>
            </div>
            <div className="flex">
              <span className="w-40">DOB</span>
              <span className="mr-2">:</span>
              <span>
                {new Date(profile.dob).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex">
              <span className="w-40">Mother Tongue</span>
              <span className="mr-2">:</span>
              <span>{profile.mothertongue}</span>
            </div>
          </div>
        </div>
      )}

      {!isEditing && (
        <button
          onClick={handleEditClick}
          className="absolute top-2 right-2 bg-black cursor-pointer text-white text-sm px-2 py-1 rounded-full flex items-center gap-1"
        >
          <FontAwesomeIcon icon={faPen} className="text-xs" />
          Edit
        </button>
      )}
    </div>
  );
};

export default ProfileFour;
