import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 md:py-20 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-black text-[#0f172a] uppercase italic tracking-tighter mb-10 border-l-8 border-[#1e40af] pl-6">
          My <span className="text-[#1e40af]">Wishlist</span>
        </h2>

        {wishlistItems.length === 0 ? (
          <div className="bg-white p-20 rounded-[3rem] shadow-sm text-center border border-gray-100">
            <Heart size={80} className="mx-auto text-gray-200 mb-6" />
            <p className="text-xl font-bold text-gray-400 uppercase tracking-widest">Your wishlist is empty</p>
            <Link to="/" className="inline-block mt-8 bg-[#1e40af] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-[#1e40af] transition-all">
              Go Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <div key={product.id} className="bg-white rounded-[2rem] p-4 shadow-sm border border-gray-50 group relative">
                <button 
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-4 right-4 z-10 p-2 bg-red-50 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all"
                >
                  <Trash2 size={18} />
                </button>
                <div className="aspect-square mb-4 p-4">
                   <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-sm text-gray-800 line-clamp-2 mb-2">{product.name}</h3>
                <p className="text-[#1e40af] font-black text-lg mb-4">{product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full py-3 bg-[#FFD43B] text-[#1e40af] rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#1e40af] hover:text-white transition-all"
                >
                  <ShoppingCart size={14} /> Add To Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;