import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import { Footer } from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FROG",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico", // iconのパス
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* 固定ヘッダー */}
        <Header />
        {/* ページごとのコンテンツ */}
        <main className="flex-grow mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
