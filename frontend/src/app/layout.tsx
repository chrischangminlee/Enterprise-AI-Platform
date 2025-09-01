import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// 폰트 설정
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enterprise AI Insights Platform",
  description: "AI와 함께하는 일상을 준비하는 AI 정보 Insights Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* GNB (Global Navigation Bar) */}
        <nav className="mb-12 bg-blue-600 shadow-md">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4">
            <Link href="/" className="flex items-center mb-4 md:mb-0">
              <span className="text-white font-bold whitespace-nowrap">
                <span className="text-lg sm:text-xl md:text-2xl">Enterprise AI Insights Platform</span>
              </span>
            </Link>
            <ul className="flex flex-wrap justify-center space-x-4">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-tools"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  AI Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/survey"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  기업 서베이
                </Link>
              </li>
              <li>
                <Link
                  href="/blog-posts"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  Blog Posts
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/chrislee9407/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  관리자 Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@EnterpriseAILab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://open.kakao.com/o/gbr6iuGh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  오픈카톡
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
