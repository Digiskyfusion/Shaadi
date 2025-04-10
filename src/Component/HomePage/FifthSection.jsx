import React from 'react';

function FifthSection() {
  const plans = [
    {
      name: 'Gold',
      duration: '3 Months (Most Popular)',
      price: '₹3499',
      monthly: '₹1166 per month',
      features: [
        'Send unlimited Messages',
        'View upto 150 contact Numbers',
        'Standout from other profiles',
      ],
    },
    {
      name: 'Diamond',
      duration: '6 Months',
      price: '₹5999',
      monthly: '₹999 per month',
      features: [
        'Send unlimited Messages',
        'View upto 300 contact Numbers',
        'Get priority customer support',
      ],
    },
    {
      name: 'Platinum',
      duration: '12 Months',
      price: '₹8999',
      monthly: '₹749 per month',
      features: [
        'Send unlimited Messages',
        'View unlimited contact Numbers',
        'Profile gets top placement',
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-1">{plan.name}</h2>
            <p className="text-gray-600 mb-2">{plan.duration}</p>
            <p className="text-3xl font-bold text-black">{plan.price}</p>
            <p className="text-gray-500 mb-4">{plan.monthly}</p>

            <button className="bg-black text-white px-5 py-2 rounded-full mb-4 ">
              Continue
            </button>

            <ul className="text-left text-sm text-gray-700 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FifthSection;
