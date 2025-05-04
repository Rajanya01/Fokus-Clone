import { useState, useEffect, useRef } from "react"
import "./Flavor.css"

const Flavor = () => {
  const [currentFlavor, setCurrentFlavor] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef(null)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Auto transition every 4 seconds (only on mobile)
  useEffect(() => {
    if (!isMobile) return

    const interval = setInterval(() => {
      setCurrentFlavor((prev) => (prev + 1) % 3)
    }, 4000)

    return () => clearInterval(interval)
  }, [isMobile])

  // Handle touch events for manual scrolling
  const handleTouchStart = (e) => {
    const startX = e.touches[0].clientX
    const touchStartHandler = (e) => {
      const currentX = e.touches[0].clientX
      const diff = startX - currentX

      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentFlavor < 2) {
          setCurrentFlavor(currentFlavor + 1)
          document.removeEventListener("touchmove", touchStartHandler)
        } else if (diff < 0 && currentFlavor > 0) {
          setCurrentFlavor(currentFlavor - 1)
          document.removeEventListener("touchmove", touchStartHandler)
        }
      }
    }

    document.addEventListener("touchmove", touchStartHandler)
    document.addEventListener(
      "touchend",
      () => {
        document.removeEventListener("touchmove", touchStartHandler)
      },
      { once: true },
    )
  }

  return (
    <div className="cont h-[640px] flex justify-center items-center">
      {isMobile ? (
        // Mobile view with horizontal scrolling
        <div className="mobile-container" ref={containerRef} onTouchStart={handleTouchStart}>
          <div
            className="mobile-slider"
            style={{
              transform: `translateX(-${currentFlavor * 33.333}%)`,
            }}
          >
            <div className="mobile-flavor">
              <div className="flavor1 mobile-flavor-inner">
                <div className="fruit-container">
                  <img
                    src="https://i.postimg.cc/NjhV8FsC/lemon-fokus-removebg-preview.png"
                    className="lemon h-28 w-28"
                    alt=""
                  />
                  <img
                    src="//www.fokus.shop/cdn/shop/files/Frame_2_2.png?v=1737091469"
                    alt="Product Image"
                    className="product-img h-[490px]"
                  />
                  <img
                    src="https://i.postimg.cc/90dXWSJc/kiwi-fokus-removebg-preview.png"
                    className="kiwi h-28 w-28"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mobile-flavor">
              <div className="flavor2 mobile-flavor-inner">
                <div className="fruit-container">
                  <img
                    src="https://i.postimg.cc/YSzDtqfj/juice-pineapple-smoothie-fruit-vegetable-cut-pineapple-pineapple-fruit-transparent-background-png-cl.png"
                    alt=""
                    className="pineapple h-32 w-32"
                  />
                  <img
                    className="product-img h-[490px]"
                    src="https://i.postimg.cc/DzZCq7GL/fokus-Yellow-removebg-preview.png"
                    alt="Product Image"
                  />
                  <img
                    src="https://i.postimg.cc/RFfTn3Qv/delicious-mango-still-life-removebg-preview.png"
                    className="mango h-20 w-20"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mobile-flavor">
              <div className="flavor3 mobile-flavor-inner">
                <div className="fruit-container">
                  <img
                    src="https://i.postimg.cc/PrhFCDJK/strawberry-fokus-removebg-preview.png"
                    alt=""
                    className="strawberry h-32 w-32"
                  />
                  <img
                    className="product-img h-[490px]"
                    src="https://i.postimg.cc/BvQkjDsC/fokusRed.png"
                    alt="Product Image"
                  />
                  <img
                    src="https://i.postimg.cc/PqtSxnqx/watermelon-fokus-removebg-preview.png"
                    className="watermelon h-24 w-24"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile indicator dots */}
          <div className="mobile-dots">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`dot ${currentFlavor === index ? "active" : ""}`}
                onClick={() => setCurrentFlavor(index)}
              />
            ))}
          </div>
        </div>
      ) : (
        // Desktop view with all flavors side by side
        <div className="flex items-center">
          <div className="flavor1">
            <img
              src="https://i.postimg.cc/NjhV8FsC/lemon-fokus-removebg-preview.png"
              className="lemon h-28 w-28 absolute top-40 left-[105px]"
              alt=""
            />
            <img
              src="//www.fokus.shop/cdn/shop/files/Frame_2_2.png?v=1737091469"
              alt="Product Image"
              className="h-[490px] relative"
            />
            <img
              src="https://i.postimg.cc/90dXWSJc/kiwi-fokus-removebg-preview.png"
              className="absolute h-28 w-28 top-[350px] left-[260px] kiwi z-10"
              alt=""
            />
          </div>
          <div className="flavor2">
            <img
              src="https://i.postimg.cc/YSzDtqfj/juice-pineapple-smoothie-fruit-vegetable-cut-pineapple-pineapple-fruit-transparent-background-png-cl.png"
              alt=""
              className="pineapple h-32 w-32 absolute top-40 left-[150px]"
            />
            <img
              className="h-[490px] relative"
              src="https://i.postimg.cc/05WCwfFj/yellow-fokus-removebg-preview.png"
              alt="Product Image"
            />
            <img
              src="https://i.postimg.cc/RFfTn3Qv/delicious-mango-still-life-removebg-preview.png"
              className="absolute h-20 w-20 top-[350px] left-[325px] z-10 mango"
              alt=""
            />
          </div>
          <div className="flavor3">
            <img
              src="https://i.postimg.cc/PrhFCDJK/strawberry-fokus-removebg-preview.png"
              alt=""
              className="strawberry h-32 w-32 absolute top-40 left-[90px]"
            />
            <img
              className="h-[490px] relative"
              src="https://i.postimg.cc/BvQkjDsC/fokusRed.png"
              alt="Product Image"
            />
            <img
              src="https://i.postimg.cc/PqtSxnqx/watermelon-fokus-removebg-preview.png"
              className="absolute h-24 w-24 top-[350px] left-[265px] z-10 watermelon"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Flavor