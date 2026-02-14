import { ChevronRight, Filter, Home, LayoutGrid } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import ProductSection from "../components/ui/ProductSection";
import { largeCategoryGrid, newArrivalsData } from "../data/index";

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">
      <Header />

      {/* 1. Breadcrumbs - متجاوب (يصغر الخط في الجوال) */}
      <div className="container mx-auto px-4 py-3 md:py-5">
        <div className="flex items-center gap-2 text-[10px] md:text-sm text-gray-500 overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
          <Link
            to="/"
            className="text-[#1e40af] hover:text-yellow-500 flex items-center gap-1"
          >
            <Home size={16} /> Home
          </Link>
          <ChevronRight size={14} />
          <span className="font-bold text-gray-800">Electronics & Tools</span>
        </div>
      </div>

      <div className="container mx-auto px-2 md:px-4 flex flex-col lg:flex-row gap-4 md:gap-8 pb-20">
        {/* 2. Sidebar & Mobile Filters */}
        <aside className="w-full lg:w-1/4">
          {/* في الجوال: تظهر كأزرار أفقية قابلة للتمرير */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 no-scrollbar">
            {[
              "Televisions",
              "Speakers",
              "Appliances",
              "Gaming",
              "Cameras",
              "Tools",
            ].map((item) => (
              <button
                key={item}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold whitespace-nowrap text-[#1e40af] active:bg-[#1e40af] active:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* في الديسكتوب: القائمة الجانبية الكلاسيكية */}
          <div className="hidden lg:block space-y-6 sticky top-24">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-black text-[#1e40af] mb-4 flex items-center gap-2 italic uppercase">
                <Filter size={18} className="text-yellow-500" /> Category
              </h3>
              <ul className="space-y-3">
                {[
                  "Televisions",
                  "Speakers",
                  "Camera Accessories",
                  "Small Appliances",
                  "Large Appliances",
                  "Gaming",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to="#"
                      className="flex items-center justify-between group py-1 text-sm text-gray-600 hover:text-[#1e40af] transition-all"
                    >
                      <span>{item}</span>
                      <ChevronRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-yellow-500"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1e40af] rounded-2xl shadow-lg p-6 text-white overflow-hidden relative group">
              <div className="relative z-10">
                <h4 className="font-black italic text-xl mb-2">MEGA SALE</h4>
                <p className="text-xs text-blue-100 mb-4">
                  Up to 50% off on all tech accessories
                </p>
                <button className="bg-yellow-400 text-[#1e40af] px-4 py-2 rounded-lg font-bold text-xs uppercase hover:bg-white transition-colors">
                  Shop Now
                </button>
              </div>
              <LayoutGrid
                size={120}
                className="absolute -right-10 -bottom-10 text-white/10 group-hover:scale-110 transition-transform"
              />
            </div>
          </div>
        </aside>

        {/* 3. Main Content Area */}
        <main className="w-full lg:w-3/4">
          {/* سلايدر المنتجات - متجاوب تلقائياً لأنه يستخدم المكون الذي أصلحناه */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100 mb-6 md:mb-10">
            <ProductSection title="Hot Deals" products={newArrivalsData} />
          </div>

          {/* شبكة التصنيفات - التعديل الجوهري للتجاوب */}
          <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-lg md:text-2xl font-black text-[#1e40af] uppercase italic">
                Shop By <span className="text-yellow-500">Category</span>
              </h2>
              <div className="hidden md:block flex-1 h-[1px] bg-gray-200 mx-6"></div>
            </div>

            {/* نظام الـ Grid الذكي: 
                - موبايل صغير: 2 أعمدة (grid-cols-2)
                - تابلت: 3 أعمدة (md:grid-cols-3)
                - شاشة كبيرة: 4 أعمدة (lg:grid-cols-4)
            */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {largeCategoryGrid.map((cat) => (
                <div key={cat.id} className="group flex flex-col items-center">
                  <div className="w-full bg-white rounded-xl md:rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    {/* حاوية الصورة - تم تصغير الصورة للـ 60% وتوسيطها */}
                    <div className="relative aspect-square flex items-center justify-center bg-gray-50/50 p-4">
                      <img
                        src={cat.img}
                        alt={cat.name}
                        className="w-[85%] h-[85%] object-contain group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Overlay يظهر عند اللمس أو الهوفر - تم تكييفه ليغطي الكارت */}
                      <div className="absolute inset-0 bg-[#1e40af]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                        <span className="bg-[#1e40af] text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          Explore Now
                        </span>
                      </div>
                    </div>

                    {/* عنوان التصنيف */}
                    <div className="p-3 md:p-4 text-center bg-white border-t border-gray-50">
                      <h5 className="text-[11px] md:text-sm font-bold text-gray-800 group-hover:text-[#1e40af] transition-colors line-clamp-1 uppercase tracking-tighter">
                        {cat.name}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
