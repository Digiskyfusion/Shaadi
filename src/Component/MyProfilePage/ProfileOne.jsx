import React, { useEffect, useState } from 'react'
import { MdPhotoCamera, MdEdit } from 'react-icons/md'
import axios from 'axios'


function ProfileOne() {
  const [editMode, setEditMode] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')
  const [date, setDate] = useState('')
  const [gender, setGender] = useState('')

  const userProfile = JSON.parse(localStorage.getItem('userProfile'))
  const userId = userProfile._id
  // console.log(userId);
  

  useEffect(() => {
    axios.get(`http://192.168.29.50:3000/user/${userId}`)
      .then((res) => {
        const { firstName, lastName, mobileNumber, emailId, profileImage, dob, gender } = res.data.user
        setFirstName(firstName)
        setLastName(lastName)
        setPhone(mobileNumber)
        setEmail(emailId)
        setImage(profileImage)
        setDate(dob)
        setGender(gender)
        console.log(res.data.user.profileImage);
        
      })
      .catch((err) => {
        console.error('Error fetching user:', err)
      })
  }, [])

  const handleSave = () => {
    axios.put(`http://localhost:3000/user/${userId}`, {
      firstName,
      lastName,
      mobileNumber: phone,
      emailId: email,
      profileImage: image,
      dob: date,
      gender:gender,
    })
      .then(() => {
        setEditMode(false)
      })
      .catch((err) => {
        console.error('Error updating user:', err)
      })
  }

  const formatDisplayDate = (isoDate) => {
    if (!isoDate) return ''
    const dateObj = new Date(isoDate)
    return dateObj.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[#FF5A60] rounded-2xl shadow-2xl space-y-6 max-w-xl mx-auto">
      {/* Profile Picture */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto drop-shadow-lg">
        <img
          src={image}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white rounded-full p-1 cursor-pointer">
          <MdPhotoCamera className="text-lg sm:text-xl" />
        </div>
        {/* {editMode && (
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            className="w-full text-sm text-gray-800 h-10 px-3 mt-2 rounded border border-gray-400"
          />
        )} */}
      </div>

      {/* User Info */}
      <div className="bg-[#FFE2CE] px-4 sm:px-6 py-6 sm:py-8 rounded-xl shadow-lg space-y-4">
        {/* Name */}
        <div className="flex sm:flex-row sm:items-center justify-between gap-2">
          <div className="w-full sm:w-auto">
            {editMode ? (
              <>
                <label className="text-lg font-medium text-gray-700 mr-2">Name:</label>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    className="w-full sm:w-52 text-lg font-semibold text-black h-10 px-3 rounded border border-gray-400"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="w-full sm:w-52 text-lg font-semibold text-black h-10 px-3 rounded border border-gray-400"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                </div>
              </>
            ) : (
              <div>
                <label className="text-md font-semibold text-black mr-2">Name:</label>
                <div className="flex gap-2">
                  {firstName && (
                    <h1 className="text-xl font-semibold text-gray-600">
                      {firstName.toUpperCase()}
                    </h1>
                  )}
                  {lastName && (
                    <h1 className="text-xl font-semibold text-gray-600">
                      {lastName.toUpperCase()}
                    </h1>
                  )}
                </div>
              </div>
            )}
          </div>
          <button
            className="flex items-center cursor-pointer gap-1 text-sm sm:text-base text-black hover:text-gray-700 transition"
            onClick={() => (editMode ? handleSave() : setEditMode(true))}
          >
            <MdEdit className="text-lg" />
            {editMode ? 'Save' : 'Edit'}
          </button>
        </div>

        <div className="border-t border-gray-400" />

        {/* Phone Number */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="w-full ">
            <h2 className="text-sm font-semibold text-black">Phone Number:</h2>
            {editMode ? (
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-sm text-gray-800 h-10 px-3 rounded border border-gray-400"
              />
            ) : (
              <span className="text-sm text-gray-600">{phone}</span>
            )}
          </div>
        </div>

        <div className="border-t border-gray-400" />

        {/* Email ID */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="w-full ">
            <h2 className="text-sm font-semibold text-black">Email ID:</h2>
            {editMode ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-sm text-gray-800 h-10 px-3 rounded border border-gray-400"
              />
            ) : (
              <span className="text-sm text-gray-600">{email}</span>
            )}
          </div>
        </div>

        <div className="border-t border-gray-400" />

        {/* DOB & Gender */}
        <div className="flex  sm:flex-row sm:items-center justify-between gap-4">
  {/* Date of Birth */}
  <div className="w-full sm:w-1/2">
    <h2 className="text-sm font-semibold text-black">Date of Birth:</h2>
    {editMode ? (
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full text-sm text-gray-800 h-10 px-3 rounded border border-gray-400"
      />
    ) : (
      <span className="text-sm text-gray-600">
        {date ? formatDisplayDate(date) : "Not set"}
      </span>
    )}
  </div>

  {/* Gender */}
  <div className="w-full sm:w-1/2">
    <h2 className="text-sm font-semibold text-black">Gender:</h2>
    {editMode ? (
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="w-full text-sm text-gray-800 h-10 px-3 rounded border border-gray-400"
      >
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    ) : (
      <span className="text-sm text-gray-600">{gender || "Not set"}</span>
    )}
  </div>
</div>

      </div>
    </div>
  )
}

export default ProfileOne
