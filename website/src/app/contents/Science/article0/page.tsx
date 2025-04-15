import path from "path";
import { fileURLToPath } from "url";
import SciencePageTemplate from "@/components/SciencePageTemplate";

export const ArticlePage = () => {
  // 記事データを取得

  const dirName = currentDirName()
  const dirPath = path.join("/science", dirName)
  return (
    <div>
      <SciencePageTemplate dirPath={dirPath} />
    </div>
  );
}

export default ArticlePage;


const currentDirName = () => {
  // 現在のファイルの URL を取得
  const currentFileUrl = import.meta.url;

  // ファイルパスを取得
  const currentFilePath = fileURLToPath(currentFileUrl);

  // ディレクトリ名を取得
  const currentDir = path.dirname(currentFilePath);
  const dirName = path.basename(currentDir);
  return dirName;
}