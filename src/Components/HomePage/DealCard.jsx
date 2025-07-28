import React, { useEffect, useState } from 'react';
import BASE_URL from '../Api';
import { Bs0Circle } from 'react-icons/bs';

export default function DealCard({ deal }) {
  const getTimeLeft = (endTime) => {
    const total = new Date(endTime) - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(deal.deal_ends_at));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(deal.deal_ends_at));
    }, 1000);
    return () => clearInterval(interval);
  }, [deal.deal_ends_at]);

  return (
    <div className="lg:mx-[9%] lg:w-[82%] bg-white lg:rounded-xl  lg:border-2 lg:border-gray-300 md:w-full md:mx-0 md:rounded-none md:border-none md:my-1 ">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Timer Section */}
        <div className="shrink-0 p-4">
          <div className="lg:flex-col flex justify-between">
            <div>
              <h4 className="text-lg md:text-sm font-semibold">Deals and offers</h4>
              <p className="text-gray-500 mb-3">Hygiene equipments</p>
            </div>
            <div className="flex gap-2">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hour", value: timeLeft.hours },
                { label: "Min", value: timeLeft.minutes },
                { label: "Sec", value: timeLeft.seconds },
              ].map((item, i) => (
                <div
                  key={i}
                  className="lg:rounded-xl lg:bg-gray-800 bg-gray-200 text-center lg:text-white text-gray-500 h-14 w-14 text-xs flex flex-col justify-center "
                >
                  <p className="font-bold text-sm m-2">
                    {String(item.value).padStart(2, '0')} <br /> {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full lg:w-4/5 overflow-x-auto overflow-y-hidden">
          <div className="flex gap-0 flex-nowrap px-2">
            {deal.deal_products.map((item, i) => (
              <div
                key={i}
                className="border border-gray-300 min-w-1/5 w-40 h-[240px] flex-shrink-0"
              >
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <div className="h-36 w-36 flex justify-center items-center p-2">
                    <img
                      src={item.product[item.product.main_image]}
                      alt={item.product.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                    <div className="flex-row justify-center text-center mb-0">
                      <p className="text-center text-sm font-medium p-1 text-black">
                        {item.product.name}
                      </p>
                      <p className="text-center text-sm font-medium p-2 bg-[#FFE3E3] rounded-4xl text-[#EB001B]">
                        {item.discount_percentage}
                      </p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
