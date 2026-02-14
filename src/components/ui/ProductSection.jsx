import { Heart, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

// 1. استيراد Swiper
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// 2. استيراد ستايلات Swiper
import 'swiper/css';
import 'swiper/css/navigation';

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const { addToCart } = useCart();

  return (
    <div className="py-4 h-full">
      <div className="group bg-white rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden h-full">
        <Link to={`/product/${product.id}`} className="flex flex-col flex-1">
          <div className="relative aspect-square bg-gray-50/50 flex items-center justify-center p-4 group-hover:bg-white transition-colors">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="absolute top-3 right-3 bg-[#FFD43B] p-2.5 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all z-10 md:opacity-0 md:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
            >
              <ShoppingCart size={18} className="text-[#1e40af]" strokeWidth={2.5} />
            </button>
          </div>

          <div className="p-4 flex flex-col flex-1">
            <h4 className="text-xs md:text-sm font-black text-[#0f172a] line-clamp-2 mb-2 leading-tight uppercase italic tracking-tighter group-hover:text-[#1e40af]">
              {product.name}
            </h4>
            <p className="hidden md:block text-[11px] text-gray-400 line-clamp-2 mb-3 leading-relaxed">
              {product.desc}
            </p>

            <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-50">
              <p className="text-sm md:text-xl font-black text-[#1e40af] italic tracking-tighter">
                {product.price.replace("USD", "").trim()}
                <span className="text-[10px] ml-1 text-gray-400 not-italic font-bold">USD</span>
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setLiked(!liked);
                }}
                className="p-1.5 rounded-full hover:bg-red-50 transition-all active:scale-125"
              >
                <Heart size={18} className={liked ? "fill-red-500 text-red-500" : "text-gray-200"} />
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
    <div className="max-w-7xl mx-auto px-4 my-10 w-full overflow-hidden font-sans">
      <div className="flex justify-between items-end mb-6 border-b-2 border-gray-50 pb-4">
        <h3 className="text-lg md:text-2xl font-black text-[#0f172a] uppercase italic tracking-tighter">
          {title}
        </h3>
        <button className="text-[#1e40af] font-black text-[10px] md:text-xs uppercase tracking-widest border-b-2 border-[#1e40af] hover:text-yellow-500 hover:border-yellow-500 transition-all">
          View All Gear
        </button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={15} // المسافة بين الكروت
        slidesPerView={1.3} // الموبايل الافتراضي
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={true}
        breakpoints={{
          // التجاوب الهندسي
          480: { slidesPerView: 2.2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 20 },
        }}
        className="product-swiper pb-8"
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