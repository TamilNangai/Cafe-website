import React from 'react'
import { Hero_section } from '../Components/Hero_section'
import ul1 from '../assets/Hero_sectionimage/heroline.png'
import i2 from '../assets/Hero_sectionimage/i2.png'
import Coffee from '../Components/Coffee'
import c1 from '../assets/coffee/c1.png'
import c2 from '../assets/coffee/c2.png'
import c3 from '../assets/coffee/c3.png'
import c4 from '../assets/coffee/c4.png'
import c5 from '../assets/coffee/c5.png'
import c6 from '../assets/coffee/c6.png'
import c7 from '../assets/coffee/c7.png'
import cofc from '../assets/coffee/cofc.png'
import coffc from '../assets/coffee/coffc.png'
import lefc from '../assets/coffee/le.png'
import linec from '../assets/coffee/line.png'


export default function Coffee_page() {
  return (
    <>
      
      <Hero_section image={i2} stylecss={"stylecss"} headcss="headtwo" headcontent={"Welcome To Our flavour fusion"} underline={ul1} paracss={"paratwo"} linecss={"linetwo"} lineimagecss={"lineimageone"} paracontent={"Immerse yourself in the rich, bold flavors of freshly brewed coffee. Here, every cup is crafted with care, from the finest beans to the perfect pour. Whether you're a fan of robust espressos, smooth lattes, or a simple, satisfying black coffee, our menu has something to delight every coffee lover."} />
      <Coffee 
      cofc1={cofc}
      cofc2={coffc}
      cofc3={coffc}
      cofc4={coffc}
      lefc1={lefc}
      lefc2={lefc}
      lefc3={lefc}
      lefc4={lefc}
      linec={linec}/>
     


    </>
  )
}

