import React, { useState } from 'react';
import './styles.css';
import { Plus, Minus } from 'lucide-react';
import Picture from '../Pictures/page';
import Ingredients from '../Ingredients/page';

export default function Page() {
  // Flavor image sets
  const imagesOne = [
    "https://www.fokus.shop/cdn/shop/files/Pack_of_3_copy_2.jpg?v=1738311491&width=1920",
    "https://www.fokus.shop/cdn/shop/files/fks.jpg?v=1738311491&width=1920",
    "https://www.fokus.shop/cdn/shop/files/Pack_of_3_imafe_1_3.jpg?v=1741682761&width=1920",
    "https://www.fokus.shop/cdn/shop/files/Packof3imafe2_1.jpg?v=1741682761&width=1920"
  ];

  const imagesMangoPineapple = [
    "https://www.fokus.shop/cdn/shop/files/FokusProductpageBgcopy_1.jpg?v=1737978730&width=1920",
    "https://www.fokus.shop/cdn/shop/files/ImageforMango1.jpg?v=1739172105&width=1920",
    "https://www.fokus.shop/cdn/shop/files/ImageforMango2.jpg?v=1739172105&width=1920",
    "https://www.fokus.shop/cdn/shop/files/Fokus_Product_page_image_Fect_mango_1.jpg?v=1739448716&width=1920"
  ];

  const imagesStrawberryWatermelon = [
    "https://www.fokus.shop/cdn/shop/files/FokusProductpageBg_Strawberry_1.jpg?v=1737978905&width=1200",
    "https://www.fokus.shop/cdn/shop/files/ImageforStrawberry1.jpg?v=1739172125&width=1920",
    "https://www.fokus.shop/cdn/shop/files/ImageforStrawberry2.jpg?v=1739172125&width=1200",
    "https://www.fokus.shop/cdn/shop/files/Fokus_Product_page_image_Fect_Strawberry_1.jpg?v=1739448716&width=1920"
  ];

  const imagesKiwiLemon = [
    "https://www.fokus.shop/cdn/shop/files/FokusProductpageBg_Kiwi.jpg?v=1737979032&width=1920",
    "https://www.fokus.shop/cdn/shop/files/ImageforKIWI1.jpg?v=1737979038&width=1920",
    "https://www.fokus.shop/cdn/shop/files/ImageforKIWI2.jpg?v=1737979038&width=1920",
    "https://www.fokus.shop/cdn/shop/files/Fokus_Product_page_image_Fect_KIWI_1.jpg?v=1739448716&width=1920"
  ];

  // Flavor data object
  const flavorData = {
    packOf3: {
      name: 'Fokus Hydration Pack of 3',
      subtitle: '3 Flavors, 1 Bottle Each',
      images: imagesOne,
      bgColor: 'bg-[#e0f595]',
      buttonColor: 'bg-[#adee57]',
      previewImage: "https://www.fokus.shop/cdn/shop/files/Pack_of_3.jpg?v=1737979895",
      size: 'text-[40px]',  
    },
    mangoPineapple: {
      name: 'Mango Pineapple (3 Bottles)',
      subtitle: 'Single Flavor 3 Bottles',
      images: imagesMangoPineapple,
      bgColor: 'bg-[#fffbd4]',
      buttonColor: 'bg-[#facc15]',
      previewImage: "https://www.fokus.shop/cdn/shop/files/M_P_Preview_image.jpg?v=1737979895",
      size: 'text-[40px]',
    },
    kiwiLemon: {
      name: 'Kiwi Lemon (3 Bottles)',
      subtitle: 'Single Flavor 3 Bottles',
      images: imagesKiwiLemon,
      bgColor: 'bg-[#d0ffb5]',
      buttonColor: 'bg-[#a3e635]',
      previewImage: "https://www.fokus.shop/cdn/shop/files/K_L_Preview_image.jpg?v=1737979900",
      size: 'text-[40px]',
    },
    strawberryWatermelon: {
      name: 'Strawberry Watermelon (3 Bottles)',
      subtitle: 'Single Flavor 3 Bottles',
      images: imagesStrawberryWatermelon,
      bgColor: 'bg-[#fcf0f0]',
      buttonColor: 'bg-[#fca5a5]',
      previewImage: "https://www.fokus.shop/cdn/shop/files/S_W_Preview_image.jpg?v=1737979895",
      size: 'text-[34px]',
    }
  };

  // State management
  const [activeTab, setActiveTab] = useState('combined');
  const [currentFlavor, setCurrentFlavor] = useState('packOf3');
  const [selectedImage, setSelectedImage] = useState(imagesOne[0]);
  const [count, setCount] = useState(0);

  // Helper functions
  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);

  const handleFlavorSelect = (flavor) => {
    setCurrentFlavor(flavor);
    setSelectedImage(flavorData[flavor].images[0]);
  };

  const currentFlavorData = flavorData[currentFlavor];

  return (
    <>
      <div className={`${currentFlavorData.bgColor} h-[100vh] w-full flex items-center overflow-hidden transition-colors duration-500`}>
        {/* Image Gallery */}
        <div className="w-[46vw] h-[80vh] mt-20 ml-10 flex gap-6">
          <div className="flex flex-col gap-3 overflow-y-auto max-h-full pr-2 hide-scrollbar">
            {currentFlavorData.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${currentFlavorData.name} preview ${idx + 1}`}
                className="w-[160px] h-[170px] object-cover rounded-lg border-2 border-black cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          <div>
            <img
              className="w-[500px] h-full object-cover rounded-lg border-2 border-black transition-transform hover:scale-[1.01]"
              src={selectedImage}
              alt={`Selected ${currentFlavorData.name}`}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-[45vw] h-[80vh] mt-20 ml-16">
          <h1 className={`font-bold ${currentFlavorData.size} `}>
            {currentFlavorData.name}
          </h1>
          <div className="bg-white w-[150px] h-[25px] flex justify-center items-center text-[12px] font-bold rounded-full">
            {currentFlavorData.subtitle}
          </div>

          {/* Flavor Selection Tabs */}
          <div className="mt-3 flex">
            <button
              className={`w-[300px] h-[40px] flex justify-center items-center rounded-b-md border-[1px] border-black ${activeTab === 'combined' ? 'bg-black text-white' : currentFlavorData.buttonColor
                }`}
              style={{ boxShadow: '0 5px 0 0 white' }}
              onClick={() => {
                setActiveTab('combined');
                handleFlavorSelect('packOf3');
              }}
            >
              Combined Pack
            </button>

            <button
              className={`w-[300px] h-[40px] flex justify-center items-center rounded-b-md border-[1px] border-black ${activeTab === 'flavors' ? 'bg-black text-white' : currentFlavorData.buttonColor
                }`}
              style={{ boxShadow: '0 5px 0 0 white' }}
              onClick={() => setActiveTab('flavors')}
            >
              Our Flavors
            </button>
          </div>

          {/* Flavor Selection */}
          <div className="mt-4">
            {activeTab === 'combined' ? (
              <div className="bg-white h-[160px] w-[190px] rounded-[10px] flex flex-col items-center ml-2 border-[1.5px] border-black">
                <img
                  src={flavorData.packOf3.previewImage}
                  alt="Combined pack preview"
                  className='rounded-t-[10px] border-b-[1.5px] border-black w-full h-[120px] object-cover'
                />
                <div className="text-[12px] w-full h-full flex justify-center items-center">Pack of 3</div>
              </div>
            ) : (
              <div className="p-4 flex gap-4">
                {['mangoPineapple', 'kiwiLemon', 'strawberryWatermelon'].map((flavor) => (
                  <div
                    key={flavor}
                    className={`bg-white h-[160px] w-[190px] rounded-[10px] flex flex-col items-center border-[1.5px] border-black cursor-pointer ${currentFlavor === flavor ? `border-${flavorData[flavor].buttonColor.split('-')[1]}-400` : ''
                      }`}
                    onClick={() => handleFlavorSelect(flavor)}
                  >
                    <img
                      src={flavorData[flavor].previewImage}
                      alt={`${flavorData[flavor].name} preview`}
                      className='rounded-t-[10px] border-b-[1.5px] border-black w-full h-[120px] object-cover'
                    />
                    <div className="text-[12px] w-full h-full flex justify-center items-center">
                      {flavorData[flavor].name.split(' (')[0]}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price and Add to Cart */}
          <div className="mt-4 text-[24px] ml-4 font-normal">
            Rs. 450.00 (Rs. 150×3)
            <div className="text-sm text-black">
              Tax included. Shipping calculated at checkout
            </div>
          </div>

          <div className="flex items-center mt-4 gap-4">
            <div className="flex items-center gap-4 ml-4 h-[30px]">
              <button
                className={`w-[30px] h-[30px] rounded-md flex justify-center items-center border-2 border-black hover:translate-y-[6px] duration-150 shadow-[0_5px_0_0_white] hover:shadow-none ${currentFlavorData.buttonColor}`}
                onClick={decrement}
                aria-label="Decrease quantity"
              >
                <Minus size={20} color="black" />
              </button>
              <div>{count}</div>
              <button
                className={`w-[30px] h-[30px] rounded-md flex justify-center items-center border-2 border-black hover:translate-y-[6px] duration-150 shadow-[0_5px_0_0_white] hover:shadow-none ${currentFlavorData.buttonColor}`}
                onClick={increment}
                aria-label="Increase quantity"
              >
                <Plus size={20} color="black" />
              </button>
            </div>
            <button
              className="text-white w-[430px] h-[30px] bg-black rounded-md flex justify-center items-center border-2 border-black hover:translate-y-[6px] duration-150 shadow-[0_5px_0_0_white] hover:shadow-none"
              aria-label="Add to cart"
            >
              Add to cart
            </button>
          </div>

          {/* Shipping Info */}
          <div className={`justify-center items-center mt-4 h-[100px] w-[550px] ml-4 rounded-md border-2 border-black shadow-[0_5px_0_black] ${currentFlavor === 'mangoPineapple' ? 'bg-yellow-50' :
            currentFlavor === 'kiwiLemon' ? 'bg-green-50' :
              currentFlavor === 'strawberryWatermelon' ? 'bg-red-50' : 'bg-white'
            }`}>
            <ul className="flex flex-col justify-center list-disc ml-4 px-4 py-3">
              <li>Free Shipping on all orders for 24 Hours</li>
              <li>Orders will be delivered in 10-15 working days</li>
              <li>Prepaid orders only</li>
            </ul>
          </div>
        </div>
      </div>
      <Ingredients currentFlavor={currentFlavor} color={currentFlavorData.buttonColor} />
      <Picture currentFlavor={currentFlavor} />
    </>
  );
}