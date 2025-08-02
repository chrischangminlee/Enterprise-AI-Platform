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
    title: "AI Agent를 위한 ERP 구조: 명시적 기억과 사전 계산 통계",
    description: "AI Agent를 위한 ERP 구조",
    link: "https://changminiai.tistory.com/entry/%EA%B8%B0%EC%97%85-AI-%EB%8F%84%EC%9E%85-%EA%B0%80%EC%9D%B4%EB%93%9C-Enterprise-AI-AI-Agent%EB%A5%BC-%EC%9C%84%ED%95%9C-ERP-%EA%B5%AC%EC%A1%B0-%EB%AA%85%EC%8B%9C%EC%A0%81-%EA%B8%B0%EC%96%B5-Explicit-Memory%EA%B3%BC-%EC%82%AC%EC%A0%84-%EA%B3%84%EC%82%B0-%ED%86%B5%EA%B3%84Precomputed-Statistics-%EB%B3%B4%ED%97%98-%EC%83%81%ED%92%88%EA%B0%9C%EB%B0%9C-%EB%B3%B4%ED%97%98-%EA%B3%84%EB%A6%AC-AI-ERP-%EC%98%88%EC%8B%9C", 
    date: "2025-08-02",
    category: "기업 AI",
    image: "/Enterprise-AI-Platform/images/AIAgentStructureBlogCover.png"
  },
  {
    title: "생성형 AI는 데이터 분석이 아닌 업무 계획, 실행, 검토에 더욱 적합하다",
    description: "생성형 AI 활용에 대한 이해",
    link: "https://changminiai.tistory.com/entry/%EA%B8%B0%EC%97%85-AI-%EB%8F%84%EC%9E%85-%EA%B0%80%EC%9D%B4%EB%93%9C-Enterprise-AI-%EC%83%9D%EC%84%B1%ED%98%95-AI%EB%8A%94-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B6%84%EC%84%9D%EC%9D%B4-%EC%95%84%EB%8B%8C-%EC%97%85%EB%AC%B4-%EA%B3%84%ED%9A%8D-%EC%8B%A4%ED%96%89-%EA%B2%80%ED%86%A0%EC%97%90-%EB%8D%94%EC%9A%B1-%EC%A0%81%ED%95%A9%ED%95%98%EB%8B%A4", 
    date: "2025-07-20",
    category: "기업 AI",
    image: "/Enterprise-AI-Platform/images/LLM-Understand-Image.png"
  },
  {
    title: "ERP 데이터의 재발견: 회사 ERP AI 도입을 통해 잠자는 자산을 깨우는 법",
    description: "AI ERP 도입 가이드",
    link: "https://changminiai.tistory.com/entry/%EA%B8%B0%EC%97%85-AI-%EB%8F%84%EC%9E%85-%EA%B0%80%EC%9D%B4%EB%93%9C-Enterprise-AI-ERP-%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%9D%98-%EC%9E%AC%EB%B0%9C%EA%B2%AC-%ED%9A%8C%EC%82%AC-ERP-AI-%EB%8F%84%EC%9E%85%EC%9D%84-%ED%86%B5%ED%95%B4-%EC%9E%A0%EC%9E%90%EB%8A%94-%EC%9E%90%EC%82%B0%EC%9D%84-%EA%B9%A8%EC%9A%B0%EB%8A%94-%EB%B2%95", 
    date: "2025-07-17",
    category: "기업 AI",
    image: "/Enterprise-AI-Platform/images/AI-ERP-Image.png"
  },
  {
    title: "기업 활용 특성화 환각 최소화 AI PDF 분석 툴",
    description: "직접만든 환각 최소화 AI PDF 분석 툴",
    link: "https://changminiai.tistory.com/entry/%EA%B8%B0%EC%97%85-%ED%99%9C%EC%9A%A9%EC%97%90-%EC%B5%9C%EC%A0%81%ED%99%94%EB%90%9C-%EA%B3%B5%EC%A7%9C-AI-PDF-%EB%B6%84%EC%84%9D%EA%B8%B0-%EC%A7%81%EC%A0%91%EB%A7%8C%EB%93%A0-PDF-%ED%99%98%EA%B0%81-%EC%B5%9C%EC%86%8C%ED%99%94%EB%90%9C-%EC%82%AC%EC%9A%A9-%ED%95%84%EC%88%98-%EB%B6%84%EC%84%9D-%ED%88%B4-%EA%B3%B5%EC%9C%A0", 
    date: "2025-07-14",
    category: "AI 문서",
    image: "/Enterprise-AI-Platform/images/PDF-AI-Tool-Image.png"
  },
  {
    title: "젠스파크 Genspark AI Slides PPT 슬라이드 문서 장표 만들기",
    description: "슈퍼 에이전트로 손쉽게 AI 슬라이드 문서 작업",
    link: "https://changminiai.tistory.com/entry/%EC%A0%A0%EC%8A%A4%ED%8C%8C%ED%81%AC-Genspark-AI-Slides-PPT-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EB%AC%B8%EC%84%9C-%EC%9E%A5%ED%91%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0-AI-Super-Agent-%EC%8A%88%ED%8D%BC-%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EB%A1%9C-%EC%86%90%EC%89%BD%EA%B2%8C-AI-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EB%AC%B8%EC%84%9C-%EC%9E%91%EC%97%85", // 실제 Tistory 링크로 교체 필요
    date: "2025-07-05",
    category: "AI 실무",
    image: "/Enterprise-AI-Platform/images/Genspark-Image.png"
  },
  {
    title: "노트북LM NotebookLM 사용법 – 구글 AI 노트 정리 비서",
    description: "복잡한 자료도 똑똑하게 요약하고 정리해주는 AI 리서치 도우미",
    link: "https://changminiai.tistory.com/entry/%EA%B5%AC%EA%B8%80-%EB%85%B8%ED%8A%B8%EB%B6%81LM-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%9D%BC%EC%9E%98%EB%9F%AC%EC%99%80-%ED%8C%8C%EC%9B%8CJ%EB%A5%BC-%EC%9C%84%ED%95%9C-%ED%95%84%EC%88%98-AI-%EB%8F%84%EA%B5%AC", 
    date: "2025-02-22",
    category: "AI 실무",
    image: "/Enterprise-AI-Platform/images/NotebookLM-Image.png"
  },
  {
    title: "힉스필드 Higgsfield AI – 누구나 쉽게 만드는 AI 영상 생성기",
    description: "셀카 한 장이면 끝, 나만의 짧은 영상 콘텐츠를 만들어주는 AI 영상 비서",
    link: "https://changminiai.tistory.com/entry/Higgsfield-%ED%9E%89%EC%8A%A4%ED%95%84%EB%93%9C-AI-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%BB%A4%EC%8A%A4%ED%84%B0%EB%A7%88%EC%9D%B4%EC%A7%95-%EC%89%AC%EC%9A%B4-%EC%98%81%EC%83%81-%EC%83%9D%EC%84%B1-AI", 
    date: "2025-04-10",
    category: "AI 영상",
    image: "/Enterprise-AI-Platform/images/Higgsfield-image.png"
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
              href="https://changminiai.tistory.com/"
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