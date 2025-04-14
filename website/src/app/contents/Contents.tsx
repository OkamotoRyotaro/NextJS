import Link from "next/link";
import React from "react";
import style from "../style/header.module.css"

export const Contents = () => {
  return (
    <div>
      <Link href={"/contents/Science"} className={style.link}>Science</Link>
    </div>
  )
}

export default Contents;