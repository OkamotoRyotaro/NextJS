import React from "react";
import style from "@/app/style/article.module.css"


interface MainTextProps {
  text: string;
}

export const MainText = (props: MainTextProps) => {
  return (
    <pre className={style.articleText}>{props.text}</pre>
  )
}

export default MainText;