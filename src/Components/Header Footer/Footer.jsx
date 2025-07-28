import React from 'react'
import logo from '../../assets/HeaderImages/logo.png';
import facebook from '../../assets/social/facebook.svg';
import twitter from '../../assets/social/twitter.svg';
import linkedin from '../../assets/social/linkedin.svg';
import insta from '../../assets/social/insta.svg';
import youtube from '../../assets/social/youtube.svg';
import googleplay from '../../assets/social/googleplay.png';
import appstore from '../../assets/social/appstore.png';


export default function Footer() {
  return (
    <>
    <footer className="bg-white w-full h-80 overflow-hidden">

    {/* top div */}

        <div className='flex px-32 py-10 justify-between'>
            <div className="h-40">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <p className='w-2xs mt-4'>
                Best information about the company gies here but now lorem ipsum is
                </p>
                <div className="icons flex gap-3">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={insta} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div>


            <div className="">
                <p className='font-bold'>About</p>
                <p className='text-gray-500 no-underline'>About Us</p>
                <p className='text-gray-500 no-underline'>Find store</p>
                <p className='text-gray-500 no-underline'>Find store</p>
                <p className='text-gray-500 no-underline'>Categories</p>
                <p className='text-gray-500 no-underline'>Blogs</p>
            </div>
            <div className="">
                <p className='font-bold'>Partnership</p>
                <p className='text-gray-500 no-underline'>About Us</p>
                <p className='text-gray-500 no-underline'>Find store</p>
                <p className='text-gray-500 no-underline'>Find store</p>
                <p className='text-gray-500 no-underline'>Categories</p>
                <p className='text-gray-500 no-underline'>Blogs</p>
            </div>
            <div className="">
                <p className='font-bold'>Information</p>
                <p className='text-gray-500 no-underline'>Help Center</p>
                <p className='text-gray-500 no-underline'>Money Refund</p>
                <p className='text-gray-500 no-underline'>Shipping</p>
                <p className='text-gray-500 no-underline'>Contact us</p>
            </div>
            <div className="">
                <p className='font-bold'>For users</p>
                <p className='text-gray-500 no-underline'>About Us</p>
                <p className='text-gray-500 no-underline'>Login</p>
                <p className='text-gray-500 no-underline'>Register</p>
                <p className='text-gray-500 no-underline'>Settings</p>
                <p className='text-gray-500 no-underline'>My Order</p>
            </div>
            <div className="">
                <p className='font-bold'>Get app</p>

                <img src={googleplay} alt="" className='my-4'/>
                <img src={appstore} alt="" />
                
                
            </div>
        </div>

{/* bottom din */}


        <div className="w-full h-16 bg-gray-200 flex justify-between px-32 items-center">
        <div className="flex items-center h-full">
            <p className="m-0 leading-none">© 2023 Ecommerce</p>
        </div>
        <div>
            <select name="language" id="" className="h-8 px-2 rounded">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            </select>
        </div>
        </div>

    </footer>


    
    </>
  )
}
