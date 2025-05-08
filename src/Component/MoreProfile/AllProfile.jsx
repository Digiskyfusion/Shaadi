import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllProfile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        if (!userProfile?._id) return;

        const userId = userProfile._id;
        const res = await axios.get(`http://localhost:3000/user/opposite/${userId}`);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching user profiles:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.length > 0 ? (
        data.map((profile) => (
          <div
            key={profile._id}
            className=" rounded-2xl shadow-md pt-4 bg-[#FF5A60] min-h-[320px] flex flex-col justify-between transition-transform hover:shadow-lg hover:-translate-y-1"
          >
            <div className="px-10">
              <div className="flex justify-center items-center mb-4">
                <img
                  src={profile.userId?.profileImage}
                  alt="Profile"
                  className="w-28 h-28 object-cover rounded-full"
                />
              </div>
              <h2 className="text-center text-lg font-normal text-white italic mb-2">
                {profile.userId?.firstName} {profile.userId?.lastName}
              </h2>
              <div className="text-sm lg:text-[15px] text-white  px-2 flex justify-center flex-wrap text-center gap-1">
                <p>{profile.age}</p>,
                <p>{profile.height}</p>,
                <p>{profile.community}</p>,
                <p>{profile.subCommunity}</p>,
                <p>{profile.currentresidence}</p>,
                <p>{profile.growup}</p>
              </div>
            </div>
            <div className="mt-4 bg-[#FFCCA8] rounded-b-2xl flex flex-col justify-center items-center py-3">
              {/* <h1 className="text-black text-base font-medium">Connect With Her?</h1> */}
                   <Link to={`/profile/${profile?.userId._id}`} >
                  <button className="mt-2 bg-[#FF5A60] cursor-pointer text-white px-6 py-1 rounded-md hover:bg-red-500 transition">
                View Profile
              </button>
              </Link>
           
            </div>
          </div>
        ))
      ) : (
        <p>No profiles found.</p>
      )}
    </div>
  );
}

export default AllProfile;
