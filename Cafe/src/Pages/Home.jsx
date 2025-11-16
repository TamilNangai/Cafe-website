
import React from 'react'
import { Carousel } from '../Components/Carousel'
import slide1 from '../assets/Hero_Carousal/h1.png'
import slide2 from '../assets/Hero_Carousal/h2.png'
import slide3 from '../assets/Hero_Carousal/h3.png'
import slide4 from '../assets/Hero_Carousal/h4.png'
import Contact from '../Components/Contact'
import Our from '../Components/Our'
import Row from '../Components/Row'
import About from '../Components/About'
import Slide from '../Components/Slide'
import Button from '../Components/Button'
import img from '../assets/btn/leave.png';
import { Link } from 'react-router-dom'
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
      <About title="Relax and Unwind"
        description="Find your perfect spot to relax and unwind, whether you're catching up with friends, reading a book, or simply enjoying some quiet time with a great cup of coffee or tea.Our cozy ambiance and comfortable seating provide the perfect environment for you to recharge and enjoy the simple pleasures of life" />
      <Slide />
      <About title="About us"
        description="Welcome to Cafe Serenity, where passion for tea and coffee meets a cozy, welcoming atmosphere. Nestled in the heart of !our cafe is a haven for those who appreciate the art of a perfectly brewed cup and the joy of a warm, inviting space." />

      <Link to="/About_Page">
        <Button>
          <div className='flex justify-center items-center mt-10'>
            <button className="flex o-underline sm:flex items-center gap-2  bg-[#835C3B] font-[ABeeZee] text-white font-semibold px-3 py-1 my-1 xl:mx-[150px] lg:m-12  md:m-7 md:text-[18px] rounded-xl">View <img src={img} alt="btn" className="w-6 h-6" /></button>
          </div>
        </Button>
      </Link>

      <Our />
      <Row />
      <Contact />
    
      <Link to="/Contact_us">
        <Button >
          <div className='flex justify-center items-center mt-10'>
            <button className="flex o-underline sm:flex items-center gap-2  bg-[#835C3B] font-[ABeeZee] text-white font-semibold px-3 py-1 my-1 xl:mx-[150px] lg:m-12  md:m-7 md:text-[18px] rounded-xl">View <img src={img} alt="btn" className="w-6 h-6" /></button>
          </div>
        </Button>
      </Link>
    </div>
  )
}

export default Home;
