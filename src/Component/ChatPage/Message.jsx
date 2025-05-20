import React from 'react';
import { Paperclip, Send } from 'lucide-react';
import image1 from "../../assets/Images/Ellipse 136.png";
import image2 from "../../assets/Images/403022_business man_male_user_avatar_profile_icon 1.png";

const Massage = () => {
  return (
    <div className="max-w-160 mx-auto bg-[#FFCCA8] rounded-t-2xl rounded-b-2xl  mt-4 min-h-[450px] flex flex-col jost mb-4">
      
      {/* Header */}
      <div className="flex items-center p-5 bg-[#FFEADC] rounded-t-2xl">
        <div className="relative">
          <img
            src={image1}
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
        <div className="ml-4">
          <h2 className="font-semibold text-black">Janetee Joldn</h2>
          <p className="text-sm text-gray-800">Punjab, India</p>
        </div>
      </div>

      {/* Chat messages */}
      <div className="p-4 space-y-4 flex-1 overflow-y-auto">
        {/* Message from user */}
        <div className="flex items-start space-x-2">
          <img
            src={image1}
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="bg-[#FF5A60] text-white px-4 py-2 rounded-full text-sm[--">
              Hi how are you
            </div>
            <div className="text-xs text-[#000000] mt-1">8:40 AM Today</div>
          </div>
        </div>

        {/* Message from receiver */}
        <div className="flex items-start justify-end space-x-2">
          <div className="text-right">
            <div className="bg-[#FF5A60] text-white px-4 py-2 rounded-full inline-block text-sm">
              I am good
            </div>
            <div className="text-xs text-[#000000] mt-1">8:40 AM Today</div>
          </div>
          <img
            src={image2}
            alt="receiver"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      {/* Message input */}
      <div className="flex items-center p-3 bg-[#FF9A56] rounded-xl m-4 mb-6">
        <Paperclip className="w-5 h-5 text-gray-800 mr-3" />
        <input
          type="text"
          placeholder="Type your message here"
          className="flex-1 p-2 bg-transparent outline-none text-gray-800 placeholder-gray-800 text-sm"
        />
        <Send className="w-5 h-5 text-gray-800 cursor-pointer" />
      </div>
    </div>
  );
};

export default Massage;
