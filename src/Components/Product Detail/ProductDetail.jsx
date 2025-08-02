import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import star from "../../assets/social/star.png";
import blankStar from "../../assets/social/blankStar.png";
import Breadcrumb from "../Product listing/Breadcrumb";
import flag from "../../assets/flags/DK.png";
import heart from "../../assets/social/heart.png";
import ProductTabs from "./ProductTabs";
import SuggestedProducts from "./SuggestedProducts";
import RelatedProducts from "./RelatedProducts";
import api from "../Api";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    api.get(`/product/${slug}/`)
      .then((res) => {
        setProduct(res.data);
        setSelectedImage(res.data.image1);
        window.scrollTo(0, 0); // Scroll to top on load
      })
      .catch((err) => console.error("Product fetch failed:", err));
  }, [slug]);

  if (!product) return <p className="text-center py-10">Loading...</p>;

  const rating = product.rating_count || 0;

  return (
    <>
      {/* Breadcrumb */}
      <div className="flex p-1 lg:w-[82%] w-full mx-auto">
        <Breadcrumb product={product} />
      </div>

      {/* Main Product Detail Container */}
      <div className="flex flex-col lg:flex-row gap-8 p-6 border rounded-md shadow-md lg:w-[82%] w-full mx-auto bg-white">
        {/* Left: Image Preview */}
        <div className="flex-1 lg:w-[35%]">
          <div className="border lg:h-[70%] flex items-center justify-center text-gray-700 text-lg font-semibold">
            <img src={selectedImage} alt="Selected" className="object-contain max-h-full" />
          </div>
          <div className="flex gap-1 mt-4 justify-center">
            {[product.image1, product.image2, product.image3, product.image4, product.image5].map((img, idx) => (
              img ? (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`border px-1 py-1 text-sm ${selectedImage === img ? "bg-gray-200" : ""}`}
                >
                  <img src={img} alt={`thumb-${idx}`} className="w-12 h-12 object-contain" />
                </button>
              ) : null
            ))}
          </div>
        </div>

        {/* Middle: Product Info */}
        <div className="flex-1 space-y-2 text-sm lg:w-[40%]">
          <p className="text-green-600 font-semibold">✔ In stock</p>
          <h4 className="text-xl font-semibold">{product.name}</h4>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={index < Math.round(rating) ? star : blankStar}
                alt="star"
                className="w-4 h-4"
              />
            ))}
            <span className="text-orange-500 font-semibold ml-2">{rating.toFixed(1)}</span>
            <span className="text-gray-400 text-sm ml-1">· {product.reviews || 0} reviews · {product.sold || 0} sold</span>
          </div>

          <div className="flex justify-around p-2 bg-red-100 rounded-md">
            <p className="my-auto border-r-1 p-1 border-gray-400 h-full flex flex-col text-red-500 font-bold text-xl">
              ${product.price} <span className="text-xs text-gray-500">50-100 pcs</span>
            </p>
            <p className="my-auto border-r-1 p-1 border-gray-400 h-full flex flex-col font-bold text-xl">
              ${product.price_discount || product.price} <span className="text-xs text-gray-500">100-700 pcs</span>
            </p>
            <p className="my-auto h-full p-1 flex flex-col font-bold text-xl">
              ${product.price_discount || product.price} <span className="text-xs text-gray-500">700+ pcs</span>
            </p>
          </div>

          <div className="pt-2 text-sm">
            <div className="flex py-2">
              <strong className="text-gray-500 w-32">Price:</strong>
              <span>Negotiable</span>
            </div>
            <div className="flex py-2">
              <strong className="text-gray-500 w-32">Type:</strong>
              <span>{product.type}</span>
            </div>
            <div className="flex py-2">
              <strong className="text-gray-500 w-32">Material:</strong>
              <span>{product.material}</span>
            </div>
            <div className="flex py-2 border-b border-gray-300">
              <strong className="text-gray-500 w-32">Design:</strong>
              <span>{product.design}</span>
            </div>
            <div className="flex py-2">
              <strong className="text-gray-500 w-32">Customization:</strong>
              <span>{product.customization}</span>
            </div>
            <div className="flex py-2">
              <strong className="text-gray-500 w-32">Protection:</strong>
              <span>Refund Policy</span>
            </div>
            <div className="flex py-2 border-b border-gray-300">
              <strong className="text-gray-500 w-32">Warranty:</strong>
              <span>2 years full warranty</span>
            </div>
          </div>
        </div>

        {/* Right: Supplier Info */}
        <div className="lg:w-[25%] md:w-full mt-2 text-sm">
          <div className="p-4 border-1 border-gray-200 rounded-xl">
            <div className="flex justify-center gap-1">
              <p className="font-semibold text-4xl px-2 bg-blue-100 text-blue-400 rounded">R</p>
              <p className="">Supplier: Guanji Trading LLC</p>
            </div>
            <p className="flex gap-2 text-gray-500"><img src={flag} alt="flag" className="w-4 h-4" /> Berlin, Germany</p>
            <p className="text-gray-500 flex gap-2"><span>✅</span> Verified Seller</p>
            <p className="text-gray-500 flex gap-2"><span>🚚</span> Worldwide shipping</p>

            <button className="bg-blue-600 text-white px-4 py-2 btnrounded w-full">
              Send inquiry
            </button>
            <button className="text-blue-600 mt-1 border border-blue-600 px-4 py-2 btnrounded w-full">
              Seller's profile
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-blue-500 font-bold text-md flex gap-2">
              <img src={heart} alt="heart" /> Save for later
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:w-[82%] w-full mx-auto mt-2">
        <ProductTabs product={product} />
        <SuggestedProducts category={product.category} currentProductId={product.id} />
      </div>
      <RelatedProducts category={product.category} currentProductId={product.id} />
    </>
  );
};

export default ProductDetail;