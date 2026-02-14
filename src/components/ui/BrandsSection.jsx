import React from 'react';
// 1. استيراد مكونات Swiper
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// 2. استيراد ستايلات Swiper الأساسية
import 'swiper/css';

const brands = [
  "/img/or-1.png", "/img/or-2.png", "/img/or-3.png", 
  "/img/or-5.png", "/img/or-6.png", "/img/or-7.png", 
  "/img/or-8.png", "/img/or-9.png", "/img/or-10.png",
  "/img/or-11.png", "/img/or-12.png"
];

const BrandsSection = () => {
  return (
    <div className="container mx-auto px-4 my-10 md:my-16 font-sans">
      {/* عنوان القسم بتصميم NewTech الموحد */}
      <h3 className="text-lg md:text-2xl font-black text-[#0f172a] uppercase italic mb-8 tracking-tighter px-2">
        Our Official <span className="text-[#1e40af]">Partners</span>
      </h3>

      <div className="bg-white py-8 md:py-10 rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden px-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3} // الافتراضي للموبايل الصغير
          loop={true}
          speed={3000} // سرعة الحركة لجعلها تبدو مستمرة (Continuous)
          autoplay={{
            delay: 0, // 0 تجعل الحركة لا تتوقف أبداً (Smooth Scroll effect)
            disableOnInteraction: false,
          }}
          breakpoints={{
            // التجاوب الهندسي حسب قياس الشاشة
            480: { slidesPerView: 4, spaceBetween: 40 },
            768: { slidesPerView: 5, spaceBetween: 50 },
            1024: { slidesPerView: 7, spaceBetween: 60 },
            1280: { slidesPerView: 8, spaceBetween: 70 },
          }}
          className="brands-swiper"
        >
          {brands.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-12 md:h-16 group">
                <img 
                  src={img} 
                  alt={`Brand Logo ${index}`} 
                  className="max-h-full max-w-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer transform group-hover:scale-110" 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandsSection;