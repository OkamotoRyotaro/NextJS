import React from "react";
import style from "@/app/style/article.module.css"


interface ChapterProps {
  chapterName: string;
}

export const Chapter = (props: ChapterProps) => {
  return (
    <div className={style.articleChapterBox}>
      <p className={style.articleChapter}>{props.chapterName}</p>
    </div>
  )
}

export default Chapter;