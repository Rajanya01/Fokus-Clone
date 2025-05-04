import React from 'react'
import './KnowFokus.css'

const KnowFokus = () => {
  return (
    <div className="bg-[#88d84a] w-full h-[900px] flex justify-center items-center overflow-hidden">
      <div className="bg-[#adff73] w-[950px] h-[750px] flex justify-center items-center relative">
        
        <img
          src="https://www.fokus.shop/cdn/shop/files/mdl1.png?v=1737522791"
          alt="fukru"
          className="fukru h-[800px] w-[600px] object-cover absolute left-[-300px] top-1/2 -translate-y-1/2 "
        />

        <div className="z-10 gap-6 flex flex-col text-center justify-center items-center mb-24 ">
          <img
            src="https://www.fokus.shop/cdn/shop/files/Know_Fokus_Know_Us_icon_a47bc360-51db-447e-80b8-833a3003122e.png?v=1737523269"
            alt="Know Fokus"
            className="md:h-[130px] md:w-[500px] object-contain h-[100px] w-[400px] "
          />

          <div className="md:w-[420px] w-[300px] font-bold md:text-3xl text-xl  ">
          Fokus isn’t just a drink—it’s a lifestyle you live every day. Dive into our story and see what makes us different.
          </div>

          <button className="bg-black px-[70px] py-2 mt-10 rounded-full text-white ">Explore</button>

        </div>

        <img
          src="https://www.fokus.shop/cdn/shop/files/mdl2.png?v=1737522792"
          alt="Triggu"
          className="triggu h-[800px] bottom-10 w-[600px] object-cover absolute right-[-300px] top-1/2 -translate-y-1/2 "
        />

      </div>
    </div>
  )
}

export default KnowFokus
