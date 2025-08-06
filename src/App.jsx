import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header Footer/Header';
import NavBar from './Components/Header Footer/NavBar';
import Newsletter from './Components/Header Footer/Newsletter';
import Footer from './Components/Header Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import ProductListingPage from './Components/Product listing/ProductListingPage';
import ProductDetail from './Components/Product Detail/ProductDetail';
import CartPage from './Components/Cart Page/CartPage';
import RegisterForm from './Components/Login/RegisterForm';

function App() {
  return (
    <>
      <Header showSearch={true} />
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<RegisterForm />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/cartpage" element={<CartPage />} />
      </Routes>

      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
