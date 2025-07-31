import React from 'react'
import star from "../../assets/social/star.png";
import blankStar from "../../assets/social/blankStar.png";
export default function ProductCard({product, grid}) {
  return (
    <>
<div
      className={`bg-white p-4 rounded-md shadow-md gap-4 ${
        grid === 1 ? "flex flex-row" : "flex flex-col"
      }`}
    >
      {/* Image section */}
      <div className={`${grid === 1 ? "w-1/6" : "w-full h-full flex justify-center items-center  "}`}>
        <div className={`${grid === 1 ? "w-full" : "w-1/2"}`}>
            <img
            src={product[product.main_image]}
            alt={product.name}
            className="object-cover rounded-md"
            />
          </div>
      </div>

      {/* Text content */}
      <div className={`${grid === 1 ? "w-2/3" : "w-full"} flex flex-col justify-center`}>
        <h5 className="text-lg font-semibold">{product.name}</h5>
        {/* price and dicscounted price */}
            {product.discounted_price && product.discounted_price !== product.price ? (
            <p className="text-xl font-bold">
                <span className="">${product.discounted_price}</span>
                {" "}
                <del className="text-gray-500 text-sm">${product.price}</del>
            </p>
            ) : (
            <p className="text-xl font-bold">${product.price}</p>
            )}  
        {/* ratting stars */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={index < Math.round(product.rating_count) ? star : blankStar}
              alt="star"
              className="w-4 h-4"
            />
          ))}
          <div className="flex items-center gap-2 text-sm">
              <span className="text-orange-500">{product.rating_count}</span>
              <span className="font-bold text-gray-500">•</span>
              <span className="text-gray-500">154 orders</span>
              <span className="font-bold text-gray-500">•</span>
              <span className="text-green-500 font-bold">Free Shipping</span>
          </div>

        </div>

        {/* Description */}      
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-sm text-blue-600 font-bold">View details</p>
    </div>
    </div>
    </>
  )
}
