import path from "path";
import fs from "fs";
import SciencePageTemplate from "../../../components/SciencePageTemplate";
import Link from "next/link";

export const Science = () => {
  const filePath = path.join(process.cwd(), "public", "science");
  const dirList = fs.readdirSync(filePath)

  console.log(dirList)

  const ArticleList = dirList.map((dir, index) => ({
    id: `article-${index}`,
    title: dir
  }))

  return (
    <>
      {/* <nav>
        <h2>Index</h2>
        <ul>
          {ArticleList.map((article) => (
            <Link key={article.id} href={""}>
              {article.title}
            </Link>
          ))}
        </ul>
      </nav> */}
      {ArticleList.map((article, index) => (
        <div
          key={index}
          id={`article-${ArticleList.findIndex((elem) => elem.title === article.title)}`}
        >
          <SciencePageTemplate
            dirPath={"/science/article0"}
          />
        </div>
      ))}
    </>
  )
}
export default Science;