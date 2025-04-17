import React from 'react';

function Matches({ data }) {
  return (
    <div className="p-4 bg-[#FFE7D6] max-w-md border-2 border-gray-500 w-full mb-10 md:mb-0 rounded-lg shadow space-y-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center  bg-white/30 p-3 rounded-md"
        >
          <div className="flex items-center gap-3">
            <img
              src={item.img}
              alt="match"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h2 className="font-medium text-sm">{item.name || "Manisha"}</h2>
              <p className="text-xs text-gray-700  ">{item.details}</p>
            </div>
          </div>

          <button
            aria-label={index % 2 === 0 ? "Accept" : "Reject"}
            className={`w-7 h-7 flex items-center justify-center rounded-full shadow 
              ${index % 2 === 0 ? 'bg-green-100 hover:bg-green-200' : 'bg-red-100 hover:bg-red-200'}`}
          >
            {index % 2 === 0 ? '✅' : '❌'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Matches;
