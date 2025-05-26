import React, { useEffect, useState } from 'react';
import ProfileThree from '../MyProfilePage/ProfileThree';
import profileone from '../../assets/Images/Rectangle 181.png';
import profiletwo from '../../assets/Images/Rectangle 182.png';
import profilethree from '../../assets/Images/Rectangle 183.png';
import profilefour from '../../assets/Images/Rectangle 184.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const staticImages = [
  { src: profileone, alt: 'Profile One' },
  { src: profiletwo, alt: 'Profile Two' },
  { src: profilethree, alt: 'Profile Three' },
  { src: profilefour, alt: 'Profile Four' },
];

function UploadSection() {
      let API= import.meta.env.VITE_APP_API_URL
  const [userId, setUserId] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Get user ID and fetch existing images
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("userProfile"));
    if (profile && profile._id) {
      setUserId(profile._id);
      fetchUploadedImages(profile._id);
    }
  }, []);

  const fetchUploadedImages = async (id) => {
    try {
      const res = await axios.get(`${API}api/profileget/${id}`);
         console.log(res.data.data);
      setUploadedImages(res.data.data.allImages || []);
    } catch (error) {
      console.error("Error fetching uploaded images", error);
      toast.error("Could not load images");
    }
  };

  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  const handleUpload = async () => {
    if (!selectedFiles.length) {
      toast.error("Please select at least one image.");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });

    // ✅ Get token from localStorage
    const user = JSON.parse(localStorage.getItem("userProfile"));
    const userId= user?._id;
    const token = user?.token;

    try {
      const res = await axios.post(
        `${API}api/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Send token here
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      

      toast.success("Images uploaded successfully!");
      setUploadedImages(res.data.allImages || []);
      setSelectedFiles([]);
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Image upload failed.");
    }
  };

  return (
    <>
      <Toaster />
      <div className='p-2 md:p-4 jost md:px-10 md:py-5'>
        <div className='bg-[#FFCCA8] py-2 md:py-3 md:px-5 rounded-md'>

          <div className='flex justify-center gap-3 mt-3'>
            <button className='px-5 py-1 cursor-pointer bg-[#FF5A60] text-white text-center rounded-full'>
              Photo
            </button>
            <Link to="/setting">
              <button className='px-5 py-1 cursor-pointer bg-[#FF5A60] text-white text-center rounded-full'>
                Setting
              </button>
            </Link>
          </div>

          <ProfileThree />

          <div className='md:w-3/4 lg:w-1/2 mx-auto text-sm text-gray-700 mt-4'>
            <p className='text-center'>
              Note: You can upload 20 photos to your profile. Each photo must be less than 15 MB and in jpg, jpeg, png or webp format. All photos uploaded are screened as per Photo Guidelines and 98% of those get activated within 2 hours.
            </p>
          </div>

          {/* Upload Section */}
          <div className="mt-6 text-center">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="block mx-auto mb-4 w-full max-w-xs text-sm file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#FF5A60] file:text-white file:font-semibold hover:file:bg-[#ff3b44]"
            />

            <button
              onClick={handleUpload}
              className="bg-[#FF5A60] text-white px-6 py-2 rounded-full hover:bg-[#ff3b44]"
            >
              Upload Selected Images
            </button>
          </div>
        </div>
      </div>

      {/* All Images Section */}
      <div className="p-6">
        <h1 className="text-center text-2xl font-semibold gilda-display-regular mb-4">My Photos</h1>

        <div className="flex justify-center gap-4 flex-wrap">
          {/* Static Images */}
          {staticImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-24 h-24 sm:w-40 sm:h-40 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}

          {/* Uploaded Images */}
          {uploadedImages.map((url, index) => (
            <img
              key={`uploaded-${index}`}
              src={url}
              alt={`Uploaded ${index}`}
              className="w-24 h-24 sm:w-40 sm:h-40 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default UploadSection;
