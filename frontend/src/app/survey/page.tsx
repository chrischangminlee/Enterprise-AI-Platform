export default function SurveyPage() {
  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">기업 AI 설문조사</h1>
        <p className="text-gray-600 text-center mb-8">
          기업의 AI 활용 현황과 니즈를 파악하고 나누기 위한 설문조사 입니다.
        </p>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">설문 안내</h2>
          <p className="text-gray-700 mb-4">
            기업의 AI 활용에 대한 2~3분 설문에 참여하고, 결과 인사이트를 받아보세요. <br /> <br />            
            참여해주신 분들께는 취합된 결과와 함께 향후 취합된 결과도 수시로 공유드립니다.
          </p>
          <div className="flex items-center justify-center">
            <a
              href="https://forms.gle/MPyw6dnBdzj1Q36Q7"
              className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white"
            >
              설문 참여
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
