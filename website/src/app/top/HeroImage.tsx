import Image from "next/image";
import React from "react"
import style from "@/app/style/top.module.css"

export const HeroImage = () => {

  return (
    <Image
      src={"globe.svg"}
      alt="background"
      width={100}
      height={100}
      className={style.heroImage}
    />
  )
}

export default HeroImage;