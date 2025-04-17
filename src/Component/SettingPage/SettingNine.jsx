import React from 'react';
import { Link } from 'react-router-dom';

function SettingNine() {
  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  const handleDelete = () => {
    console.log("Delete Profile clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white text-black rounded-2xl p-6 md:p-8 space-y-6 border border-gray-200 shadow-md">

        {/* Heading */}
        <div className="text-center space-y-3">
          <h1 className="text-xl md:text-2xl font-bold">Confirm Profile Deletion</h1>
          <p className="text-sm md:text-base text-black leading-relaxed">
            You will permanently lose all profile information,<br className="hidden sm:block" />
            match interactions, and paid membership.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 gap-4">
        <Link to="/setting">
          <button
            onClick={handleCancel}
            className="w-full sm:w-auto rounded-full cursor-pointer text-base font-medium "
          >
            Cancel
          </button>
          </Link>

      <Link to="/deleteotp">
          <button
        

            className="w-full sm:w-auto rounded-full  cursor-pointer text-base font-medium text-[#FF5A60] "
          >
            Delete Profile
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SettingNine;
