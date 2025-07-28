import React, { useEffect, useState } from 'react';
import api from '../Api'
export default function DealsOffers() {

const [dealProduct, setdealProduct] =useState([])

// api for deals and offer section
useEffect(()=>{
  api.get('home-deals')
  .then((res)=>{
    console.log(res.data)
    // console.log(dealProduct)
  })
  .catch((err)=>{
    console.log("this is error: ",err.message)
  })
},[])


  return (
    <div className="lg:mx-[9%] lg:w-[82%] bg-white lg:rounded-xl  lg:border-2 lg:border-gray-300 md:w-full md:mx-0 md:rounded-none md:border-none md:my-1 ">
      <div className="flex flex-col lg:flex-row gap-4">
        
        {/* Timer Section */}
        <div className=" shrink-0 p-4   ">
          <div className="lg:flex-col flex  justify-between">
          <div className=''> 
            <h4 className="text-lg md:text-sm font-semibold">Deals and offers</h4>
            <p className="text-gray-500 mb-3">Hygiene equipments</p>
          </div>

          <div className="flex gap-2  ">
            {['Days', 'Hour', 'Min', 'Sec'].map((label, i) => (
              <div
              key={i}
              className="lg:rounded-xl lg:bg-gray-800 bg-gray-200 text-center lg:text-white text-gray-500 h-14 w-14  text-xs flex flex-col justify-center "
              >
                <p className="font-bold text-sm m-2">04 <br /> {label}</p>
              </div>
            ))}
            </div>
          </div>
        </div>

          {/* Cards Section */}
          <div className="w-full lg:w-4/5 overflow-x-auto overflow-y-hidden">
            <div className="flex gap-0 flex-nowrap px-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-gray-300 min-w-1/5 w-40   h-[240px] flex-shrink-0"
                >
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
