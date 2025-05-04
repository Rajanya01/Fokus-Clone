import React from 'react'
import './Bottles.css'

const Bottles = () => {
  return (
    <>
      
        <div className="h-[750px] bg-[#87db46] w-[100vw] flex flex-col gap-28 items-center ">
            <div className=" relative top-14 flex justify-center heading ">
                <span className="text-[30px] txt ">Stay Active, Stay Hydrated,</span>
                <span className='ml-2 text-[30px] txt font-[800] '>Stay Fokus</span>
            </div>

            <div className="flex">

              <div className=" w-[230px] relative right-[65px]  ">
              <img className='w-[230px] relative top-36 right-20 left ' src="//www.fokus.shop/cdn/shop/files/icon1.png?v=1737367832" />

              <img className='w-[230px] relative top-60 right-20 left' src="https://www.fokus.shop/cdn/shop/files/icon3.png?v=1737367832" />
              </div>

                <div className=" ">
                <img className='bottles object-fill ' src="https://cdn.shopify.com/s/files/1/0619/0569/8889/files/focusprd__1_-removebg-preview.png?v=1738065445"/>   
                </div>       

                <div className="w-[230px] relative top-36 left-20  ">
                  <img className='right' src="https://www.fokus.shop/cdn/shop/files/icon2.png?v=1737367832" />

                  <img className='w-[230px] relative top-24 right ' src="https://www.fokus.shop/cdn/shop/files/increase_energy_icon_1.png?v=1738220359" />
                </div> 
            </div>
        </div>

    </>
  )
}

export default Bottles
