import React from "react";
import style from "@/app/style/components/card.module.css"
import Link from "next/link";

interface CardProps {
  date: string,
  title: string,
  link: string,
}

export const Card = (props: CardProps) => {
  return (
    <div className={style.outline}>
      <p>{props.date}</p>
      <p className={style.title}>
        <Link href={props.link}>{props.title}</Link>
      </p>
    </div>
  )
}