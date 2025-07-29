import React from 'react'
import building from '../../assets/backgrounds/building.png'

export default function SectionInquiry() {
  return (
    <>
    <div 
    className="lg:mx-[9%] lg:w-[82%]  bg-white lg:rounded-xl lg:mt-3 lg:border-2 lg:border-black md:w-full md:mx-0 md:rounded-none md:border-none md:my-1 overflow-scroll shadow bg-cover bg-no-repeat"
    style={{backgroundImage:  `url(${building})`}}
    >

    <div className="flex justify-end w-full h-full">
        <div className="text-white p-4 lg:w-1/2 w-full">
            <h2>An easy way to send requests to all suppliers</h2>
            <p className='lg:block hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            {/* button for small screen */}
            <button className='btn btn-primary mt-2'>Send inquiry</button>


        </div>

        <div className=" flex justify-center items-center w-1/2 p-4">

            <form 
            action=""
            method=""
            className='bg-white m-4 w-4/5 h-full rounded-xl p-4 lg:block hidden'>
                <h4 className=''>Send quote to suppliers</h4>
                <input 
                type="text" 
                placeholder='What item you need?'
                className='border-1 border-gray-400 w-full p-2 rounded-xl placeholder-black my-3' />
                <textarea
                name="quiry"
                id="quiry"
                placeholder="Type more details"
                className="w-full p-2 border border-gray-400 rounded-xl"
                />
                <div className="flex my-3">
                    <div className="w-1/2 border border-gray-400 p-1 rounded mr-1">Quantity</div>
                    <div className=" border border-gray-400 p-1 rounded">
                        <select name="counter" id="">
                            <option value="" >Pcs</option>
                            <option value="1" >1</option>
                            <option value="2" >2</option>
                        </select>
                    </div>
                </div>

                <button className='btn btn-primary mt-2'>Send inquiry</button>



            </form>

        </div>



    </div>

        
    </div>
    </>
  )
}
