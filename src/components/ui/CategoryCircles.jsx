import React from "react";
// 1. استيراد Swiper
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// 2. استيراد ستايلات Swiper
import 'swiper/css';
import 'swiper/css/free-mode';

const categories = [
  { name: "Electronics", img: "/img/cat-1.png" },
  { name: "Mobiles", img: "/img/cat-2.png" },
  { name: "Beauty", img: "/img/cat-3.png" },
  { name: "Home", img: "/img/cat-4.png" },
  { name: "Fashion", img: "/img/cat-5.png" },
  { name: "Sports", img: "/img/cat-6.png" },
  { name: "Baby", img: "/img/cat-7.png" },
  { name: "Laptops", img: "/img/cat-8.png" },
  { name: "Supermarket", img: "/img/cat-9.png" },
  { name: "Gallery", img: "/img/cat-10.png" },
];

const CategoryCircles = () => {
  return (
    <div className="w-full py-6 md:py-10 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* عنوان القسم بلمسة NewTech */}
        <h3 className="text-lg md:text-2xl font-black text-[#0f172a] uppercase mb-8 tracking-tighter italic px-2">
          Shop By <span className="text-[#1e40af]">Category</span>
        </h3>

        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={10} // المسافة بين الدوائر
          slidesPerView={3.5} // الافتراضي للموبايل (يظهر طرف الرابعة للتحفيز على السحب)
          freeMode={true} // يجعل السحب حراً وناعماً
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // التجاوب الهندسي حسب حجم الشاشة
            480: { slidesPerView: 4.5, spaceBetween: 15 },
            768: { slidesPerView: 6, spaceBetween: 20 },
            1024: { slidesPerView: 8, spaceBetween: 25 },
            1280: { slidesPerView: 9, spaceBetween: 30 },
          }}
          className="category-swiper"
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center cursor-pointer group pb-2">
                
                {/* الدائرة الصفراء - حجم متجاوب */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 
                  rounded-full border-[3px] border-[#FFD43B] p-1 bg-white 
                  flex items-center justify-center
                  transition-all duration-500 
                  group-hover:scale-110 group-hover:rotate-6 shadow-sm group-hover:shadow-xl overflow-hidden">

                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-contain rounded-full transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* اسم التصنيف */}
                <p className="mt-3 text-[10px] sm:text-xs md:text-sm font-black text-gray-500 
                  uppercase tracking-tighter group-hover:text-[#1e40af] transition-colors leading-tight truncate w-full px-1">
                  {cat.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryCircles;