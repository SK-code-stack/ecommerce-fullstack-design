import React from "react";
import Breadcrumb from "./Breadcrumb";
import SideBar from "./SideBar";
import ContentProduct from "./ContentProduct";

const ProductListingPage = () => {
  return (

    <>
    <div className="lg:mx-[9%] lg:w-[82%] lg:rounded-xl   md:w-full md:mx-0 md:rounded-none md:border-none md:my-1  ">
            {/* Breadcrumb component */}
            <Breadcrumb />
    <div className="flex gap-3">

            {/* SideBar component */}
            <SideBar/>
    
            {/* content top */}
           <ContentProduct/>
        </div>
</div>
    </>

  );
};

export default ProductListingPage;