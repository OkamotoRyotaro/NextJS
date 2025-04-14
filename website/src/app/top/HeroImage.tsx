"use client";
/*
@splidejs/react-splide は型定義ファイルを手動で追加する必要がある
https://zenn.dev/ymmt1089/articles/20220429_interface
*/
import React from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/css";

export const HeroImage = () => {

  return (
    <Splide
      options={{
        rewind: true,
        gap: '1rem',
        perPage: 2,
        type: "loop",
        autoplay: true,
        perMove: 1,
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