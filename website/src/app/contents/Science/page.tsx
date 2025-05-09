import path from "path";
import fs from "fs";
import { Card } from "@/components/Card";

export const Science = () => {
  const filePath = path.join(process.cwd(), "public", "science");
  const dirList = fs.readdirSync(filePath)


  const ArticleList = dirList.map((dir, index) => ({
    id: `article-${index}`,
    title: dir,
    link: `/science/${dir}/${dir}.html`
  }))
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {ArticleList.map((article) => (
        <Card
          key={article.id}
          date="2025-04-15"
          link={article.link}
          title={article.title}
        />
      ))}
    </div>
  )
}
export default Science;