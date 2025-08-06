import React from 'react';
import profilepic from '../../assets/social/photo.png';
import { Link } from 'react-router-dom';


export default function Section_Main() {
  return (
    <>
      <div className='lg:w-[82%] bg-white md:w-full  lg:border border-2 border-gray-300 lg:rounded-lg md:border-none  lg:mx-[9%] lg:my-4 shadow'>
        <div className="flex flex-col lg:flex-row p-2 mx-auto ">

          {/* Categories - Hidden on small screens */}
          <div className='hidden lg:block w-[200px]'>
            {[
              "Automobiles",
              "Clothes and ware",
              "Home interiors",
              "Computer and tech",
              "Tools, equipments",
              "Sports and outdoor",
              "Animal and pets",
              "Machinery tools",
              "More category"
            ].map((item, index) => (
              <p
                key={index}
                className='hover:bg-[#E5F1FF] hover:font-bold hover:text-black rounded-sm px-1 '
              >
                    <Link to={`/products?category=${encodeURIComponent(item)}`}>
                      {item}
                    </Link> 
              </p>  
            ))}
          </div>

          {/* Main Image Section - Always visible */}
          <div className='w-full lg:flex-1 section_main p-4'>
            <h4 className='text-2xl'>Latest trending</h4>
            <h2 className='font-bold text-2xl'>Electronic items</h2>
            <button className='btn btn-light mt-2'>Learn more</button>
          </div>

          {/* Login Section - Hidden on small screens */}
          <div className='hidden lg:flex w-[250px] ml-4 flex-col justify-between'>

                <div className="bg-[#E3F0FF] p-2 rounded-xl">
                <div className="flex">
                <div className='flex justify-center items-center mr-3'>
                <img src={profilepic} alt="Profile" className='bg-[#91B1E7] rounded-full h-10 w-10 p-1' />
                </div>
                <div className="flex justify-center">
                <p>Hi, user <br /> let's get started</p>
                </div>
                </div>
                <div className="flex justify-center items-center p-1">
                <button className='btn btn-primary w-full'>Join now</button>
                </div>
                <div className="flex justify-center items-center p-1">
                <Link to="/loginpage" className='btn btn-light w-full'>Log in</Link>
                </div>
                </div>

                <div className="bg-[#F38332] px-2 py-4 rounded-xl my-2">
                <h6>Get US $10 off with a new supplier</h6>
                </div>

                <div className="bg-[#55BDC3] px-2 py-4 rounded-xl">
                <h6>Send quotes with supplier preferences</h6>
                </div>

        </div>


        </div>
      </div>
    </>
  );
}
