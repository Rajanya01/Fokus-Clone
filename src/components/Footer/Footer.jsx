import React from 'react'
import { Camera  } from 'lucide-react'

const Footer = () => {
  return (
    <>
      <footer className="h-[280px] w-[100vw] flex justify-center">
        <div className="flex justify-between items-center h-[280px] w-[80vw] border-black">
          <div className="flex flex-col gap-8 border-black">
            <div>
              <img
                src="https://www.fokus.shop/cdn/shop/files/RGB_Digital_Use__Fokus_Logo_Black.png?v=1718300315&width=140"
                alt=""
              />
            </div>
            <div className="text-[15px]">
              &copy; 2025, Fokus Beverages Private Limited.
            </div>
          </div>

          <div className=" border-black h-[280px] w-[450px] justify-center items-center">
            <ul className="grid grid-cols-2 gap-x-10 h-full w-full py-4 mt-2">
              <li className='cursor-pointer'>Shop</li>
              <li className='cursor-pointer'>Orders</li>
              <li className='cursor-pointer'>Return Policy</li>
              <li className='cursor-pointer'>About Us</li>
              <li className='cursor-pointer'>Shipping Policy</li>
              <li className='cursor-pointer'>Know Fokus</li>
              <li className='cursor-pointer'>Contact</li>
              <li className='cursor-pointer'>Customer Service</li>
              <li className='cursor-pointer'>Terms & Condition</li>
              <li className='cursor-pointer'>Privacy Policy </li>
            </ul>
          </div>

          <div className=""></div>
        </div>
      </footer>
    </>
  )
}

export default Footer
