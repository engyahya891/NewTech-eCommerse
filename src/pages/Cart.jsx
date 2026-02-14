import {
  ArrowLeft,
  ChevronRight,
  Home,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Trash2,
  Truck,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  // حساب المجموع الكلي النهائي للفاتورة
  const subtotal = cartItems.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, ""));
    return acc + numericPrice * (item.quantity || 1);
  }, 0);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans overflow-x-hidden text-gray-800">
      <Header />

      {/* 1. Breadcrumbs */}
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center gap-2 text-[10px] md:text-sm text-gray-500 uppercase tracking-wider">
          <Link
            to="/"
            className="hover:text-[#1e40af] flex items-center gap-1 transition-colors"
          >
            <Home size={14} /> Home
          </Link>
          <ChevronRight size={12} />
          <span className="font-black text-[#1e40af]">Shopping Cart</span>
        </div>
      </div>

      <main className="container mx-auto px-2 md:px-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
          
          {/* الجانب الأيسر: محتويات السلة */}
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 md:p-8 border-b border-gray-50 flex justify-between items-center bg-white">
                <h1 className="text-lg md:text-2xl font-black italic uppercase text-[#1e40af] tracking-tighter">
                  Your <span className="text-yellow-500">Cart</span>
                </h1>
                <span className="bg-blue-50 text-[#1e40af] px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">
                  {cartItems.length} Items
                </span>
              </div>

              {cartItems.length === 0 ? (
                <div className="p-12 md:p-20 flex flex-col items-center text-center">
                  <ShoppingBag size={80} className="text-gray-100 mb-6" strokeWidth={1} />
                  <h2 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
                  <p className="text-gray-400 text-sm mb-8">Add some tech gear to get started!</p>
                  <Link
                    to="/"
                    className="bg-[#1e40af] text-white px-8 py-3 rounded-xl font-bold uppercase text-xs flex items-center gap-2 hover:bg-blue-800 transition-all"
                  >
                    <ArrowLeft size={16} /> Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-gray-50">
                  {cartItems.map((item) => {
                    // حساب السعر الإجمالي لهذا المنتج بالتحديد (سعر القطعة * الكمية)
                    const unitPrice = parseFloat(item.price.replace(/[^\d.]/g, ""));
                    const itemTotal = unitPrice * (item.quantity || 1);

                    return (
                      <div key={item.id} className="p-4 md:p-6 flex gap-4 md:gap-6 items-center">
                        <div className="w-20 h-20 md:w-28 md:h-28 bg-gray-50 rounded-xl p-2 flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                        
                        <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h4 className="text-xs md:text-sm font-bold text-gray-800 line-clamp-2 md:max-w-xs">
                              {item.name}
                            </h4>
                            
                            {/* التعديل المطلوب: عرض عملية الحساب (سعر القطعة x الكمية = المجموع) */}
                            <p className="text-[#1e40af] font-black text-[10px] md:text-sm mt-1 bg-blue-50/50 px-2 py-1 rounded-lg inline-block">
                              {item.price} x {item.quantity || 1} = 
                              <span className="ml-1 text-[#1e40af]">USD {itemTotal.toFixed(2)}</span>
                            </p>
                          </div>

                          <div className="flex items-center justify-between md:justify-end gap-6">
                            {/* التحكم بالكمية */}
                            <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1 border border-gray-200">
                              <button
                                onClick={() => decrementQuantity(item.id)}
                                className="p-1 hover:text-red-500 transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="px-3 font-bold text-sm text-[#1e40af]">
                                {item.quantity || 1}
                              </span>
                              <button
                                onClick={() => incrementQuantity(item.id)}
                                className="p-1 hover:text-green-600 transition-colors"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-300 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="p-4 bg-gray-50 flex justify-end">
                    <button
                      onClick={clearCart}
                      className="text-[10px] font-bold text-red-500 uppercase hover:underline"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* مميزات NewTech */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50/50 p-4 rounded-2xl flex items-center gap-4 border border-blue-100">
                <Truck className="text-[#1e40af]" size={24} />
                <div>
                  <h4 className="text-sm font-bold text-[#1e40af]">Free Shipping</h4>
                  <p className="text-[10px] text-blue-600/70 uppercase">Orders over USD 500</p>
                </div>
              </div>
              <div className="bg-green-50/50 p-4 rounded-2xl flex items-center gap-4 border border-green-100">
                <ShieldCheck className="text-green-600" size={24} />
                <div>
                  <h4 className="text-sm font-bold text-green-700">Secure Payment</h4>
                  <p className="text-[10px] text-green-600/70 uppercase">100% Safe</p>
                </div>
              </div>
            </div>
          </div>

          {/* الجانب الأيمن: ملخص الطلب */}
          <aside className="w-full lg:w-1/3 sticky top-24">
            <div className="bg-[#1e40af] rounded-3xl shadow-xl p-6 md:p-8 text-white">
              <h3 className="text-base font-black uppercase italic tracking-widest mb-6 border-b border-white/10 pb-4">
                Order Summary
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-100/70">Subtotal ({cartItems.length} Items)</span>
                  <span className="font-bold">USD {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-100/70">Shipping</span>
                  <span className="text-yellow-400 font-bold">{subtotal > 500 ? "FREE" : "USD 25.00"}</span>
                </div>
                <div className="h-[1px] bg-white/10 my-4"></div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-black uppercase">Total Amount</span>
                  <span className="text-2xl font-black text-yellow-400 tracking-tighter">
                    USD {(subtotal > 500 ? subtotal : subtotal + 25).toFixed(2)}
                  </span>
                </div>
              </div>
              <Link to="/checkout" className="w-full">
                <button
                  disabled={cartItems.length === 0}
                  className="w-full py-4 bg-yellow-400 text-[#1e40af] rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
                >
                  Checkout Now
                </button>
              </Link>
            </div>
            <p className="text-center mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              Standard delivery takes 2-4 business days
            </p>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;