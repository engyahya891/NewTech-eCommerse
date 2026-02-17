import React from 'react'

export default function HomeFooter() {
  return (
    <div>
        {/* 18. قسم الـ Trending & About - هوية NewTech الجديدة */}
      <div className="bg-[#f8fafc] py-12 md:py-16 mt-10 border-t border-gray-200 font-sans">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-10 text-sm text-gray-600 leading-loose">
            {/* Trending Section */}
            <div>
              <h5 className="font-black text-lg mb-6 text-[#1e40af] uppercase italic tracking-tighter border-l-4 border-yellow-400 pl-4">
                Trending Tech Gear
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <p>
                  <span className="font-bold text-[#0f172a] block mb-1 uppercase text-xs">
                    Computing & Hardware:
                  </span>
                  RTX 4090 GPUs, Mechanical Keyboards, Ryzen 9 Processors,
                  High-Speed NVMe SSDs.
                </p>
                <p>
                  <span className="font-bold text-[#0f172a] block mb-1 uppercase text-xs">
                    Mobiles & Innovation:
                  </span>
                  iPhone 15 Pro Max, Samsung Galaxy S24 Ultra, Foldable Tech,
                  Fast GaN Chargers.
                </p>
                <p>
                  <span className="font-bold text-[#0f172a] block mb-1 uppercase text-xs">
                    Smart Living:
                  </span>
                  Mesh Wi-Fi Systems, AI Home Assistants, Noise Cancelling
                  Headphones, Gaming Monitors.
                </p>
              </div>
            </div>

            {/* Market Info Section */}
            <div>
              <h5 className="font-black text-lg mb-6 text-[#1e40af] uppercase italic tracking-tighter border-l-4 border-yellow-400 pl-4">
                Online Shopping with NewTech
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs md:text-sm bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                <p>
                  <span className="font-black text-[#1e40af] block mb-1">
                    Mobiles :
                  </span>{" "}
                  iOS Devices / Android Flagships / 5G Tablets
                </p>
                <p>
                  <span className="font-black text-[#1e40af] block mb-1">
                    PC Master Race :
                  </span>{" "}
                  Custom Builds / Gaming Laptops / Workstations
                </p>
                <p>
                  <span className="font-black text-[#1e40af] block mb-1">
                    Audio :
                  </span>{" "}
                  Hi-Fi Speakers / Pro Headsets / Studio Mics
                </p>
                <p>
                  <span className="font-black text-[#1e40af] block mb-1">
                    Peripherals :
                  </span>{" "}
                  Gaming Mice / RGB Mats / Webcams
                </p>
              </div>
            </div>

            {/* About NewTech Section */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-3xl text-justify md:text-left">
                  <h5 className="font-black text-2xl mb-4 text-[#0f172a] uppercase italic tracking-tighter">
                    About <span className="text-[#1e40af]">NewTech</span>
                  </h5>
                  <p className="text-gray-500 font-medium">
                    Founded by{" "}
                    <span className="text-[#1e40af] font-bold">
                      Eng. Yahya Hamsho
                    </span>
                    , NewTech is more than just an e-store; it's an
                    engineering-driven platform. Since our transition to a
                    React-based ecosystem in 2026, we've prioritized
                    high-performance hardware and a seamless user experience. We
                    bridge the gap between complex technology and the end-user,
                    ensuring every gadget we deliver meets the highest standards
                    of innovation and reliability.
                  </p>

                  {/* Trust Badges */}
                  <div className="flex items-center gap-6 mt-6 grayscale opacity-70">
                    <img
                      src="/img/ثقة.svg"
                      alt="Certified Tech"
                      className="h-12"
                    />
                    <div className="h-10 w-[1px] bg-gray-300"></div>
                    <p className="text-[10px] font-black uppercase text-gray-400 leading-none">
                      Engineered for <br /> Performance
                    </p>
                  </div>
                </div>

                {/* Logo/Icon placeholder for the brand */}
                <div className="flex-shrink-0 bg-[#1e40af] p-8 rounded-[3rem] shadow-xl shadow-blue-100 hidden lg:block rotate-3 hover:rotate-0 transition-transform duration-500">
                  <h2 className="text-4xl font-black italic text-white tracking-tighter">
                    NEW<span className="text-yellow-400">TECH</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
