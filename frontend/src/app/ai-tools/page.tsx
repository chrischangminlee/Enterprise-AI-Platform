import Image from "next/image";

// --- basePath 분기 ---
const basePath =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : "";

// Tool 인터페이스
interface Tool {
  title: string;
  description: string;
  link: string;
  image: string;        // 예: "/images/news4.png"
  imageAlt: string;
  status: 'active' | 'coming-soon';
}

// 샘플 Tools 데이터
const tools: Tool[] = [
  {
    title: "K-Actuarial AI Agent",
    description: "계리사 실무 관련 질의응답 AI 시스템",
    link: "http://localhost:5001",
    image: "/images/news4.png",
    imageAlt: "AI Agent Image",
    status: 'active'
  },
  {
    title: "Coming Soon",
    description: "새로운 AI 도구가 준비중입니다",
    link: "#",
    image: "/images/news4.png",
    imageAlt: "Coming Soon Image",
    status: 'coming-soon'
  }
];

export default function AITools() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">
        계리 관련 AI 툴 및 데이터 정제 작업물을 업로드합니다.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.status === 'active' ? tool.link : '#'}
            target={tool.status === 'active' ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`block bg-white rounded-lg shadow-lg transition-shadow duration-300
              ${tool.status === 'active' ? 'hover:shadow-xl' : 'cursor-not-allowed opacity-60'}`}
          >
            <div className="relative h-48">
              <Image
                // basePath + tool.image
                src={`${basePath}${tool.image}`}
                alt={tool.imageAlt}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{tool.title}</h2>
              <p className="text-gray-600">{tool.description}</p>
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
