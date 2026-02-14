import React from 'react';

const BannerGrid = ({ images }) => {
  if (!images || images.length < 5) return null;

  return (
    <div className="container mx-auto px-4 my-12">
      <div className="flex flex-col lg:flex-row gap-4">
        
        {/* الصورة الكبيرة (يسار في الشاشات الكبيرة، فوق في الموبايل) */}
        <div className="w-full lg:w-1/2">
          <div className="h-full overflow-hidden rounded-xl">
            <img 
              src={images[0]} 
              alt="Main Offer" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>

        {/* الصور الصغيرة (يمين) - شبكة 2x2 */}
        <div className="w-full lg:w-1/2 flex gap-4">
          {/* العمود الأول */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="h-1/2 overflow-hidden rounded-xl">
               <img src={images[1]} alt="Offer 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="h-1/2 overflow-hidden rounded-xl">
               <img src={images[2]} alt="Offer 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          
          {/* العمود الثاني */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="h-1/2 overflow-hidden rounded-xl">
               <img src={images[3]} alt="Offer 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="h-1/2 overflow-hidden rounded-xl">
               <img src={images[4]} alt="Offer 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BannerGrid;