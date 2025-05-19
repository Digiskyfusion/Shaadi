import React from 'react';

const FifthSection = () => {
  const plans = [
    {
      name: 'Gold',
      duration: '3 Months',
      price: '₹3499',
      monthly: '₹1166 per month',
      features: [
        'Send unlimited Messages',
        'View up to 150 contact numbers',
        'Stand out from other profiles',
      ],
    },
    {
      name: 'Diamond',
      duration: '6 Months',
      price: '₹5499',
      monthly: '₹916 per month',
      features: [
        'Send unlimited Messages',
        'View up to 300 contact numbers',
        'Stand out from other profiles',
        'Let matches contact you directly',
      ],
    },
    {
      name: 'Platinum',
      duration: '12 Months',
      price: '₹10499',
      monthly: '₹874 per month',
      features: [
        'Send unlimited Messages',
        'View up to 600 contact numbers',
        'Stand out from other profiles',
        'Let matches contact you directly',
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-10">
      {/* Title Section */}
      <div className="text-center mb-10 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black gilda-display-regular leading-tight">
          Upgrade to Prem
          <span className="relative inline-block mx-[1px] align-middle">
            <svg
              className="w-[8px] h-[12px] sm:h-[18px] md:h-[18px]"
              viewBox="0 0 6 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="3" y1="0" x2="3" y2="100" stroke="black" strokeWidth="16" />
            </svg>
            <span className="absolute top-[-23px] sm:top-[-20px] md:top-[-25px] left-1/2 transform -translate-x-1/2 text-red-500 text-base sm:text-lg">
              ❤️
            </span>
          </span>
          um & Unlock
        </h1>
        <h2 className="text-lg sm:text-xl mt-2 text-gray-700">Exclusive Features</h2>
      </div>

      {/* Plans Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 jost px-2">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md shadow-black/30 p-6 flex flex-col items-center text-center
              hover:shadow-lg hover:bg-[#EB5757] hover:text-white transition-all duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              {plan.name}{' '}
              <span className="text-gray-900 group-hover:text-white text-sm sm:text-base font-normal">
                {plan.duration}
              </span>
            </h2>

            <p className="text-2xl sm:text-3xl font-bold text-black group-hover:text-white mb-1">
              {plan.price}
            </p>
            <p className="text-sm sm:text-base text-black group-hover:text-white mb-4">{plan.monthly}</p>

            <button className="bg-black text-white px-6 py-2 rounded-full mb-5 hover:bg-gray-800 text-sm sm:text-base">
              Continue
            </button>

            <ul className="text-left font-light text-black group-hover:text-white space-y-3 text-sm sm:text-base">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5 group-hover:text-white">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FifthSection;
