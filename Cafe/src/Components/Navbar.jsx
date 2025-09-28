import React, { useState } from 'react';
import logo from '../assets/Navbar/logo.png';
import navname from '../assets/Navbar/name.png';
import Home from '../assets/Navbar/homecircle.png';
import About from '../assets/Navbar/information.png';
import coffee from '../assets/Navbar/coffee-beans.png';
import tea from '../assets/Navbar/herbal-tea (1).png';
import Phonemessage from '../assets/Navbar/contact-us.png';
import Cancel from '../assets/Navbar/close.png';
import Menu from '../assets/Navbar/menu-24.png';
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center bg-white/40 h-7 sm:h-8 md:h-12 lg:h-16 xl:h-20">
                <div className="flex md:m-2 items-center">
                    <img
                        className="my-2 h-auto w-6 md:w-11 lg:w-14 xl:w-16"
                        src={logo}
                        alt="logo"
                    />
                    <img
                        className="ms-2 md:ms-5 h-auto w-8 md:w-16 lg:w-20 xl:w-24"
                        src={navname}
                        alt="navname"
                    />
                </div>

                <div className="md:hidden m-4">
                    <button onClick={() => setShowMenu(true)}>
                        <img src={Menu} alt="menu" className="h-6 mt-2 w-auto" />
                    </button>
                </div>
                <div className="hidden md:block">
                    <ul className="list-none flex gap-6 md:gap-10 font-sedgwick font-normal text-[16px] lg:text-[30px] xl:text-[36px]">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About", path: "/About_page" },
                            { name: "Coffee", path: "/Coffee_page" },
                            { name: "Tea", path: "/Tea_page" },
                            { name: "Contact Us", path: "/Contact_us" },
                        ].map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} className="inline-block text-[#873201ba] transition-all duration-300 
          hover:text-[#873201] hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,140,66,0.99)] hover:animate-bounce"
       >{item.name}</Link>
                            </li>))}
                    </ul>
                </div>
            </div>

            <div className="bg-[#D9D9D94D] border w-full"></div>


            <div
                className={`sm:hidden fixed top-0 left-0 h-full w-64 bg-[rgba(76,50,35)] z-50 transform transition-transform duration-300 ease-in-out 
        ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4 border-b border-white/30">
                    <span className="text-white font-bold text-lg">Menu</span>
                    <button onClick={() => setShowMenu(false)}>
                        <img src={Cancel} alt="Cancel" className="h-6 w-auto" />
                    </button>
                </div>

                <ul className="font-[Abhaya-Libre] font-bold text-[20px] text-white flex flex-col mt-4">
                    <li className="p-3 hover:bg-white/20  ">
                        <Link to="/" className='flex items-center gap-8'><img src={Home} alt="home" className="h-8 w-auto" /> Home</Link>
                    </li>
                    <li className="p-3 hover:bg-white/20 ">
                        <Link to="/About_page" className='flex items-center gap-8'><img src={About} alt="about" className="h-8 w-auto" /> About</Link>
                    </li>
                    <li className="p-3 hover:bg-white/20 ">
                        <Link to="/Coffee_page" className='flex items-center gap-8'><img src={coffee} alt="coffee" className="h-8 w-auto" /> Coffee</Link>
                    </li>
                    <li className="p-3 hover:bg-white/20 ">
                        <Link to="/Tea_page" className='flex items-center gap-8'><img src={tea} alt="tea" className="h-8 w-auto" /> Tea</Link>
                    </li>
                    <li className="p-3 hover:bg-white/20 ">
                        <Link to="/Contact_us" className='flex items-center gap-8'><img src={Phonemessage} alt="contact" className="h-8 w-auto" /> Contact Us</Link>
                    </li>
                </ul>
            </div>

            {showMenu && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 sm:hidden"
                    onClick={() => setShowMenu(false)}
                ></div>
            )}
        </div>
    );
};
