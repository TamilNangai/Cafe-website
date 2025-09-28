import React, { useState, useEffect } from "react";
import { Hero_section } from "./Hero_section";
import ul1 from "../assets/Hero_sectionimage/heroline.png";

export const Carousel = ({ slides, autoSlide = true, autoSlideInterval = 4000 }) => {
  const [curr, setCurr] = useState(0);

  const next = () => {
    setCurr((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="w-full h-[175.64px] sm:h-[200px] md:h-[418.64px] lg:h-[618.64px] xl:h-[738.64px] relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${index === curr ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          <Hero_section
            image={slide}
            stylecss={"stylecss"}
            headcss="headtwo"
            headcontent={"Welcome to Our Cozy Cafe"}
            underline={ul1}
            paracss={"paracarousel"}
            linecss={"linetwo"}
            lineimagecss={"lineimageone"}
            paracontent={
              "Experience the warmth of our cozy cafe where every cup of coffee and tea is brewed to perfection, offering a delightful escape from the hustle and bustle of everyday life."
            }
          />
          <button className="font-[Mate-SC] text-white font-normal xl:text-[32px] text-[10px] sm:text-[15px] md:text-[20px] lg:text-[28px] justify-center items-center px-0.5 sm:px-4 sm:py-1 bg-orange-900 rounded-md sm:rounded-[12.82px] absolute xl:top-[600px] lg:top-[530px]  md:top-[330px]  sm:top-[160px] top-[140px]  left-11 sm:left-24 z-20">Explore</button>
        </div>
      ))}
    </div>
  );
};
