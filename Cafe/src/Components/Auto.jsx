import React from 'react';
import { useState, useEffect } from 'react';
import slide1 from '../assets/home/h1.png'
import slide2 from '../assets/home/h2.png'
import slide3 from '../assets/home/h3.png'
import slide4 from '../assets/home/h4.png'
import slide5 from '../assets/home/h5.png'

const Slider = () => {

  const images = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); 
    return () => clearInterval(timer);
  }, []);

  return (

    <div className="relative w-full h-[120px] mt-10 md:w-[50%] md:h-[200px] lg:w-[50%] lg:h-[250px] xl:w-[60%] xl:h-[400px] mx-5 overflow-hidden shadow-5xl rounded-2xl">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${index === i ? "opacity-100" : "opacity-0"}`}
          alt=""
        />
      ))}
    </div>

  );
};

export default Slider;
