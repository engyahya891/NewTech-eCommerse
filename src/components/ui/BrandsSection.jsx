import React from 'react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// مصفوفة البراندات (يمكنك استبدالها بروابط حقيقية لاحقاً لضمان الجودة)
const brands = [
  "/img/or-1.png", "/img/or-2.png", "/img/or-3.png", 
  "/img/or-5.png", "/img/or-6.png", "/img/or-7.png", 
  "/img/or-8.png", "/img/or-9.png", "/img/or-10.png",
  "/img/or-11.png", "/img/or-12.png"
];

const BrandsSection = () => {
  return (
    <div className="container mx-auto px-4 my-16 md:my-24 font-sans">
      
      {/* 1. رأس القسم بتصميم هندسي فخم */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
        <div className="flex items-center gap-2">
           <div className="h-1 w-10 bg-yellow-400 rounded-full"></div>
           <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">Global Ecosystem</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-[#0f172a] uppercase italic tracking-tighter">
          Our Strategic <span className="text-[#1e40af]">Tech Partners</span>
        </h3>
        <div className="hidden md:block flex-1 h-[1px] bg-gray-100 ml-4"></div>
      </div>

      {/* 2. حاوية السلايدر بتأثير Glassmorphism ناعم */}
      <div className="relative bg-white/50 backdrop-blur-sm py-12 rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden group/container">
        
        {/* تدرج لوني على الجوانب لإعطاء عمق بصري (Vignette Effect) */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          loop={true}
          speed={4000} // سرعة انسيابية جداً كأنها محرك يعمل
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // يتوقف عند وضع الماوس لزيادة التركيز
          }}
          breakpoints={{
            480: { slidesPerView: 4, spaceBetween: 50 },
            768: { slidesPerView: 5, spaceBetween: 70 },
            1024: { slidesPerView: 6, spaceBetween: 80 },
            1280: { slidesPerView: 8, spaceBetween: 90 },
          }}
          className="brands-swiper-linear"
        >
          {brands.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-14 md:h-20 group/brand px-4">
                <img 
                  src={img} 
                  alt={`Brand ${index}`} 
                  // التعديل الجوهري: 
                  // في الموبايل (default): grayscale-0 و opacity-100
                  // في الديسكتوب (md): يبدأ بـ grayscale ثم يظهر الألوان عند الـ hover
                  className="max-h-full max-w-full object-contain transition-all duration-700 cursor-pointer transform 
                             grayscale-0 opacity-100 scale-100
                             md:grayscale md:opacity-30 md:group-hover/brand:grayscale-0 md:group-hover/brand:opacity-100 md:group-hover/brand:scale-110" 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 3. تذييل تقني بسيط للقسم */}
      <div className="mt-8 flex justify-center">
         <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.5em] animate-pulse">
           NewTech Certified Hardware Supplies
         </p>
      </div>
    </div>
  );
};

export default BrandsSection;