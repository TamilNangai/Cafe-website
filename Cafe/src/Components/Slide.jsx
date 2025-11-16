import slide1 from '../assets/slider/s1.png'
import slide2 from '../assets/slider/s2.png'
import slide3 from '../assets/slider/s3.png'
import slide4 from '../assets/slider/s4.png'
import slide5 from '../assets/slider/s5.png'
import slide6 from '../assets/slider/s6.png'
import React from 'react'

function Slide() {
  return (
    <div class="relative w-full bg-white-100 mt-5 overflow-hidden">
      <div class="flex gap-9 w-max animate-slides">
        <div class="w-[300px] h-[350px]">
          <img src={slide1} class="w-full h-full rounded-xl" />
        </div>
        <div class="w-[300px] h-[350px]">
          <img src={slide2} class="w-full h-full rounded-xl" />
        </div>
        <div class="w-[300px] h-[350px]">
          <img src={slide3} class="w-full h-full rounded-xl" />
        </div>
        <div class="w-[300px] h-[350px]">
          <img src={slide4} class="w-full h-full rounded-xl" />
        </div>
        <div class="w-[300px] h-[350px]">
          <img src={slide5} class="w-full h-full rounded-xl" />
        </div>
        <div class="w-[300px] h-[350px]">
          <img src={slide6} class="w-full h-full rounded-xl" />
        </div>
          <div class="w-[300px] h-[350px]">
          <img src={slide1} class="w-full h-full rounded-xl" />
        </div>
        <div class="w-[300px] h-[350px]">
          <img src={slide2} class="w-full h-full rounded-xl" />
        </div>
        <div class="w-[300px] h-[350px]">
          <img src={slide3} class="w-full h-full rounded-xl" />
        </div>
        <div class="w-[300px] h-[350px]">
          <img src={slide4} class="w-full h-full rounded-xl" />
        </div>
        <div class="w-[300px] h-[350px]">
          <img src={slide5} class="w-full h-full rounded-xl" />
        </div>
        <div class="w-[300px] h-[350px]">
          <img src={slide6} class="w-full h-full rounded-xl" />
        </div>
      </div>
    </div>
  )
}

export default Slide



