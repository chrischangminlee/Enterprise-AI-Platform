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
    title: "AI와 함께하는 미래 준비",
    description: "인공지능 시대를 준비하는 방법과 AI 활용 전략에 대한 인사이트를 공유합니다.",
    link: "https://tistory.com", // 실제 Tistory 링크로 교체 필요
    date: "2024-01-15",
    category: "AI 전략",
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
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {post.image && (
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            )}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">{post.date}</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.description}</p>
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          더 많은 글은{" "}
          <a
            href="https://tistory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Tistory 블로그
          </a>
          에서 확인하실 수 있습니다.
        </p>
      </div>
    </main>
  );
}