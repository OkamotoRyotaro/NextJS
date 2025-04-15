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
        rewind: true, // スライダーを最後まで行ったら最初に戻る
        gap: "1rem", // スライド間のギャップ
        perPage: 1, // 一度に表示するスライド数
        type: "loop", // 無限ループ
        autoplay: true, // 自動再生を有効化
        interval: 1000, // スライド間隔（ミリ秒）
        perMove: 1, // 一度に移動するスライド数
        arrows: true, // 左右の矢印を表示
        pagination: true, // ドットナビゲーションを表示
      }}
      aria-label="お気に入りの写真"
    >
      <SplideSlide>
        <img src="/globe.svg" alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="/window.svg" alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="/file.svg" alt="Image 3" />
      </SplideSlide>
    </Splide>
  )
}

export default HeroImage;