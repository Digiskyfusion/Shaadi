import React, { useState, useEffect } from 'react';
import ProfileThree from '../MyProfilePage/ProfileThree';
import axios from 'axios';
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const UploadSection = () => {
  const [images, setImages] = useState([]);
  const [userImages, setUserImages] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null); // New state for errors

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
    setError(null);
    if (!files.length) return;

    // Check total images count after upload
    if ((images.length + files.length) > 5) {
      setError("You can upload a maximum of 5 images.");
      return;
    }

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
        if (urls.length < 1) {
          setError("Please upload at least 1 images.");
          setUploading(false);
          return;
        }
        const res = await axios.post(`${API}api/images`, {
          userId,
          images: urls,
        });
        setUserImages(res.data.data);
        setImages(res.data.data.images);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      setError("Upload failed, please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (urlToDelete) => {
    if (!userImages || !userImages._id) return;

    // Prevent deleting if less than 3 images will remain
    if (images.length <= 1) {
      setError("You must have at least 1 images.");
      return;
    }

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
      setError(null); // clear error on successful delete
    } catch (error) {
      console.error("Failed to delete image:", error);
      setError("Failed to delete image.");
    }
  };

  return (
    <>
      <div className='p-2 md:p-4 jost md:px-10 md:py-5'>
        <div className='bg-[#FFCCA8] py-2 md:py-3 md:px-5 rounded-md'>
          <div className='flex justify-center gap-3 mt-3'>
            <Link to="/setting">
              <button className='px-5 py-1 cursor-pointer bg-[#FF5A60] text-white text-center rounded-full'>
                Setting
              </button>
            </Link>
          </div>

          <ProfileThree onUpload={handleUpload} />

          {error && (
            <p className="text-center text-red-600 font-semibold mt-2">{error}</p>
          )}

          <div className='md:w-3/4 lg:w-1/2 mx-auto'>
            <p className='text-center'>
              Note: You can upload minimum 3 and maximum 5 photos to your profile. Each photo must be less than 15 MB and in jpg, jpeg, png or webp format.
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
                onClick={() => setSelectedImage(url)}
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

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
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
