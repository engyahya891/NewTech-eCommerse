import React from 'react';
import Slider from "react-slick";

// تأكد من أن هذه المصفوفة تحتوي على جميع صورك
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
  { name: "Watches", img: "/img/cat-1.png" }, // أضفت تكراراً لتجربة الحركة المستمرة
  { name: "Tools", img: "/img/cat-2.png" },
];

const CategoryCircles = () => {
  const settings = {
    dots: false,
    infinite: true,        // حركة لا نهائية
    slidesToShow: 9,       // عدد كبير للشاشات الكبيرة ليملأ العرض
    slidesToScroll: 1,     // يتحرك دائرة واحدة كل مرة لنعومة الحركة
    autoplay: true,        // تفعيل التحرك التلقائي
    autoplaySpeed: 2000,   // السرعة (كل 2 ثانية يتحرك)
    speed: 500,            // سرعة الانتقال نفسها (ناعمة)
    cssEase: "linear",     // نوع الحركة
    responsive: [
      {
        breakpoint: 1536, // شاشات 2xl
        settings: { slidesToShow: 8 }
      },
      {
        breakpoint: 1280, // شاشات xl
        settings: { slidesToShow: 7 }
      },
      {
        breakpoint: 1024, // لابتوب عادي
        settings: { slidesToShow: 5 }
      },
      {
        breakpoint: 768,  // تابلت
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 640,  // موبايل كبير
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,  // موبايل صغير
        settings: { slidesToShow: 2 } // دائرتين فقط للموبايل الصغير جداً
      }
    ]
  };

  return (
    <div className="w-full py-8 bg-white"> {/* w-full للعرض الكامل */}
      <div className="px-4 md:px-8"> {/* حواف جانبية بسيطة لجمالية التصميم */}
        <h3 className="text-xl font-bold text-gray-800 mb-6 px-2">All Category</h3>
        
        <Slider {...settings}>
          {categories.map((cat, index) => (
            <div key={index} className="px-2 outline-none"> {/* px-2 لعمل مسافة بين الدوائر */}
              <div className="flex flex-col items-center justify-center text-center cursor-pointer group">
                
                {/* الدائرة الصفراء */}
                <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-[3px] border-[#FFD43B] p-1 bg-white hover:shadow-lg transition-all duration-300 transform group-hover:scale-105 overflow-hidden flex items-center justify-center">
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full h-full object-contain rounded-full" 
                  />
                </div>
                
                {/* الاسم */}
                <p className="mt-3 text-sm md:text-base font-medium text-gray-700 group-hover:text-[#e3bd00] transition-colors">
                  {cat.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryCircles;