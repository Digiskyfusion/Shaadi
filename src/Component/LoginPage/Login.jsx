import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { CiCircleQuestion } from 'react-icons/ci';
// import { RiLockPasswordLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import Image16 from '../../assets/Images/Image16.png';
import ballon from '../../assets/Images/ballon.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://192.168.29.50:3000/user/login', {
        identifier,
        password,
      });

      const { token, user } = response.data;

      // ✅ Save token and user info
      localStorage.setItem('token', token);
      localStorage.setItem('userProfile', JSON.stringify(user));

      // console.log("Login successful", user);
      const userId = response.data.user._id; // Make sure backend sends this
      // console.log("userDi", userId);
      

      toast.success("User Login successfully");
      // ✅ Redirect after login (optional)
    setTimeout(()=>
    {
      // navigate(`/user/${userId}`); // Change this route to your actual dashboard or home
      navigate(`/CardsPage`); // Change this route to your actual dashboard or home
    },2000)
    } catch (err) {
      toast.error("Login failed");
      console.error(err);
      setError(err?.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative p-4 sm:p-6 lg:p-16  flex flex-col items-center bg-rose-100">

      {/* {/ Top Left Arrow /}  */}
      <div className="absolute top-4 left-4 cursor-pointer z-10">
        <Link to="/">
          <BsFillArrowLeftCircleFill className="text-[#DE5353] text-3xl sm:text-4xl" />
        </Link>
      </div>

      {/* {/ Top Right Heading + Sign Up Button /} */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2 jost sm:gap-4 flex-wrap justify-end">
        <h1 className="text-sm sm:text-lg font-semibold text-gray-800 ">New to Shaadi?</h1>
        <button className="text-[#DE5353] px-4 sm:px-6 py-2 cursor-pointer rounded-full border-[#DE5353] border-2 font-semibold text-sm sm:text-base">
          <Link to="/register/step-one">Sign Up Free</Link>
        </button>
      </div>

      {/* {/ Main Content /} */}
      <div className="w-full max-w-6xl flex flex-col gap-6 gilda-display-regular sm:gap-10 mt-24 px-2 sm:px-6">

        {/* {/ Heading /} */}
        <div className="text-center text-black gilda-display-regular">
  <h2 className="text-4xl sm:text-5xl md:text-6xl ">
    Join the Best Matchmaking Platform
  </h2>
  <p className="text-4xl sm:text-5xl md:text-6xl mt-2 ">
    Just a Few Clicks!
  </p>
</div>


              

        {/* {/ Combined Image + Form Card /} */}

        <div className="flex flex-col lg:flex-row overflow-hidden lg:h-[500px] shadow-xl ">

          {/* {/ Image Section /} */}
          <div className="w-full lg:w-1/2 rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl flex justify-center items-center lg:h-full">
            <img
              src={Image16}
              alt="Illustration"
              className="h-full w-full object-cover rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl"
            />
          </div>

          {/* {/ Form Section /} */}
          <form onSubmit={handleLogin} className="w-full rounded-r-2xl lg:w-1/2 bg-black jost  text-white flex flex-col justify-center relative px-6 py-8 space-y-6">
<ToastContainer />
            {/* {/ Balloon icon /} */}
            <img
              src={ballon}
              alt="Balloon Icon"
              className="absolute -top-4 -left-6 w-35 h-35 hidden lg:block"
            />

            {/* {/ Email/Mobile Input /} */}
            <div className="relative text-center jost">
              <label htmlFor="identifier" className="block text-xl mb-2 mr-48">
                Mobile No / Email ID
              </label>
              <input
                id="identifier"
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-100  pl-4 pr-10 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-black bg-[#FFFFFF]"
              />
              
            </div>

            {/* Password Input */}
            <div className="relative text-center jost ">
              <label htmlFor="password" className="block text-xl  mb-2 mr-72">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-100 pl-4 pr-10 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  text-black bg-[#FFFFFF]"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute top-9 right-3 text-gray-400"
              >
                {/* {showPassword ? <RiEyeOffLine size={20} /> : <RiEyeLine size={20} />} */}
              </button>
            </div>

            {/* Forgot password */}
            <div className="flex justify-between  jostitems-center flex-wrap gap-2 text-xl ml-18">
              <a href="#" className="text-[#DE5353] hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <div className="gap-4 jost text-center">
              <button
                type="submit"
                className="w-100 bg-[#EB5757] cursor-pointer text-white py-4 rounded-full text-xl"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
              {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
