import {
    Facebook,
    Globe, Headset,
    Instagram, Linkedin,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Send,
    Twitter
} from 'lucide-react';
import React from 'react';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';

const ContactUs = () => {
  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: "Call Support",
      detail: "+1 (555) 000-1234",
      desc: "Mon-Fri from 8am to 6pm.",
      color: "bg-blue-50 text-[#1e40af]"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      detail: "support@newtech.com",
      desc: "Our team will respond within 24h.",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit HQ",
      detail: "Silicon Valley, CA",
      desc: "100 Innovation Way, Suite 500",
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-800">
      <Header />

      <main>
        {/* 1. Hero Section */}
        <section className="bg-[#1e40af] pt-20 pb-32 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
          
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
              Get In <span className="text-yellow-400">Touch</span>
            </h1>
            <p className="text-blue-100 text-sm md:text-lg max-w-2xl mx-auto font-medium opacity-80 uppercase tracking-widest">
              Have a technical question or need hardware advice? <br /> Our engineering team is here to help.
            </p>
          </div>
        </section>

        {/* 2. Contact Cards Section */}
        <section className="container mx-auto px-4 -mt-16 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500">
                <div className={`${item.color} p-5 rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-[#0f172a] uppercase italic mb-2 tracking-tighter">{item.title}</h3>
                <p className="font-black text-[#1e40af] text-sm mb-1">{item.detail}</p>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Form & Map Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              
              {/* Left Side: Contact Form */}
              <div className="flex-1 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-100">
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-3 bg-blue-50 text-[#1e40af] rounded-xl"><MessageSquare size={24} /></div>
                  <h2 className="text-2xl font-black text-[#0f172a] uppercase italic tracking-tighter">Send us a <span className="text-[#1e40af]">Message</span></h2>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input type="text" placeholder="Alex Thompson" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:border-[#1e40af] focus:bg-white outline-none transition-all font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input type="email" placeholder="alex.dev@example.com" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:border-[#1e40af] focus:bg-white outline-none transition-all font-bold" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                    <select className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:border-[#1e40af] focus:bg-white outline-none transition-all font-bold appearance-none">
                      <option>Technical Support</option>
                      <option>Hardware Inquiry</option>
                      <option>Order Tracking</option>
                      <option>Feedback</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Message Detail</label>
                    <textarea rows="4" placeholder="How can our engineers help you today?" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:border-[#1e40af] focus:bg-white outline-none transition-all font-bold resize-none"></textarea>
                  </div>

                  <button className="w-full md:w-auto bg-[#1e40af] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-100 hover:bg-[#0f172a] hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3">
                    Submit Message <Send size={18} />
                  </button>
                </form>
              </div>

              {/* Right Side: Social & Info */}
              <div className="w-full lg:w-96 bg-gray-50/50 p-8 md:p-16 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-[#0f172a] uppercase italic tracking-tighter mb-8">Corporate <span className="text-[#1e40af]">Hub</span></h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <Globe className="text-[#1e40af] mt-1" size={20} />
                      <p className="text-xs font-bold leading-loose text-gray-500">
                        Our digital gates are open 24/7. Physical showroom visits require a pre-booked engineering slot.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <Headset className="text-[#1e40af] mt-1" size={20} />
                      <p className="text-xs font-bold leading-loose text-gray-500">
                        VIP Tech support available for Enterprise customers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 lg:mt-0 pt-10 border-t border-gray-200">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Connect Globally</p>
                  <div className="flex gap-4">
                    {[<Facebook/>, <Twitter/>, <Instagram/>, <Linkedin/>].map((social, i) => (
                      <button key={i} className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#1e40af] hover:border-[#1e40af] hover:shadow-lg transition-all">
                        {React.cloneElement(social, { size: 18 })}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Help Center CTA */}
        <section className="container mx-auto px-4 pb-20">
          <div className="bg-[#0f172a] p-12 rounded-[3rem] text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <img src="https://www.transparenttextures.com/patterns/carbon-fibre.png" alt="pattern" />
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">Quick <span className="text-yellow-400">Answers?</span></h2>
            <p className="text-blue-100/60 text-sm font-medium mb-10 max-w-lg mx-auto uppercase tracking-widest">Check our knowledge base for instant hardware troubleshooting.</p>
            <button className="bg-white text-[#0f172a] px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-xl">
              Visit FAQ Center
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;