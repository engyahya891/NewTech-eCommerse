# NewTech E-Commerce Platform 🚀

**NewTech** is a modern, high-performance e-commerce web application designed for tech enthusiasts and hardware engineers. Built with React.js and Tailwind CSS, it features a seamless user experience, persistent state management, and a distinct engineering-centric design language.

## 🌟 Key Features

* **Smart Search Engine:** Real-time filtering and search suggestions for products.
* **Persistent Shopping Cart:** Items remain in the cart even after refreshing the page (LocalStorage).
* **Dynamic Wishlist System:** Add/Remove items to wishlist with instant UI updates.
* **Engineering Dashboard:** A unique user profile displaying tech stacks and order statistics.
* **Order Tracking System:** Visual timeline stepper to track shipments from processing to delivery.
* **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop screens.
* **Performance:** Code splitting and lazy loading implemented for fast initial load.

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM (v6)
* **State Management:** Context API + LocalStorage
* **Icons:** Lucide React
* **Animations/UI:** Swiper.js (Sliders), CSS Transitions

## 📂 Project Structure

```bash
src/
├── components/         # Reusable UI components
│   ├── ui/             # Header, Footer, Cards, etc.
├── context/            # Global State (CartContext)
├── data/               # Static product data (JSON simulation)
├── pages/              # Application Pages
│   ├── Home.jsx        # Landing Page
│   ├── Cart.jsx        # Shopping Cart Logic
│   ├── Checkout.jsx    # Payment Simulation
│   ├── Profile.jsx     # User Dashboard
│   ├── Orders.jsx      # Order History
│   ├── TrackOrder.jsx  # Shipment Tracking
│   ├── Wishlist.jsx    # User Favorites
│   ├── Product.jsx     # Product Details
│   ├── ContactUs.jsx   # Contact Form
│   └── ...
├── App.jsx             # Main Routing & Lazy Loading
└── main.jsx            # Entry Point

```


🚀 Getting Started
Clone the repository:

Bash

git clone [https://github.com/your-username/newtech-ecommerce.git](https://github.com/your-username/newtech-ecommerce.git)
Install dependencies:

Bash

npm install
Run the development server:

Bash

npm run dev
Build for production:

Bash

npm run build
📸 Page Highlights
1. User Dashboard
A customized profile page showing the user's "Tech Expertise" alongside their shopping stats.

2. Live Tracking
A dynamic stepper visualization that tracks the order status in real-time simulation.

3. Smart Cart
Calculates subtotals, applies shipping logic automatically, and persists data across sessions.

👨‍💻 Author
Eng. Yahya Hamsho Computer Engineering Student & Full-Stack Developer

Built with ❤️ for the Tech Community.