import fs from "fs";
import Image from "next/image";
import path from "path";
import About from "../about/page";
import Event from "../event/page";
import Contact from "../contact/page";
import style from "@/app/style/top.module.css"

const Top = async () => {
  // text.txtのパスを取得
  const filePath = path.join(process.cwd(), "text.txt");
  const fileContents = fs.readFileSync(filePath, "utf8");

  return (
    <div>
      <div className={style.heroArea}>
        {/* 背景画像 */}
        <Image
          src={"globe.svg"}
          alt="background"
          width={100}
          height={100}
          className={style.heroImage}
        />
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