import Image from "next/image";
import style from "@/app/style/article.module.css"
import Chapter from "./Chapter";
import MainText from "./MainText";
import { ArticleContentsType } from "@/types/ArticleContentsStatus";
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
          const content = FetchContents(line)
          if (content === null) return null

          switch (content.contentsType) {
            case "Title":
              break;
            case "Image":
              return (
                <div key={index} className={style.articleImageBox}>
                  {content.content.split(" ").map((path, jindex) => (
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
                <Chapter key={index} chapterName={content.content} />
              )
            case "Text":
              return (
                <MainText key={index} text={content.content} />
              )
          }
        })}
      </div>
    </div>
  );
}

const FetchContents = (line: string): { contentsType: ArticleContentsType, content: string } | null => {
  if (line.startsWith("Title:")) return { contentsType: "Title", content: line.replace("Image:", "").trim() };
  if (line.startsWith("Text:")) return { contentsType: "Text", content: line.replace("Text:", "").trim() }
  if (line.startsWith("Chapter:")) return { contentsType: "Chapter", content: line.replace("Chapter:", "").trim() }
  if (line.startsWith("Image:")) return { contentsType: "Image", content: line.replace("Image:", "").trim() }
  return null
}

export default SciencePageTemplate;