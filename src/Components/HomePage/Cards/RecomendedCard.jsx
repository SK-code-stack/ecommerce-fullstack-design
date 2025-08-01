import React from 'react'

export default function RecomendedCard({product, title}) {
  return (
    <>
    <div className="lg:mx-[9%] lg:w-[82%] lg:rounded-xl   md:w-full md:mx-0 md:rounded-none md:border-none md:my-1  p-2">
    <h4>{title}</h4>
        {/* recomended card */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 w-full">
                {product.map((item, i) => (
                    <div
                    key={i}
                    className="bg-white rounded-xl border-1 border-gray-300 p-2   "
                    >
                        <div className="w-auto h-1/2 flex justify-center ">
                            <img
                            src={item.product[item.product.main_image]}
                            alt={item.product.name}
                            className="w-40 h-40 object-contain "
                            />
                        </div>
                        <div className='mt-8 p-2 h-1/2 '>
                            <h6 className=''>{`$ ${item.product.price}`}</h6>
                            <h6 className='h6text '>{item.product.name}</h6>
                        </div>
                    
                    </div>
                ))}
            </div>




            

    </div>
    
    
    </>
  )
}
