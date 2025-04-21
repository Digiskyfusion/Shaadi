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
        'View upto 150 contact Numbers',
        'Standout from other profiles',
      ],
    },
    {
      name: 'Diamond',
      duration: '6 Months',
      price: '₹5499',
      monthly: '₹916 per month',
      features: [
        'Send unlimited Messages',
        'View upto 300 contact Numbers',
        'Standout from other profiles',
        'Lets matches contact you directly',
      ],
    },
    {
      name: 'Platinum',
      duration: '12 Months',
      price: '₹10499',
      monthly: '₹874 per month',
      features: [
        'Send unlimited Messages',
        'View upto 600 contact Numbers',
        'Standout from other profiles',
        'Lets matches contact you directly',
      ],
    },
  ];
  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-10">

   
    <h1 className="text-3xl sm:text-4xl md:text-5xl ml-90 text-black gilda-display-regular">
    Upgrade to Prem
            <span className="relative inline-block">
              <span className="inline-block">
                <svg className="w-[10px] h-[13px] md:h-[24px] lg:w-[10px] lg:h-[24px]" viewBox="0 0 6 100" xmlns="http://www.w3.org/2000/svg">
                  <line x1="3" y1="0" x2="3" y2="100" stroke="black" strokeWidth="17" />
                </svg>
              </span>
              <span className="absolute top-[-12px] sm:top-[-15px] left-1/2 transform -translate-x-1/2 text-red-500 text-lg">
                ❤️
              </span>
            </span>
            um & Unlock 
            <h1 className='ml-30'>  Exclusive Features</h1>
          
          </h1>
    
    
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 p-6 relative jost">
  {plans.map((plan, index) => (
    <div
      key={index}
      className="bg-[#E8E0D5] rounded-xl shadow-black p-6 flex flex-col items-center text-center 
                 hover:shadow hover:bg-[#EB5757] hover:text-white 
                 transition-transform transform hover:scale-105 border border-black group"
    >
      <h2 className="text-3xl font-semibold mb-6">
        {plan.name}{' '}
        <span className="text-gray-950 group-hover:text-white font-normal text-xl">
          {plan.duration}
        </span>
      </h2>

      <p className="text-3xl font-bold text-black group-hover:text-white mb-1">{plan.price}</p>
      <p className="text-black group-hover:text-white mb-5">{plan.monthly}</p>

      <button className="bg-black text-white px-6 py-2 rounded-full mb-6 hover:bg-gray-800">
        Continue
      </button>

      <ul className="text-left font-light text-black group-hover:text-white space-y-6">
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
}

export default FifthSection;
