import {
  ChevronDown,
  ChevronRight,
  Heart,
  LogIn,
  MapPin,
  Menu,
  MessageSquare,
  Package,
  PhoneCall,
  Search,
  ShoppingBag,
  Store,
  User,
  UserCircle,
  X,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { allProducts } from "../../data/index";

const Header = () => {
  const { cartItems } = useCart();
  const location = useLocation();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    setIsUserMenuOpen(false);
    setIsMobileMenuOpen(false);
    setSearchTerm("");
  }, [location]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }
    const filtered = allProducts
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (product.desc &&
            product.desc.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .slice(0, 6);
    setSearchResults(filtered);
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { icon: <UserCircle size={18} />, label: "My Profile", path: "/profile" },
    { icon: <MapPin size={18} />, label: "My Address" },
    { icon: <Package size={18} />, label: "My Order", path: "/orders" },
    { icon: <MessageSquare size={18} />, label: "Complaints History" },
    { icon: <Heart size={18} />, label: "My Wishlist", path: "/wishlist" },
  ];

  return (
    <>
      <div className="h-[120px] md:h-[165px] lg:h-[185px] w-full invisible pointer-events-none"></div>

      <header className="w-full font-sans fixed top-0 left-0 z-[100] shadow-2xl transition-all duration-300">
        {/* 1. Top Bar */}
        <div className="bg-[#0f172a] py-1.5 border-b border-white/5 hidden md:block">
          <div className="container mx-auto px-4 flex justify-end gap-6 text-[11px] font-semibold text-blue-100/80 uppercase tracking-wider">
            <Link to="/sell" className="hover:text-yellow-400 transition-colors">Sell With US</Link>
            <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link>
          </div>
        </div>

        {/* 2. Main Header */}
        <div className="bg-[#1e40af] py-3 md:py-4">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-5">
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white p-1 md:hidden hover:bg-white/10 rounded-lg"
              >
                <Menu size={28} />
              </button>

              <Link to="/" className="flex-shrink-0 group flex-1 md:flex-none">
                <h2 className="text-xl md:text-3xl font-black italic tracking-tighter flex items-center justify-center md:justify-start">
                  <span className="text-white uppercase">New</span>
                  <span className="bg-yellow-400 text-[#1e40af] px-2 ml-1 rounded-sm uppercase">Tech</span>
                </h2>
              </Link>

              <div className="flex items-center gap-3 md:hidden">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="text-white p-2 bg-white/10 rounded-full"
                >
                  <User size={20} />
                </button>
                <Link to="/cart" className="relative text-white p-2 bg-white/10 rounded-full">
                  <ShoppingBag size={20} />
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-[#1e40af] text-[9px] font-black h-4 w-4 flex items-center justify-center rounded-full border border-[#1e40af]">
                    {cartItems.length}
                  </span>
                </Link>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 w-full max-w-2xl relative" ref={searchRef}>
              <div className="relative group">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search latest technology..."
                  className="w-full h-10 md:h-11 pl-4 pr-12 rounded-xl border-none focus:ring-2 focus:ring-yellow-400 text-sm font-medium shadow-inner outline-none transition-all"
                />
                <button className="absolute right-0 top-0 h-full px-4 text-[#1e40af] hover:scale-110 transition-transform">
                  <Search size={20} strokeWidth={2.5} />
                </button>
              </div>

              {/* Search Results Dropdown */}
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[150]">
                  <div className="p-3 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
                    <p className="text-[10px] font-black text-[#1e40af] uppercase tracking-widest">Matching Hardware</p>
                    <span className="text-[9px] bg-blue-100 text-[#1e40af] px-2 py-0.5 rounded-full font-bold">{searchResults.length} items</span>
                  </div>
                  <div className="max-h-[350px] overflow-y-auto">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={() => setSearchTerm("")}
                        className="flex items-center gap-4 p-3 hover:bg-blue-50 transition-colors group border-b border-gray-50 last:border-none"
                      >
                        <div className="w-12 h-12 bg-white rounded-lg p-1 border border-gray-100 flex-shrink-0 flex items-center justify-center">
                          <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs font-bold text-gray-800 truncate group-hover:text-[#1e40af]">{product.name}</h5>
                          <p className="text-[11px] text-[#1e40af] font-black italic mt-0.5">{product.price}</p>
                        </div>
                        <ChevronRight size={14} className="text-gray-300 group-hover:text-[#1e40af]" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions Section (Desktop) */}
            <div className="hidden md:flex items-center gap-6 text-white">
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 font-bold hover:text-yellow-400 transition-all text-sm group uppercase tracking-tighter outline-none"
                >
                  <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20">
                    <User size={20} />
                  </div>
                  <span>Sign/Login</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isUserMenuOpen ? "rotate-180" : ""}`} />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[120] animate-in fade-in zoom-in duration-200">
                    <div className="p-4 border-b border-gray-50 bg-gray-50/50">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Account Dashboard</p>
                    </div>
                    <div className="py-2">
                      {menuItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path || "#"}
                          className="flex items-center gap-3 px-5 py-3 text-gray-600 hover:bg-blue-50 hover:text-[#1e40af] transition-colors group"
                        >
                          <span className="text-gray-300 group-hover:text-[#1e40af]">{item.icon}</span>
                          <span className="text-sm font-bold">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="p-3 bg-gray-50">
                      <Link to="/login" className="flex items-center justify-center gap-2 w-full bg-[#FFD43B] text-[#1e40af] py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#1e40af] hover:text-white transition-all shadow-md">
                        <LogIn size={18} /> Login Now
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/cart" className="relative hover:text-yellow-400 transition-all group">
                <ShoppingBag size={24} />
                <span className="absolute -top-1.5 -right-2 bg-yellow-400 text-[#1e40af] text-[10px] font-black h-5 w-5 flex items-center justify-center rounded-full border-2 border-[#1e40af]">
                  {cartItems.length}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Bottom Nav (Desktop) */}
        <div className="bg-white shadow-md border-b border-gray-100 hidden md:block">
          <div className="container mx-auto px-4 h-12 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/categories" className="flex items-center gap-2 text-[#1e40af] font-black text-sm group border-r pr-8 border-gray-100">
                <Menu size={20} strokeWidth={3} /> SHOP BY CATEGORY <ChevronDown size={16} className="text-yellow-500" />
              </Link>
              <div className="flex items-center gap-8 text-[13px] text-gray-600 font-bold uppercase">
                {["Electronics", "Mobiles", "Laptops", "Gaming"].map((item) => (
                  <Link key={item} to={`/${item.toLowerCase()}`} className="hover:text-[#1e40af] transition-colors">{item}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Full Screen Menu */}
        <div className={`fixed inset-0 bg-[#0f172a]/60 backdrop-blur-sm z-[200] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <div className={`fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            
            {/* Menu Header */}
            <div className="bg-[#1e40af] p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-white/20 rounded-full"><User size={24}/></div>
                 <div>
                   <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest">Welcome Guest</p>
                   <Link to="/login" className="font-bold text-lg hover:text-yellow-400">Login / Register</Link>
                 </div>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-white/10 rounded-full"><X size={28} /></button>
            </div>

            {/* Menu Content */}
            <div className="overflow-y-auto h-full pb-32">
              
              {/* Account Section */}
              <div className="p-6 border-b border-gray-100">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 italic">My Account</h4>
                <div className="space-y-4">
                  {menuItems.map((item, i) => (
                    <Link key={i} to={item.path || "#"} className="flex items-center justify-between group cursor-pointer text-gray-700 hover:text-[#1e40af]">
                      <div className="flex items-center gap-4">
                        <span className="text-gray-300 group-hover:text-[#1e40af]">{item.icon}</span>
                        <span className="font-bold text-sm">{item.label}</span>
                      </div>
                      <ChevronRight size={14} className="text-gray-300" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories Section (تمت إعادتها) */}
              <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                <h4 className="text-[10px] font-black text-[#1e40af] uppercase tracking-widest mb-4 italic">Shop Categories</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Electronics", "Mobiles", "Laptops", "Gaming", "Beauty", "Home"].map((cat) => (
                    <Link key={cat} to={`/${cat.toLowerCase()}`} className="bg-white p-3 rounded-xl border border-gray-100 text-xs font-black text-center uppercase tracking-tighter hover:border-[#1e40af] transition-all">
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Support & Sell (تمت إعادتها) */}
              <div className="p-6 space-y-4">
                <Link to="/sell" className="flex items-center gap-4 p-4 bg-yellow-50 rounded-2xl border border-yellow-100 group transition-all">
                  <div className="p-2 bg-yellow-400 rounded-lg text-[#1e40af]"><Store size={20}/></div>
                  <span className="font-black text-[#1e40af] text-sm uppercase tracking-widest">Sell With US</span>
                </Link>
                <Link to="/contact" className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="p-2 bg-[#1e40af] rounded-lg text-white"><PhoneCall size={20}/></div>
                  <span className="font-black text-[#1e40af] text-sm uppercase tracking-widest">Contact Support</span>
                </Link>
              </div>

              {/* Apps Download (تمت إعادتها) */}
              <div className="p-6 text-center">
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Get the App</p>
                 <div className="flex justify-center gap-4">
                    <img src="/img/apple-store.webp" alt="ios" className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" />
                    <img src="/img/google-play.webp" alt="android" className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" />
                 </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* User Dashboard Bottom Sheet (Mobile) */}
      {isUserMenuOpen && (
        <div className="fixed inset-0 z-[210] md:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsUserMenuOpen(false)}></div>
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[2.5rem] p-8 animate-in slide-in-from-bottom duration-300">
             <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"></div>
             <h3 className="text-xl font-black text-[#1e40af] uppercase italic tracking-tighter mb-6">User Dashboard</h3>
             <div className="space-y-6">
                {menuItems.map((item, i) => (
                  <Link key={i} to={item.path || "#"} className="flex items-center gap-4 text-gray-700 font-bold">
                    <span className="text-[#1e40af] bg-blue-50 p-2 rounded-lg">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
                <Link to="/login" className="flex items-center justify-center gap-2 w-full bg-[#1e40af] text-white py-4 rounded-2xl font-black uppercase shadow-xl mt-4">
                   <LogIn size={20}/> Login Now
                </Link>
             </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;