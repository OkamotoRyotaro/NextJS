import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <div className="flex gap-4">
          <Link href="/about" className="text-blue-500 hover:underline">
            Go to About
          </Link>
          <Link href="/top" className="text-blue-500 hover:underline">
            Go to Top
          </Link>
        </div>
      </main>
    </div>
  );
}
