import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div
            className="img h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center mt-16 "
            style={{ backgroundImage: "url('https://www.fokus.shop/cdn/shop/files/Fokus_website_banner_copy_1.jpg?v=1737025230&width=1920')" }}
        >
            <div className="bg-[#ffffff5d] border border-white relative top-[450px] w-[260px] h-[60px]  rounded-full flex justify-center items-center ">
                <button className="bg-black px-14 p-2 capitalize rounded-full text-white absolute hover:translate-y-2 duration-150  ">
                    buy now
                </button>
            </div>
        </div>
    );
};

export default Header;
