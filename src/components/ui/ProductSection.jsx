import { Heart, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom"; // استيراد Link للربط بين الصفحات
import Slider from "react-slick";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const { addToCart } = useCart();

  return (
    <div className="px-1 py-2 h-full outline-none">
      <div className="group bg-white rounded-lg border border-gray-100 p-2 md:p-4 hover:shadow-xl transition-all duration-300 h-[380px] md:h-[450px] flex flex-col relative overflow-hidden">
        
        {/* رابط يغلف الصورة والاسم فقط لكي لا يتعارض مع أزرار الإضافة */}
        <Link to={`/product/${product.id}`} className="flex-1 flex flex-col cursor-pointer">
          {/* الصورة */}
          <div className="h-32 md:h-48 flex items-center justify-center mb-2 bg-gray-50 rounded-md overflow-hidden relative">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* النصوص */}
          <div className="flex-1 flex flex-col">
            <h4 className="text-[11px] md:text-sm font-bold text-gray-800 line-clamp-2 mb-1 leading-tight min-h-[30px] group-hover:text-[#1e40af] transition-colors">
              {product.name}
            </h4>

            <p className="text-[10px] md:text-[11px] text-gray-500 line-clamp-2 leading-relaxed mb-2">
              {product.desc}
            </p>
          </div>
        </Link>

        {/* زر السلة - خارج الرابط ليعمل بشكل مستقل */}
        <button
          onClick={(e) => {
            e.preventDefault(); // منع الانتقال لصفحة المنتج عند الضغط على الزر
            addToCart(product);
          }}
          className="absolute top-[110px] md:top-[170px] right-3 bg-[#FFD43B] p-2 rounded-full shadow-md z-10 hover:scale-110 active:scale-95 transition-all md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
        >
          <ShoppingCart size={18} className="text-[#1e40af]" />
        </button>

        {/* السعر والقلب */}
        <div className="mt-auto flex items-center justify-between border-t pt-2 border-gray-50">
          <div>
            <p className="text-sm md:text-lg font-extrabold text-[#1e40af] leading-none tracking-tighter">
              {product.price.replace("USD", "").trim()}
              <span className="text-[9px] md:text-xs ml-1 font-normal text-gray-500">
                USD
              </span>
            </p>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
            className="p-1 rounded-full hover:bg-red-50 transition-all active:scale-125"
          >
            <Heart
              size={18}
              className={`transition-colors duration-300 ${
                liked ? "fill-red-500 text-red-500" : "text-gray-300"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductSection = ({ title, products }) => {
  const settings = {
    dots: false,
    infinite: products.length > 2,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 2, arrows: false } },
    ],
  };

  return (
    <div className="container mx-auto px-2 md:px-4 my-8 md:my-12 font-sans">
      <div className="flex justify-between items-center mb-4 md:mb-6 border-b pb-2 md:pb-3 px-2 border-gray-100">
        <h3 className="text-sm md:text-xl font-black text-[#1e40af] uppercase italic tracking-tighter">
          {title}
        </h3>
        {/* تغيير اللون للأزرق الخاص بالشركة */}
        <button className="text-[#1e40af] font-black text-[10px] md:text-sm hover:text-yellow-500 transition-colors uppercase tracking-widest">
          View All
        </button>
      </div>
      <Slider {...settings}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSection;