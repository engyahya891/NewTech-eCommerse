import React from 'react';
// التعديل هنا: استيراد BrowserRouter بدلاً من Router ومن مكتبة react-router-dom
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/Product';
import ProductListing from './pages/ProductListing';
import SellWithUs from './pages/SellWithUs';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/sell" element={<SellWithUs />} />
          <Route path="/shop" element={<ProductListing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}