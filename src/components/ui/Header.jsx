import {
    ChevronDown,
    LogIn,
    MapPin,
    Menu,
    MessageSquare,
    Package,
    Search,
    ShoppingBag,
    Star,
    User,
    UserCircle,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const { cartItems } = useCart();
  // حالة التحكم في القائمة المنسدلة للمستخدم
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // مصفوفة عناصر القائمة المنسدلة (بدون روابط كما طلبت)
  const menuItems = [
    { icon: <UserCircle size={16} />, label: "My Profile" },
    { icon: <MapPin size={16} />, label: "My Address" },
    { icon: <Package size={16} />, label: "My Order" },
    { icon: <MessageSquare size={16} />, label: "Complaints History" },
    { icon: <Star size={16} />, label: "My Reviews" },
  ];

  return (
    <>
      {/* Spacer: لمنع المحتوى من الاختفاء خلف الهيدر الثابت */}
      <div className="h-[135px] md:h-[165px] lg:h-[185px] w-full invisible pointer-events-none"></div>

      <header className="w-full font-sans fixed top-0 left-0 z-[100] shadow-2xl transition-all duration-300">
        {/* 1. Top Bar - بلون أزرق داكن جداً */}
        <div className="bg-[#0f172a] py-1.5 border-b border-white/5 hidden md:block">
          <div className="container mx-auto px-4 flex justify-end gap-6 text-[11px] font-semibold text-blue-100/80 uppercase tracking-wider">
            <Link
              to="/sell"
              className="hover:text-yellow-400 transition-colors"
            >
              Sell With US
            </Link>
            <Link
              to="/contact"
              className="hover:text-yellow-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* 2. Main Header - Blue & Yellow Identity */}
        <div className="bg-[#1e40af] py-3 md:py-4">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-5">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group">
              <h2 className="text-2xl md:text-3xl font-black italic tracking-tighter flex items-center">
                <span className="text-white group-hover:text-yellow-400 transition-colors uppercase">
                  New
                </span>
                <span className="bg-yellow-400 text-[#1e40af] px-2 ml-1 rounded-sm group-hover:bg-white transition-colors uppercase">
                  Tech
                </span>
              </h2>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 w-full max-w-2xl relative mx-4">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search latest technology..."
                  className="w-full h-11 pl-5 pr-12 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-inner text-gray-700 bg-white/95 font-medium"
                />
                <button className="absolute right-0 top-0 h-full px-4 text-[#1e40af] hover:text-blue-800 transition-colors">
                  <Search size={22} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Actions Section */}
            <div className="flex items-center gap-7 text-white">
              {/* User Dropdown Section */}
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 font-bold hover:text-yellow-400 transition-all text-sm group uppercase tracking-tighter outline-none"
                >
                  <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20">
                    <User size={20} />
                  </div>
                  <span className="hidden lg:inline">Sign/Login</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      isUserMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu Overlay - تم إضافة z-[110] لضمان الظهور فوق أيقونات المتاجر */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200 z-[110]">
                    <div className="p-4 border-b border-gray-50 bg-gray-50/50">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">
                        Account Dashboard
                      </p>
                    </div>
                    {/* ... باقي محتوى القائمة ... */}
                    <div className="py-2">
                      {menuItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 px-5 py-3 text-gray-600 hover:bg-blue-50 hover:text-[#1e40af] transition-colors cursor-default group"
                        >
                          <span className="text-gray-300 group-hover:text-[#1e40af] transition-colors">
                            {item.icon}
                          </span>
                          <span className="text-sm font-bold">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 bg-gray-50">
                      <Link
                        to="/login"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center justify-center gap-2 w-full bg-[#FFD43B] text-[#1e40af] py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#1e40af] hover:text-white transition-all shadow-md active:scale-95"
                      >
                        <LogIn size={18} /> Login Now
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Cart Section */}
              <Link
                to="/cart"
                className="relative hover:text-yellow-400 transition-all group"
              >
                <ShoppingBag size={24} />
                <span className="absolute -top-1.5 -right-2 bg-yellow-400 text-[#1e40af] text-[10px] font-black h-5 w-5 flex items-center justify-center rounded-full border-2 border-[#1e40af] shadow-md">
                  {cartItems.length}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Navigation Bar - شريط أبيض ناصع */}
        <div className="bg-white shadow-md border-b border-gray-100 hidden md:block">
          <div className="container mx-auto px-4 h-12 flex items-center justify-between">
            <div className="flex items-center gap-8 h-full">
              <div className="h-full flex items-center border-r pr-8 border-gray-100">
                <Link
                  to="/categories"
                  className="flex items-center gap-2 text-[#1e40af] font-black hover:text-blue-800 transition-all text-sm group"
                >
                  <Menu size={20} strokeWidth={3} />
                  SHOP BY CATEGORY
                  <ChevronDown
                    size={16}
                    className="group-hover:rotate-180 transition-transform duration-300 text-yellow-500"
                  />
                </Link>
              </div>

              <div className="flex items-center gap-8 text-[13px] text-gray-600 font-bold uppercase tracking-tight">
                {["Electronics", "Mobiles", "Laptops", "Gaming"].map((item) => (
                  <Link
                    key={item}
                    className="hover:text-[#1e40af] transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1e40af] hover:after:w-full after:transition-all"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 text-[10px] font-black text-gray-400">
              <span className="uppercase tracking-widest">Download App</span>
              <div className="flex gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src="/img/apple-store.webp"
                  alt="iOS"
                  className="h-6 cursor-pointer"
                />
                <img
                  src="/img/google-play.webp"
                  alt="Android"
                  className="h-6 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
