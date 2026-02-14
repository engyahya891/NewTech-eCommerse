import {
    CheckCircle,
    Heart,
    Info,
    Share2,
    ShieldCheck,
    ShoppingCart,
    Star,
    Truck
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import { useCart } from '../context/CartContext';
// استيراد كافة البيانات
import * as allData from '../data/index';

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState(0);

  useEffect(() => {
    // 1. تجميع مصفوفات المنتجات فقط (تجنب الصور والخدمات)
    const productArrays = [
      allData.newArrivalsData,
      allData.beautyData,
      allData.tvData,
      allData.mobileData,
      allData.gamingData,
      allData.headphoneData,
      allData.speakerData,
      allData.fragranceData,
      allData.kitchenData,
      allData.largeAppliancesData
    ];

    // 2. البحث عن المنتج في المصفوفات المدمجة
    const flatProducts = productArrays.flat();
    const foundProduct = flatProducts.find(p => p && p.id === parseInt(id));
    
    setProduct(foundProduct);
    window.scrollTo(0, 0); 
  }, [id]);

  // حماية: إذا لم يتم العثور على المنتج أو كان جارياً تحميله
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#1e40af] border-opacity-50 mb-4"></div>
        <p className="text-[#1e40af] font-bold animate-pulse uppercase tracking-widest">Searching for tech...</p>
      </div>
    );
  }

  // حساب السعر قبل التخفيض (لأغراض العرض فقط)
  const calculateOldPrice = () => {
    if (!product.price) return "0";
    const numericPrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
    return (numericPrice * 1.25).toFixed(0);
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      
      {/* Breadcrumbs - NewTech Style */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">
            <Link to="/" className="text-[#1e40af] hover:text-yellow-500 transition-colors">NewTech</Link>
            <span>/</span>
            <Link to="/categories" className="hover:text-[#1e40af]">Catalog</Link>
            <span>/</span>
            <span className="text-gray-800 truncate max-w-[100px] md:max-w-none">{product.name}</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          
          {/* الجانب الأيسر: معرض الصور الاحترافي */}
          <div className="space-y-6">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-16 flex items-center justify-center border-2 border-gray-50 shadow-sm relative group overflow-hidden">
              <div className="absolute top-6 left-6 bg-[#1e40af] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter italic">
                Official NewTech
              </div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-[350px] md:max-h-[500px] object-contain transition-transform duration-1000 group-hover:scale-110" 
              />
              <button className="absolute top-6 right-6 p-3 bg-white rounded-full shadow-lg text-gray-300 hover:text-red-500 hover:shadow-red-100 transition-all">
                <Heart size={22} />
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-4 justify-center md:justify-start">
              {[product.image, product.image, product.image].map((img, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedImg(i)}
                  className={`w-20 h-20 rounded-2xl border-2 cursor-pointer p-2 flex items-center justify-center transition-all ${selectedImg === i ? 'border-[#1e40af] bg-blue-50/50' : 'border-gray-50 hover:border-blue-200'}`}
                >
                  <img src={img} className="w-full h-full object-contain opacity-80" alt="thumbnail" />
                </div>
              ))}
            </div>
          </div>

          {/* الجانب الأيمن: تفاصيل المنتج */}
          <div className="flex flex-col">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                 <span className="bg-yellow-400 text-[#1e40af] text-[10px] font-black px-3 py-1 rounded-lg uppercase italic shadow-sm">Premium Gear</span>
                 <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                 </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black text-[#0f172a] leading-[1.1] uppercase italic tracking-tighter mb-6">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-6 mb-8">
                <span className="text-4xl md:text-6xl font-black text-[#1e40af] tracking-tighter italic">
                  {product.price}
                </span>
                <div className="flex flex-col">
                    <span className="text-gray-400 line-through text-sm md:text-lg font-bold">QAR {calculateOldPrice()}</span>
                    <span className="text-green-600 text-[10px] font-black uppercase">Save 25% Today</span>
                </div>
              </div>

              {/* Product Highlights Card */}
              <div className="p-6 bg-[#0f172a] rounded-[2rem] text-white mb-10 relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="flex items-center gap-2 font-black text-yellow-400 text-xs md:text-sm mb-4 uppercase tracking-[0.2em]">
                    <Info size={18} /> Specifications
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-medium">
                    {product.desc || "Equipped with the latest hardware architecture, this device delivers unparalleled performance for tech enthusiasts. Part of the NewTech 2026 exclusive collection."}
                  </p>
                </div>
                <div className="absolute -right-6 -bottom-6 opacity-[0.03] rotate-12 uppercase font-black text-8xl transition-transform group-hover:scale-110">TECH</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-5 mb-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => addToCart(product)}
                  className="flex-[2] bg-[#1e40af] text-white py-5 rounded-[1.5rem] font-black uppercase text-sm tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-blue-800 transition-all shadow-2xl shadow-blue-200 active:scale-95"
                >
                  <ShoppingCart size={22} strokeWidth={3} /> Add To Cart
                </button>
                <button className="flex-1 border-2 border-gray-100 text-gray-400 py-5 rounded-[1.5rem] font-black uppercase text-xs flex items-center justify-center gap-2 hover:bg-gray-50 hover:text-[#1e40af] transition-all">
                  <Share2 size={20} /> Share
                </button>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="h-[1px] w-8 bg-gray-200"></div>
                <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest italic">
                  Instant Dispatch to Doha & Al Wakrah
                </p>
                <div className="h-[1px] w-8 bg-gray-200"></div>
              </div>
            </div>

            {/* Trust Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-100 pt-10">
               {[
                 { icon: <Truck size={24}/>, title: "Express", sub: "1-Day Delivery" },
                 { icon: <ShieldCheck size={24}/>, title: "Global", sub: "2Y Int'l Warranty" },
                 { icon: <CheckCircle size={24}/>, title: "Certified", sub: "100% Authentic" },
               ].map((item, idx) => (
                 <div key={idx} className="bg-gray-50/50 p-4 rounded-2xl flex items-center gap-4 border border-transparent hover:border-[#FFD43B] transition-all cursor-default">
                    <div className="text-[#1e40af]">{item.icon}</div>
                    <div>
                      <h6 className="text-[10px] font-black text-[#0f172a] uppercase tracking-tighter">{item.title}</h6>
                      <p className="text-[9px] text-gray-500 font-bold leading-none mt-1">{item.sub}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;