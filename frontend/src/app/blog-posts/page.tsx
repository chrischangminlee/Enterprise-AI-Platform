import Image from "next/image";

// BlogPost 인터페이스
interface BlogPost {
  title: string;
  description: string;
  link: string;
  date: string;
  category: string;
  image?: string;
}

// 샘플 블로그 포스트 데이터
const blogPosts: BlogPost[] = [
  {
    title: "젠스파크 Genspark AI Slides PPT 슬라이드 문서 장표 만들기",
    description: "슈퍼 에이전트로 손쉽게 AI 슬라이드 문서 작업",
    link: "https://changminiai.tistory.com/entry/%EC%A0%A0%EC%8A%A4%ED%8C%8C%ED%81%AC-Genspark-AI-Slides-PPT-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EB%AC%B8%EC%84%9C-%EC%9E%A5%ED%91%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0-AI-Super-Agent-%EC%8A%88%ED%8D%BC-%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EB%A1%9C-%EC%86%90%EC%89%BD%EA%B2%8C-AI-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EB%AC%B8%EC%84%9C-%EC%9E%91%EC%97%85", // 실제 Tistory 링크로 교체 필요
    date: "2025-07-05",
    category: "AI 실무",
    image: "/K_Actuary_AI_Agent_Platform/images/anya1.png"
  },
  {
    title: "ChatGPT 활용 가이드",
    description: "ChatGPT를 효과적으로 활용하는 방법과 프롬프트 엔지니어링 팁을 소개합니다.",
    link: "https://tistory.com", // 실제 Tistory 링크로 교체 필요
    date: "2024-01-10",
    category: "AI 도구",
    image: "/K_Actuary_AI_Agent_Platform/images/anya1.png"
  },
  {
    title: "머신러닝 기초 개념",
    description: "머신러닝의 기본 개념과 실무 적용 사례를 쉽게 설명합니다.",
    link: "https://tistory.com", // 실제 Tistory 링크로 교체 필요
    date: "2024-01-05",
    category: "기술 이해",
    image: "/K_Actuary_AI_Agent_Platform/images/anya1.png"
  },
  {
    title: "AI 윤리와 책임있는 AI 사용",
    description: "AI 기술을 윤리적이고 책임감 있게 사용하는 방법에 대해 논의합니다.",
    link: "https://tistory.com", // 실제 Tistory 링크로 교체 필요
    date: "2024-01-01",
    category: "AI 윤리",
    image: "/K_Actuary_AI_Agent_Platform/images/anya1.png"
  }
];

export default function BlogPosts() {
  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          Blog Posts
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {post.image && (
                <div className="relative h-32 sm:h-36 bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <span className="absolute bottom-2 left-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
              )}
              <div className="p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-base sm:text-lg font-semibold mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                  {post.description}
                </p>
                <span className="inline-block mt-2 text-blue-600 text-xs sm:text-sm font-medium group-hover:text-blue-700">
                  Read More →
                </span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-sm sm:text-base text-gray-600">
            더 많은 글은{" "}
            <a
              href="https://tistory.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              Tistory 블로그
            </a>
            에서 확인하실 수 있습니다.
          </p>
        </div>
      </div>
    </main>
  );
}