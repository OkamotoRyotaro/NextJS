"use client";

import React from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/css";

export const HeroImage = () => {

  return (
    <Splide
      options={{
        rewind: true,
        gap: '1rem',
      }}
      aria-label="お気に入りの写真"
    >
      <SplideSlide>
        <img src="globe.svg" alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="window.svg" alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="file.svg" alt="Image 3" />
      </SplideSlide>
    </Splide>
  )
}

export default HeroImage;