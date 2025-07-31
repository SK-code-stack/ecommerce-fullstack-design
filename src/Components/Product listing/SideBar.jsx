import React, { useState } from "react";
import expand from "../../assets/social/expand.png";
import star from "../../assets/social/star.png";
import blankStar from "../../assets/social/blankStar.png";
import { Range } from 'react-range';

const SideBar = () => {
  const [price, setPrice] = useState([0, 999999]);
  const [openSections, setOpenSections] = useState({
    category: true,
    brand: true,
    features: true,
    price: true,
    condition: true,
    ratings: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      <div className="section1 flex flex-col w-1/5">
        {/* Category */}
        <div className="category flex flex-col">
          <div className="drop border-t border-gray-400 pt-3">
            <h5 className="flex flex-row items-center justify-between font-semibold text-[16px]">
              Category
              <img
                src={expand}
                alt=""
                className={`cursor-pointer transform transition-transform ${
                  openSections.category ? 'rotate-180' : ''
                }`}
                onClick={() => toggleSection("category")}
              />
            </h5>
          </div>
          {openSections.category && (
            <div className="dropdown flex flex-col gap-2 text-[#505050]">
              <p>Mobile accessory</p>
              <p>Electronics</p>
              <p>Smartphones</p>
              <p>Modern tech</p>
              <p className="text-[#0D6EFD]">See all</p>
            </div>
          )}
        </div>
        <hr />

        {/* Brand */}
        <div className="category flex flex-col gap-2">
          <div className="drop">
            <h5 className="flex flex-row items-center justify-between font-semibold text-[16px]">
              Brand
              <img
                src={expand}
                alt=""
                className={`cursor-pointer transform transition-transform ${
                  openSections.brand ? 'rotate-180' : ''
                }`}
                onClick={() => toggleSection("brand")}
              />
            </h5>
          </div>
          {openSections.brand && (
            <div className="dropdown flex flex-col gap-2 text-[#505050]">
              {["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"].map((brand, i) => (
                <div className="input flex flex-row gap-2" key={i}>
                  <input className="w-[20px] h-[20px] rounded-md" type="checkbox" />
                  <p>{brand}</p>
                </div>
              ))}
              <p className="text-[#0D6EFD]">See all</p>
            </div>
          )}
        </div>
        <hr />

        {/* Features */}
        <div className="category flex flex-col gap-2">
          <div className="drop">
            <h5 className="flex flex-row items-center justify-between font-semibold text-[16px]">
              Features
              <img
                src={expand}
                alt=""
                className={`cursor-pointer transform transition-transform ${
                  openSections.features ? 'rotate-180' : ''
                }`}
                onClick={() => toggleSection("features")}
              />
            </h5>
          </div>
          {openSections.features && (
            <div className="dropdown flex flex-col gap-2 text-[#505050]">
              {["Metallic", "Plastic cover", "8GB RAM", "Super Power", "Large Memory"].map(
                (feature, i) => (
                  <div className="input flex flex-row gap-2" key={i}>
                    <input className="w-[20px] h-[20px] rounded-md" type="checkbox" />
                    <p>{feature}</p>
                  </div>
                )
              )}
              <p className="text-[#0D6EFD]">See all</p>
            </div>
          )}
        </div>
        <hr />

        {/* Price Range */}
        <div className="category flex flex-col gap-2">
          <div className="drop">
            <h5 className="flex flex-row items-center justify-between font-semibold text-[16px]">
              Price range
              <img
                src={expand}
                alt=""
                className={`cursor-pointer transform transition-transform ${
                  openSections.price ? 'rotate-180' : ''
                }`}
                onClick={() => toggleSection("price")}
              />
            </h5>
          </div>
          {openSections.price && (
            <div className="flex flex-col px-2 gap-2 text-sm text-[#505050] mt-2">
              <Range
                step={100}
                min={0}
                max={1000000}
                values={price}
                onChange={setPrice}
                renderTrack={({ props, children }) => (
                  <div {...props} className="h-1 bg-gray-300 rounded" style={{ ...props.style }}>
                    <div
                      className="h-1 bg-blue-500"
                      style={{
                        position: "absolute",
                        height: "4px",
                        left: `${(price[0] / 1000000) * 100}%`,
                        width: `${((price[1] - price[0]) / 1000000) * 100}%`,
                      }}
                    />
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div {...props} className="w-4 h-4 bg-blue-500 rounded-full shadow cursor-pointer" />
                )}
              />
              <div className="flex items-center justify-between mt-3">
                <div className="flex flex-col">
                  <label>Min</label>
                  <input
                    type="number"
                    value={price[0]}
                    onChange={(e) => setPrice([+e.target.value, price[1]])}
                    className="border px-2 py-1 rounded w-24 bg-white text-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Max</label>
                  <input
                    type="number"
                    value={price[1]}
                    onChange={(e) => setPrice([price[0], +e.target.value])}
                    className="border px-2 py-1 rounded w-24 bg-white text-black"
                  />
                </div>
              </div>
              <button className="mt-3 bg-white py-2 rounded shadow text-blue-600">Apply</button>
            </div>
          )}
        </div>
        <hr />

        {/* Condition */}
        <div className="category flex flex-col gap-2">
          <div className="drop">
            <h5 className="flex flex-row items-center justify-between font-semibold text-[16px]">
              Condition
              <img
                src={expand}
                alt=""
                className={`cursor-pointer transform transition-transform ${
                  openSections.condition ? 'rotate-180' : ''
                }`}
                onClick={() => toggleSection("condition")}
              />
            </h5>
          </div>
          {openSections.condition && (
            <div className="dropdown flex flex-col gap-2 text-[#505050]">
              {["Any", "Refurbished", "Brand new", "Old items"].map((cond, i) => (
                <div className="input flex flex-row gap-2" key={i}>
                  <input className="w-[20px] h-[20px] rounded-md" type="checkbox" />
                  <p>{cond}</p>
                </div>
              ))}
              <p className="text-[#0D6EFD]">See all</p>
            </div>
          )}
        </div>
        <hr />

        {/* Ratings */}
        <div className="category flex flex-col gap-2">
          <div className="drop">
            <h5 className="flex flex-row items-center justify-between font-semibold text-[16px]">
              Ratings
              <img
                src={expand}
                alt=""
                className={`cursor-pointer transform transition-transform ${
                  openSections.ratings ? 'rotate-180' : ''
                }`}
                onClick={() => toggleSection("ratings")}
              />
            </h5>
          </div>
          {openSections.ratings && (
            <div className="dropdown flex flex-col gap-2 text-[#505050]">
              {[5, 4, 3, 2, 1].map((filled, rowIndex) => (
                <div key={rowIndex} className="flex items-center gap-2">
                  <input type="checkbox" className="w-[20px] h-[20px] rounded-md" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={i < filled ? star : blankStar}
                        alt=""
                        className="w-4 h-4"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
