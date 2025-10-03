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
    title: "기업 AI LLM + Retrieval 맥락 DB제공 실험 플랫폼",
    description: "맥락 제공과 사전계산통계를 제공하여 환각을 최소화하여 테스트한 기업 AI 데모",
    link: "https://ai-native-erp.vercel.app/#/",
    image: "/Enterprise-AI-Platform/images/LLM-Retrieval-Platform-Img.png",
    imageAlt: "ai-native-erp image",
    status: 'active'
  },
  {
    title: "환각 최소화 AI PDF 분석 툴",
    description: "기업 특화 환각 최소화 AI PDF 분석 툴",
    link: "https://pdf-ai-analyzer-changminlee.streamlit.app/",
    image: "/Enterprise-AI-Platform/images/PDF-AI-Tool-Image.png",
    imageAlt: "PDF AI Tool Image",
    status: 'active'
  },
  {
    title: "K-Actuary 약관 정보 추출 AI Agent",
    description: "보험 약관 계리 모델링 정보 추출 AI",
    link: "https://kactuarypdf.streamlit.app/",
    image: "/Enterprise-AI-Platform/images/TnCExtract-Tool-Image.png",
    imageAlt: "TnCExtract Tool Image",
    status: 'active'
  },
  {
    title: "AI PPT 팔레트 도우미",
    description: "기본 색상을 고르면 AI가 프레젠테이션용 보조 색상 다섯 가지와 활용법을 추천해 드립니다.",
    link: "https://ppt-color-palette-cm.vercel.app/",
    image: "/Enterprise-AI-Platform/images/AI-Palette.png",
    imageAlt: "AI PPT Palette Assistant",
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
