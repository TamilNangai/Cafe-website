import React from "react";
import { useState, useEffect } from "react";
import slide6 from '../assets/home/h6.png'
import slide7 from '../assets/home/h7.png'
import slide8 from '../assets/home/h8.png'
import slide9 from '../assets/home/h9.png'
import slide10 from '../assets/home/h10.png'

const Slider = () => {

  const images = [
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
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
