import React, { useState } from "react";
import star from "../../assets/social/star.png";
import blankStar from "../../assets/social/blankStar.png";
import Breadcrumb from "../Product listing/Breadcrumb";

const images = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5"];

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

    // ✅ Mock product data to avoid error
  const product = {
    rating_count: 4.2,
    reviews: 32,
    sold: 154,
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="flex p-1 lg:w-[82%] w-full mx-auto">
        <Breadcrumb />
      </div>

      {/* Main Product Detail Container */}
      <div className="flex flex-col lg:flex-row gap-8 p-6 border rounded-md shadow-md lg:w-[82%] w-full mx-auto bg-white">
        
        {/* Left: Image Preview */}
        <div className="flex-1 lg:w-[40%]">
          <div className="border lg:h-[70%]  flex items-center justify-center text-gray-700 text-lg font-semibold">
            {selectedImage}
          </div>
          <div className="flex gap-1 mt-4 justify-center">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`border px-1 py-1 text-sm ${
                  selectedImage === img ? "bg-gray-200" : ""
                }`}
              >
                {img}
              </button>
            ))}
          </div>
        </div>

        {/* Middle: Product Info */}
        <div className="flex-1 space-y-2 text-sm lg:w-[40%]">
          <p className="text-green-600 font-semibold">✔ In stock</p>
          <h4 className="text-xl font-semibold">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h4>
         <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={index < Math.round(product.rating_count) ? star : blankStar}
                alt="star"
                className="w-4 h-4"
              />
            ))}
            <span className="text-orange-500 font-semibold ml-2">{product.rating_count.toFixed(1)}</span>
            <span className="text-gray-400 text-sm ml-1">· {product.reviews} reviews · {product.sold} sold</span>
          </div>


          <div className="flex justify-around gap-1 bg-orange-50  p-1 rounded-md ">
            <p className="border-r-1 border-gray-400 h-full flex flex-col text-red-500 font-bold text-xl ">$98.00 <span className="text-xs text-gray-500">50-100 pcs</span></p>
            <p className="border-r-1 border-gray-400 h-full flex flex-col font-bold text-xl">$90.00 <span className="text-xs text-gray-500">100-700 pcs</span></p>
            <p className="h-full flex flex-col font-bold text-xl">$78.00 <span className="text-xs text-gray-500">700+ pcs</span></p>
          </div>

<div className="pt-2 text-sm">
  <div className="flex py-1">
    <strong className="text-gray-500 w-32">Price:</strong>
    <span>Negotiable</span>
  </div>
  <div className="flex py-1">
    <strong className="text-gray-500 w-32">Type:</strong>
    <span>Classic shoes</span>
  </div>
  <div className="flex py-1">
    <strong className="text-gray-500 w-32">Material:</strong>
    <span>Plastic material</span>
  </div>
  <div className="flex py-1 border-b border-gray-300">
    <strong className="text-gray-500 w-32">Design:</strong>
    <span>Modern nice</span>
  </div>
  <div className="flex py-1">
    <strong className="text-gray-500 w-32">Customization:</strong>
    <span>Customized logo and design</span>
  </div>
  <div className="flex py-1">
    <strong className="text-gray-500 w-32">Protection:</strong>
    <span>Refund Policy</span>
  </div>
  <div className="flex py-1 border-b border-gray-300">
    <strong className="text-gray-500 w-32">Warranty:</strong>
    <span>2 years full warranty</span>
  </div>
</div>


        </div>

        {/* Right: Supplier Info */}
        <div className="lg:w-[20%] md:w-full space-y-2 border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6 text-sm">
          <p className="font-semibold">📦 Supplier: Guanji Trading LLC</p>
          <p className="text-gray-500">📍 Berlin, Germany</p>
          <p className="text-gray-500">✅ Verified Seller</p>
          <p className="text-gray-500">🚚 Worldwide shipping</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">
            Send inquiry
          </button>
          <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md w-full">
            Seller's profile
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
