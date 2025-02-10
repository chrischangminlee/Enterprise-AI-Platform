from fastapi import APIRouter, HTTPException
from typing import Dict
from services.qa_service import QAService

router = APIRouter(
    prefix="/api/actuarial",
    tags=["actuarial"]
)

qa_service = QAService()

@router.post("/query")
async def query(request: Dict[str, str]):
    try:
        question = request.get("question")
        if not question:
            raise HTTPException(status_code=400, detail="질문이 제공되지 않았습니다.")
        
        answer = await qa_service.get_answer(question)
        return {"answer": answer}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 