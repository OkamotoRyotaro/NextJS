import fs from "fs";
import path from "path";
import About from "../aboutus/page";
import Event from "../event/page";
import Contact from "../contact/page";
import style from "@/app/style/top.module.css"
import HeroImage from "./HeroImage";

const Top = async () => {
  // text.txtのパスを取得
  const filePath = path.join(process.cwd(), "public", "top", "text.txt");
  const fileContents = fs.readFileSync(filePath, "utf8");

  return (
    <div>
      <div className={style.heroArea}>
        {/* 背景画像 */}
        <HeroImage />
        {/* 画像上の文字 */}
        <div className={style.heroText}>
          <h2 className={style.h2}>
            Overlay Text
          </h2>
        </div>
      </div>
      <div className="mt-8 p-4 border rounded">
        <h2 className="text-xl font-semibold">File Content:</h2>
        <pre className="mt-2 whitespace-pre-wrap">{fileContents}</pre>
      </div>
      <Event />
      <About />
      <Contact />
    </div>
  );
};

export default Top;