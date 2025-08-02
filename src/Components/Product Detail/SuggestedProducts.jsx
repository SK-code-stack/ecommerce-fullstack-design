import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../Api"; // adjust as needed

const SuggestedProducts = ({ category, currentProductId }) => {
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  useEffect(() => {
    api.get("/product") // Replace with your actual endpoint
      .then((res) => {
        const filtered = res.data.filter(
          (item) =>
            item.category !== category && item.id !== currentProductId
        );
        setSuggestedProducts(filtered.slice(0, 5)); // limit to 5 suggestions
      })
      .catch((err) => {
        console.error("Error fetching suggested products:", err);
      });
  }, [category, currentProductId]);

  if (suggestedProducts.length === 0) return null;

  return (
    <div className="border rounded-md p-4 bg-white">
      <h4 className="font-semibold text-sm mb-2">You may like</h4>
      {suggestedProducts.map((item) => (
        <Link
          to={`/product/${item.slug}`}
          key={item.id}
          className="flex items-center mb-2 hover:bg-gray-50 p-1 rounded"
        >
          <div className="w-12 h-12  mr-3 rounded-sm flex items-center justify-center overflow-hidden">
            {item.image1 ? (
              <img
                src={item.image1}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-xs text-gray-500">No Img</span>
            )}
          </div>
          <div className="text-sm">
            <p className="font-medium text-gray-700 leading-tight line-clamp-2">
              {item.name}
            </p>
            <p className="text-xs text-gray-500">${item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SuggestedProducts;
