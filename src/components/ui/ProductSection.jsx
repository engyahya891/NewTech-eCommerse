import { BarChart3, Eye, Heart, ShoppingCart, Zap } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

// 1. استيراد Swiper
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// 2. استيراد ستايلات Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist, isInWishlist } = useCart();
  const isLiked = isInWishlist(product.id);

  return (
    <div className="py-6 h-full group/card">
      <div className="relative bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-700 flex flex-col overflow-hidden h-full group">
        
        {/* Badge */}
        <div className="absolute top-5 left-5 z-20 flex flex-col gap-2">
           <span className="bg-[#0f172a] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg">
             <Zap size={10} className="text-yellow-400 fill-yellow-400" /> New Tech
           </span>
        </div>

        <Link to={`/product/${product.id}`} className="flex flex-col flex-1">
          {/* منطقة الصورة */}
          <div className="relative aspect-square bg-gradient-to-br from-gray-50/50 to-white flex items-center justify-center p-8 overflow-hidden">
            <div className="absolute inset-0 bg-blue-50 opacity-0 md:group-hover:opacity-40 rounded-full scale-0 md:group-hover:scale-150 transition-all duration-1000"></div>
            
            <img
              src={product.image}
              alt={product.name}
              className="relative z-10 max-h-full max-w-full object-contain transition-all duration-1000 group-hover:scale-110 md:group-hover:-rotate-3 drop-shadow-xl"
            />

            {/* أزرار الإجراءات: ظاهرة في الموبايل، وتتحرك في الديسكتوب */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 transition-transform duration-500 z-30 
                            translate-x-0 md:translate-x-12 md:group-hover:translate-x-0">
                <button 
                  onClick={(e) => { e.preventDefault(); }}
                  className="p-3 bg-white rounded-2xl shadow-xl text-gray-400 hover:text-[#1e40af] hover:scale-110 transition-all"
                >
                    <Eye size={18} />
                </button>
                <button 
                  onClick={(e) => { e.preventDefault(); addToWishlist(product); }}
                  className={`p-3 bg-white rounded-2xl shadow-xl transition-all hover:scale-110 ${isLiked ? "text-red-500" : "text-gray-400"}`}
                >
                    <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
                </button>
            </div>
          </div>

          <div className="p-6 pt-2 flex flex-col flex-1 relative z-10">
            {/* Rating Bar */}
            <div className="flex items-center gap-2 mb-3">
               <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-1 h-3 rounded-full ${i < 4 ? "bg-yellow-400" : "bg-gray-100"}`}></div>
                  ))}
               </div>
               <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Performance Rated</span>
            </div>

            <h4 className="text-sm md:text-base font-black text-[#0f172a] line-clamp-2 mb-2 leading-snug uppercase italic tracking-tighter group-hover:text-[#1e40af] transition-colors">
              {product.name}
            </h4>
            
            {/* التعديل الجوهري: الوصف ظاهر في الموبايل ومخفي في الديسكتوب حتى الـ hover */}
            <p className="text-[11px] text-gray-400 line-clamp-2 mb-6 font-medium leading-relaxed transition-opacity duration-500 
                          opacity-100 md:opacity-0 md:group-hover:opacity-100">
              {product.desc}
            </p>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex flex-col">
                 <span className="text-[9px] font-black text-gray-300 uppercase tracking-[0.2em] mb-0.5">MSRP Value</span>
                 <p className="text-xl font-black text-[#1e40af] italic tracking-tighter flex items-baseline gap-1">
                   {typeof product.price === 'string' ? product.price.replace(/[^\d.]/g, "") : product.price}
                   <span className="text-[10px] not-italic font-black text-blue-300">USD</span>
                 </p>
              </div>
              
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product);
                }}
                className="bg-[#1e40af] hover:bg-[#0f172a] p-4 rounded-2xl shadow-lg shadow-blue-100 text-white transform hover:-translate-y-1 active:scale-90 transition-all"
              >
                <ShoppingCart size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const ProductSection = ({ title, products }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-16 w-full overflow-visible font-sans">
      {/* رأس القسم المطور */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div className="relative">
           <div className="absolute -top-6 left-0 flex items-center gap-2">
              <div className="h-1 w-8 bg-yellow-400 rounded-full"></div>
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Hardware Catalog</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-[#0f172a] uppercase italic tracking-tighter">
             {title.split(' ')[0]} <span className="text-[#1e40af]">{title.split(' ').slice(1).join(' ')}</span>
           </h3>
        </div>
        
        <Link to="/shop" className="group flex items-center gap-4 bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-500 transition-all">
           <span className="text-[#0f172a] font-black text-xs uppercase tracking-widest group-hover:text-[#1e40af]">Explore All Engine</span>
           <div className="bg-blue-50 p-2 rounded-xl group-hover:bg-[#1e40af] group-hover:text-white transition-colors">
              <BarChart3 size={16} />
           </div>
        </Link>
      </div>

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1.2}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          480: { slidesPerView: 2.1, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 25 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
          1280: { slidesPerView: 5, spaceBetween: 30 },
        }}
        className="product-swiper !pb-14 !px-2"
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <ProductCard product={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSection;