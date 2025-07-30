import React from "react";
import expand from "../../assets/social/expand.png";
import star from "../../assets/social/star.png";

const SideBar = () => {
  return (
    <>
      <div className="section1 flex flex-col w-1/5 ">
        <div className="category  flex flex-col">
          <div className="drop border-t border-gray-400 pt-3">
            <h5 className="flex flex-row items-center justify-between font-semibold text-[16px] ">
              Category
              <img
                className=""
                src={expand}
                alt=""
              />
            </h5>
          </div>
          <div className="dropdown flex flex-col gap-2 text-[#505050]">
            <p>Mobile accessory</p>
            <p>Electronics</p>
            <p>Smartphones</p>
            <p>Modern tech</p>
            <p className="text-[#0D6EFD]">See all</p>
          </div>
        </div>
        <hr />
        <div className="category  flex flex-col gap-2">
          <div className="drop">
            <h5 className="  flex flex-row items-center justify-between font-semibold text-[16px]">
              Brand
              <img
                className=""
                src={expand}
                alt=""
              />            
            </h5>
          </div>
          <div className="dropdown flex flex-col gap-2 text-[#505050]">
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Samsung</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>apple</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Huawei</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Pocco</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Lenovo</p>
            </div>
            <p className="text-[#0D6EFD]">See all</p>
          </div>
        </div>
        <hr />

        <div className="category  flex flex-col gap-2">
          <div className="drop">
            <h5 className="  flex flex-row items-center justify-between font-semibold text-[16px]">
              Features
              <img
                className=""
                src={expand}
                alt=""
              />            </h5>
          </div>
          <div className="dropdown flex flex-col gap-2 text-[#505050]">
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Metallic</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>plastic cover</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>8GB RAM</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Super Power</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Large Memory</p>
            </div>
            <p className="text-[#0D6EFD]">See all</p>
          </div>
        </div>
        <div className="category  flex flex-col gap-2">
          <div className="drop">
            <h5 className="  flex flex-row items-center justify-between font-semibold text-[16px]">
              Price range
              <img
                className=""
                src={expand}
                alt=""
              />
            </h5>
          </div>
          <div className="dropdown flex flex-col gap-2 text-[#505050]">
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Samsung</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>apple</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Huawei</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Pocco</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Lenovo</p>
            </div>
            <p className="text-[#0D6EFD]">See all</p>
          </div>
        </div>
        <hr />
        <div className="category  flex flex-col gap-2">
          <div className="drop">
            <h5 className="  flex flex-row items-center justify-between font-semibold text-[16px]">
              Condition
              <img
                className=""
                src={expand}
                alt=""
              />
            </h5>
          </div>
          <div className="dropdown flex flex-col gap-2 text-[#505050]">
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Any</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Refurbished</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Brand new</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Old items</p>
            </div>

            <p className="text-[#0D6EFD]">See all</p>
          </div>
        </div>
        <hr />
        <div className="category  flex flex-col gap-2">
          <div className="drop">
            <h5 className="  flex flex-row items-center justify-between font-semibold text-[16px]">
              Ratings
              <img
                className=""
                src={expand}
                alt=""
              />
            </h5>
          </div>
          <div className="dropdown flex flex-col gap-2 text-[#505050]">
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Any</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Refurbished</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Brand new</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Old items</p>
            </div>

            <p className="text-[#0D6EFD]">See all</p>
          </div>
        </div>
        <hr />
        <div className="category  flex flex-col gap-2">
          <div className="drop">
            <h5 className="  flex flex-row items-center justify-between font-semibold text-[16px]">
              Ratings
              <img
                className=""
                src={expand}
                alt=""
              />
            </h5>
          </div>
          <div className="dropdown flex flex-col gap-2 text-[#505050]">
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />
                {[...Array(5)].map((_, i) => (
                <img key={i} src={star} alt="" />
                ))}


          
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
                 {[...Array(4)].map((_, i) => (
                <img key={i} src={star} alt="" />
                ))}
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
                {[...Array(3)].map((_, i) => (
                <img key={i} src={star} alt="" />
                ))}
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
                {[...Array(2)].map((_, i) => (
                <img key={i} src={star} alt="" />
                ))}
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
                {[...Array(1)].map((_, i) => (
                <img key={i} src={star} alt="" />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;