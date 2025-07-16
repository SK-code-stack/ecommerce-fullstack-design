import React from 'react'
import profilepic from '../../assets/social/photo.png';


export default function Section_Main() {
  return (
    <>
    
    <div className='flex mx-[9%] my-4 rounded-lg justify-center p-4 w-auto h-auto bg-white border-gray-300 border-[1px]'>
        {/* catagories */}
        <div className=' '>
                <p className='w-[200px] hover:bg-[#E5F1FF] hover:font-bold hover:text-black rounded-sm px-1'><a className='  ' href="">Automobiles</a></p>
                <p className='w-[200px] hover:bg-[#E5F1FF] hover:font-bold hover:text-black rounded-sm px-1'><a className='  ' href="">Clothes and wear</a></p>
                <p className='w-[200px] hover:bg-[#E5F1FF] hover:font-bold hover:text-black rounded-sm px-1'><a className='  ' href="">Home interiors</a></p>
                <p className='w-[200px] hover:bg-[#E5F1FF] hover:font-bold hover:text-black rounded-sm px-1'><a className='  ' href="">Computer and tech</a></p>
                <p className='w-[200px] hover:bg-[#E5F1FF] hover:font-bold hover:text-black rounded-sm px-1'><a className='  ' href="">Tools, equipments</a></p>
                <p className='w-[200px] hover:bg-[#E5F1FF] hover:font-bold hover:text-black rounded-sm px-1'><a className='  ' href="">Sports and outdoor</a></p>
                <p className='w-[200px] hover:bg-[#E5F1FF] hover:font-bold hover:text-black rounded-sm px-1'><a className='  ' href="">Animal and pets</a></p>
                <p className='w-[200px] hover:bg-[#E5F1FF] hover:font-bold hover:text-black rounded-sm px-1'><a className='  ' href="">Machinery tools</a></p>
                <p className='w-[200px] hover:bg-[#E5F1FF] hover:font-bold hover:text-black rounded-sm px-1'><a className='  ' href="">More category</a></p>
        </div>

        {/* bg image */}
        <div className='section_main w-1/2 bg-red-500 mx-4 p-4'>
                <h4 className='text-2xl '>Latest trending</h4>
                <h2 className='font-bold text-2xl'>Electronic items</h2>
                <button className='btn btn-light'>Learn more</button>

        </div>

        {/*login*/}
        <div className=' w-1/4 '>

                <div className="bg-[#E3F0FF] p-2 rounded-xl">
                        <div className="flex    ">
                                <div className='flex justify-center items-center mr-3 '>
                                        <img src={profilepic} alt="" className='bg-[#91B1E7] rounded-full h-10 w-10'/>
                                </div>
                                <div className="flex justify-center">
                                        <p>Hi, user <br /> lets get stated</p>
                                </div>
                        </div>
                        <div className="flex justify-center items-center p-1 ">
                                <button className='btn btn-primary w-full '>Join now</button> 
                        </div>
                        <div className="flex justify-center items-center p-1 ">
                                <button className='btn btn-light w-full'>Log in</button>
                        </div>
                </div>

                <div className="flex px-2 py-4 bg-[#F38332] my-2 rounded-xl">
                        <h6>Get US $10 off with a new supplier</h6>
                </div>
                <div className="flex px-2 py-4 bg-[#55BDC3] rounded-xl">
                        <h6>Send quotes with supplier preferences</h6>
                </div>

        </div>

    </div>
    
    
    </>
  )
}
