import React from 'react'
import { Check } from 'lucide-react'

function FeesCharge() {
  return (
    <div className="bg-white py-12 px-4 flex flex-col items-center">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#EB5757] mb-6 text-center tracking-tight leading-tight">
        Find Love for Less 💕
      </h1>
      <p className="text-gray-600 text-lg text-center max-w-md mb-10">
        Join our Silver Plan for just ₹99 and unlock the features you need to make meaningful connections.
      </p>

      {/* Pricing Card */}
      <div className="max-w-sm w-full bg-white rounded-3xl shadow-xl border border-[#ffdad9] p-8 text-center hover:shadow-2xl hover:bg-[#EB5757] hover:text-white transition-all duration-300">
        <h2 className="text-2xl font-bold mb-1">Silver Plan</h2>
        <h3 className="text-4xl font-bold mb-4 text-black group-hover:text-white transition-all duration-300">
          ₹99
        </h3>

        <button className="bg-black text-white font-semibold py-2 px-6 rounded-full mb-6 hover:bg-white hover:text-black transition duration-300">
          Get Started
        </button>

        <ul className="text-left space-y-4 text-base">
          <li className="flex items-center gap-3">
            <Check className="text-green-500 w-6 h-6" />
            Unlimited messaging across profiles
          </li>
          <li className="flex items-center gap-3">
            <Check className="text-green-500 w-6 h-6" />
            View high-resolution profile photos
          </li>
          <li className="flex items-center gap-3">
            <Check className="text-green-500 w-6 h-6" />
            Valid for 30 days from date of purchase
          </li>
          <li className="flex items-center gap-3">
            <Check className="text-green-500 w-6 h-6" />
            Access basic matchmaking filters
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FeesCharge
