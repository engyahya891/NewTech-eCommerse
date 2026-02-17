import React from "react";
// 1. استيراد Swiper والموديولات المطلوبة
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Cpu, Zap, ChevronRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

// 2. استيراد ستايلات Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  // بيانات السلايدر (أوصاف تقنية حقيقية)
  const slides = [
    {
      title: "Ultimate GPU Power",
      subtitle: "NVIDIA GeForce RTX 4090",
      desc: "Experience the next generation of AI-powered graphics and extreme performance for engineering workflows.",
      img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=1600&q=80",
      accent: "NEW ARRIVAL",
      color: "blue"
    },
    {
      title: "Engineering Precision",
      subtitle: "Custom Mechanical Gear",
      desc: "Optimized for speed and accuracy. Premium hardware designed by engineers, for engineers.",
      img: "https://images.unsplash.com/photo-1618384881928-dfcc81938b1e?w=1600&q=80",
      accent: "EXCLUSIVE",
      color: "yellow"
    },
    {
      title: "Smart Ecosystem",
      subtitle: "AI Integrated Systems",
      desc: "Connect your workspace with the most advanced IoT hardware and smart home appliances.",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&q=80",
      accent: "SMART TECH",
      color: "blue"
    }
  ];

  return (
    <div className="w-full relative group/hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade" // تأثير التلاشي يعطي فخامة أكثر من السحب العادي
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
        }}
        className="h-[450px] md:h-[650px] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden">
              
              {/* الصورة مع تأثير التكبير التدريجي */}
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover transform scale-105 animate-slow-zoom"
              />

              {/* طبقة التدرج اللوني (Overlay) لإبراز النصوص */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent z-10"></div>

              {/* المحتوى النصي بتصميم HUD */}
              <div className="absolute inset-0 z-20 container mx-auto px-6 flex flex-col justify-center items-start">
                
                <div className="space-y-6 max-w-2xl">
                  {/* شارة القسم */}
                  <div className="flex items-center gap-3 animate-fade-down">
                    <div className="h-[2px] w-12 bg-yellow-400 rounded-full"></div>
                    <span className="text-yellow-400 font-black text-[10px] md:text-xs tracking-[0.4em] uppercase">
                      {slide.accent}
                    </span>
                  </div>

                  {/* العناوين */}
                  <div className="space-y-2">
                    <h3 className="text-blue-400 font-bold text-lg md:text-2xl italic tracking-tighter uppercase animate-fade-right">
                      {slide.title}
                    </h3>
                    <h2 className="text-4xl md:text-7xl font-black text-white leading-[0.9] uppercase italic tracking-tighter animate-fade-up">
                      {slide.subtitle.split(' ')[0]} <br className="hidden md:block" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                         {slide.subtitle.split(' ').slice(1).join(' ')}
                      </span>
                    </h2>
                  </div>

                  {/* الوصف */}
                  <p className="text-gray-400 text-xs md:text-lg font-medium leading-relaxed max-w-lg md:opacity-80 animate-fade-up delay-200">
                    {slide.desc}
                  </p>

                  {/* الأزرار التقنية */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 animate-fade-up delay-300">
                    <Link to="/shop" className="bg-[#1e40af] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-2xl shadow-blue-900/40 hover:bg-[#0f172a] hover:-translate-y-1 transition-all group">
                      Initialize Gear <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl">
                       <ShieldCheck className="text-yellow-400" size={20} />
                       <div className="flex flex-col">
                          <span className="text-[9px] font-black text-blue-200 uppercase leading-none">Status</span>
                          <span className="text-[10px] font-bold text-white uppercase">In Stock</span>
                       </div>
                    </div>
                  </div>
                </div>

                {/* عناصر ديكورية (System Stats) */}
                <div className="absolute bottom-10 right-10 hidden lg:flex gap-8 opacity-20">
                   <div className="flex flex-col items-end">
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">Efficiency</span>
                      <span className="text-2xl font-black text-blue-400 italic">99.8%</span>
                   </div>
                   <div className="flex flex-col items-end border-l border-white/20 pl-8">
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">Protocol</span>
                      <span className="text-2xl font-black text-yellow-400 italic">SSL-X</span>
                   </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أزرار التحكم المخصصة */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-30 opacity-0 group-hover/hero:opacity-100 transition-opacity">
         <button className="hero-prev p-3 bg-white/10 hover:bg-[#1e40af] text-white rounded-2xl border border-white/10 backdrop-blur-md transition-all">
            <ChevronRight size={24} className="rotate-180" />
         </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-30 opacity-0 group-hover/hero:opacity-100 transition-opacity">
         <button className="hero-next p-3 bg-white/10 hover:bg-[#1e40af] text-white rounded-2xl border border-white/10 backdrop-blur-md transition-all">
            <ChevronRight size={24} />
         </button>
      </div>
    </div>
  );
};

export default HeroSlider;