import React, { useState } from "react";

const tabs = ["Description", "Reviews", "Shipping", "About seller"];

const ProductTabs = ({product}) => {
  const [activeTab, setActiveTab] = useState("Description");
  // const [product, setProduct] = useState("");

  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua...
            </p>
            <div className="border mt-4">
              <table className="w-full text-left text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Model</td>
                    <td className="p-2">{product.name}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Style</td>
                    <td className="p-2">Classic style</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Certificate</td>
                    <td className="p-2">ISO-889291212</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Size</td>
                    <td className="p-2">34mm x 450mm x 19mm</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Memory</td>
                    <td className="p-2">36GB RAM</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="list-disc mt-4 ml-5 text-gray-600">
              <li>Some great feature name here</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Duis aute irure dolor in reprehenderit</li>
              <li>Some great feature name here</li>
            </ul>
          </>
        );
      case "Reviews":
        return <p className="text-gray-600">No reviews yet. Be the first to review this product.</p>;
      case "Shipping":
        return <p className="text-gray-600">Ships worldwide in 5–7 business days.</p>;
      case "About seller":
        return <p className="text-gray-600">Guanji Trading LLC has been supplying fashion items since 2010.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="lg:w-[82%] w-full mx-auto mt-6 bg-white rounded-md shadow-md p-4 text-sm">
      <div className="flex gap-4 border-b text-gray-600 font-medium mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 ${
              activeTab === tab ? "border-b-2 border-blue-600 text-blue-600" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {renderContent()}
    </div>
  );
};

export default ProductTabs;
