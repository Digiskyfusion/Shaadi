import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import Image17 from '../../assets/Images/Image17.png';
import Navbar3 from "../Navbar/Navbar3";
import { ToastContainer, toast } from 'react-toastify';

const StepTwo = ({ formData, setFormData, prevStep }) => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://192.168.29.50:3000/user/register",
        formData
      );
      console.log(res);
      const { token } = res.data;
      // const {user}= res.data

      localStorage.setItem("token", token);
      localStorage.setItem("userProfile", JSON.stringify(res.data.user));
      toast.success("Form submit successfully");
      setFormData({
        profileFor: "",
        firstName: "",
        lastName: "",
        religion: "",
        community: "",
        mobileNumber: "",
        emailId: "",
        dob: "",
        location: "",
        password: "",
      });
      setTimeout(()=>
    {
        navigate("/StepThree");
    },1500)
    } catch (err) {
      alert("user register already");
    }
  };

  return (

    
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${Image17})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    <Navbar3 />
    <div className="min-h-screen flex items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-[#DE5353] bg-opacity-90 rounded-2xl p-4 shadow-xl">
       <Link to="/register/step-one">
       <FaArrowCircleLeft
          className="text-2xl text-black cursor-pointer"
          onClick={prevStep}
        />
       </Link>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-3"
        >
         <ToastContainer />
          <h2 className="text-sm sm:text-xl text-center font-semibold text-white">
            Great! Now fill some basic details
          </h2>

          <div className="space-y-1">
            <label className="text-white block text-sm sm:text-xl">Phone Number</label>
            <input
              type="text"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={(e) =>
                setFormData({ ...formData, mobileNumber: e.target.value })
              }
              className="w-full px-3 py-2 rounded-lg bg-white outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-white block text-sm sm:text-xl">Email ID</label>
            <input
              type="email"
              placeholder="Email ID"
              value={formData.emailId}
              onChange={(e) =>
                setFormData({ ...formData, emailId: e.target.value })
              }
              className="w-full px-3 py-2 rounded-lg bg-white outline-none"
            />
          </div>
          <div className="space-y-1">
          <label className="text-white block text-sm sm:text-xl">Date of Birth</label>
      
<div className="flex gap-2 text-sm sm:text-xl">
          {/* {/ {/ // Day /} /} */}
          <select
            value={formData.dobDay}
            onChange={(e) => {
              const dobDay = e.target.value;
              const { dobMonth, dobYear } = formData;
              const dob =
                dobYear && dobMonth && dobDay
                  ? `${dobYear}-${String(dobMonth).padStart(2, "0")}-${String(
                      dobDay
                    ).padStart(2, "0")}`
                  : "";
              setFormData({ ...formData, dobDay, dob });
            }}
            className="w-1/3 px-3 py-2 rounded-lg bg-white outline-none"
          >
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          {/* {/ {/ // Month /} /} */}
          <select
            value={formData.dobMonth}
            onChange={(e) => {
              const dobMonth = e.target.value;
              const { dobDay, dobYear } = formData;
              const dob =
                dobYear && dobMonth && dobDay
                  ? `${dobYear}-${String(dobMonth).padStart(2, "0")}-${String(
                      dobDay
                    ).padStart(2, "0")}`
                  : "";
              setFormData({ ...formData, dobMonth, dob });
            }}
            className="w-1/3 px-3 py-2 rounded-lg bg-white outline-none"
          >
            <option value="">Month</option>
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month, i) => (
              <option key={i + 1} value={i + 1}>
                {month}
              </option>
            ))}
          </select>

          {/* {/ {/ // Year /} /} */}
          <select
            value={formData.dobYear}
            onChange={(e) => {
              const dobYear = e.target.value;
              const { dobDay, dobMonth } = formData;
              const dob =
                dobYear && dobMonth && dobDay
                  ? `${dobYear}-${String(dobMonth).padStart(2, "0")}-${String(
                      dobDay
                    ).padStart(2, "0")}`
                  : "";
              setFormData({ ...formData, dobYear, dob });
            }}
            className="w-1/3 px-3 py-2 rounded-lg bg-white outline-none"
          >
            <option value="">Year</option>
            {Array.from({ length: 100 }, (_, i) => {
              const year = new Date().getFullYear() - i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
</div>
    </div>
          <div className="space-y-1">
            <label className="text-white block text-sm sm:text-xl">Where do you live?</label>
            <input
              type="text"
              placeholder="Location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              className="w-full px-3 py-2 rounded-lg bg-white outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-white block text-sm sm:text-xl">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full px-3 py-2 rounded-lg bg-white outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 cursor-pointer bg-black text-white font-semibold text-sm sm:text-xl py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-black mt-2">
            By signing up, you agree to our{" "}
            <span className=" cursor-pointer text-white">
              terms 
            </span>
          </p>
        </form>
      </div>
      </div>
    </div>
  );
};

export default StepTwo;