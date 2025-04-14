import fs from "fs";
import path from "path";
import Image from "next/image";

interface SciencePageTemplateProps {
  dirPath: string;
}

export const SciencePageTemplate = (props: SciencePageTemplateProps) => {
  const { dirPath } = props
  // 記事データを読み込む
  const filePath = path.join(process.cwd(), dirPath, "article.txt");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // 記事データを解析
  const lines = fileContent.split("\n");
  const title = lines.find((line) => line.startsWith("Title:"))?.replace("Title:", "").trim();
  const images = lines
    .filter((line) => line.startsWith("Image:"))
    .map((line) => line.replace("Image:", "").trim());
  const contentIndex = lines.findIndex((line) => line.startsWith("Content:"));
  const content = lines.slice(contentIndex + 1).join("\n").trim();

  console.log(
    lines,
    title,
    images,
    contentIndex
  )

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="mb-4">
        {images.map((image, index) => (
          <div key={index} className="mb-4">
            <Image
              src={`/science/article0/${image}`}
              alt={`Image ${index + 1}`}
              width={800}
              height={400}
              className="rounded"
            />
          </div>
        ))}
      </div>
      <p className="text-lg">{content}</p>
    </div>
  );
}

export default SciencePageTemplate;