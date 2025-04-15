import path from "path";
import fs from "fs";
import { Card } from "@/components/Card";

export const Science = () => {
  const filePath = path.join(process.cwd(), "public", "science");
  const dirList = fs.readdirSync(filePath)

  console.log(dirList)

  const ArticleList = dirList.map((dir, index) => ({
    id: `article-${index}`,
    title: dir
  }))

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
      {/* {ArticleList.map((article, index) => (
        <div
          key={index}
          id={`article-${ArticleList.findIndex((elem) => elem.title === article.title)}`}
        >
          <SciencePageTemplate
            dirPath={"/science/article0"}
          />
        </div>
      ))} */}
      <Card date="date0" link="" title="title0" />
      <Card date="date1" link="" title="title1" />
      <Card date="date2" link="" title="title2" />
      <Card date="date0" link="" title="title0" />
      <Card date="date1" link="" title="title1" />
      <Card date="date2" link="" title="title2" />
      <Card date="date0" link="" title="title0" />
      <Card date="date1" link="" title="title1" />
      <Card date="date2" link="" title="title2" />
      <Card date="date0" link="" title="title0" />
      <Card date="date1" link="" title="title1" />
      <Card date="date2" link="" title="title2" />
      <Card date="date0" link="" title="title0" />
      <Card date="date1" link="" title="title1" />
      <Card date="date2" link="" title="title2" />
      <Card date="date0" link="" title="title0" />
      <Card date="date1" link="" title="title1" />
      <Card date="date2" link="" title="title2" />
      <Card date="date0" link="" title="title0" />
      <Card date="date1" link="" title="title1" />
      <Card date="date2" link="" title="title2" />
    </div>
  )
}
export default Science;