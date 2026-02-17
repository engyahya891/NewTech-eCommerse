import React from "react";
import Slider from "react-slick";
import BannerGrid from "../components/ui/BannerGrid";
import BrandsSection from "../components/ui/BrandsSection";
import CategoryCircles from "../components/ui/CategoryCircles";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import ProductSection from "../components/ui/ProductSection";

// --- استيراد البيانات ---
import HomeFooter from "../components/ui/HomeFooter";
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

      <HomeFooter/>

      {/* 20. الفوتر النهائي (الغامق) */}
      <Footer />
    </div>
  );
};

export default Home;
