import React from 'react';
import Slider from "react-slick";
import BannerGrid from '../components/ui/BannerGrid';
import BrandsSection from '../components/ui/BrandsSection';
import CategoryCircles from '../components/ui/CategoryCircles';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import ProductSection from '../components/ui/ProductSection';

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
    tvData
} from '../data/index';

const Home = () => {
    const heroSettings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000, arrows: false };

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            <Header />

            {/* 1. Hero Slider */}
            <div className="w-full bg-gray-100 mb-8">
                <Slider {...heroSettings}>
                    {heroImages.map((imgSrc, index) => (
                        <div key={index} className="w-full outline-none">
                            <img src={imgSrc} alt="Banner" className="w-full h-auto object-cover max-h-[400px] md:max-h-[500px]" />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* 2. All Categories */}
            <CategoryCircles />

            {/* 3. Oppo Banner */}
            <div className="container mx-auto px-4 my-10">
                <img src="/img/cat-down.webp" alt="Oppo Banner" className="w-full rounded-lg shadow-sm" />
            </div>

            {/* 4. New Arrivals */}
            <ProductSection title="New Arrivals" products={newArrivalsData} />

            {/* 5. Our Brands */}
            <BrandsSection />

            {/* 6. Double Promo Banner */}
            <div className="container mx-auto px-4 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="overflow-hidden rounded-lg">
                        <img src="/img/our-down.webp" alt="Promo 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <img src="/img/our-down-2.webp" alt="Promo 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                </div>
            </div>

            {/* 7. Beauty & Health */}
            <ProductSection title="Best Selling in Beauty and Health" products={beautyData} />

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
            <ProductSection title="Top Fragrances for Women" products={fragranceData} />

            {/* 14. Banner Grid 2 */}
            <BannerGrid images={gridImages2} />

            {/* 15. Kitchen */}
            <ProductSection title="For your Kitchen!" products={kitchenData} />

            {/* 16. Speaker Zone */}
            <ProductSection title="Speaker Zone" products={speakerData} />

            {/* 17. Large Appliances */}
            <ProductSection title="Large Appliances" products={largeAppliancesData} />

            {/* ================== الاقسام الجديدة (تكملة الـ Index) ================== */}

            {/* 18. قسم الـ Trending & About (الخلفية الرمادية) */}
            <div className="bg-[#eeeeee] py-12 mt-10 border-t border-gray-200">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="space-y-8 text-sm text-gray-700 leading-loose">
                        <div>
                            <h5 className="font-bold text-lg mb-4 text-black uppercase">Trending Products</h5>
                            <p><span className="font-bold">Electronics & Tools :</span> Geepas Steam Iron, Bose Soundlink, TCL Premium 4K TV, Xiaomi Robot Vacuum.</p>
                            <p className="mt-2"><span className="font-bold">Mobiles & Tablets :</span> Apple iPad Pro M4, Samsung Galaxy S24, Bose Ultra Earbuds.</p>
                            <p className="mt-2"><span className="font-bold">Home & Furniture :</span> Clikon Kettle, Kitchen Trolley, Moulinex Blender, Sanford 2 In 1.</p>
                        </div>

                        <div>
                            <h5 className="font-bold text-lg mb-4 text-black uppercase">Online Shopping Qatar</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 text-xs md:text-sm">
                                <p><span className="font-semibold">Mobile & Phones :</span> iPhones / Samsung mobiles / Oneplus / Xiaomi</p>
                                <p><span className="font-semibold">Electronics :</span> Smart tv / Android tv / Speakers / Refrigerator</p>
                                <p><span className="font-semibold">Laptops :</span> Gaming laptops / Notebooks / Macbooks / Mouse</p>
                                <p><span className="font-semibold">Home appliances :</span> Home decor / Kitchen Appliances / Air fryer</p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-300">
                            <h5 className="font-bold text-lg mb-3 text-black">About Jazp</h5>
                            <p className="text-justify md:text-left">
                                Jazp.com has been at the forefront of online shopping in the Middle East since our establishment in 2018, connecting customers with a diverse range of products. At Jazp.com, we prioritize authenticity and ensure a safe shopping experience for all.
                            </p>
                            <img src="/img/ثقة.svg" alt="Theqa" className="h-14 mt-4 opacity-90" />
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