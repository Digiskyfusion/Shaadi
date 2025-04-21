import React from 'react';

function SettingTwo() {
  return (
    <div className=" bg-gray-50 p-5">
      <h1 className="text-black text-2xl font-semibold mb-4 ml-1">Settings</h1>

      <div className="bg-[#FFE7D6] p-6 rounded-lg shadow-md">
        <div className="md:flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h1 className="text-black text-xl font-bold">Account Settings</h1>
          </div>
        </div>

        {/* Inner Section */}
        <div className="py-3">
          <div className="bg-white text-black p-6 rounded-md shadow-sm space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-1">Update Email ID</h2>
              <label className="block text-sm font-medium text-black">New Email</label>
              <p className="text-black">YourMail@gmail.com</p>
            </div>

            <hr className="border-gray-300" />

            <div className="flex justify-start  gap-3">
  <button className="px-6 py-2 bg-[#FFCCA8] text-black cursor-pointer rounded-full">
    Cancel
  </button>
  <button className="px-4 py-2 bg-[#FF5A60] text-black  cursor-pointer rounded-full">
    Submit
  </button>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingTwo;
