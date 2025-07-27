import React from 'react';

export default function DealsOffers() {
  return (
    <div className="mx-[9%] lg:w-[82%]  bg-white rounded-xl  border-2 border-gray-300 md:w-full">
      <div className="flex flex-col lg:flex-row gap-4">
        
        {/* Timer Section */}
        <div className="w-full lg:w-1/5 shrink-0 p-4  md:justify-between ">
          <div>
            <h4 className="text-lg font-semibold">Deals and offers</h4>
            <p className="text-gray-500 mb-3">Hygiene equipments</p>
          </div>
          <div className="flex gap-2">
            {['Days', 'Hour', 'Min', 'Sec'].map((label, i) => (
              <div
                key={i}
                className="rounded-xl bg-gray-800 text-center text-white h-14 w-14  text-xs flex flex-col justify-center "
              >
                <p className="font-bold text-sm m-2">04 <br /> {label}</p>
              </div>
            ))}
          </div>
        </div>

          {/* Cards Section */}
          <div className="w-full lg:w-4/5">
            <div className="flex flex-wrap gap-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-gray-300 w-1/5 h-[240px] "
                >
                  {/* Example content */}
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Card {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>


      </div>
    </div>
  );
}
