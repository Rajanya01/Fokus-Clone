import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 bg-white w-[100vw] z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[80px]">
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex gap-6">
                        <li className="relative capitalize after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-[400ms] after:ease-in-out hover:after:w-full cursor-pointer">
                            home
                        </li>
                        <li className="relative capitalize after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-[400ms] after:ease-in-out hover:after:w-full cursor-pointer">
                            know fokus
                        </li>
                        <Link to="/Shop">
                            <li className="relative capitalize after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-[400ms] after:ease-in-out hover:after:w-full cursor-pointer">
                                product
                            </li>
                        </Link>
                    </ul>

                    {/* Logo - Centered */}
                    <div className="mx-auto absolute left-1/2 transform -translate-x-1/2">
                        <a href='/'>
                            <img
                                src="//www.fokus.shop/cdn/shop/files/RGB_Digital_Use__Fokus_Logo_Black.png?v=1718300315&amp;width=140"
                                alt="Fokus Beverages Private Limited"
                                loading="eager"
                                className="h-14 w-auto"
                            />
                        </a>
                    </div>

                    <div className="flex gap-3 sm:gap-5 items-center">
                        {/* User icon - hidden on mobile */}
                        <svg className='hidden md:block w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] cursor-pointer' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="black">
                            <g id="SVGRepo_iconCarrier">
                                <path d="M0 0h48v48H0z" fill="none"></path>
                                <g id="Shopicon">
                                    <path fill="black" transform="scale(0.9) translate(2.4,2.4)" d="M31.278,25.525C34.144,23.332,36,19.887,36,16c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12 c0,3.887,1.856,7.332,4.722,9.525C9.84,28.531,5,35.665,5,44h38C43,35.665,38.16,28.531,31.278,25.525z M16,16c0-4.411,3.589-8,8-8 s8,3.589,8,8c0,4.411-3.589,8-8,8S16,20.411,16,16z M24,28c6.977,0,12.856,5.107,14.525,12H9.475C11.144,33.107,17.023,28,24,28z"></path>
                                </g>
                            </g>
                        </svg>

                        {/* Cart icon - visible on both mobile and desktop */}
                        <svg className='w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] cursor-pointer' viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_iconCarrier">
                                <path d="M14 2C14 1.44772 13.5523 1 13 1C12.4477 1 12 1.44772 12 2V8.58579L9.70711 6.29289C9.31658 5.90237 8.68342 5.90237 8.29289 6.29289C7.90237 6.68342 7.90237 7.31658 8.29289 7.70711L12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071L17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L14 8.58579V2ZM1 3C1 2.44772 1.44772 2 2 2H2.47241C3.82526 2 5.01074 2.90547 5.3667 4.21065L5.78295 5.73688L7.7638 13H18.236L20.2152 5.73709C20.3604 5.20423 20.9101 4.88998 21.4429 5.03518C21.9758 5.18038 22.29 5.73006 22.1448 6.26291L20.1657 13.5258C19.9285 14.3962 19.1381 15 18.236 15H8V16C8 16.5523 8.44772 17 9 17H16.5H18C18.5523 17 19 17.4477 19 18C19 18.212 18.934 18.4086 18.8215 18.5704C18.9366 18.8578 19 19.1715 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5C14 19.3288 14.0172 19.1616 14.05 19H10.95C10.9828 19.1616 11 19.3288 11 19.5C11 20.8807 9.88071 22 8.5 22C7.11929 22 6 20.8807 6 19.5C6 18.863 6.23824 18.2816 6.63048 17.8402C6.23533 17.3321 6 16.6935 6 16V14.1339L3.85342 6.26312L3.43717 4.73688C3.31852 4.30182 2.92336 4 2.47241 4H2C1.44772 4 1 3.55228 1 3ZM16 19.5C16 19.2239 16.2239 19 16.5 19C16.7761 19 17 19.2239 17 19.5C17 19.7761 16.7761 20 16.5 20C16.2239 20 16 19.7761 16 19.5ZM8 19.5C8 19.2239 8.22386 19 8.5 19C8.77614 19 9 19.2239 9 19.5C9 19.7761 8.77614 20 8.5 20C8.22386 20 8 19.7761 8 19.5Z" transform="scale(0.9) translate(1.2,1.2)"></path>
                            </g>
                        </svg>

                        {/* Buy Now button - hidden on mobile */}
                        <Link to="/Shop" className="hidden md:block capitalize bg-[#040730] rounded-md px-3 sm:px-[18px] py-2 sm:py-[10px] text-sm sm:text-base text-white hover:-translate-y-1 duration-150">
                            buy now
                        </Link>

                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100">
                                Home
                            </a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100">
                                Know Fokus
                            </a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100">
                                Product
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;