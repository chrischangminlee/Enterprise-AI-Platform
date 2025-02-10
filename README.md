# 계리사 웹페이지 프로젝트

이 프로젝트는 계리사 실무 관련 정보 및 AI 도구를 제공하는 웹 애플리케이션입니다.

## 프로젝트 구조

```
/pythonProject_Actuary/
├── frontend/               # Next.js 프론트엔드
│   ├── src/
│   │   └── app/           # Next.js 13+ App Router
│   ├── public/
│   │   └── images/        # 이미지 파일
│   └── ...
├── backend/               # FastAPI 백엔드
│   ├── src/
│   │   ├── main.py
│   │   ├── routers/
│   │   └── services/
│   ├── data/             # 데이터 저장소
│   │   ├── pdfs/        # PDF 문서
│   │   └── vector_db/   # 벡터 DB
│   └── .env
└── venv/                 # Python 가상환경
```

## 시작하기

### 백엔드 설정

1. Python 가상환경 생성 및 활성화:
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

2. 의존성 설치:
```bash
pip install -r backend/requirements.txt
```

3. 환경 변수 설정:
- `backend/.env.example`을 `backend/.env`로 복사하고 필요한 값 설정

4. 백엔드 서버 실행:
```bash
cd backend
uvicorn src.main:app --reload --port 5001
```

### 프론트엔드 설정

1. 의존성 설치:
```bash
cd frontend
npm install
```

2. 환경 변수 설정:
- `.env.local.example`을 `.env.local`로 복사하고 필요한 값 설정

3. 개발 서버 실행:
```bash
npm run dev
```

## 기능

- 계리사 실무 관련 뉴스 제공
- AI 기반 질의응답 시스템
- 보험 관련 문서 검색

## 기술 스택

- 프론트엔드: Next.js, TypeScript, Tailwind CSS
- 백엔드: FastAPI, Python
- AI/ML: LangChain, OpenAI
- 데이터베이스: ChromaDB (벡터 데이터베이스)

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
