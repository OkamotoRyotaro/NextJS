import fs from "fs";
import path from "path";
import Image from "next/image";

interface SciencePageTemplateProps {
  dirPath: string;
}

export const SciencePageTemplate = (props: SciencePageTemplateProps) => {
  const { dirPath } = props
  // 記事データを読み込む
  const filePath = path.join(process.cwd(), "public", dirPath, "article.txt");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // 記事データを解析
  const lines = fileContent.split("\n");
  const title = lines.find((line) => line.startsWith("Title:"))?.replace("Title:", "").trim();
  const contentIndex = lines.findIndex((line) => line.startsWith("Content:"));
  const contentLines = lines.slice(contentIndex + 1).map((line) => line.trim());

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div>
        {contentLines.map((line, index) => {
          if (line.startsWith("Image:")) {
            const imagePath = line.replace("Image:", "").trim();
            return (
              <div key={index} className="mb-4">
                <Image
                  src={dirPath + `${imagePath}`}
                  alt={`Image ${index + 1}`}
                  width={800}
                  height={400}
                  className="rounded"
                />
              </div>
            );
          } else if (line.startsWith("Text:")) {
            const text = line.replace("Text:", "").trim();
            return (
              <p key={index} className="text-lg mb-4">
                {text}
              </p>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default SciencePageTemplate;