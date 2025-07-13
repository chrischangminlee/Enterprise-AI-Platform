import Image from "next/image";

// Tool 인터페이스
interface Tool {
  title: string;
  description: string;
  link: string;
  image: string;        // 예: "/Enterprise-AI-Platform/images/news4.png"
  imageAlt: string;
  status: 'active' | 'coming-soon';
}

// 샘플 Tools 데이터
const tools: Tool[] = [
  {
    title: "K-Actuarial AI Agent",
    description: "계리사 실무 관련 질의응답 AI 시스템",
    link: "https://kactuaryagent.streamlit.app/",
    image: "/Enterprise-AI-Platform/images/news4.png",
    imageAlt: "AI Agent Image",
    status: 'active'
  },
  {
    title: "K-Actuary 약관 정보 추출 AI Agent",
    description: "보험 약관 계리 모델링 정보 추출 AI",
    link: "https://kactuarypdf.streamlit.app/",
    image: "/Enterprise-AI-Platform/images/news4.png",
    imageAlt: "AI Agent Image",
    status: 'active'
  },
  {
    title: "Coming Soon",
    description: "새로운 AI 도구가 준비중입니다",
    link: "#",
    image: "/Enterprise-AI-Platform/images/anya1.png",
    imageAlt: "Coming Soon Image",
    status: 'coming-soon'
  }
];

export default function AITools() {
  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          AI Tools
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.status === 'active' ? tool.link : '#'}
              target={tool.status === 'active' ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`group block bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden
                ${tool.status === 'active' ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`}
            >
              <div className="relative h-24 sm:h-28 bg-gradient-to-br from-blue-50 to-blue-100">
                <Image
                  src={tool.image}
                  alt={tool.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h2 className="text-base sm:text-lg font-semibold mb-1 line-clamp-1">{tool.title}</h2>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{tool.description}</p>
                {tool.status === 'coming-soon' && (
                  <span className="inline-block mt-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    Coming Soon
                  </span>
                )}
                {tool.status === 'active' && (
                  <span className="inline-block mt-2 text-blue-600 text-xs sm:text-sm font-medium group-hover:text-blue-700">
                    Visit Tool →
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
