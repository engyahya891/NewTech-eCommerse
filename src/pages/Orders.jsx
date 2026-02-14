import {
    ArrowLeft,
    Box,
    ChevronRight,
    Download,
    HelpCircle,
    RefreshCcw,
    Search,
    Truck,
} from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

const Orders = () => {
  const navigate = useNavigate();

  // --- بيانات وهمية لطلبات سابقة (Engineering Dummy Data) ---
  const orders = [
    {
      id: "NT-9982-X1",
      date: "Feb 12, 2026",
      status: "In Transit",
      progress: 65,
      total: "1,240.00",
      items: [
        {
          name: "RTX 4090 Gaming GPU",
          qty: 1,
          price: "999.00",
          img: "/img/gpu.webp",
        },
        {
          name: "Mechanical Keyboard G-Pro",
          qty: 1,
          price: "241.00",
          img: "/img/kb.webp",
        },
      ],
    },
    {
      id: "NT-8821-Q4",
      date: "Jan 28, 2026",
      status: "Delivered",
      progress: 100,
      total: "575.40",
      items: [
        {
          name: "Apple Macbook PRO 2019",
          qty: 1,
          price: "575.40",
          img: "/img/mac.webp",
        },
      ],
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700 border-green-200";
      case "In Transit":
        return "bg-blue-100 text-[#1e40af] border-blue-200";
      default:
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-10">
        {/* Navigation & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <button
              onClick={() => navigate("/profile")}
              className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-[#1e40af] mb-2 transition-colors"
            >
              <ArrowLeft size={14} /> Back to Profile
            </button>
            <h2 className="text-3xl font-black text-[#0f172a] uppercase italic tracking-tighter">
              Order <span className="text-[#1e40af]">Archive</span>
            </h2>
          </div>

          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search by Order ID..."
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-100 shadow-sm focus:ring-2 focus:ring-[#1e40af] outline-none font-bold text-sm"
            />
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
              size={20}
            />
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-8">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
              {/* Order Header */}
              <div className="p-6 md:p-8 bg-gray-50/50 border-b border-gray-100 flex flex-col md:flex-row justify-between gap-6">
                <div className="flex flex-wrap items-center gap-4 md:gap-8">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                      Order Identifier
                    </p>
                    <p className="font-black text-[#1e40af] italic">
                      #{order.id}
                    </p>
                  </div>
                  <div className="h-10 w-[1px] bg-gray-200 hidden md:block"></div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                      Date Placed
                    </p>
                    <p className="font-bold text-gray-700">{order.date}</p>
                  </div>
                  <div className="h-10 w-[1px] bg-gray-200 hidden md:block"></div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                      Status
                    </p>
                    <span
                      className={`px-4 py-1 rounded-full text-[10px] font-black uppercase border ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="p-3 bg-white text-gray-400 rounded-xl border border-gray-100 hover:text-[#1e40af] hover:border-[#1e40af] transition-all shadow-sm">
                    <Download size={18} />
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#1e40af] text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#0f172a] transition-all shadow-lg shadow-blue-100">
                    <RefreshCcw size={16} /> Reorder
                  </button>
                </div>
              </div>

              {/* Order Tracking Progress */}
              <div className="px-6 md:px-8 py-8 border-b border-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[10px] font-black text-[#1e40af] uppercase tracking-widest flex items-center gap-2">
                    <Truck size={14} /> Logistics Progress
                  </p>
                  <span className="text-xs font-black text-gray-800">
                    {order.progress}%
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#1e40af] to-blue-400 transition-all duration-1000 ease-out"
                    style={{ width: `${order.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-2xl border border-transparent hover:border-blue-100 transition-all"
                    >
                      <div className="w-16 h-16 bg-white rounded-xl p-2 flex-shrink-0 shadow-sm">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-[11px] font-bold text-gray-800 truncate uppercase">
                          {item.name}
                        </h5>
                        <p className="text-[10px] font-black text-[#1e40af] mt-1">
                          QTY: {item.qty} — ${item.price}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Order Total Highlight */}
                  <div className="flex flex-col justify-center items-end md:col-span-1 lg:col-span-1 border-l border-gray-100 pl-8">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                      Total Paid
                    </p>
                    <p className="text-2xl font-black text-[#0f172a] italic tracking-tighter">
                      USD {order.total}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions Footer */}
              <div className="bg-gray-50/30 p-4 px-8 flex justify-between items-center">
                <button className="text-[10px] font-black text-gray-400 uppercase hover:text-[#1e40af] flex items-center gap-1">
                  <HelpCircle size={14} /> Need Help with this order?
                </button>
                <button
                  onClick={() => navigate(`/track-order/${order.id}`)}
                  className="text-[10px] font-black text-[#1e40af] uppercase tracking-widest flex items-center gap-1 group"
                >
                  View Full Details{" "}
                  <ChevronRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Suggestion */}
        <div className="mt-16 p-10 bg-[#1e40af] rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Box size={150} />
          </div>
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2">
              Looking for more gear?
            </h3>
            <p className="text-blue-100 text-sm opacity-80">
              Our engineering team just added 50+ new components to the catalog.
            </p>
          </div>
          <Link
            to="/"
            className="relative z-10 bg-yellow-400 text-[#1e40af] px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl"
          >
            Back to Catalog
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Orders;
