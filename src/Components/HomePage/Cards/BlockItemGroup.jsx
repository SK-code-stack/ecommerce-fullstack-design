import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowicon from '../../../assets/social/arrow.svg';

export default function BlockItemGroup({ titleleft, leftImage, product, categoryName }) {
  const navigate = useNavigate();

const handleNavigate = () => {
  navigate(`/products?category=${encodeURIComponent(categoryName)}`);
};

  return (
    <div className="lg:mx-[9%] lg:w-[82%] bg-white lg:rounded-xl lg:mt-3 lg:border-2 lg:border-black md:w-full md:mx-0 md:rounded-none md:border-none md:my-1 overflow-scroll shadow">
      <div className="lg:flex">
        
        {/* Left Section */}
        <div
          className="hidden lg:block w-1/3 h-auto p-4 bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat"
          style={{ backgroundImage: `url(${leftImage})` }}
        >
          <div className="w-1/2">
            <h4 className="text-black">{titleleft}</h4>
            <button
              onClick={handleNavigate}
              className="hidden lg:block bg-white px-1 py-2 rounded shadow"
            >
              Source now
            </button>
          </div>
        </div>

        {/* Mobile title */}
        <div className="lg:hidden block bg-white p-2">
          <h4 className="text-black">{titleleft}</h4>
        </div>

        {/* Cards Grid */}
        <div className="w-full overflow-x-auto lg:overflow-x-visible">
          <div className="flex lg:flex-wrap gap-0">
            {product.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-40 h-44 lg:w-1/4 lg:h-32 border border-gray-500 flex justify-between p-2"
              >
                <div>
                  <h6 className="text-black">{item.product.name}</h6>
                  <p className="text-sm text-gray-500">
                    from <br />USD {item.product.price}
                  </p>
                </div>
                <div className="flex justify-end items-end w-1/2">
                  <img
                    src={item.product[item.product.main_image]}
                    alt={item.product.name}
                    className="object-contain h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Source button for small screen */}
        <div className="lg:hidden block bg-white p-2">
          <button
            onClick={handleNavigate}
            className="bg-white px-1 py-2 text-blue-600 flex items-center gap-2.5 sourcenowbtn"
          >
            Source now
            <img src={arrowicon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
