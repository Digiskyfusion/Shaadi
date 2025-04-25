import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdPhotoCamera, MdEdit } from 'react-icons/md'

function ProfileOne() {
  const [user, setUser] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [editedFirstName, setEditedFirstName] = useState('')
  const [editedLastName, setEditedLastName] = useState('')
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'))
    const id = userProfile?._id
    setUserId(id)

    if (id) {
      axios.get(`http://localhost:3000/user/${id}`)
        .then(res => {
          setUser(res.data.user)
          // console.log(res.data.user);
          setEditedFirstName(res.data.user.firstName || '')
          setEditedLastName(res.data.user.lastName || '')
        })
        .catch(err => {
          console.error("Error fetching user:", err)
        })
    }
  }, [])

  const handleSave = () => {
    axios.put(`http://localhost:3000/api/user/updateuser/${userId}`, {
      firstName: editedFirstName,
      lastName: editedLastName
    })
      .then(() => {
        setUser(prev => ({
          ...prev,
          firstName: editedFirstName,
          lastName: editedLastName
        }))
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
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white rounded-full p-1 cursor-pointer ">
          <MdPhotoCamera className="text-lg sm:text-xl" />
        </div>
      </div>

      {/* User Info */}
      <div className="bg-[#FFE2CE] px-4 sm:px-6 py-6 sm:py-8 rounded-xl shadow-lg space-y-6">
        <div className="flex  sm:flex-row sm:items-center justify-between gap-2">
          <div className="w-full sm:w-auto">
          
            {editMode ? (
              <>
              <label className="text-lg font-medium text-gray-700 mr-2">Name:</label>
             
              <div className="flex flex-col  gap-2">
                <input
                  type="text"
                  className="w-full sm:w-52 text-lg font-semibold text-black px-3 py-2 rounded border border-gray-400"
                  value={editedFirstName}
                  onChange={(e) => setEditedFirstName(e.target.value)}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="w-full sm:w-52 text-lg font-semibold text-black px-3 py-2 rounded border border-gray-400"
                  value={editedLastName}
                  onChange={(e) => setEditedLastName(e.target.value)}
                  placeholder="Last Name"
                />
              </div>
              </>
            ) : (
              <div className="">
            <label className="text-md font-semibold text-black mr-2">Name:</label>
            <div className="flex gap-2">
              <h1 className="text-xl sm:text-xl font-semibold text-gray-600">
                {(user?.firstName?.toUpperCase()) || "First Name"}
              </h1>
              <h1 className="text-xl sm:text-xl font-semibold text-gray-600">
                {(user?.lastName?.toUpperCase()) || "Last Name"}
              </h1>
            </div>
          </div>

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
            <h2 className="text-sm font-semibold text-black">Phone Number:</h2>
            <span className="text-sm text-gray-600">{user?.mobileNumber || "Phone Number"}</span>
          </div>
        </div>

        <div className="border-t border-gray-400" />

        {/* Email ID */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-sm font-semibold text-black">Email ID:</h2>
            <span className="text-sm text-gray-600">{user?.emailId || "Email ID"}</span>
          </div>
        </div>

        <div className="border-t border-gray-400" />
      </div>
    </div>
  )
}

export default ProfileOne
