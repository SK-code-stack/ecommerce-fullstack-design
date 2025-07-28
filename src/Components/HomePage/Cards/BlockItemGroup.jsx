import React, { useState } from 'react';

export default function BlockItemGroup({titleleft, leftImage, product}) {


  return (
    <>
      <div className="lg:mx-[9%] lg:w-[82%] bg-white lg:rounded-xl lg:mt-3 lg:border-2 lg:border-gray-300 md:w-full md:mx-0 md:rounded-none md:border-none md:my-1 overflow-scroll ">
        <div className="lg:flex">
          
          {/* Left Section */}
          <div
            className="w-1/3 h-auto p-4 bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat"
            style={{
              backgroundImage: window.innerWidth >= 1024 ? `url(${leftImage})` : 'none',
              backgroundColor: window.innerWidth < 1024 ? 'white' : undefined,
            }}
          >
            <div className="w-1/2">
              <h4 className="text-black">{titleleft}</h4>
              <button className="btn btn-light">Source now</button>
            </div>
          </div>



          {/* Cards Grid */}
            <div className="w-[80%] flex flex-wrap">
            {product.map((item, i) => (
              <div key={i} className="w-1/4 h-32 border border-gray-500 flex justify-between p-2">
                <div>
                  <h6 className='text-black'>{item.product.name}</h6>
                  <p className='text-sm text-gray-500'>from <br />USD {item.product.price}</p>
                </div>
                <div className="flex justify-end items-end w-1/3">
                  <img src={item.product[item.product.main_image]} alt={item.product.name} className="object-contain h-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
