export default function SurveyPage() {
  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">기업 서베이</h1>
        <p className="text-gray-600 text-center mb-8">
          기업의 AI 활용 현황과 니즈를 파악하기 위한 서베이입니다.
        </p>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">설문 안내</h2>
          <p className="text-gray-700 mb-4">
            곧 설문 링크가 공개될 예정입니다. 참여해 주시면 인사이트를 종합하여 공유드리겠습니다.
          </p>
          <div className="flex items-center justify-center">
            <button
              disabled
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed"
              title="설문 링크가 준비중입니다"
            >
              설문 참여 (준비중)
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

