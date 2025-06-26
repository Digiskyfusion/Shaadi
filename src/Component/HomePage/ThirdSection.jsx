import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ThirdSection() {
  const API = import.meta.env.VITE_APP_API_URL;

  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  const userId = userProfile?._id;

  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const fetchOppositeUsers = async () => {
      try {
        const res = await axios.get(`${API}user/all-profiles`);
        console.log(res);
        
        // Filter out unwanted profiles
        const filteredMembers = res.data.filter(
          (member) =>
            member.userId?.profileImage !==
            "https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg?t=st=1746177507~exp=1746181107~hmac=dee8c5e1b4e2f4af2c284b22413fb56a35d8a84c3ea9bfe101652a15dc7a60cc&w=826" &&
             member.userId?._id !== "682ebdc6e9526919abb2796d"
        );

        setMembers(filteredMembers);
      } catch (error) {
        console.error('Error fetching opposite members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOppositeUsers();
  }, [userId, API]);

  if (loading) {
    return <div className="text-center py-10 text-xl">Loading...</div>;
  }

  return (
    <section className="py-5 px-4 sm:px-12">
      <h1 className="text-4xl sm:text-5xl font-bold md:text-6xl lg:text-7xl mb-12 text-black text-center gilda-display-regular leading-tight">
        HeartSync Recently
        <br />
        <span className="inline-block">
          Jo
          <span className="relative inline-block">
            <span className="inline-block">
              <svg
                className="w-[12px] h-[20px] md:h-[28px] lg:w-[18px] lg:h-[30px]"
                viewBox="0 0 6 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="3" y1="0" x2="3" y2="100" stroke="black" strokeWidth="15" />
              </svg>
            </span>
            <span className="absolute top-[-14px] sm:top-[-1px] left-1/2 transform -translate-x-1/2 text-[#EB5757] text-xl sm:text-2xl">
              ❤️
            </span>
          </span>
          ned Members
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {members.slice(0, 8).map((member) => (
          <div
            key={member._id}
            className="bg-white rounded-3xl gilda-display-regular shadow-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="relative mb-6">
              <img
                src={member.userId?.profileImage}
                alt={member.name}
                className="w-full h-80 object-cover rounded-2xl shadow-md"
              />
              <div className="absolute -top-3 -right-3 bg-white p-2 rounded-full shadow-md">
                <span className="text-rose-500 text-xl">❤️</span>
              </div>
              <div className="absolute bottom-4 left-4 flex justify-center items-center gap-1 bg-[#DE5353] px-2 py-1 rounded-full shadow-sm">
                <span className="text-white text-xs font-medium">Online</span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
            </div>
            <div className="space-y-1 gilda-display-regular">
              <h2 className="text-2xl font-semibold font-cursive">
                {member.userId?.firstName} {member.userId?.lastName}, {member.age}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ThirdSection;
