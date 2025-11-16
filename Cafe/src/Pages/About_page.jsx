import React from 'react'
import { Hero_section } from '../Components/Hero_section'
import ul1 from '../assets/Hero_sectionimage/heroline.png'
import i1 from '../assets/Hero_sectionimage/i1.png'
import AboutUs from '../Components/AboutUs'
import bp from '../assets/about/bp.png'




export default function About_page() {
  return (
    <>
      <Hero_section image={i1} stylecss={"stylecss"} headcss="headone" headcontent={"NOW YOU CAN FEEL THE ENERGY WITH OUR DRINKS"} underline={ul1} paracss={"paraone"} linecss={"lineone"} lineimagecss={"lineimageone"} paracontent={"Our passion is serving the perfect cup, every time.Come in, take a seat, and let us craft your favorite drink.Welcome to your new favorite spot— where every sip is a story, and every visit feels like home."} />
      <AboutUs bp={bp} />

    </>
  )
}
