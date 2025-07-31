import React, { useEffect, useState } from 'react';
import expand from "../../assets/social/expand.png";
import gridview from "../../assets/social/gridview.png";
import listview from "../../assets/social/listView.png";
import api from "../Api";
import ProductCard from './ProductCard';

export default function ContentProduct() {
  const [grid, setGrid] = useState(1);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    api.get("product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleGrid = (value) => setGrid(value);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentItems = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChangePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages.map((page, index) =>
      page === "..." ? (
        <span key={index} className="px-2 text-gray-500">...</span>
      ) : (
        <button
          key={index}
          onClick={() => handleChangePage(page)}
          className={`px-3 py-1 border rounded ${
            currentPage === page ? "bg-[#DEE2E7] font-bold" : "bg-white"
          }`}
        >
          {page}
        </button>
      )
    );
  };

  return (
    <div className="flex gap-6 flex-col w-4/5">
      {/* Top Filter Bar */}
      <div className="border-1 border-gray-300 rounded-md h-[60px] bg-white flex flex-row items-center justify-between px-6">
        <h6>
          {products.length} items in <span className="font-semibold">mobile accessory</span>
        </h6>

        <div className="flex items-center gap-4">
          <input className="w-[20px] h-[20px] rounded-md" type="checkbox" />
          <h6>Verified only</h6>

          <div className="border-2 w-[150px] rounded-sm px-3 py-2 border-[#DEE2E7] flex items-center justify-between">
            Featured
            <img className="rotate-180" src={expand} alt="" />
          </div>

          <div className="flex items-center border-2 border-[#DEE2E7] rounded-md">
            <img
              className={`cursor-pointer w-full h-full ${
                grid === 1 ? "bg-[#DEE2E7]" : "bg-white"
              }`}
              onClick={() => handleGrid(3)}
              src={gridview}
              alt=""
            />
            <img
              className={`cursor-pointer w-full h-full p-1 ${
                grid === 3 ? "bg-[#DEE2E7]" : "bg-white"
              }`}
              onClick={() => handleGrid(1)}
              src={listview}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className={`grid ${grid === 1 ? "grid-cols-1" : "grid-cols-3"} gap-4 mt-4`}>
        {currentItems.map((item, i) => (
          <ProductCard product={item} key={i} grid={grid} />
        ))}
      </div>

      {/* Pagination UI */}
      <div className="bg flex justify-end w-full ">
        <div className="w-1/4 flex justify-end items-center">
          <div className="flex mr-2 items-center gap-2 bg-white border-1 border-gray-400 rounded px-2">
            <label htmlFor="itemsPerPage ">Show</label>
            <select
              id="itemsPerPage"
              className=" rounded  py-1"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(parseInt(e.target.value));
                setCurrentPage(1); // reset to first page
              }}
            >
              <option value={7}>7</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>

          <div className="flex items-center gap-1 rounded border-1 border-gray-400 ">
            <button
              onClick={() => handleChangePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50 bg-white "
            >
              &lt;
            </button>
            {renderPageNumbers()}
            <button
              onClick={() => handleChangePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50 bg-white"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
