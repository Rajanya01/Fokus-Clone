import React, { useEffect, useRef } from 'react';
import './SlideAuto.css'; 

const slideImages = [
  "https://i.postimg.cc/FRnBQwr6/fokus-img1.webp",
  "https://i.postimg.cc/MpmcrStz/fokus-img2.webp",
  "https://i.postimg.cc/Xq9NGfzn/fokus-img3.webp",
  "https://i.postimg.cc/KvcCg7VQ/fokus-img4.webp",
  "https://i.postimg.cc/PJS3Mccy/fokus-img5.webp",
  "https://i.postimg.cc/DZ2PY61M/fokus-img6.webp",
  "https://i.postimg.cc/jjv7CbJM/fokus-img7.webp",
  "https://i.postimg.cc/NjsTtFKK/fokus-img8.webp",
];

function SlideAuto() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[350px] bg-[#fcffe0] flex justify-center items-center  overflow-hidden py-10">
      <div
        className="flex gap-[5px] no-scrollbar overflow-x-scroll"
        ref={scrollRef}
        style={{
          height: '500px',
          width: '2000px',
          whiteSpace: 'nowrap',
        }}
      >
        {[...slideImages, ...slideImages].map((img, idx) => (
          <div
            key={idx}
            className="flex-none"
            style={{ width: '400px', height: '500px' }}
          >
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideAuto;