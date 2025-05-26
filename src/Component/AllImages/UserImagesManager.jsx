import React, { useState, useEffect } from "react";
import { storage } from "../../firebase"; // Your existing Firebase config file
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import Footer from "../FooterPage/Footer";
import Navbar4 from "../Navbar/Navbar4";

const UserImagesManager = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [userImages, setUserImages] = useState(null);
  let a = JSON.parse(localStorage.getItem("userProfile"));
  let userId = a?._id;
  let API = import.meta.env.VITE_APP_API_URL;

  const fetchUserImages = async () => {
    try {
      const res = await axios.get(`${API}api/images`);
      const userEntry = res.data.find((entry) => entry.userId === userId);
      if (userEntry) setUserImages(userEntry);
      else setUserImages(null);
    } catch (err) {
      console.error("Failed to fetch user images", err);
    }
  };

  useEffect(() => {
    if (userId) fetchUserImages();
  }, [userId]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const uploadFilesToFirebase = async () => {
    const urls = [];
    for (const file of files) {
      const fileRef = ref(storage, `uploads/${file.name}`);
      const snapshot = await uploadBytes(fileRef, file);
      const url = await getDownloadURL(snapshot.ref);
      urls.push(url);
    }
    return urls;
  };

  const handleUpload = async () => {
    if (!files.length) return alert("Please select images first");

    setUploading(true);
    try {
      const urls = await uploadFilesToFirebase();

      if (userImages) {
        const updatedImages = urls;
        const res = await axios.put(
          `${API}api/images/${userImages._id}`,
          {
            images: updatedImages,
            title: userImages.title || "User Images",
          }
        );
        setUserImages(res.data.data);
      } else {
        const res = await axios.post(`${API}api/images`, {
          userId,
          images: urls,
        });
        setUserImages(res.data.data);
      }
      setFiles([]);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    if (!userImages) return;
    if (!window.confirm("Are you sure you want to delete all images?")) return;

    try {
      await axios.delete(`${API}api/images/${userImages._id}`);
      setUserImages(null);
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <>
      <Navbar4 />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-red-400 to-yellow-300 px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
            User Images Manager
          </h2>

          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-600
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-red-100 file:text-red-700
                       hover:file:bg-red-200
                       cursor-pointer mb-4"
          />

          <button
            onClick={handleUpload}
            disabled={uploading || !files.length}
            className={`w-full py-3 rounded-lg text-white font-semibold transition 
                        duration-300 ease-in-out
                        ${uploading || !files.length ? "bg-red-300 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"}`}
          >
            {uploading
              ? "Uploading..."
              : userImages
              ? "Update Images"
              : "Upload Images"}
          </button>

          {userImages && (
            <>
              <h3 className="text-xl font-semibold mt-10 mb-4 text-center text-red-700">
                Your Uploaded Images
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {userImages.images.map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt={`uploaded-${idx}`}
                    className="w-full h-28 object-cover rounded-md shadow-md hover:scale-105 transform transition duration-300"
                  />
                ))}
              </div>
              <button
                onClick={handleDelete}
                className="mt-6 w-full py-3 bg-red-700 hover:bg-red-800 text-white rounded-lg font-semibold transition duration-300"
              >
                Delete All Images
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserImagesManager;
