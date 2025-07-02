import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "신제용 - AI 개발자 & 프리랜서 강사",
  description: "딥러닝 및 LLM 기반 AI 에이전트 개발, 머신러닝/딥러닝 강의, 백엔드/프론트엔드 개발 교육 전문가 신제용의 포트폴리오",
  keywords: ["신제용", "AI 개발자", "딥러닝", "LLM", "머신러닝", "강사", "프리랜서", "포트폴리오"],
  authors: [{ name: "신제용" }],
  creator: "신제용",
  openGraph: {
    title: "신제용 - AI 개발자 & 프리랜서 강사",
    description: "딥러닝 및 LLM 기반 AI 에이전트 개발, 머신러닝/딥러닝 강의 전문가",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "신제용 - AI 개발자 & 프리랜서 강사",
    description: "딥러닝 및 LLM 기반 AI 에이전트 개발, 머신러닝/딥러닝 강의 전문가",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
