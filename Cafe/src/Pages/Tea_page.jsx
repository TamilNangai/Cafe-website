import React from 'react'
import { Hero_section } from '../Components/Hero_section'
import ul1 from '../assets/Hero_sectionimage/heroline.png'
import i3 from '../assets/Hero_sectionimage/i3.png'
// import { Tea } from '../Components/Tea'

export default function Tea_page() {
  return (
    <>
          <Hero_section image={i3} stylecss={"stylecss"} headcss="headthree" headcontent={"Welcome To Our flavour fusion"} underline={ul1} paracss={"parathree"} linecss={"linethree"} lineimagecss={"lineimageone"} paracontent={"Discover the art of tea in every cup at our cozy haven. From the first sip, you'll be transported to a world of tranquility, where each blend is a journey through fragrant gardens and lush tea fields."} />
          {/* <Tea /> */}
    </>
   
  )
}
