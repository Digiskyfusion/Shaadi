import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ProfileFour = () => {
  return (
    <div className="bg-[#FF5A60] rounded-2xl p-6 flex justify-between items-start w-full max-w-3xl mx-auto text-white relative">
      {/* {/ Left Column /} */}
      <div className="space-y-2">
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

      {/* {/ Right Column /} */}
      <div className="space-y-2 mr-44">
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

      {/* {/ Edit Button /} */}
      

      <button className="absolute top-2 right-2 bg-black text-white text-sm px-2 font-normal py-1 rounded-full flex items-center gap-1">
      <FontAwesomeIcon icon={faPen} className="text-white text-xs" />
      Edit
    </button>
    
    </div>
  );
};

export default ProfileFour;
 