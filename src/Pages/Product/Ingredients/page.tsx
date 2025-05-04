import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

export default function Page() {
  const [expandedIngredients, setExpandedIngredients] = useState({});

  const toggleIngredient = (index) => {
    setExpandedIngredients(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const Ingredients = [
    { title: "Vitamin D3", description: "Lack of sunshine got your vibe down? Vitamin D3 steps in as your mood booster and immune system's best friend. It's like a sip of sunlight—strong bones, strong vibes." },
    { title: "Water", description: "Pure water is the OG fuel for your body and brain, keeping you cool, calm, and collected—even on chaotic days." },
    { title: "Coconut Water (22%)", description: "Coconut water is nature's hydration hack, packed with electrolytes to keep you refreshed and keep going." },
    { title: "Sucralose", description: "Sucralose brings the flavor, skips the calories, and keeps you on track. It's your sweet fix, made smarter." },
    { title: "Taurine", description: "Taurine is the energy ninja that steps in to keep you focused and energized. Whether it's work or play, this is the endurance boost you need." },
    { title: "Ginseng Extract", description: "Ginseng is your go-to for a natural boost. It powers up your focus and keeps you moving, no matter how long the day." },
    { title: "Ginkgo Biloba Extract", description: "Ginkgo Biloba clears the mental clutter, improving focus and memory so you're always on top of your game." },
    { title: "Craetine", description: "Creatine powers up your strength and recovery, turning your workouts into beast mode. Push harder, recover faster, and keep leveling up." },
    { title: "Glutamine", description: "Glutamine restores your energy like a pro and keeps your muscles and immunity in the game. Built for the grind." },
    { title: "LCLT (L-Carnitine L-Tartrate)", description: "LCLT helps convert fat into fuel, giving you long-lasting energy and a metabolic edge." },
    { title: "5-HTP", description: "5-HTP restores balance, boosting serotonin levels to help you stay calm, happy, and in control" },
    { title: "Inositol", description: "Inositol helps calm the overthinking and clears up your headspace. A relaxed mind ready to crush the day." },
  ];

  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 1; // Adjust speed as needed

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let lastTimestamp = 0;
    const imagesWidth = scrollContainer.scrollWidth / 2; // Since we duplicated the images

    const scroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (scrollContainer.scrollLeft >= imagesWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed * (delta / 16); // Normalize speed
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const slideImages = [
    "https://www.fokus.shop/cdn/shop/files/No_Added_sugar_icon_ff0c0f66-c78b-4972-8c12-208ae8c56cf7.png?v=1738673256&width=1920",
    "https://www.fokus.shop/cdn/shop/files/coconut_icon_489e8ac9-f897-497a-b546-62ff80a382a7.png?v=1738673281&width=1920",
    "https://www.fokus.shop/cdn/shop/files/fight_Off_fatigue_icon_e683baf3-07ce-456e-abc0-c7575e5e659e.png?v=1738673176&width=1920",
    "https://www.fokus.shop/cdn/shop/files/made_in_india_icon_b5f52fe7-a96c-4638-950c-9d753bc33f69.png?v=1738673303&width=1920",
  ];

  return (
    <>
      <div className="bg-[#b5de56] min-h-[900px] py-10 mt-10 flex items-center">
        <div className="flex justify-between w-full">
          <img
            src="https://www.fokus.shop/cdn/shop/files/Mango_Product_page_banner_copy_1024x1024.png?v=1738652328"
            alt=""
            className="h-[530px] mt-48 things"
          />
          <div className="w-[57vw]">
            <h1 className="text-[42px] font-bold things">Ingredients</h1>
            <p className="text-lg font-[600] things">
              Crafted with the Finest Natural Ingredients for Refreshing Taste
            </p>

            {Ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="things w-[750px] mt-5 border-b border-black pb-4"
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleIngredient(index)}
                >
                  <h1 className="text-xl font-bold">{ingredient.title}</h1>
                  <button
                    className="text-2xl font-bold focus:outline-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleIngredient(index);
                    }}
                  >
                    {expandedIngredients[index] ? "-" : "+"}
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedIngredients[index] ? "max-h-40 mt-2" : "max-h-0"
                    }`}
                >
                  <p className="text-md text-[#393939]">
                    {ingredient.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-[180px] bg-[#b5de56] flex justify-center items-center overflow-hidden py-10">
        <div
          className="flex gap-[5px] no-scrollbar"
          ref={scrollRef}
          style={{
            height: "500px",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {[...slideImages, ...slideImages].map((img, idx) => (
            <div
              key={idx}
              className="flex-none"
              style={{ width: "400px", height: "500px" }}
            >
              <img
                src={img}
                alt={`slide-${idx}`}
                className="w-[270px] h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}