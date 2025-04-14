import Image from "next/image";
import style from "@/app/style/article.module.css"
import Chapter from "./Chapter";
import MainText from "./MainText";
import { useFetchArticleData } from "@/hooks/useFetchArticleData";

interface SciencePageTemplateProps {
  dirPath: string;
}

export const SciencePageTemplate = (props: SciencePageTemplateProps) => {
  const { dirPath } = props

  const { title, contentLines } = useFetchArticleData(dirPath)
  console.log(contentLines)
  return (
    <div className="p-8">
      <h1 className={style.articleTitle}>{title}</h1>
      <div>
        {contentLines.map((line, index) => {
          if (line === null) return null

          switch (line.contentsType) {
            case "Title":
              break;
            case "Image":
              return (
                <div key={index} className={style.articleImageBox}>
                  {line.content.split(" ").map((path, jindex) => (
                    <Image
                      key={jindex}
                      src={`${dirPath}/${path}`}
                      alt={`Image ${jindex + 1}`}
                      width={800}
                      height={400}
                      className={style.articleImage}
                    />
                  ))}
                </div>
              )
            case "Chapter":
              return (
                <Chapter key={index} chapterName={line.content} />
              )
            case "Text":
              return (
                <MainText key={index} text={line.content} />
              )
          }
        })}
      </div>
    </div>
  );
}

export default SciencePageTemplate;