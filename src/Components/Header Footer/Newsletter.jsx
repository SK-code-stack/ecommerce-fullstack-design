import React from 'react'

export default function Newsletter() {
  return (
    <>

    <div className=" w-full  flex justify-center bg-gray-300">

        <div className="my-9 text-center">

            <h3 className=''>Subscribe on our newsletter</h3>
            <p>Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className="lg:flex flex-none items-center justify-center">
                <input type="email" placeholder='Email' className='bg-white lg:w-60   h-10 pl-2 rounded-md ' />
                <button className='btn btn-primary btn-hug m-2 h-10'>Suscribe</button>
            </div>

        </div>

    </div>

    </>
  )
}
