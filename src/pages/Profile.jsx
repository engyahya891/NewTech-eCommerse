import {
    Award, Briefcase,
    Calendar,
    Camera,
    ChevronRight,
    Code,
    Heart,
    LogOut,
    Mail, MapPin, Phone,
    Settings,
    ShieldCheck,
    ShoppingBag,
    User
} from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import { useCart } from '../context/CartContext';

const Profile = () => {
  const { cartItems, wishlistItems } = useCart();
  const navigate = useNavigate();

  // --- بيانات وهمية احترافية (Generic Tech Persona) ---
  const userData = {
    name: "Alex J. Thompson",
    nickname: "TechMaster_99",
    email: "alex.dev@example.com",
    phone: "+1 (555) 000-1234",
    location: "Silicon Valley, CA",
    joined: "January 2025",
    status: "Senior Full-Stack Developer",
    skills: ["Cloud Computing", "Architecture Design", "Cyber Security", "DevOps", "AI Integration"]
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* 1. القائمة الجانبية (Sidebar) */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
              {/* خلفية جمالية في الأعلى */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-[#1e40af] to-[#3b82f6]"></div>
              
              <div className="relative mt-8 group cursor-pointer">
                <div className="w-28 h-28 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-lg">
                  <div className="w-full h-full flex items-center justify-center bg-blue-50 text-[#1e40af]">
                    <User size={50} />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 p-2 bg-yellow-400 rounded-full text-[#1e40af] shadow-md hover:scale-110 transition-transform">
                  <Camera size={16} />
                </div>
              </div>

              <h2 className="text-xl font-black text-[#0f172a] mt-4 tracking-tighter uppercase italic">
                {userData.name}
              </h2>
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6">
                {userData.nickname}
              </p>

              <div className="w-full space-y-2">
                {[
                  { icon: <ShoppingBag size={18} />, label: "My Orders", count: 12, path: "/orders" },
                  { icon: <Heart size={18} />, label: "Wishlist", count: wishlistItems.length, path: "/wishlist" },
                  { icon: <Settings size={18} />, label: "Settings", count: null, path: "/settings" },
                ].map((link, i) => (
                  <button 
                    key={i} 
                    onClick={() => link.path && navigate(link.path)}
                    className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-blue-50 text-gray-600 hover:text-[#1e40af] transition-all group"
                  >
                    <div className="flex items-center gap-3 font-bold text-sm">
                      {link.icon} {link.label}
                    </div>
                    {link.count !== null ? (
                      <span className="bg-gray-100 text-gray-500 group-hover:bg-[#1e40af] group-hover:text-white px-2 py-0.5 rounded-full text-[10px] font-black transition-colors">
                        {link.count}
                      </span>
                    ) : <ChevronRight size={14} />}
                  </button>
                ))}
                <button 
                  onClick={() => navigate('/')}
                  className="w-full flex items-center gap-3 p-4 rounded-2xl text-red-500 hover:bg-red-50 font-bold text-sm mt-4 transition-all"
                >
                  <LogOut size={18} /> Logout Account
                </button>
              </div>
            </div>
          </aside>

          {/* 2. محتوى لوحة التحكم (Dashboard Content) */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* بطاقات الإحصائيات السريعة */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Orders", val: "15", color: "bg-blue-600" },
                { label: "In Wishlist", val: wishlistItems.length, color: "bg-[#1e40af]" },
                { label: "Cart Items", val: cartItems.length, color: "bg-yellow-400 text-[#1e40af]" },
                { label: "Points", val: "1,250", color: "bg-[#0f172a]" },
              ].map((stat, i) => (
                <div key={i} className={`${stat.color} p-6 rounded-[2rem] text-white shadow-lg shadow-blue-100 flex flex-col justify-center items-center md:items-start`}>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1 text-center md:text-left">{stat.label}</p>
                  <p className="text-3xl font-black italic tracking-tighter">{stat.val}</p>
                </div>
              ))}
            </div>

            {/* شبكة المعلومات الشخصية */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                <h3 className="text-2xl font-black text-[#0f172a] uppercase italic tracking-tighter flex items-center gap-3">
                  <ShieldCheck className="text-green-500" /> Account <span className="text-[#1e40af]">Security</span>
                </h3>
                <span className="text-[10px] bg-green-100 text-green-700 px-4 py-1.5 rounded-full font-black uppercase tracking-widest">Verified Profile</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                {[
                  { icon: <User />, label: "Display Name", val: userData.name },
                  { icon: <Mail />, label: "Verified Email", val: userData.email },
                  { icon: <Phone />, label: "Contact Phone", val: userData.phone },
                  { icon: <MapPin />, label: "Default Region", val: userData.location },
                  { icon: <Calendar />, label: "Account Created", val: userData.joined },
                  { icon: <Briefcase />, label: "Professional Role", val: userData.status },
                ].map((info, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="p-3 bg-gray-50 text-gray-400 rounded-2xl group-hover:bg-blue-50 group-hover:text-[#1e40af] transition-colors">
                      {React.cloneElement(info.icon, { size: 20 })}
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{info.label}</p>
                      <p className="font-bold text-gray-700">{info.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* قسم الخبرات والاهتمامات التقنية */}
            <div className="bg-[#0f172a] rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                <Code size={200} />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-black uppercase italic tracking-tighter mb-8 flex items-center gap-3 text-yellow-400">
                  <Award /> System Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {userData.skills.map((skill, i) => (
                    <span key={i} className="px-5 py-2 bg-white/5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-white/10 hover:bg-yellow-400 hover:text-[#0f172a] transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/5">
                   <p className="text-xs text-blue-100/70 font-medium leading-loose italic">
                     "This profile is optimized for hardware benchmarking and distributed system analysis. All purchase recommendations are based on your cloud architecture requirements."
                   </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;