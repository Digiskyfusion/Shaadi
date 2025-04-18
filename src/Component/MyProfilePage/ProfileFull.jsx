import React from 'react'
import ProfileOne from './ProfileOne'
import ProfileTwo from './ProfileTwo'
import ProfileThree from './ProfileThree'
import ProfileFour from './ProfileFour'

function ProfileFull() {
  return (
    <div className="py-6 bg-[#FFCCA8]">
      
      {/* Main layout: ProfileOne on left, rest on right */}
      <div className="md:flex md:gap-6 w-full max-w-7xl mx-auto">
        
        {/* Left Side */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <ProfileOne />
        </div>

        {/* Right Side */}
        <div className="md:w-2/3 space-y-6">
          
          {/* Top card */}
          <div>
          <ProfileFour />
           
          </div>

          {/* Bottom section: Two cards side by side */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <ProfileThree />
            </div>
            <div className="flex-1">
            <ProfileTwo />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProfileFull
