import {
    AlertCircle,
    ArrowLeft,
    Box,
    CheckCircle2,
    Clock,
    MapPin,
    PackageCheck,
    Phone,
    ShieldCheck,
    Truck
} from 'lucide-react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';

const TrackOrder = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  // --- محاكاة بيانات تتبع الشحنة (Engineering Logistics Data) ---
  const trackingData = {
    id: orderId || "NT-9982-X1",
    estimatedDelivery: "Feb 18, 2026",
    currentStatus: 2, // 0: Placed, 1: Processing, 2: Shipped, 3: Delivered
    steps: [
      { title: "Order Confirmed", desc: "We have received your tech order.", time: "Feb 12, 09:30 AM", icon: <ShieldCheck size={20}/> },
      { title: "Quality Check", desc: "Engineers are testing your hardware.", time: "Feb 12, 02:45 PM", icon: <PackageCheck size={20}/> },
      { title: "Out for Delivery", desc: "Shipment is on its way to your hub.", time: "Feb 14, 08:00 AM", icon: <Truck size={20}/> },
      { title: "Delivered", desc: "Enjoy your NewTech gear!", time: "Pending", icon: <CheckCircle2 size={20}/> },
    ]
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          
          {/* 1. Header & Quick Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <button 
                onClick={() => navigate('/orders')}
                className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-[#1e40af] mb-2 transition-colors"
              >
                <ArrowLeft size={14} /> Back to Archive
              </button>
              <h2 className="text-3xl font-black text-[#0f172a] uppercase italic tracking-tighter">
                Live <span className="text-[#1e40af]">Tracking</span>
              </h2>
            </div>
            <div className="bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
               <div className="p-3 bg-blue-50 text-[#1e40af] rounded-xl"><Clock size={20}/></div>
               <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Estimated Arrival</p>
                  <p className="font-black text-[#0f172a] italic">{trackingData.estimatedDelivery}</p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 2. الـ Timeline (The Stepper) */}
            <div className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12"><Truck size={250} /></div>
              
              <h3 className="text-xl font-black text-[#0f172a] uppercase italic tracking-tighter mb-10 flex items-center gap-3">
                <Box className="text-[#1e40af]" /> Shipment <span className="text-[#1e40af]">Journey</span>
              </h3>

              <div className="relative space-y-12">
                {/* خط التوصيل العمودي (The Line) */}
                <div className="absolute left-[19px] top-2 bottom-2 w-1 bg-gray-100 rounded-full">
                  <div 
                    className="w-full bg-gradient-to-b from-[#1e40af] to-blue-400 transition-all duration-1000"
                    style={{ height: `${(trackingData.currentStatus / (trackingData.steps.length - 1)) * 100}%` }}
                  ></div>
                </div>

                {trackingData.steps.map((step, index) => {
                  const isCompleted = index <= trackingData.currentStatus;
                  const isActive = index === trackingData.currentStatus;

                  return (
                    <div key={index} className="relative flex items-start gap-8 group">
                      {/* الدائرة البرمجية */}
                      <div className={`z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${
                        isCompleted ? "bg-[#1e40af] text-white" : "bg-white text-gray-300 border-2 border-gray-100"
                      } ${isActive ? "ring-8 ring-blue-50 scale-110" : ""}`}>
                        {step.icon}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className={`font-black uppercase italic tracking-tighter text-sm md:text-base ${isCompleted ? "text-[#0f172a]" : "text-gray-300"}`}>
                            {step.title}
                          </h4>
                          <span className={`text-[10px] font-bold ${isCompleted ? "text-blue-500" : "text-gray-300"}`}>{step.time}</span>
                        </div>
                        <p className={`text-xs md:text-sm font-medium leading-relaxed ${isCompleted ? "text-gray-500" : "text-gray-300"}`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. تفاصيل الشحن (Shipping Info) */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-[#0f172a] rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden">
                <h3 className="text-lg font-black uppercase italic tracking-tighter mb-8 border-b border-white/10 pb-4">Destination</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl text-yellow-400"><MapPin size={20}/></div>
                    <div>
                      <p className="text-[10px] font-black text-blue-200/50 uppercase tracking-widest mb-1">Shipping Address</p>
                      <p className="text-sm font-bold leading-relaxed">
                        Silicon Valley, Tech District<br />
                        Block 7, Innovation Way<br />
                        California, US
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl text-yellow-400"><Phone size={20}/></div>
                    <div>
                      <p className="text-[10px] font-black text-blue-200/50 uppercase tracking-widest mb-1">Recipient Contact</p>
                      <p className="text-sm font-bold">+1 (555) 000-1234</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-400 rounded-[2.5rem] p-8 text-[#1e40af] shadow-lg">
                <div className="flex items-center gap-3 mb-4 font-black uppercase italic italic tracking-tighter">
                  <AlertCircle size={24} />
                  <span>Important Note</span>
                </div>
                <p className="text-xs font-bold leading-loose opacity-80">
                  Please have your ID ready upon delivery. Our couriers follow strict safety protocols for high-value hardware.
                </p>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrackOrder;