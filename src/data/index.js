// ================== src/data/index.js ==================

// 1. صور السلايدر الرئيسي
export const heroImages = [
  "/img/carousel-1.webp",
  "/img/carousel-2.webp",
  "/img/carousel-3.webp"
];

// 2. تصنيفات الدوائر (Categories)
export const categoriesData = [
  { id: 1, name: "Electronics", img: "/img/cat-1.png" },
  { id: 2, name: "Mobiles", img: "/img/cat-2.png" },
  { id: 3, name: "Beauty", img: "/img/cat-3.png" },
  { id: 4, name: "Home", img: "/img/cat-4.png" },
  { id: 5, name: "Fashion", img: "/img/cat-5.png" },
  { id: 6, name: "Sports", img: "/img/cat-6.png" },
  { id: 7, name: "Baby", img: "/img/cat-7.png" },
  { id: 8, name: "Laptops", img: "/img/cat-8.png" },
  { id: 9, name: "Supermarket", img: "/img/cat-9.png" },
  { id: 10, name: "Gallery", img: "/img/cat-10.png" }
];

// 3. صور العلامات التجارية (Brands)
export const brandsData = [
  "/img/or-1.png", "/img/or-2.png", "/img/or-3.png",
  "/img/or-5.png", "/img/or-6.png", "/img/or-7.png",
  "/img/or-8.png", "/img/or-9.png", "/img/or-10.png",
  "/img/or-11.png", "/img/or-12.png"
];

// 4. بيانات المنتجات مع الوصف (desc) بالدولار الأمريكي
export const newArrivalsData = [
  { id: 1, name: "Kemei KM 1838 Hair Trimmer", price: "$23.29", image: "/img/cat-2-1.webp", desc: "Professional waterproof hair trimmer for precise styling." },
  { id: 2, name: "Kemei KM 3208 Hair Trimmer", price: "$109.60", image: "/img/cat-2-2.webp", desc: "Advanced body groomer with ceramic blades for skin protection." },
  { id: 3, name: "Dell E2222H 22 Monitor", price: "$38.36", image: "/img/cat-2-3.webp", desc: "21.5-inch Full HD monitor perfect for home and office work." },
  { id: 4, name: "JBL Charge 5 Speaker", price: "$123.03", image: "/img/sp-1.webp", desc: "Portable waterproof speaker with deep bass and powerbank function." },
  { id: 5, name: "Apple Macbook PRO 2019", price: "$575.40", image: "/img/cat-2-5.webp", desc: "High-performance laptop featuring a stunning Retina display." },
  { id: 6, name: "Porodo Multi Port Hub", price: "$175.36", image: "/img/cat-2-6.webp", desc: "Universal USB-C hub with multiple ports for data and charging." },
  { id: 7, name: "Green Lion Trimmer", price: "$57.54", image: "/img/cat-2-7.webp", desc: "Cordless transparent hair trimmer with high-speed motor." },
];

export const beautyData = [
  { id: 101, name: "Porodo Multi Port Trimmer", price: "$38.36", image: "/img/makine-1.webp", desc: "Compact and powerful trimmer for detailed grooming." },
  { id: 102, name: "Kemei Professional Clipper", price: "$26.03", image: "/img/makine-2.webp", desc: "Heavy-duty clipper designed for professional salon use." },
  { id: 103, name: "VGR Hair Trimmer Set", price: "$32.88", image: "/img/makine-3.webp", desc: "Complete grooming kit with multiple adjustable combs." },
  { id: 104, name: "Philips Series 3000", price: "$49.32", image: "/img/makine-4.webp", desc: "Reliable electric shaver for a comfortable close shave." },
  { id: 105, name: "DSP Professional Hair Clipper", price: "$54.80", image: "/img/makine-5.webp", desc: "High-precision hair clipper with durable titanium blades." },
  { id: 106, name: "Geepas Trimmer Kit", price: "$17.81", image: "/img/makine-6.webp", desc: "Multi-functional grooming set for hair, beard, and nose." },
];

export const tvData = [
  { id: 201, name: "Xiaomi Mi TV Stick 4K", price: "$51.79", image: "/img/televezyon-1.webp", desc: "Smart 4K streaming media player for modern entertainment." },
  { id: 202, name: "Geepas 65 inches 4K", price: "$411.00", image: "/img/televezyon-3.webp", desc: "Ultra HD Smart LED TV for a cinematic home experience." },
  { id: 203, name: "Vogels Wall Mount", price: "$191.53", image: "/img/televezyon-8.webp", desc: "Premium full-motion wall bracket for Large TV screens." },
  { id: 204, name: "Xiaomi TV Stick", price: "$43.57", image: "/img/televezyon-2.webp", desc: "Portable Full HD streaming stick with Android TV system." },
  { id: 205, name: "Skill Tech Wall Mount", price: "$47.95", image: "/img/televezyon-6.webp", desc: "Heavy-duty fixed wall mount for secure TV placement." },
  { id: 206, name: "Geepas 50 Inch Smart TV", price: "$260.30", image: "/img/televezyon-4.webp", desc: "Elegant 4K smart TV with built-in streaming apps." },
];

export const mobileData = [
  { id: 301, name: "Honor X9b 5G 12GB 256GB", price: "$287.70", image: "/img/telefon-1.webp", desc: "Powerful 5G smartphone with ultra-durable display." },
  { id: 302, name: "Honor X8b 8GB 512GB", price: "$221.94", image: "/img/telefon-2.webp", desc: "Sleek design with massive storage for all your media." },
  { id: 303, name: "Xiaomi 11 Lite NE 5G", price: "$243.86", image: "/img/telefon-4.webp", desc: "Super slim and light 5G phone with vibrant AMOLED screen." },
  { id: 304, name: "Redmi Note 13 Pro 5G", price: "$321.95", image: "/img/telefon-6.webp", desc: "High-resolution camera and 5G speed for pro photography." },
  { id: 305, name: "Vivo V25 8GB 128GB", price: "$389.08", image: "/img/telefon-7.webp", desc: "Color-changing back design and excellent selfie camera." },
  { id: 306, name: "Oppo Reno12 5G", price: "$344.97", image: "/img/telefon-10.webp", desc: "Futuristic design with AI camera features and 5G power." },
];

export const gamingData = [
  { id: 401, name: "Gaming Keyboard RGB", price: "$41.10", image: "/img/gamer-1.webp", desc: "Mechanical-feel RGB keyboard with customizable lighting." },
  { id: 402, name: "Gaming Mouse Pad", price: "$12.33", image: "/img/gamer-2.webp", desc: "Large precision surface for optimal gaming mouse tracking." },
  { id: 403, name: "Mechanical Keyboard", price: "$60.28", image: "/img/gamer-3.webp", desc: "Durable mechanical switches for fast gaming response." },
  { id: 404, name: "PS5 Controller", price: "$76.72", image: "/img/gamer-4.webp", desc: "Official DualSense wireless controller for PlayStation 5." },
  { id: 405, name: "Gaming Headset", price: "$52.06", image: "/img/gamer-5.webp", desc: "Immersive surround sound headset with noise-canceling mic." },
  { id: 406, name: "Razer Mouse", price: "$84.94", image: "/img/gamer-6.webp", desc: "High-precision gaming mouse with customizable DPI levels." },
];

export const headphoneData = [
  { id: 501, name: "JBL Wireless Headphones", price: "$68.50", image: "/img/head-1.webp", desc: "Bluetooth on-ear headphones with legendary JBL Pure Bass." },
  { id: 502, name: "Sony Noise Cancelling", price: "$232.90", image: "/img/head-2.webp", desc: "Top-tier noise-canceling headphones for pure audio focus." },
  { id: 503, name: "Airpods Pro Case", price: "$12.33", image: "/img/head-3.webp", desc: "Shockproof protective silicone case for your wireless pods." },
  { id: 504, name: "Samsung Galaxy Buds", price: "$87.68", image: "/img/head-4.jpg", desc: "Premium true wireless earbuds with AKG tuned sound." },
  { id: 505, name: "Anker Soundcore", price: "$49.32", image: "/img/head-5.webp", desc: "Comfortable over-ear headphones with long battery life." },
  { id: 506, name: "Headphone Stand", price: "$16.44", image: "/img/head-6.webp", desc: "Elegant aluminum stand to organize your desk space." },
];

export const speakerData = [
  { id: 801, name: "JBL Speaker Blue", price: "$68.50", image: "/img/spaker-1.webp", desc: "Wireless bluetooth speaker with loud sound." },
  { id: 802, name: "JBL Speaker Blue", price: "$68.50", image: "/img/spaker-2.webp", desc: "Wireless bluetooth speaker with loud sound." },
  { id: 803, name: "JBL Speaker Blue", price: "$68.50", image: "/img/spaker-3.webp", desc: "Wireless bluetooth speaker with loud sound." },
  { id: 804, name: "JBL Speaker Blue", price: "$68.50", image: "/img/spaker-4.webp", desc: "Wireless bluetooth speaker with loud sound." },
  { id: 805, name: "JBL Speaker Blue", price: "$68.50", image: "/img/spaker-5.webp", desc: "Wireless bluetooth speaker with loud sound." },
  { id: 806, name: "JBL Speaker Blue", price: "$68.50", image: "/img/spaker-6.webp", desc: "Wireless bluetooth speaker with loud sound." },
];

export const fragranceData = [
  { id: 601, name: "Chanel Coco Mademoiselle", price: "$150.70", image: "/img/parfum-1.webp", desc: "Oriental-floral fragrance for independent and bold women." },
  { id: 602, name: "Dior Sauvage", price: "$131.52", image: "/img/parfum-2.webp", desc: "Strong and woody fragrance for a modern masculinity." },
  { id: 603, name: "Versace Eros", price: "$87.68", image: "/img/parfum-3.webp", desc: "Vibrant fragrance with a mix of mint, apple, and lemon." },
  { id: 604, name: "Gucci Bloom", price: "$112.34", image: "/img/parfum-4.webp", desc: "Authentic scent captures the spirit of a garden in bloom." },
  { id: 605, name: "YSL Libre", price: "$134.26", image: "/img/parfum-5.webp", desc: "The fragrance of freedom, a mix of lavender and orange blossom." },
  { id: 606, name: "Burberry Her", price: "$98.64", image: "/img/parfum-6.webp", desc: "Fruity and sweet fragrance reflecting the spirit of London." },
];

export const kitchenData = [
  { id: 701, name: "Geepas Blender", price: "$32.88", image: "/img/kitchen-1.webp", desc: "Powerful 2-in-1 blender for smoothies and grinding." },
  { id: 702, name: "Air Fryer 5L", price: "$68.50", image: "/img/kitchen-2.webp", desc: "Healthy oil-free cooking with digital touch control." },
  { id: 703, name: "Microwave Oven", price: "$95.90", image: "/img/kitchen-3.webp", desc: "Fast heating microwave with multiple cooking levels." },
  { id: 704, name: "Electric Kettle", price: "$16.44", image: "/img/kitchen-4.webp", desc: "Stainless steel rapid boil kettle with auto-off safety." },
  { id: 705, name: "Toaster 2 Slice", price: "$21.92", image: "/img/kitchen-5.webp", desc: "Compact toaster with adjustable browning control." },
  { id: 706, name: "Coffee Maker", price: "$49.32", image: "/img/kitchen-6.webp", desc: "Drip coffee machine for fresh morning coffee daily." },
];

export const largeAppliancesData = [
  { id: 801, name: "Samsung Refrigerator", price: "$685.00", image: "/img/large-1.jpg", desc: "Double-door energy-saving fridge with digital inverter." },
  { id: 802, name: "LG Washing Machine", price: "$493.20", image: "/img/large-2.webp", desc: "Front load smart washer with AI Direct Drive technology." },
  { id: 803, name: "Dishwasher", price: "$438.40", image: "/img/large-3.jpg", desc: "Quiet and efficient dishwasher with multiple wash programs." },
  { id: 804, name: "Cooking Range", price: "$328.80", image: "/img/large-4.webp", desc: "Full gas cooking range with integrated oven and grill." },
  { id: 805, name: "Freezer Box", price: "$246.60", image: "/img/large-5.jpg", desc: "Chest freezer with fast freezing and spacious capacity." },
  { id: 806, name: "Water Dispenser", price: "$95.90", image: "/img/large-6.webp", desc: "Hot and cold water dispenser with a built-in fridge cabinet." },
];

// 5. Banner Grids Images
export const gridImages1 = [
  "/img/head-down-1.webp", // Big
  "/img/head-down-2.webp", "/img/head-down-3.webp", "/img/head-down-4.webp", "/img/head-down-5.webp" // Small
];
export const gridImages2 = [
  "/img/parfum-down-1.webp", // Big
  "/img/parfum-down-2.webp", "/img/parfum-down-3.webp", "/img/parfum-down-4.webp", "/img/parfum-down-5.webp" // Small
];

// بيانات الخدمات (الشريط الأصفر)
export const servicesData = [
  { img: "footer2-1.svg", text: "Great Selection" },
  { img: "footer2-2.svg", text: "Assured Quality" },
  { img: "footer2-3.svg", text: "Low Price" },
  { img: "footer2-4.svg", text: "Secure Payments" },
  { img: "footer2-5.svg", text: "Fast Delivery" },
  { img: "footer2-6.svg", text: "Fast Delivery" },
];

// بيانات شبكة التصنيفات الكبيرة (Shop By Category Grid)
export const largeCategoryGrid = [
  { id: 1, name: "Television", img: "/img/buyuk-cat-1.jpg" },
  { id: 2, name: "Speakers & Home Theaters", img: "/img/buyuk-cat-2.jpg" },
  { id: 3, name: "Camera Accessories", img: "/img/buyuk-cat-3.jpg" },
  { id: 4, name: "Small appliances", img: "/img/buyuk-cat-4.jpg" },
  { id: 5, name: "Large Appliances", img: "/img/buyuk-cat-5.jpg" },
  { id: 6, name: "Game & Consoles", img: "/img/buyuk-cat-6.jpg" },
  { id: 7, name: "Torches - Emergency & Lighting", img: "/img/buyuk-cat-7.jpg" },
  { id: 8, name: "Tools", img: "/img/buyuk-cat-8.jpg" },
  { id: 9, name: "Electronics", img: "/img/buyuk-cat-9.jpg" },
  { id: 10, name: "Projectors", img: "/img/buyuk-cat-10.jpg" },
  { id: 11, name: "Alarm & Sensor", img: "/img/buyuk-cat-11.jpg" },
  { id: 12, name: "Automation and Robotics", img: "/img/buyuk-cat-12.jpg" },
  { id: 13, name: "Cameras", img: "/img/buyuk-cat-13.jpg" },
];








// أضف هذا في نهاية ملف src/data/index.js
export const allProducts = [
  ...newArrivalsData,
  ...mobileData,
  ...tvData,
  ...gamingData,
  ...headphoneData,
  ...speakerData,
  ...beautyData,
  ...fragranceData,
  ...kitchenData,
  ...largeAppliancesData
];