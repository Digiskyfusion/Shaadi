import React, { useState, useEffect } from 'react';
import ProfileThree from '../MyProfilePage/ProfileThree';
import axios from 'axios';
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { MdDelete } from "react-icons/md";

const UploadSection = () => {
  const [images, setImages] = useState([]);
  const [userImages, setUserImages] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // 🆕

  const user = JSON.parse(localStorage.getItem("userProfile"));
  const userId = user?._id;
  const API = import.meta.env.VITE_APP_API_URL;

  const fetchUserImages = async () => {
    try {
      const res = await axios.get(`${API}api/images`);
      const userEntry = res.data.find((entry) => entry.userId === userId);
      if (userEntry) {
        setUserImages(userEntry);
        setImages(userEntry.images);
      } else {
        setUserImages(null);
        setImages([]);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    if (userId) fetchUserImages();
  }, [userId]);

  const handleUpload = async (files) => {
    if (!files.length) return;
    setUploading(true);
    try {
      const urls = [];

      for (const file of files) {
        const fileRef = ref(storage, `uploads/${Date.now()}_${file.name}`);
        const snapshot = await uploadBytes(fileRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        urls.push(downloadURL);
      }

      if (userImages) {
        const res = await axios.put(`${API}api/images/${userImages._id}`, {
          images: [...userImages.images, ...urls],
          title: userImages.title || "User Images"
        });
        setUserImages(res.data.data);
        setImages(res.data.data.images);
      } else {
        const res = await axios.post(`${API}api/images`, {
          userId,
          images: urls,
        });
        setUserImages(res.data.data);
        setImages(res.data.data.images);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (urlToDelete) => {
    if (!userImages || !userImages._id) return;

    try {
      const path = decodeURIComponent(new URL(urlToDelete).pathname.split("/o/")[1].split("?")[0]);
      const fileRef = ref(storage, path);
      await deleteObject(fileRef);

      const updatedImages = images.filter((url) => url !== urlToDelete);
      const res = await axios.put(`${API}api/images/${userImages._id}`, {
        images: updatedImages,
        title: userImages.title || "User Images",
      });

      setImages(res.data.data.images);
      setUserImages(res.data.data);
    } catch (error) {
      console.error("Failed to delete image:", error);
    }
  };

  return (
    <>
      <div className='p-2 md:p-4 jost md:px-10 md:py-5'>
        <div className='bg-[#FFCCA8] py-2 md:py-3 md:px-5 rounded-md'>
          <div className='flex justify-center gap-3 mt-3'>
            <button className='px-5 py-1 cursor-pointer bg-[#FF5A60] text-white text-center rounded-full'>
              Photo
            </button>
          </div>

          <ProfileThree onUpload={handleUpload} />

          <div className='md:w-3/4 lg:w-1/2 mx-auto'>
            <p className='text-center'>
              Note: You can upload 20 photos to your profile. Each photo must be less than 15 MB and in jpg, jpeg, png or webp format. All photos uploaded are screened as per Photo Guidelines and 98% of those get activated within 2 hours.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h1 className="text-center text-2xl font-semibold gilda-display-regular mb-4">My Photos</h1>
        <div className="flex justify-center gap-4 flex-wrap">
          {images.filter(url => url).map((url, index) => (
            <div key={index} className="relative group w-24 h-24 sm:w-40 sm:h-40">
              <img
                src={url}
                alt={`photo-${index}`}
                onClick={() => setSelectedImage(url)} // 🆕 click to zoom
                className="w-full h-full object-cover rounded-xl shadow-md cursor-pointer"
              />
             <button
  onClick={() => handleDelete(url)}
  title="Delete Image"
  className="absolute top-1 right-1 bg-white text-red-600 border border-red-600 rounded-full p-1 text-sm hover:bg-red-600 hover:text-white transition-colors duration-200"
>
  <MdDelete className='cursor-pointer' />
</button>

            </div>
          ))}
        </div>
      </div>

      {/* 🆕 Fullscreen popup for zoomed image */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)} // close on click
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default UploadSection;
