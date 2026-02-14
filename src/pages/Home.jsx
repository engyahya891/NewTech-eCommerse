import React from "react";
import Slider from "react-slick";
import BannerGrid from "../components/ui/BannerGrid";
import BrandsSection from "../components/ui/BrandsSection";
import CategoryCircles from "../components/ui/CategoryCircles";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import ProductSection from "../components/ui/ProductSection";

// --- استيراد البيانات ---
import {
    beautyData,
    fragranceData,
    gamingData,
    gridImages1,
    gridImages2,
    headphoneData,
    heroImages,
    kitchenData,
    largeAppliancesData,
    mobileData,
    newArrivalsData,
    speakerData,
    tvData,
} from "../data/index";

const Home = () => {
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Header />

      {/* 1. Hero Slider */}
      <div className="w-full bg-gray-100 mb-8">
        <Slider {...heroSettings}>
          {heroImages.map((imgSrc, index) => (
            <div key={index} className="w-full outline-none">
              <img
                src={imgSrc}
                alt="Banner"
                className="w-full h-auto object-cover max-h-[400px] md:max-h-[500px]"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* 2. All Categories */}
      <CategoryCircles />

      {/* 3. Oppo Banner */}
      <div className="container mx-auto px-4 my-10">
        <img
          src="/img/cat-down.webp"
          alt="Oppo Banner"
          className="w-full rounded-lg shadow-sm"
        />
      </div>

      {/* 4. New Arrivals */}
      <ProductSection title="New Arrivals" products={newArrivalsData} />

      {/* 5. Our Brands */}
      <BrandsSection />

      {/* 6. Double Promo Banner */}
      <div className="container mx-auto px-4 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/img/our-down.webp"
              alt="Promo 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/img/our-down-2.webp"
              alt="Promo 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* 7. Beauty & Health */}
      <ProductSection
        title="Best Selling in Beauty and Health"
        products={beautyData}
      />

      {/* 8. Televisions */}
      <ProductSection title="Televisions" products={tvData} />

      {/* 9. Smart Phones */}
      <ProductSection title="Best Selling Smart Phones" products={mobileData} />

      {/* 10. Gamer's Haven */}
      <ProductSection title="Gamer's Haven" products={gamingData} />

      {/* 11. Top Headphone Deals */}
      <ProductSection title="Top Headphone Deals" products={headphoneData} />

      {/* 12. Banner Grid 1 */}
      <BannerGrid images={gridImages1} />

      {/* 13. Top Fragrances */}
      <ProductSection
        title="Top Fragrances for Women"
        products={fragranceData}
      />

      {/* 14. Banner Grid 2 */}
      <BannerGrid images={gridImages2} />

      {/* 15. Kitchen */}
      <ProductSection title="For your Kitchen!" products={kitchenData} />

      {/* 16. Speaker Zone */}
      <ProductSection title="Speaker Zone" products={speakerData} />

      {/* 17. Large Appliances */}
      <ProductSection title="Large Appliances" products={largeAppliancesData} />

      {/* ================== الاقسام الجديدة (تكملة الـ Index) ================== */}

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

      {/* 20. الفوتر النهائي (الغامق) */}
      <Footer />
    </div>
  );
};

export default Home;
