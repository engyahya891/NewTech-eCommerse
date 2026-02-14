import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // --- 1. تهيئة البيانات من LocalStorage عند تحميل التطبيق ---
  // نستخدم دالة داخل useState لكي تُنفذ مرة واحدة فقط عند البداية
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('newtech_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('newtech_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // --- 2. التزامن التلقائي مع LocalStorage عند حدوث أي تغيير ---
  useEffect(() => {
    localStorage.setItem('newtech_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('newtech_wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // ==================== وظائف السلة (Cart Functions) ====================
  const addToCart = (product) => {
    setCartItems((prev) => {
      const isExist = prev.find(item => item.id === product.id);
      if (isExist) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const incrementQuantity = (id) => {
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id) => {
    setCartItems(prev => prev.map(item =>
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  // ==================== وظائف المفضلة (Wishlist Functions) ====================
  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) return prev.filter((item) => item.id !== product.id);
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart,
      wishlistItems, addToWishlist, removeFromWishlist, isInWishlist 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);