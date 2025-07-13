import Link from "next/link";

interface NavigationButton {
  title: string;
  href: string;
  description: string;
  icon: string;
  external?: boolean;
}

const navigationButtons: NavigationButton[] = [
  {
    title: "AI Tools",
    href: "/ai-tools",
    description: "AI 도구 및 서비스",
    icon: "🤖",
  },
  {
    title: "Blog Posts",
    href: "/blog-posts",
    description: "AI 인사이트 블로그",
    icon: "📝",
  },
  {
    title: "관리자 LinkedIn",
    href: "https://www.linkedin.com/in/chrislee9407/",
    description: "프로페셔널 네트워크",
    icon: "💼",
    external: true,
  },
  {
    title: "기업 AI 연구소 YouTube",
    href: "https://www.youtube.com/@EnterpriseAILab",
    description: "기업 AI 연구소 유튜브",
    icon: "📺",
    external: true,
  },
  {
    title: "오픈카톡",
    href: "https://open.kakao.com/o/gbr6iuGh",
    description: "기업 AI 정보 오픈카톡방",
    icon: "💬",
    external: true,
  },
  {
    title: "Coming Soon",
    href: "#",
    description: "준비중",
    icon: "🔜",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            AI와 함께하는 일상을 준비하는<br className="hidden sm:block" />
            AI 정보 Insights Platform
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            다양한 채널을 통해 AI 인사이트를 공유합니다
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {navigationButtons.map((button, index) => {
            const isExternal = button.external;
            const isDisabled = button.href === "#";
            
            const buttonClass = `group block p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${
              isDisabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:scale-[1.02]"
            }`;

            const content = (
              <>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl">{button.icon}</span>
                  {isExternal && !isDisabled && (
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {button.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  {button.description}
                </p>
              </>
            );

            if (isDisabled) {
              return (
                <div key={index} className={buttonClass}>
                  {content}
                </div>
              );
            }

            if (isExternal) {
              return (
                <a
                  key={index}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={index}
                href={button.href}
                className={buttonClass}
              >
                {content}
              </Link>
            );
          })}
        </div>

        {/* Footer text */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm text-gray-500">
            더 많은 채널이 곧 추가될 예정입니다
          </p>
        </div>
      </div>
    </main>
  );
}
