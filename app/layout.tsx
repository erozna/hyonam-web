import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hyonam.com | AI Guitar Muse",
  description: "클래식 기타를 위한 AI 연구 & 교육 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="bg-zinc-950 text-zinc-200 antialiased">{children}</body>
    </html>
  );
}
