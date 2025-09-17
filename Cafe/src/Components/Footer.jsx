import React from 'react'
import bg from '../assets/Footer/bg.png'
import logo from '../assets/Footer/logo.png'
import insta from '../assets/Footer/insta.png'
import twit from '../assets/Footer/twit.png'
import fb from '../assets/Footer/fb.png'
export const Footer = () => {
  return (
    <div>
      <footer className="w-full h-fit bg-cover  bg-center flex justify-between" style={{ backgroundImage: `url(${bg})` }}>
        <div className='w-[15%] h-fit  flex flex-col items-center bg-white/70 rounded-[100px] m-14 py-16 px-5 gap-4'>
          <img src={logo} alt="logo" />
          <h1 className='font-[Mate-SC] font-normal text-[36px]  items-center'>Cozy cup</h1>
          <p className='w-[80%] font-[Marmelad] font-normal text-[20px] ms-auto'>Discover our Delicious coffee and tea!</p>
          <div className='font-[Mate-SC] font-normal text-[15px] justify-center items-center px-4 py-1 bg-[#9B8743] rounded-[30px]'>Follow us:</div>
          <div className='flex gap-3 mt-auto'>
            <img src={fb} alt="facebook" />
            <img src={insta} alt="instagram" />
            <img src={twit} alt="twitter" />
          </div>
        </div>
        <div className='w-[28%] h-auto  flex flex-col items-center bg-[#5C2D0BC2]/75 text-white m-5  px-5 py-10'>
          <h1 className='font-[Mate-SC] font-normal text-[40px] '>Support</h1>
          <p className='w-[50%] font-[Marmelad] font-normal text-[26px] ms-[20%]'>Product
            Help&Support
            Return policy
            Terms of us</p>
          <section className='flex flex-row items-center justify-end m-5'>
            <div className='w-72 border '></div>
            <div className='bg-white w-4 h-5 rounded-[100px]'></div>
          </section>
          <h1 className='font-[Mate-SC] font-normal text-[40px] '>View Guides</h1>
          <p className='w-[36%] font-[Marmelad] font-normal text-[26px] ms-[10%]'>Features
            Careers
            Blog Posts
            Our Brances</p>
        </div>
      </footer>
    </div>
  )
}
