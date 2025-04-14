import React from "react";
import style from "@/app/style/article.module.css"


interface ChapterProps {
  chapterName: string;
}

export const Chapter = (props: ChapterProps) => {
  return (
    <p className={style.articleChapter}>{props.chapterName}</p>
  )
}

export default Chapter;