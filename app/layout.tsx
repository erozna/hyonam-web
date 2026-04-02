import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "효남 인터내셔널 | Hyonam International",
  description: "AI 기반 글로벌 통상 전문 기업 — 효남 인터내셔널. 금속 소재부터 AI 자동화까지, 미래를 선도합니다.",
  keywords: ["효남", "hyonam", "효남금속", "AI 자동화", "글로벌 통상", "ceozna@hyonam.com"],
  openGraph: {
    title: "효남 인터내셔널",
    description: "AI 기반 글로벌 통상 전문 기업",
    url: "https://hyonam.com",
    siteName: "Hyonam International",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@300;400;600&family=Noto+Sans+KR:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col" style={{ background: '#040d1a' }}>
        {children}
      </body>
    </html>
  );
}
