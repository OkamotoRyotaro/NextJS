import fs from "fs";
import path from "path";


export const useFetchArticleData = (dirPath: string) => {
  // 記事データを読み込む
  const filePath = path.join(process.cwd(), "public", dirPath, "article.txt");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // 記事データを解析
  const lines = fileContent.split("\n");
  const title = lines.find((line) => line.startsWith("Title:"))?.replace("Title:", "").trim();
  const contentIndex = lines.findIndex(
    (line) => line.startsWith("Image:") || line.startsWith("Text:") || line.startsWith("Chapter:")
  )
  return {
    title: title,
    contentLines: lines.slice(contentIndex)
  }
}