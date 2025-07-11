import Image from "next/image";

// Tool 인터페이스
interface Tool {
  title: string;
  description: string;
  link: string;
  image: string;        // 예: "/K_Actuary_AI_Agent_Platform/images/news4.png"
  imageAlt: string;
  status: 'active' | 'coming-soon';
}

// 샘플 Tools 데이터
const tools: Tool[] = [
  {
    title: "K-Actuarial AI Agent",
    description: "계리사 실무 관련 질의응답 AI 시스템",
    link: "https://kactuaryagent.streamlit.app/",
    image: "/K_Actuary_AI_Agent_Platform/images/news4.png",
    imageAlt: "AI Agent Image",
    status: 'active'
  },
  {
    title: "K-Actuary 약관 정보 추출 AI Agent",
    description: "보험 약관 계리 모델링 정보 추출 AI",
    link: "https://kactuarypdf.streamlit.app/",
    image: "/K_Actuary_AI_Agent_Platform/images/news4.png",
    imageAlt: "AI Agent Image",
    status: 'active'
  },
  {
    title: "Coming Soon",
    description: "새로운 AI 도구가 준비중입니다",
    link: "#",
    image: "/K_Actuary_AI_Agent_Platform/images/anya1.png",
    imageAlt: "Coming Soon Image",
    status: 'coming-soon'
  }
];

export default function AITools() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">
        AI Tools
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.status === 'active' ? tool.link : '#'}
            target={tool.status === 'active' ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`block bg-white rounded-lg shadow-md transition-shadow duration-300 max-w-sm mx-auto
              ${tool.status === 'active' ? 'hover:shadow-lg' : 'cursor-not-allowed opacity-60'}`}
          >
            <div className="relative h-32">
              <Image
                src={tool.image}
                alt={tool.imageAlt}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-3">
              <h2 className="text-lg font-semibold mb-1">{tool.title}</h2>
              <p className="text-sm text-gray-600">{tool.description}</p>
              {tool.status === 'coming-soon' && (
                <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  Coming Soon
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
