import { ArticleContentsType } from "@/types/ArticleContentsStatus";
import fs from "fs";
import path from "path";


export const useFetchArticleData = (dirPath: string) => {
  // 記事データを読み込む
  const filePath = path.join(process.cwd(), "public", dirPath, "article.txt");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // 記事データを解析
  const lines = fileContent.split("\n");
  const title = lines.find((line) => line.startsWith("Title:"))?.replace("Title:", "").trim();

  return {
    title: title,
    contentLines: lines.map((line) => FetchContents(line)).filter((line) => line !== null)
  }
}

const FetchContents = (line: string): { contentsType: ArticleContentsType, content: string } | null => {

  if (line.startsWith("Title:")) return { contentsType: "Title", content: line.replace("Image:", "").trim() };
  if (line.startsWith("Text:")) return { contentsType: "Text", content: line.replace("Text:", "") }
  if (line.startsWith("Chapter:")) return { contentsType: "Chapter", content: line.replace("Chapter:", "").trim() }
  if (line.startsWith("Image:")) return { contentsType: "Image", content: line.replace("Image:", "").trim() }
  return null
}
