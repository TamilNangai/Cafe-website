import React from 'react'
import { Hero_section } from '../Components/Hero_section'
import ul1 from '../assets/Hero_sectionimage/heroline.png'
import i2 from '../assets/Hero_sectionimage/i2.png'
// import { Coffee } from '../Components/Coffee'

export default function Coffee_page() {
  return (
    <>
          <Hero_section image={i2} stylecss={"stylecss"} headcss="headtwo" headcontent={"Welcome To Our flavour fusion"} underline={ul1} paracss={"paratwo"} linecss={"linetwo"} lineimagecss={"lineimageone"} paracontent={"Immerse yourself in the rich, bold flavors of freshly brewed coffee. Here, every cup is crafted with care, from the finest beans to the perfect pour. Whether you're a fan of robust espressos, smooth lattes, or a simple, satisfying black coffee, our menu has something to delight every coffee lover."} />
          {/* <Coffee/> */}
    </>
  )
}

