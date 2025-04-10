import fs from "fs";
import path from "path";

const Top = async () => {
  // text.txtのパスを取得
  const filePath = path.join(process.cwd(), "text.txt");
  const fileContents = fs.readFileSync(filePath, "utf8");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Top Page</h1>
      <p className="mt-4">Welcome to the Top page!</p>
      <div className="mt-8 p-4 border rounded bg-gray-100">
        <h2 className="text-xl font-semibold">File Content:</h2>
        <pre className="mt-2 whitespace-pre-wrap">{fileContents}</pre>
      </div>
    </div>
  );
};

export default Top;