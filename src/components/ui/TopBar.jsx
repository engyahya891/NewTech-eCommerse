import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="bg-[#FFD43B] h-[45px] flex items-center w-full">
      <div className="container mx-auto px-4 flex justify-end gap-6 text-black font-medium text-sm">
        <Link to="/login" className="hover:underline">Sell With US</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
      </div>
    </div>
  );
};

export default TopBar;