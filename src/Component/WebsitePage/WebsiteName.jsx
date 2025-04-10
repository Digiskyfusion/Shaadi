import React from "react";

const features = [
  {
    icon: <span className="text-2xl sm:text-3xl">⭐</span>,
    title: "A New Era of Matchmaking",
    description:
      "Modern matchmaking designed for serious relationships and meaningful connections.",
  },
  {
    icon: <span className="text-2xl sm:text-3xl">❤️</span>,
    title: "Find Your Perfect Match",
    description:
      "Advanced algorithms and personalized recommendations to help you connect with like-minded individuals.",
  },
  {
    icon: <span className="text-xl sm:text-2xl">🔒</span>,
    title: "Your Privacy, Our Priority",
    description:
      "Full control over your profile, photos, and conversations—your data stays secure.",
  },
  {
    icon: <span className="text-xl sm:text-2xl">✅</span>,
    title: "Verified & Secure",
    description:
      "AI-powered verification and strict security measures to ensure a genuine matchmaking experience.",
  },
];

function WebsiteName() {
  return (
    <div className="bg-[#DE5353] text-white py-2 px-4 sm:px-6 md:px-10 text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-1">
        Why Register on Website Name?
      </h2>
      <div className="w-20 sm:w-28 h-1 bg-white mx-auto mb-4"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-white rounded-xl p-4 sm:p-5 flex flex-col items-center text-center gap-2"
          >
            <div className="bg-[#F7D7D7] p-3 sm:p-4 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-base sm:text-lg font-semibold">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base font-normal">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebsiteName;
