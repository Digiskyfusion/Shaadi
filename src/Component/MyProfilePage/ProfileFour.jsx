import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ProfileFour = () => {
  return (
    <div className="bg-[#FF5A60] rounded-2xl p-4 sm:p-6 w-full max-w-4xl mx-auto text-white relative">
      {/* Container */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
        {/* Left Column */}
        <div className="space-y-2 w-full sm:w-1/2">
          <div className="flex">
            <span className="w-32">Age / Height</span>
            <span className="mr-2">:</span>
          </div>
          <div className="flex">
            <span className="w-32">Marital Status</span>
            <span className="mr-2">:</span>
          </div>
          <div className="flex">
            <span className="w-32">Posted by</span>
            <span className="mr-2">:</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-2 w-full sm:w-1/2">
          <div className="flex">
            <span className="w-40">Religion/Community</span>
            <span className="mr-2">:</span>
          </div>
          <div className="flex">
            <span className="w-40">Location</span>
            <span className="mr-2">:</span>
          </div>
          <div className="flex">
            <span className="w-40">Mother Tongue</span>
            <span className="mr-2">:</span>
          </div>
        </div>
      </div>

      {/* Edit Button */}
      <button className="absolute top-2 right-2 bg-black text-white text-sm px-2 py-1 rounded-full flex items-center gap-1">
        <FontAwesomeIcon icon={faPen} className="text-xs" />
        Edit
      </button>
    </div>
  );
};

export default ProfileFour;
