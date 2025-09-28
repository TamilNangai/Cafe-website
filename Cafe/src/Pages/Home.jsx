
import React from 'react'
import { Carousel } from '../Components/Carousel'
import slide1 from '../assets/Hero_Carousal/h1.png'
import slide2 from '../assets/Hero_Carousal/h2.png'
import slide3 from '../assets/Hero_Carousal/h3.png'
import slide4 from '../assets/Hero_Carousal/h4.png'
import Contact from '../Components/Contact'



const slides = [
  slide1,
  slide2,
  slide3,
  slide4
];


function Home() {
  return (
    <div>
      <Carousel
      autoSlide={true}
      autoSlideInterval={3000}
      slides={slides}>
      </Carousel>
      <Contact />
    </div>
  )
}

export default Home;
