"use client"

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const heroImage = [
    {imgUrl:'/assets/images/hero-1.svg',alt:'smartwatch'},
    {imgUrl:'/assets/images/hero-2.svg',alt:'bag'},
    {imgUrl:'/assets/images/hero-3.svg',alt:'lamp'},
    {imgUrl:'/assets/images/hero-4.svg',alt:'air fryer'},
    {imgUrl:'/assets/images/hero-5.svg',alt:'chair'},
]
const HeroCarousel = () => {
  return (
    <div className='lg:w-1/3 md:w-full bg-[#b1c88e] rounded-2xl p-4'>
        <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={2000}
            showArrows={false}
            showStatus={false}
        >
            {heroImage.map((item,index) => (
                <div key={index}>
                    <img src={item.imgUrl} alt={item.alt} className='h-96 w-96'/>
                </div>
            ))}
        </Carousel>
    </div>
  )
}

export default HeroCarousel