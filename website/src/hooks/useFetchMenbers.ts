import fs from "fs";
import path from "path";
import { MenberStatus } from "@/../public/menbers/MenberStatus";

// サーバーサイドで静的ファイルを読み込む関数
export const fetchMenbers = (menberList: string[]): MenberStatus[] => {
  const menbers: MenberStatus[] = [];

  menberList.forEach((fileName) => {
    // ファイルパスを構築
    const filePath = path.join(process.cwd(), "public", "menbers", fileName);

    // ファイルを読み込み
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // JSON をパースして配列に追加
    menbers.push(JSON.parse(fileContent));
  });

  return menbers;
};