import fs from "fs";
import path from "path";
import { MenberStatus } from "@/../public/menbers/MenberStatus";

// サーバーサイドで静的ファイルを読み込む関数
export const fetchMenbers = (): MenberStatus[] => {
  const menberDirList = getDirectories(path.join(process.cwd(), "public", "menbers"))

  const menbers: MenberStatus[] = [];

  menberDirList.forEach((dirName) => {
    // ファイルパスを構築
    const personPath = path.join(process.cwd(), "public", "menbers", dirName, "person.json");
    const basicInfoPath = path.join(process.cwd(), "public", "menbers", dirName, "basicinfo.txt");
    const historyInfoPath = path.join(process.cwd(), "public", "menbers", dirName, "history.txt");
    // ファイルを読み込み
    const fileContent = fs.readFileSync(personPath, "utf-8");
    const basicContent = fs.readFileSync(basicInfoPath, "utf-8");
    const historyContent = fs.readFileSync(historyInfoPath, "utf-8");
    // JSON をパースして配列に追加
    menbers.push({
      ...JSON.parse(fileContent),
      basicInfo: basicContent,
      history: historyContent,
    });
  });

  return menbers;
};


export const getDirectories = (directoryPath: string): string[] => {
  // ディレクトリ内のすべてのエントリを取得
  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });

  // ディレクトリのみをフィルタリングして名前を取得
  const directories = entries
    .filter((entry) => entry.isDirectory()) // ディレクトリのみ
    .map((entry) => entry.name); // ディレクトリ名を取得

  return directories;
};