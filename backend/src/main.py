from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from dotenv import load_dotenv
import os
from routers import actuarial

# 환경 변수 로드
load_dotenv()

app = FastAPI(title="K-Actuarial AI Agent API")

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 라우터 설정
app.include_router(actuarial.router)

@app.get("/")
async def root():
    return {
        "message": "K-Actuarial AI Agent API",
        "status": "running",
        "docs_url": "/docs"
    }

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5001))
    host = os.getenv("HOST", "0.0.0.0")
    uvicorn.run("main:app", host=host, port=port, reload=True) 