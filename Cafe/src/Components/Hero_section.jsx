import React from 'react'
import { Navbar } from './Navbar'
export const Hero_section = ({ image, stylecss, linecss, headcss, headcontent, underline, paracss, paracontent, lineimagecss }) => {
  return (
    <>
    <div className={`w-full  bg-cover bg-center  relative text-white  h-[175.64px] sm:h-[200px] md:h-[418.64px] lg:h-[618.64px] xl:h-[738.64px] ${stylecss}`} style={{ backgroundImage: `url(${image})` }}>
      <h1 className={`  absolute  text-[12px] sm:text-[17px] md:text-[26px] lg:text-[36px] xl:text-[40px] ${headcss}`}>{headcontent}</h1>
      <div className='flex justify-items-center'>
        <section className={`absolute ${linecss}`}>
            <img className={` ${lineimagecss}`} src={underline} alt={underline} />
        </section>
        <p className={`  absolute  text-[8px] sm:text-[10px] md:text-[18px] lg:text-[24px] xl:text-[26px]  w-3/5 ${paracss}`}>{paracontent}</p>
      </div>
    </div>
    </>
  )
}
