import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* 소개 섹션 */}
      <section className="mb-12">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4">
              미래를 바라보는 계리사가 되기위해 필요한 한국 보험업계 정보 및 AI 관련 정보
            </h1>
          </div>
          <div>
            <Image
              src="/K_Actuary_AI_Agent/images/introimage.png"
              alt="소개 이미지"
              width={375}
              height={225}
              className="rounded-lg"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* 소개 문구 */}
      <section className="container mx-auto">
        <div className="bg-gray-100 p-8 rounded-lg">
          <p className="mb-4">
            안녕하세요, 저는 계리업계에 종사하고 있는 Chris 입니다.
            계리업무에 기술을 접목하는 여러가지 프로젝트를 시도해보고 있으며,
            이 웹페이지는 스터디하면서 접하게 되는 정보정리와 정보에 기반한
            AI 툴을 만들 수 있기 위한 준비 작업을 공유하기 위하여 만들어졌습니다.
            잘 부탁 드립니다.
          </p>
          <a
            href="https://www.linkedin.com/in/chrislee9407/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Linkedin
          </a>
        </div>
      </section>
    </main>
  );
}
