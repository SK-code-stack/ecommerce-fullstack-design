import React, { useState } from 'react';
import expand from "../../assets/social/expand.png";


export default function ContentProduct() {
  const [grid, setGrid] = useState(1);

  const handleGrid = (value) => {
    setGrid(value);
  };

  return (
    <>
      <div className=" flex gap-6 flex-col w-4/5">
        <div className="border-1 border-gray-300 rounded-md h-[60px] bg-white flex flex-row items-center justify-between px-6">
          <div className="items">
            <h6>
              12,911 items in{" "}
              <span className="font-semibold ">
                mobile accessory
              </span>
            </h6>
          </div>
          <div className="verf flex items-center gap-4">
            <input
              className="w-[20px] h-[20px] rounded-md"
              type="checkbox"
              name=""
              id=""
            />
            <h6>Verified only</h6>
            <div className="drop border-2 justify-between w-[150px] rounded-sm px-3 py-2 border-[#DEE2E7] flex items-center gap-2">
              Featured
              <img
                className="rotate-180"
                src={expand}
                alt=""
              />
            </div>
            <div className="gridstwo flex items-center w-[40px] gap-1">
              {/* <img
                className={`border-2 border-[#DEE2E7] rounded-md cursor-pointer w-full h-full ${
                  grid === 1 ? "bg-[#DEE2E7]" : "bg-white"
                }`}
                onClick={() => handleGrid(1)}
                src={require("../../assets/assets/Layout/Misc/gridview.png")}
                alt=""
              /> */}
              {/* <img
                className={`border-2 border-[#DEE2E7] rounded-md cursor-pointer w-full h-full p-1 ${
                  grid === 3 ? "bg-[#DEE2E7]" : "bg-white"
                }`}
                onClick={() => handleGrid(3)}
                src={require("../../assets/assets/Layout/Misc/Vector.png")}
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
