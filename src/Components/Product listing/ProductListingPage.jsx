import { useLocation } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import SideBar from './SideBar';
import ContentProduct from './ContentProduct';

const ProductListingPage = () => {
  const location = useLocation();
  const dealProducts = location.state?.products || null;

  return (
    <div className="lg:mx-[9%] lg:w-[82%]">
        <Breadcrumb
            category={location.state?.category || "Category"}
            product={location.state?.product || "Product"}
        />

      <div className="flex gap-3">
        <SideBar />
        <ContentProduct dealProducts={dealProducts} />
      </div>
    </div>
  );
};
export default ProductListingPage;
