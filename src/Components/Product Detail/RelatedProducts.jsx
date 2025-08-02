import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import api from "../Api"; // adjust path if needed

const RelatedProducts = ({ category, currentProductId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Fetch related products based on category and exclude the current product
  useEffect(() => {
    if (!category) return;

    api.get("/product") 
      .then((res) => {
        const filtered = res.data.filter(
          (item) => item.category === category && item.id !== currentProductId
        );
        setRelatedProducts(filtered);
      })
      .catch((err) => {
        console.error("Error fetching related products:", err);
      });
  }, [category, currentProductId]);

  return (
    <div className="lg:w-[82%] w-full mx-auto mt-6 bg-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-4">Related products in "{category}"</h3>
      {relatedProducts.length === 0 ? (
        <p className="text-gray-500">No related products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {relatedProducts.map((product) => (
            <Link to={`/product/${product.slug}`} key={product.id}>

              <div className="border p-2 rounded-sm text-center text-sm text-gray-600  hover:scale-105 transition">
                <div className="h-24 flex items-center justify-center mb-2">
                  <img
                    src={product.image1}
                    alt={product.name}
                    className="h-full object-contain"
                    />
                </div>
                <p className="truncate">{product.name}</p>
                <p className="text-gray-400 font-semibold text-xs">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedProducts;
