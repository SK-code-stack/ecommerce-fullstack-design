import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header Footer/Header';
import NavBar from './Components/Header Footer/NavBar';
import Newsletter from './Components/Header Footer/Newsletter';
import Footer from './Components/Header Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import ProductListingPage from './Components/Product listing/ProductListingPage';

function App() {
  return (
    <>
      <Header showSearch={true} />
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
      </Routes>

      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
