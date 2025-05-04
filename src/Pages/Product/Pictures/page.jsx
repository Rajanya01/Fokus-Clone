import React from 'react';

export default function Header({ currentFlavor = 'packOf3' }) {
  const bannerImages = {
    packOf3: "https://www.fokus.shop/cdn/shop/files/01_Fokus_front_page_copy.jpg?v=1738154247",
    mangoPineapple: "https://www.fokus.shop/cdn/shop/files/Fokus_mango_banner_copy_1.jpg?v=1737723339",
    kiwiLemon: "https://www.fokus.shop/cdn/shop/files/Fokus_Kiwi_banner_copy.jpg?v=1737721048",
    strawberryWatermelon: "https://www.fokus.shop/cdn/shop/files/Fokus_strawberry_banner_copy.jpg?v=1737721048"
  };

  return (
    <div className="h-[850px] w-full">
      <img 
        src={bannerImages[currentFlavor]} 
        className="w-full h-full" 
        alt={`${currentFlavor} banner`}
        loading="lazy"
      />
    </div>
  );
}