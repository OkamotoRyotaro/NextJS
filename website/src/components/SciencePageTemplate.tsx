import Image from "next/image";
import style from "@/app/style/article.module.css"
import Chapter from "../app/contents/Science/Chapter";
import MainText from "../app/contents/Science/MainText";
import { useFetchArticleData } from "@/hooks/useFetchArticleData";

interface SciencePageTemplateProps {
  dirPath: string;
}

export const SciencePageTemplate = (props: SciencePageTemplateProps) => {
  const { dirPath } = props

  const { title, contentLines } = useFetchArticleData(dirPath)

  const ArticleIndex = contentLines
    .filter((line) => line.contentsType === "Chapter")
    .map((line, index) => ({
      id: `chapter-${index}`, // ユニークなIDを生成
      name: line.content,
    }));


  return (
    <div className="p-8">
      <h1 className={style.articleTitle}>{title}</h1>

      {/* 目次 */}
      <nav className={style.tableOfContents}>
        <h2>Index</h2>
        <ul>
          {ArticleIndex.map((chapter) => (
            <li key={chapter.id}>
              <a href={`#${chapter.id}`} className={style.tocLink}>
                {chapter.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

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
                <div key={index} id={`chapter-${ArticleIndex.findIndex((c) => c.name === line.content)}`}>
                  <Chapter chapterName={line.content} />
                </div>
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