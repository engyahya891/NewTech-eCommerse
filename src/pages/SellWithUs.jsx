import {
    ChevronDown,
    DollarSign,
    Globe,
    HelpCircle,
    Rocket,
    ShieldCheck,
    Truck
} from 'lucide-react';
import React, { useState } from 'react';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';

const SellWithUs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "How do I register as a seller on NewTech?", a: "Simply fill out the form above with your company details. Once you upload your commercial registration and ID, our team will verify your account within 24-48 hours." },
    { q: "What are the requirements to join?", a: "You need a valid commercial registration in Qatar and authentic products that match your licensed categories." },
    { q: "Why choose NewTech over others?", a: "We provide lower commission rates, instant technical support from our engineering team, and access to a premium tech-focused audience." },
    { q: "How does the shipping process work?", a: "We offer three flexible options: We collect from you, you drop off at our hubs, or you ship directly to the customer." }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans overflow-x-hidden">
      <Header />

      {/* 1. Hero Section & Registration Form */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1e40af] -skew-x-12 translate-x-20 hidden lg:block"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="bg-yellow-400 text-[#1e40af] text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest mb-6 inline-block shadow-sm">
                B2B Partnership
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6 uppercase italic tracking-tighter">
                Grow Your Business with <span className="text-[#1e40af] lg:text-white lg:bg-[#1e40af] lg:px-4">NEWTECH</span>
              </h1>
              <p className="text-gray-500 lg:text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
                Join the largest tech-driven ecosystem in Qatar. Reach millions of tech enthusiasts and scale your sales effortlessly.
              </p>
              <img src="/img/login-left.webp" alt="Seller Success" className="w-full max-w-md mx-auto lg:mx-0 drop-shadow-2xl rounded-[2rem] border-4 border-white" />
            </div>

            {/* Right Side: Modern Form */}
            <div className="w-full lg:w-[450px]">
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative">
                <div className="absolute -top-4 -right-4 bg-yellow-400 p-4 rounded-2xl shadow-lg rotate-12">
                   <Rocket size={24} className="text-[#1e40af]" />
                </div>
                <h3 className="text-2xl font-black text-[#1e40af] mb-2 uppercase italic tracking-tighter">Become a Partner</h3>
                <p className="text-gray-400 text-xs mb-8 font-bold uppercase tracking-widest">Register your store today</p>
                
                <form className="space-y-4">
                  <div className="space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 focus:border-[#1e40af] focus:bg-white rounded-2xl transition-all outline-none text-sm font-bold" />
                    <input type="text" placeholder="Company / Brand Name" className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 focus:border-[#1e40af] focus:bg-white rounded-2xl transition-all outline-none text-sm font-bold" />
                    <input type="email" placeholder="Business Email" className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 focus:border-[#1e40af] focus:bg-white rounded-2xl transition-all outline-none text-sm font-bold" />
                    <div className="flex gap-2">
                       <span className="bg-gray-50 px-4 py-4 rounded-2xl font-bold text-gray-400 flex items-center border-2 border-transparent">+974</span>
                       <input type="tel" placeholder="Mobile Number" className="flex-1 px-5 py-4 bg-gray-50 border-transparent border-2 focus:border-[#1e40af] focus:bg-white rounded-2xl transition-all outline-none text-sm font-bold" />
                    </div>
                  </div>
                  
                  <label className="flex items-start gap-3 cursor-pointer py-2">
                    <input type="checkbox" className="mt-1 accent-[#1e40af]" />
                    <span className="text-[11px] text-gray-500 font-medium leading-relaxed">
                      I agree to the <span className="text-[#1e40af] font-black underline">NewTech Terms & Conditions</span> and provide consent for data processing.
                    </span>
                  </label>

                  <button className="w-full bg-[#1e40af] text-white py-5 rounded-2xl font-black uppercase text-sm tracking-[0.2em] shadow-xl shadow-blue-100 hover:bg-blue-800 hover:-translate-y-1 transition-all active:scale-95">
                    Start Your Journey
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Process Section - "How it works" */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase italic tracking-tighter">Selling made <span className="text-[#1e40af]">Simple</span></h2>
            <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Rocket />, title: "List Products", desc: "Upload your items through our high-speed seller portal.", color: "bg-orange-100 text-orange-600" },
              { icon: <Globe />, title: "Sell Nationwide", desc: "Your products reach customers in Doha, Al Wakrah, and beyond.", color: "bg-green-100 text-green-600" },
              { icon: <Truck />, title: "Ship with Ease", desc: "Use NewTech Logistics for 24-hour delivery coverage.", color: "bg-blue-100 text-[#1e40af]" },
              { icon: <DollarSign />, title: "Earn Big", desc: "Receive automated payouts directly to your account.", color: "bg-yellow-100 text-yellow-700" },
            ].map((step, i) => (
              <div key={i} className="group p-8 rounded-[2.5rem] bg-gray-50 hover:bg-[#1e40af] transition-all duration-500 cursor-default">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all ${step.color}`}>
                  {step.icon}
                </div>
                <h4 className="text-lg font-black text-gray-900 group-hover:text-white uppercase italic mb-3 transition-colors">{step.title}</h4>
                <p className="text-gray-500 group-hover:text-blue-100 text-sm leading-relaxed transition-colors">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
             <HelpCircle size={40} className="mx-auto text-yellow-400 mb-4" />
             <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter italic">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-gray-800 hover:text-[#1e40af]"
                >
                  <span className="text-sm md:text-base">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-yellow-500' : 'text-gray-300'}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed animate-in slide-in-from-top-2">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="bg-[#1e40af] py-16 text-center text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">Ready to scale your tech brand?</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto font-medium">Join 5,000+ sellers who trust NewTech for their daily operations.</p>
          <button className="bg-yellow-400 text-[#1e40af] px-12 py-5 rounded-2xl font-black uppercase tracking-[0.3em] hover:bg-white hover:scale-105 transition-all shadow-2xl active:scale-95">
            Join the Fleet
          </button>
        </div>
        <ShieldCheck size={300} className="absolute -left-20 -bottom-20 text-white/5 rotate-12" />
      </section>

      <Footer />
    </div>
  );
};

export default SellWithUs;