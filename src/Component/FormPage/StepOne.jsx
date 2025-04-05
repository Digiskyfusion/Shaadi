import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import Image17 from '../../assets/Images/Image17.png';
import Navbar3 from "../Navbar/Navbar3";
import { CiCircleQuestion } from "react-icons/ci";

const StepOne = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (!formData.profileFor || !formData.firstName || !formData.religion) {
      alert("Please fill in all required fields.");
      return;
    }
    navigate("/register/step-two");
  };

  return (
    <>
     
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `url(${Image17})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      <Navbar3 />
      <div  className="min-h-screen flex justify-center items-center px-4">
     
        <div className="bg-[#DE5353] bg-opacity-90 p-8 rounded-2xl shadow-lg w-full max-w-md">
          <FaArrowCircleLeft
            className="text-2xl text-white mb-4 cursor-pointer"
            onClick={() => navigate(-1)}
          />

          <h2 className="text-2xl text-start font-semibold px-2 mt-3 mb-6 text-black">
            Create your account and let us start finding your perfect match!
          </h2>

          <form onSubmit={handleNext} className="space-y-4">
            {/* Profile For */}
            <label className="text-white">Profile for</label>
            <select
              value={formData.profileFor}
              onChange={(e) =>
                setFormData({ ...formData, profileFor: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Select</option>
              <option value="Myself">Myself</option>
              <option value="Son">Son</option>
              <option value="Daughter">Daughter</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Relative">Relative</option>
              <option value="Friend">Friend</option>
            </select>

            {/* Name Fields */}
            <div className="md:flex gap-3">
              <div>
                <label className="text-white">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="text-white">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
            </div>

            {/* Religion Selector */}
            <label className="text-white">Religion</label>
            <select
              value={formData.religion}
              onChange={(e) =>
                setFormData({ ...formData, religion: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Select</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Sikh">Sikh</option>
              <option value="Jain">Jain</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Other">Other</option>
            </select>

            {/* Community Selector */}
            <label className="text-white flex items-center gap-1">
              Community <CiCircleQuestion />
            </label>
            <select
              value={formData.community}
              onChange={(e) =>
                setFormData({ ...formData, community: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Select</option>
              <option value="Brahmin">Brahmin</option>
              <option value="Rajput">Rajput</option>
              <option value="Yadav">Yadav</option>
              <option value="Agarwal">Agarwal</option>
              <option value="Kayastha">Kayastha</option>
              <option value="Jat">Jat</option>
              <option value="Other">Other</option>
            </select>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Next
            </button>

            {/* Already a Member */}
            <div className="text-center mt-4">
              <h1 className="text-black">
                Already a Member?{" "}
                <span
                  className="cursor-pointer text-white underline"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </h1>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default StepOne;
