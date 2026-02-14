import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// --- استيراد الصفحات بتقنية Lazy Loading ---
// ملاحظة هندسية: هذه الملفات لن يتم تضمينها في الحزمة الرئيسية، بل سيتم فصلها تلقائياً
const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./pages/Cart'));
const Categories = lazy(() => import('./pages/Categories'));
const ProductDetails = lazy(() => import('./pages/Product'));
const SellWithUs = lazy(() => import('./pages/SellWithUs'));
const ProductListing = lazy(() => import('./pages/ProductListing'));
const Login = lazy(() => import('./pages/Login'));
const Checkout = lazy(() => import('./pages/Checkout'));

// مكون شاشة التحميل (Loader) بتصميم NewTech الاحترافي
const NewTechLoader = () => (
  <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center">
    <div className="relative">
      {/* أنيميشن الدوران حول اللوجو */}
      <div className="w-24 h-24 border-4 border-t-yellow-400 border-r-transparent border-b-[#1e40af] border-l-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-black italic text-xs tracking-tighter">NEW</span>
      </div>
    </div>
    <p className="mt-6 text-blue-200 font-bold uppercase tracking-[0.3em] text-[10px] animate-pulse">
      Booting NewTech Systems...
    </p>
  </div>
);

export default function App() {
  return (
    <CartProvider>
      <Router>
        {/* Suspense هو المكون المسؤول عن عرض شاشة "الانتظار" 
          بينما يقوم المتصفح بجلب ملف الصفحة المطلوبة من السيرفر
        */}
        <Suspense fallback={<NewTechLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/sell" element={<SellWithUs />} />
            <Route path="/shop" element={<ProductListing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
}