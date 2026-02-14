import { ArrowLeft, ChevronRight, Facebook, Instagram, Smartphone, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 md:p-10 font-sans">
      
      {/* Container الكلي */}
      <div className="bg-white w-full max-w-6xl min-h-[650px] rounded-[2.5rem] shadow-[0_0_100px_rgba(30,64,175,0.3)] overflow-hidden flex flex-col lg:flex-row">
        
        {/* الجانب الأيسر (Branding & Welcome) */}
        <div className="w-full lg:w-2/5 bg-[#1e40af] relative p-12 flex flex-col justify-between text-white overflow-hidden">
          {/* خلفية جمالية */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-yellow-400 transition-colors font-bold text-sm uppercase tracking-widest">
              <ArrowLeft size={18} /> Back to store
            </Link>
            <div className="mt-20">
              <h2 className="text-5xl font-black italic tracking-tighter uppercase mb-4 leading-none">
                Welcome <br /> Back,
              </h2>
              <p className="text-blue-100/70 text-lg font-medium">Please login to your account to access your orders and profile.</p>
            </div>
          </div>

          <div className="relative z-10 space-y-6">
             <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-[#1e40af] transition-all">
                  <Smartphone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-blue-200 tracking-[0.2em]">Latest App</p>
                  <p className="font-bold">Available on Mobile</p>
                </div>
             </div>
          </div>
        </div>

        {/* الجانب الأيمن (Login Form) */}
        <div className="w-full lg:w-3/5 p-8 md:p-16 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <h3 className="text-3xl font-black text-[#0f172a] uppercase italic tracking-tighter mb-2">Customer Login</h3>
            <p className="text-gray-400 text-sm font-medium mb-10">OTP will be sent to your registered mobile and email.</p>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-[#1e40af] uppercase tracking-widest ml-1">Mobile Number</label>
                <div className="flex gap-3">
                  <div className="w-20 bg-gray-50 border-2 border-gray-100 rounded-2xl flex items-center justify-center font-bold text-gray-500">+974</div>
                  <input 
                    type="tel" 
                    placeholder="Enter phone number" 
                    className="flex-1 bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:border-[#1e40af] focus:bg-white outline-none transition-all font-bold text-gray-700"
                  />
                </div>
              </div>

              <button className="w-full bg-[#1e40af] text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-100 hover:bg-[#0f172a] transition-all active:scale-95 flex items-center justify-center gap-3">
                Send OTP <ChevronRight size={20} />
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Download Our App</p>
                  <div className="flex gap-2">
                    <img src="/img/apple-store.webp" alt="ios" className="h-8 grayscale hover:grayscale-0 transition-all cursor-pointer" />
                    <img src="/img/google-play.webp" alt="android" className="h-8 grayscale hover:grayscale-0 transition-all cursor-pointer" />
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Follow Us On</p>
                  <div className="flex gap-4">
                    <Facebook size={20} className="text-gray-300 hover:text-[#1e40af] cursor-pointer transition-colors" />
                    <Twitter size={20} className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
                    <Instagram size={20} className="text-gray-300 hover:text-pink-500 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;