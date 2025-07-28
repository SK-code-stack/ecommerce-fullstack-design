import React from 'react'

export default function Newsletter() {
  return (
    <>

    <div className="h-48 w-full  flex justify-center">

        <div className="my-9 text-center">

            <h3 className=''>Subscribe on our newsletter</h3>
            <p>Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className="flex items-center justify-center">
                <input type="email" placeholder='Email' className='bg-white w-60 h-10 pl-2 rounded-md' />
                <button className='btn btn-primary btn-hug m-2 h-10'>Suscribe</button>
            </div>

        </div>

    </div>

    </>
  )
}
