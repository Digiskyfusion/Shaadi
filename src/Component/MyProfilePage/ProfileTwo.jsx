import React from "react";

const ProfileTwo = () => {
  return (
    <div className=" flex items-center justify-center p-4 ">
      <div className="flex flex-col items-start">
        {/* {/ Red Profile Manager Box /} */}
        <div className="bg-[#FF5A60] text-white rounded-xl p-6 w-80 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Manage your Profile</h2>
          <ul className="space-y-2 text-xl">
            <li>● Edit Personal Profile</li>
            <li>● View Profile Status</li>
            <li>● Set Contact Filters</li>
            <li>● Edit Partner Profile</li>
            <li>● Add Photos</li>
            <li>● Hide/ Delete profile</li>
            <li>● Edit Contact Details</li>
          </ul>
        </div>

        {/* {/ Preview Button aligned to right /} */}
        <div className="w-full mt-4 flex justify-end">
          <button className="text-black text-xl font-medium cursor-pointer">Preview your Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTwo ;
