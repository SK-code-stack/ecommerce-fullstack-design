import React from 'react';
import logo from '../../assets/HeaderImages/logo.png';
import { Link } from 'react-router-dom';

export default function Header({showSearch =true}) {
  return (
    <header id='nav' className='h-[86px] w-full flex items-center px-[9%] bg-[#FFFFFF] justify-between '>
      {/* Left: Logo and Brand Name */}
      <div className='flex items-center'>
        <Link
          to="/"
           > 
          <img src={logo} alt="Logo" className='' />
        </Link>
      </div>

      {/* Center: Search Bar */}
      {showSearch && (

        <div className='flex border-[2px] border-primary rounded-[5px] overflow-hidden'>
            <input
            type='text'
            className=' w-[420px] h-[40px] px-2 outline-none'
            placeholder='Search'
            />
            <select className='w-[145px] h-[40px] border-l-2 border-primary outline-none text-gray-700'>
              <option>All category</option>
              <option>Books</option>
              <option>Electronics</option>
            </select>
            <button className='bg-blue-600 text-white px-4 h-[40px]'>Search</button>
        </div>
        )}

      {/* Right: Icons and Links */}
      <div className='flex items-center gap-6 text-gray-500 text-sm'>
        <div className='flex flex-col items-center'>
          <i className="fas fa-user"></i>
          <span>Profile</span>
        </div>
        <div className='flex flex-col items-center'>
          <i className="fas fa-envelope"></i>
          <span>Message</span>
        </div>
        <div className='flex flex-col items-center'>
          <i className="fas fa-heart"></i>
          <span>Orders</span>
        </div>
        <div className='flex flex-col items-center'>
          <i className="fas fa-shopping-cart"></i>
          <span>My cart</span>
        </div>
      </div>
    </header>
  );
}
