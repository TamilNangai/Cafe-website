import React from 'react'
import logo from '../assets/Navbar/logo.png'
import navname from '../assets/Navbar/name.png'
export const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center bg-white/10'>
                <div className='flex m-2'>
                    <img src={logo} alt="logo" />
                    <img className='ms-5' src={navname} alt="navname" />
                </div>
                <div>
                    <ul className='list-none flex gap-8 mx-10'>
                        <li className='decoration-none   font-sedgwick font-normal text-[36px] text-[#FFFFFF]'>Home</li>
                        <li className='decoration-none font-sedgwick font-normal text-[36px] text-[#FFFFFF]'>About</li>
                        <li className='decoration-none font-sedgwick font-normal text-[36px] text-[#FFFFFF]'>coffee</li>
                        <li className='decoration-none font-sedgwick font-normal text-[36px] text-[#FFFFFF]'>Tea</li>
                        <li className='decoration-none font-sedgwick font-normal text-[36px] text-[#FFFFFF]'>contact us</li>
                    </ul>
                </div>
            </div>
            <div className='bg-[#D9D9D94D] border w-full'></div>
        </>
    )
}
