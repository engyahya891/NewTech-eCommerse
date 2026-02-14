import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Youtube } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full font-sans text-white">
      
      {/* 1. شريط المميزات - بخلفية زرقاء فاتحة قليلاً */}
      <div className="bg-[#1e40af] py-8 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { img: "footer2-1.svg", text: "Latest Tech" },
              { img: "footer2-2.svg", text: "Quality Gurantee" },
              { img: "footer2-3.svg", text: "Best Prices" },
              { img: "footer2-4.svg", text: "Secure Tech Pay" },
              { img: "footer2-5.svg", text: "Fast Delivery" },
              { img: "footer2-6.svg", text: "Global Shipping" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 group cursor-default">
                <img src={`/img/${item.img}`} alt={item.text} className="h-10 w-auto brightness-0 invert group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-blue-100 uppercase tracking-tighter">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. الأقسام الرئيسية - خلفية زرقاء داكنة جداً */}
      <div className="bg-[#0f172a] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* NewTech Brand Profile */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black italic tracking-tighter mb-4">
                <span className="text-white">NEW</span>
                <span className="text-yellow-400">TECH</span>
              </h2>
              <p className="text-xs text-blue-100/60 leading-relaxed mb-6">
                Your premier destination for the latest technology and gadgets. We bring the future to your doorstep with quality and trust.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <Link key={i} to="#" className="p-2 bg-white/5 rounded-full hover:bg-yellow-400 hover:text-[#0f172a] transition-all">
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links Group */}
            <div>
              <h6 className="font-bold mb-6 text-yellow-400 uppercase text-sm tracking-widest">Categories</h6>
              <ul className="space-y-3 text-sm text-blue-100/70">
                <li><Link to="#" className="hover:text-white transition-colors">Laptops & PCs</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Smartphones</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Gaming Gear</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Accessories</Link></li>
              </ul>
            </div>

            <div>
              <h6 className="font-bold mb-6 text-yellow-400 uppercase text-sm tracking-widest">Support</h6>
              <ul className="space-y-3 text-sm text-blue-100/70">
                <li><Link to="#" className="hover:text-white transition-colors">Order Tracking</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Warranty Policy</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Tech Support</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">FAQs</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="sm:col-span-2">
              <h6 className="font-bold mb-4 text-sm uppercase text-yellow-400 tracking-widest">Join NewTech Community</h6>
              <p className="text-xs text-blue-100/60 mb-4">Subscribe to get alerts about new drops and exclusive tech deals.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="flex-1 bg-white/5 border border-white/10 px-4 py-2.5 text-sm rounded-l-lg focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <button className="bg-yellow-400 hover:bg-yellow-500 text-[#0f172a] px-6 py-2.5 text-sm font-black rounded-r-lg transition-colors uppercase">
                  Subscribe
                </button>
              </div>
              <div className="mt-6 flex gap-4 items-center grayscale opacity-50">
                 <img src="/img/apple-store.webp" alt="App Store" className="h-7" />
                 <img src="/img/google-play.webp" alt="Play Store" className="h-7" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. شريط الحقوق - أزرق غامق جداً */}
      <div className="bg-[#020617] py-6 border-t border-white/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-blue-100/40 uppercase tracking-widest font-medium">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2"><Mail size={14}/> support@newtech.com</div>
            <div className="flex items-center gap-2"><Phone size={14}/> +974 4400 1234</div>
          </div>
          <p>© 2026 NEWTECH BY ENG. YAHYA. ALL RIGHTS RESERVED.</p>
          <img src="/img/vise.svg" alt="Payments" className="h-6 opacity-30" />
        </div>
      </div>

    </footer>
  );
};

export default Footer;