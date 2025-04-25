import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dash from '../../assets/Images/Dash.png'
import { MdPhotoCamera, MdEdit } from 'react-icons/md'

function ProfileOne() {
  const [user, setUser] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [editedName, setEditedName] = useState('')
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'))
    const id = userProfile?._id
    setUserId(id)

    if (id) {
      axios.get(`http://localhost:3000/api/user/getuser/${id}`)
        .then(res => {
          setUser(res.data)
          console.log(res.data);
          
          setEditedName(res.data.name)
        })
        .catch(err => {
          console.error("Error fetching user:", err)
        })
    }
  }, [])

  const handleSave = () => {
    axios.put(`http://localhost:3000/api/user/updateuser/${userId}`, { name: editedName })
      .then(() => {
        setUser(prev => ({ ...prev, name: editedName }))
        setEditMode(false)
      })
      .catch(err => {
        console.error("Error updating name:", err)
      })
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[#FF5A60] rounded-2xl shadow-2xl space-y-6 max-w-xl mx-auto">
      {/* Profile Picture */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto drop-shadow-lg">
        <img
          src={user?.profileImage}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white rounded-full p-1 cursor-pointer hover:scale-110 transition duration-300">
          <MdPhotoCamera className="text-lg sm:text-xl" />
        </div>
      </div>

      {/* User Info */}
      <div className="bg-[#FFE2CE] px-4 sm:px-6 py-6 sm:py-8 rounded-xl shadow-lg space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="w-full sm:w-auto">
            {editMode ? (
              <input
                type="text"
                className="w-full sm:w-52 text-lg sm:text-xl font-semibold text-black px-3 py-2 rounded border border-gray-400"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            ) : (
              <h1 className="text-xl sm:text-2xl font-semibold text-black">{(user?.name?.toUpperCase()) || "Name"}</h1>
            )}
          </div>
          <button
            className="flex items-center cursor-pointer gap-1 text-sm sm:text-base text-black hover:text-gray-700 transition"
            onClick={() => {
              editMode ? handleSave() : setEditMode(true)
            }}
          >
            <MdEdit className="text-lg" />
            {editMode ? 'Save' : 'Edit'}
          </button>
        </div>

        <div className="border-t border-gray-400" />

        {/* Phone Number */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-sm font-semibold text-black">Phone Number</h2>
            <span className="text-sm text-gray-600">{user?.phonenumber || "Phone Number"}</span>
          </div>
        </div>

        <div className="border-t border-gray-400" />

        {/* Email ID */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-sm font-semibold text-black">Email ID</h2>
            <span className="text-sm text-gray-600">{user?.emailId || "Email ID"}</span>
          </div>
        </div>

        <div className="border-t border-gray-400" />
      </div>
    </div>
  )
}

export default ProfileOne
