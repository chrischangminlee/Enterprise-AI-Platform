import Image from "next/image";

// 뉴스 아이템 인터페이스
interface NewsItem {
  title: string;
  link: string;
  image: string;     // 예: "/K_Actuary_AI_Agent_Platform/images/news2.png"
  imageAlt: string;
}

// 뉴스 아이템 예시
const newsItems: NewsItem[] = [
  {
    title: "[금융위원회 202501] ｢신뢰회복｣과 ｢혁신｣을 위한 6차 ｢보험개혁회의｣ 개최",
    link: "https://www.fsc.go.kr/no010101/83897",
    image: "/K_Actuary_AI_Agent_Platform/images/news2.png",
    imageAlt: "금융위원회 뉴스"
  },
  {
    title: "[금융위원회 202412] ｢신뢰회복｣과 ｢혁신｣을 위한 5차 ｢보험개혁회의｣ 개최",
    link: "https://www.fsc.go.kr/no010101/83625",
    image: "/K_Actuary_AI_Agent_Platform/images/news2.png",
    imageAlt: "금융위원회 뉴스"
  },
  {
    title: "[금융위원회 202411] 합리적인 계리가정과 단계적 할인율 조정을 통해 보험회계의 신뢰도와 안정성을 높이겠습니다",
    link: "https://www.fsc.go.kr/no010101/83351",
    image: "/K_Actuary_AI_Agent_Platform/images/news2.png",
    imageAlt: "금융위원회 뉴스"
  },
  {
    title: "[금융위원회 202411] IFRS17 안착을 위해 보험건전성 감독을 강화합니다",
    link: "https://www.fsc.go.kr/no010101/83320",
    image: "/K_Actuary_AI_Agent_Platform/images/news2.png",
    imageAlt: "금융위원회 뉴스"
  },
  {
    title: "[금융위원회 202305] IFRS17 계리적 가정 가이드라인 마련",
    link: "https://www.fsc.go.kr/no010101/80080",
    image: "/K_Actuary_AI_Agent_Platform/images/news2.png",
    imageAlt: "금융위원회 뉴스"
  },
  {
    title: "[금융감독원 202303] 보험회사가 공동재보험을 건전성 관리 수단으로 적극 활용할 수 있도록 공동재보험 업무처리 가이드라인을 마련하였습니다",
    link: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=58223&menuNo=200218",
    image: "/K_Actuary_AI_Agent_Platform/images/news3.png",
    imageAlt: "금융감독원 뉴스"
  },
  {
    title: "[보험개발원 202203] IFRS17 경제적 가정 실무적용방안 마련",
    link: "https://www.kidi.or.kr/user/nd61128.do?View&dmlType=&total_searchkey=&page=1&pageSC=&pageSO=&dmlType=&boardNo=00067733&menuCode=krsite&pageST=SUBJECT&pageSV=&button=",
    image: "/K_Actuary_AI_Agent_Platform/images/news1.png",
    imageAlt: "보험개발원 뉴스"
  },
  {
    title: "[보험개발원 202002] 일반손해보험 및 재보험 위험조정 실무적용방안 마련",
    link: "https://www.kidi.or.kr/user/nd61128.do?View&dmlType=&total_searchkey=&page=1&pageSC=&pageSO=&dmlType=&boardNo=00066094&menuCode=krsite&pageST=SUBJECT&pageSV=&button=",
    image: "/K_Actuary_AI_Agent_Platform/images/news1.png",
    imageAlt: "보험개발원 뉴스"
  },
  {
    title: "[금융감독원 202211] IFRS17 보험회계해설서",
    link: "https://i-kiin.net/wp-content/uploads/2022/12/IFRS17%EB%B3%B4%ED%97%98%ED%9A%8C%EA%B3%84%ED%95%B4%EC%84%A4%EC%84%9C.pdf",
    image: "/K_Actuary_AI_Agent_Platform/images/news3.png",
    imageAlt: "금융감독원 뉴스"
  },
  {
    title: "[기타] IFRS17 Whitepaper",
    link: "https://ifrsdoc.gofsolution.com/",
    image: "/K_Actuary_AI_Agent_Platform/images/news4.png",
    imageAlt: "IFRS 문서"
  }
];

export default function InsuranceNews() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">
        보험기관에서 공시된 계리 실무 관련 주요 뉴스를 주관적으로 선별하여 업로드 하였습니다.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center h-full">
              <div className="relative w-24 h-auto">
                <div className="aspect-square">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover rounded-l-lg"
                  />
                </div>
              </div>
              <div className="flex-1 p-4">
                <h2 className="text-sm font-semibold line-clamp-3">
                  {item.title}
                </h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}