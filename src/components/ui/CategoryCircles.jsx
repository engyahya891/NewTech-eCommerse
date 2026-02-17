import React from "react";
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// استخدام أيقونات CDN احترافية بدل الصور المحلية لضمان الجودة والسرعة
const categories = [
  { name: "Electronics", img: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png" },
  { name: "Mobiles", img: "https://cdn-icons-png.flaticon.com/512/2586/2586488.png" },
  { name: "Beauty", img: "https://cdn-icons-png.flaticon.com/512/3163/3163202.png" },
  { name: "Home", img: "https://cdn-icons-png.flaticon.com/512/10473/10473665.png" },
  { name: "Fashion", img: "https://cdn-icons-png.flaticon.com/512/3050/3050231.png" },
  { name: "Sports", img: "https://cdn-icons-png.flaticon.com/512/857/857418.png" },
  { name: "Baby", img: "https://cdn-icons-png.flaticon.com/512/4117/4117101.png" },
  { name: "Laptops", img: "https://cdn-icons-png.flaticon.com/512/428/428001.png" },
  { name: "Supermarket", img: "https://cdn-icons-png.flaticon.com/512/3081/3081918.png" },
  { name: "Gallery", img: "https://cdn-icons-png.flaticon.com/512/1040/1040241.png" },
];

const CategoryCircles = () => {
  return (
    <div className="w-full py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden font-sans relative">
      
      {/* خلفية هندسية خفيفة */}
      <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: 'radial-gradient(#1e40af 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* رأس القسم بتصميم هندسي */}
        <div className="flex items-center gap-3 mb-10">
           <div className="h-1 w-8 bg-yellow-400 rounded-full animate-pulse"></div>
           <h3 className="text-xl md:text-3xl font-black text-[#0f172a] uppercase italic tracking-tighter">
             Explore <span className="text-[#1e40af]">Tech Portals</span>
           </h3>
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={15}
          slidesPerView={3.2} // عرض جزء من الرابعة في الموبايل
          freeMode={true}
          loop={true}
          speed={5000} // سرعة بطيئة وانسيابية جداً
          autoplay={{
            delay: 0, // حركة مستمرة بدون توقف
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // يتوقف عند التمرير للتركيز
          }}
          breakpoints={{
            480: { slidesPerView: 4.5, spaceBetween: 20 },
            768: { slidesPerView: 6, spaceBetween: 25 },
            1024: { slidesPerView: 8, spaceBetween: 30 },
            1280: { slidesPerView: 9, spaceBetween: 35 },
          }}
          className="category-swiper-linear py-4" // إضافة بادينغ للسماح بالظلال
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center cursor-pointer group">
                
                {/* الدائرة المزدوجة مع تأثيرات النيون والدوران */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 
                                rounded-full flex items-center justify-center p-1 z-10
                                transition-all duration-700 group-hover:scale-110">
                  
                  {/* الحلقة الخارجية الدوارة */}
                  <div className="absolute inset-0 rounded-full border-[3px] border-gray-100 border-t-[#1e40af] border-r-yellow-400 
                                  group-hover:animate-spin-slow transition-all duration-1000 group-hover:border-[4px]"></div>
                  
                  {/* الحلقة الداخلية الثابتة مع الظل */}
                  <div className="absolute inset-2 rounded-full bg-white shadow-sm group-hover:shadow-[0_0_20px_rgba(30,64,175,0.2)] transition-shadow duration-500"></div>

                  {/* الصورة داخل الدائرة */}
                  <div className="relative z-10 w-full h-full rounded-full p-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </div>
                </div>

                {/* اسم التصنيف مع تأثير ظهور */}
                <div className="mt-4 relative overflow-hidden">
                  <p className="text-[10px] sm:text-xs md:text-sm font-black text-gray-400 
                                uppercase tracking-[0.15em] leading-tight truncate w-full px-1 
                                transition-all duration-500 group-hover:text-[#1e40af] group-hover:-translate-y-1">
                    {cat.name}
                  </p>
                  {/* خط أزرق يظهر تحت الاسم عند الهوفر */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#1e40af] -translate-x-1/2 group-hover:w-1/2 transition-all duration-500"></div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryCircles;