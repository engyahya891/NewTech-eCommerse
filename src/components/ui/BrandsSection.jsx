import React from 'react';
import Slider from "react-slick";

// مصفوفة صور البراندات (تأكد من وجود الصور في مجلد public/img)
// بناءً على كودك القديم، الصور كانت باسم or-1.png, or-2.png ...
const brands = [
  "/img/or-1.png", "/img/or-2.png", "/img/or-3.png", 
  "/img/or-5.png", "/img/or-6.png", "/img/or-7.png", 
  "/img/or-8.png", "/img/or-9.png", "/img/or-10.png",
  "/img/or-11.png", "/img/or-12.png"
];

const BrandsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // عدد البراندات الظاهرة
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // لا نحتاج أسهم للبراندات عادة
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 600, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
  };

  return (
    <div className="container mx-auto px-4 my-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4 px-2">Our Brands</h3>
      <div className="bg-white py-4 rounded-lg border border-gray-100">
        <Slider {...settings} className="px-4">
          {brands.map((img, index) => (
            <div key={index} className="px-4 outline-none flex items-center justify-center h-16">
              <img 
                src={img} 
                alt={`Brand ${index}`} 
                className="max-h-12 max-w-full object-contain mx-auto opacity-70 hover:opacity-100 transition-opacity cursor-pointer" 
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandsSection;