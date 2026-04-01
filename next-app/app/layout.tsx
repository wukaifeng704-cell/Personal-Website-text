import type { Metadata } from "next";
import "./globals.css";
import SiteLayout from "@/components/site-layout";

export const metadata: Metadata = {
  title: "老吴AI实验室 | KrisWu",
  description: "企业培训 × AI 实战 — 老吴AI实验室",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
