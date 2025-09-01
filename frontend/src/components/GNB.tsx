"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "AI Tools", href: "/ai-tools" },
  { label: "기업 서베이", href: "/survey" },
  { label: "Blog Posts", href: "/blog-posts" },
  { label: "관리자 Linkedin", href: "https://www.linkedin.com/in/chrislee9407/", external: true },
  { label: "Youtube", href: "https://www.youtube.com/@EnterpriseAILab", external: true },
  { label: "오픈카톡", href: "https://open.kakao.com/o/gbr6iuGh", external: true },
];

export default function GNB() {
  const pathname = usePathname();

  const isActive = (item: NavItem) => {
    if (item.external) return false; // 외부 링크는 활성화 표시 없음
    if (item.href === "/") return pathname === "/";
    return pathname.startsWith(item.href);
  };

  const linkClass = (active: boolean) =>
    `${active ? "text-orange-300 font-semibold" : "text-white"} hover:text-gray-200 transition-colors duration-200`;

  return (
    <nav className="mb-12 bg-blue-600 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4">
        <Link href="/" className="flex items-center mb-4 md:mb-0">
          <span className="text-white font-bold whitespace-nowrap">
            <span className="text-lg sm:text-xl md:text-2xl">Enterprise AI Insights Platform</span>
          </span>
        </Link>
        <ul className="flex flex-wrap justify-center space-x-4">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={linkClass(isActive(item))}
                  aria-current={isActive(item) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
