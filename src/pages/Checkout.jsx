import { CreditCard, MapPin, ShieldCheck, Truck } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
    const { cartItems } = useCart();
    
    // حساب المجموع الكلي
    const subtotal = cartItems.reduce((acc, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return acc + (price * (item.quantity || 1));
    }, 0);

    const shipping = subtotal > 500 ? 0 : 25; // شحن مجاني إذا زاد السعر عن 500
    const total = subtotal + shipping;

    const [orderStep, setOrderStep] = useState(1); // 1: Info, 2: Success

    if (orderStep === 2) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl text-center max-w-lg w-full border border-blue-50">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShieldCheck size={50} />
                    </div>
                    <h2 className="text-3xl font-black text-[#1e40af] uppercase italic tracking-tighter mb-4">Order Placed!</h2>
                    <p className="text-gray-500 font-medium mb-8">Thank you, Yahya! Your order has been successfully simulated. You will receive an OTP shortly.</p>
                    <Link to="/" className="inline-block bg-[#1e40af] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-[#0f172a] transition-all">
                        Back to NewTech
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] py-12 md:py-20 font-sans">
            <div className="container mx-auto px-4 max-w-6xl">
                
                <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] uppercase italic tracking-tighter mb-10 border-l-8 border-yellow-400 pl-6">
                    Secure <span className="text-[#1e40af]">Checkout</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* الجانب الأيسر: بيانات الشحن والدفع (Form) */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* 1. Shipping Details */}
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-blue-50 text-[#1e40af] rounded-xl"><MapPin size={24}/></div>
                                <h3 className="text-xl font-black text-[#0f172a] uppercase italic">Shipping Address</h3>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <input type="text" placeholder="Eng. Yahya Hamsho" className="w-full bg-gray-50 border-2 border-gray-50 rounded-xl px-5 py-4 focus:border-[#1e40af] focus:bg-white outline-none transition-all font-bold" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                                    <input type="tel" placeholder="+974 XXXX XXXX" className="w-full bg-gray-50 border-2 border-gray-50 rounded-xl px-5 py-4 focus:border-[#1e40af] focus:bg-white outline-none transition-all font-bold" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Street / Building Address</label>
                                    <input type="text" placeholder="Doha, Qatar - Tech District" className="w-full bg-gray-50 border-2 border-gray-50 rounded-xl px-5 py-4 focus:border-[#1e40af] focus:bg-white outline-none transition-all font-bold" />
                                </div>
                            </div>
                        </div>

                        {/* 2. Payment Method (Simulated) */}
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl"><CreditCard size={24}/></div>
                                <h3 className="text-xl font-black text-[#0f172a] uppercase italic">Payment Method</h3>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <label className="flex items-center justify-between p-5 border-2 border-[#1e40af] bg-blue-50/50 rounded-2xl cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-5 h-5 rounded-full border-4 border-[#1e40af] bg-white"></div>
                                        <span className="font-bold text-gray-800">Cash on Delivery</span>
                                    </div>
                                    <Truck size={20} className="text-[#1e40af]" />
                                </label>
                                <label className="flex items-center justify-between p-5 border-2 border-gray-100 rounded-2xl cursor-not-allowed opacity-50">
                                    <div className="flex items-center gap-4">
                                        <div className="w-5 h-5 rounded-full border-2 border-gray-200"></div>
                                        <span className="font-bold text-gray-400">Credit Card (Coming Soon)</span>
                                    </div>
                                    <CreditCard size={20} className="text-gray-300" />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* الجانب الأيمن: ملخص السعر والمنتجات */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#1e40af] p-8 rounded-[2.5rem] shadow-xl text-white sticky top-40">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-8 border-b border-white/10 pb-4">Order Summary</h3>
                            
                            {/* قائمة مصغرة بالمنتجات */}
                            <div className="space-y-4 mb-8 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center text-xs">
                                        <span className="font-medium opacity-80 truncate w-32">{item.name}</span>
                                        <span className="font-black">x{item.quantity || 1} — {item.price}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 pt-4">
                                <div className="flex justify-between text-sm">
                                    <span className="opacity-70 font-bold uppercase tracking-widest">Subtotal</span>
                                    <span className="font-black">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="opacity-70 font-bold uppercase tracking-widest">Shipping</span>
                                    <span className="font-black">{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                                </div>
                                <div className="h-[1px] bg-white/10 my-4"></div>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-black uppercase italic">Total Amount</span>
                                    <span className="text-3xl font-black text-yellow-400 tracking-tighter">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button 
                                onClick={() => setOrderStep(2)}
                                className="w-full bg-yellow-400 text-[#1e40af] mt-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg hover:bg-white transition-all active:scale-95 flex items-center justify-center gap-3"
                            >
                                Confirm Order <ShieldCheck size={22} />
                            </button>
                            
                            <p className="text-[10px] text-center mt-6 opacity-50 font-bold uppercase tracking-widest">
                                🔒 Secure SSL Encryption Enabled
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;