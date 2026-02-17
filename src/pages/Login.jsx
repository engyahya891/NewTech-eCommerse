import {
  ArrowLeft, ChevronRight,
  Chrome, Cpu,
  Github,
  Lock, Mail,
  User
} from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 font-sans relative overflow-hidden">
      
      {/* الخلفية المتحركة */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-900/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
        
        {/* الجانب الأيسر: Floating Branding (تم تصغير المسافات) */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-white p-4 lg:p-8 order-2 lg:order-1">
          <Link to="/" className="group flex items-center gap-3 text-blue-400 hover:text-yellow-400 transition-all font-black text-[10px] uppercase tracking-[0.4em] mb-6">
            <div className="p-1.5 border border-blue-400/30 rounded-lg group-hover:border-yellow-400">
              <ArrowLeft size={14} />
            </div>
            Exit To Store
          </Link>

          <div className="relative">
             <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
             <div className="flex items-center gap-2 mb-4">
                <Cpu className="text-yellow-400 animate-spin-slow" size={24} />
                <span className="text-blue-500 font-black tracking-[0.5em] text-[9px] uppercase">Core Engine v2.6</span>
             </div>
             
             {/* تصحيح خطأ الـ <br /> وجعل الخط أصغر قليلاً */}
             <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.85] mb-6">
               {isLogin ? <>LINK <br /> START</> : <>USER <br /> INIT</>}
             </h2>
             
             <p className="text-gray-400 text-xs md:text-sm font-medium max-w-xs leading-relaxed uppercase tracking-widest border-l-2 border-yellow-400 pl-4">
               {isLogin 
                 ? "Access high-performance computing resources and manage your hardware stack." 
                 : "Join the next generation of engineers. Register your profile in our global tech registry."}
             </p>
          </div>

          {/* إحصائيات وهمية مصغرة */}
          <div className="mt-8 flex gap-6 opacity-30">
             <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase text-blue-400">System Load</span>
                <div className="flex gap-1 mt-1">
                   {[1,2,3,4,5,6].map(i => <div key={i} className={`w-1 h-3 rounded-sm ${i<4 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>)}
                </div>
             </div>
             <div className="flex flex-col border-l border-white/10 pl-6">
                <span className="text-[8px] font-black uppercase text-yellow-400">Encryption</span>
                <span className="font-bold text-[10px] mt-1 text-white">AES-256</span>
             </div>
          </div>
        </div>

        {/* الجانب الأيمن: The Tech Module (تم ضغط الارتفاع) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-full max-w-[380px] group">
            
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-[2.5rem] blur opacity-10 group-hover:opacity-25 transition duration-1000"></div>
            
            <div className="relative bg-[#0f172a] rounded-[2.5rem] p-[1px] border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-white rounded-[2.4rem] p-6 md:p-8 relative overflow-hidden">
                
                {/* Switcher مصغر */}
                <div className="flex bg-gray-100 p-1 rounded-xl w-full mb-6">
                  <button 
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${isLogin ? 'bg-[#1e40af] text-white shadow-md' : 'text-gray-400'}`}
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${!isLogin ? 'bg-[#1e40af] text-white shadow-md' : 'text-gray-400'}`}
                  >
                    Register
                  </button>
                </div>

                <div className="mb-6">
                   <h3 className="text-xl font-black text-[#0f172a] uppercase italic tracking-tighter">
                     {isLogin ? "Security Auth" : "Registry Hub"}
                   </h3>
                   <div className="h-1 w-10 bg-yellow-400 mt-1"></div>
                </div>

                <form className="space-y-4">
                  {!isLogin && (
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-[#1e40af] uppercase tracking-widest ml-1">Full Designation</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                        <input type="text" placeholder="Eng. Yahya Hamsho" className="w-full bg-gray-50 border border-gray-100 focus:border-[#1e40af] focus:bg-white rounded-xl pl-10 pr-4 py-3 outline-none transition-all text-xs font-bold text-gray-700" />
                      </div>
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-[#1e40af] uppercase tracking-widest ml-1">Secure Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                      <input type="email" placeholder="dev@newtech.com" className="w-full bg-gray-50 border border-gray-100 focus:border-[#1e40af] focus:bg-white rounded-xl pl-10 pr-4 py-3 outline-none transition-all text-xs font-bold text-gray-700" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-[#1e40af] uppercase tracking-widest ml-1">Access Key</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                      <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border border-gray-100 focus:border-[#1e40af] focus:bg-white rounded-xl pl-10 pr-4 py-3 outline-none transition-all text-xs font-bold text-gray-700" />
                    </div>
                  </div>

                  <button className="w-full bg-[#1e40af] text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-200 hover:bg-[#0f172a] transition-all flex items-center justify-center gap-2 mt-4 text-xs">
                    {isLogin ? "Establish Link" : "Confirm Registry"} 
                    <ChevronRight size={16} />
                  </button>
                </form>

                <div className="mt-6">
                  <div className="relative flex items-center justify-center mb-4">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                    <span className="relative bg-white px-3 text-[8px] font-black text-gray-300 uppercase tracking-widest">Connect ID</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-50 border border-transparent hover:border-red-100 rounded-xl transition-all font-black text-[9px] uppercase">
                      <Chrome size={14} className="text-red-500" /> Google
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-50 border border-transparent hover:border-[#1e40af] rounded-xl transition-all font-black text-[9px] uppercase">
                      <Github size={14} className="text-[#0f172a]" /> GitHub
                    </button>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2">
                   <div className="w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
                   <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest text-center leading-none">Quantum Encryption Protocols Active</p>
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