import {
    Filter,
    Search,
    ShoppingCart, SlidersHorizontal,
    X
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import { useCart } from '../context/CartContext';
import * as allData from '../data/index';

const ProductListing = () => {
  const { addToCart } = useCart();
  
  // 1. تجميع كافة المنتجات من الداتا
  const allProducts = Object.values(allData).filter(item => Array.isArray(item) && typeof item[0]?.price === 'string').flat();

  // 2. States الخاصة بالفلترة
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // 3. منطق الفلترة (Filtering Logic)
  useEffect(() => {
    let result = [...allProducts];

    if (selectedCategory !== 'All') {
      // منطق تقريبي للبحث عن التصنيف في اسم المنتج أو مسار الصورة
      result = result.filter(p => p.name.toLowerCase().includes(selectedCategory.toLowerCase()) || p.image.includes(selectedCategory.toLowerCase()));
    }

    if (selectedBrand !== 'All') {
      result = result.filter(p => p.name.toLowerCase().includes(selectedBrand.toLowerCase()));
    }

    // منطق الترتيب (Sorting)
    if (sortBy === 'lowToHigh') {
      result.sort((a, b) => parseFloat(a.price.replace(/\D/g,'')) - parseFloat(b.price.replace(/\D/g,'')));
    } else if (sortBy === 'highToLow') {
      result.sort((a, b) => parseFloat(b.price.replace(/\D/g,'')) - parseFloat(a.price.replace(/\D/g,'')));
    }

    setFilteredProducts(result);
  }, [selectedCategory, selectedBrand, sortBy]);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* شريط العنوان والتحكم العلوي */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-black text-[#0f172a] uppercase italic tracking-tighter">
              Tech <span className="text-[#1e40af]">Catalog</span>
            </h1>
            <p className="text-gray-400 text-xs font-bold uppercase mt-1">Showing {filteredProducts.length} Results</p>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100 text-sm font-bold shadow-sm"
            >
              <SlidersHorizontal size={18} /> Filters
            </button>
            
            <select 
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white px-4 py-2 rounded-xl border border-gray-100 text-sm font-bold outline-none cursor-pointer hover:border-[#1e40af] transition-colors"
            >
              <option value="newest">New Arrivals</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* الجانب الأيسر: قائمة الفلترة (Sidebar) */}
          <aside className={`fixed inset-0 z-[60] lg:relative lg:z-0 bg-white lg:bg-transparent transition-transform lg:translate-x-0 ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'} lg:w-1/4`}>
            <div className="h-full overflow-y-auto lg:h-auto p-6 lg:p-0">
              <div className="flex items-center justify-between lg:hidden mb-8">
                <h3 className="font-black uppercase italic text-[#1e40af]">Filters</h3>
                <button onClick={() => setIsMobileFilterOpen(false)}><X size={24}/></button>
              </div>

              <div className="space-y-6">
                {/* قسم التصنيفات */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <h4 className="font-black uppercase text-xs tracking-widest text-[#1e40af] mb-4 flex items-center gap-2">
                    <Filter size={14} className="text-yellow-400" /> Categories
                  </h4>
                  <div className="flex flex-col gap-2">
                    {['All', 'Mobiles', 'Televisions', 'Laptops', 'Gaming', 'Kitchen'].map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`text-left px-3 py-2 rounded-xl text-sm font-bold transition-all ${selectedCategory === cat ? 'bg-[#1e40af] text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* قسم الماركات */}
                <div className="bg-[#0f172a] p-6 rounded-3xl shadow-xl text-white">
                  <h4 className="font-black uppercase text-xs tracking-widest text-yellow-400 mb-4">Top Brands</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {['All', 'Apple', 'Samsung', 'Xiaomi', 'Sony', 'Honor'].map(brand => (
                      <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="brand" 
                          onChange={() => setSelectedBrand(brand)}
                          className="w-4 h-4 accent-yellow-400"
                          checked={selectedBrand === brand}
                        />
                        <span className={`text-sm font-bold transition-colors ${selectedBrand === brand ? 'text-yellow-400' : 'text-gray-400 group-hover:text-white'}`}>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* الجانب الأيمن: شبكة المنتجات */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="group relative bg-white rounded-[2rem] border border-gray-100 p-3 md:p-5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="aspect-square bg-gray-50 rounded-2xl p-4 mb-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    <div className="px-1">
                      <h3 className="text-xs md:text-sm font-black text-[#0f172a] uppercase tracking-tighter italic line-clamp-2 mb-2 leading-tight">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between border-t pt-3 mt-2 border-gray-50">
                        <p className="text-sm md:text-lg font-black text-[#1e40af] tracking-tighter italic">{product.price}</p>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                          }}
                          className="bg-yellow-400 p-2 rounded-xl text-[#1e40af] hover:bg-[#1e40af] hover:text-white transition-all shadow-md active:scale-90"
                        >
                          <ShoppingCart size={18} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </Link>
                  {/* Badge */}
                  <div className="absolute top-5 left-5 bg-blue-50 text-[#1e40af] text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-widest">
                    New Tech
                  </div>
                </div>
              ))}
            </div>

            {/* حالة عدم وجود نتائج */}
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <Search size={60} className="mx-auto text-gray-200 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 uppercase italic">No gear found!</h3>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your filters or search criteria.</p>
                <button onClick={() => {setSelectedCategory('All'); setSelectedBrand('All');}} className="mt-6 text-[#1e40af] font-black uppercase text-xs border-b-2 border-[#1e40af]">Clear All Filters</button>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductListing;