from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.embeddings import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_community.llms import OpenAI
from langchain.chains import RetrievalQA
import logging

# 로깅 설정
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# 환경 변수 로드
load_dotenv()

# OpenAI API 키 검증
# if not os.getenv('OPENAI_API_KEY'):
#     raise ValueError(
#         "OpenAI API 키가 설정되지 않았습니다. "
#         ".env 파일에 OPENAI_API_KEY를 설정해주세요."
#     )

# 환경 설정
FLASK_ENV = os.getenv('FLASK_ENV', 'development')
PORT = int(os.getenv('PORT', 5001))
HOST = 'localhost'  # 호스트를 localhost로 변경
DEBUG = FLASK_ENV == 'development'

app = Flask(__name__)

# PDF 문서를 저장할 디렉토리
ADMIN_PDF_DIR = 'admin_pdfs'  # 관리자가 제공하는 PDF 파일 디렉토리
if not os.path.exists(ADMIN_PDF_DIR):
    os.makedirs(ADMIN_PDF_DIR)
    logger.info(f"Created directory: {ADMIN_PDF_DIR}")

# 벡터 DB 저장 디렉토리
DB_DIR = 'db'
if not os.path.exists(DB_DIR):
    os.makedirs(DB_DIR)
    logger.info(f"Created directory: {DB_DIR}")

# 전역 변수로 QA 체인 선언
qa_chain = None

def initialize_qa_system():
    """QA 시스템을 초기화하고 PDF 문서를 처리합니다."""
    logger.info("QA 시스템 초기화 건너뜀 (API 키 없음)")
    return

@app.route('/')
def home():
    return """
    <h1>K-Actuarial AI Agent</h1>
    <p>계리사 실무 관련 질의응답 시스템이 실행 중입니다.</p>
    <p>POST /query - 질문하기</p>
    """

@app.route('/query', methods=['POST'])
def query():
    return jsonify({'answer': "현재 OpenAI API 키가 설정되지 않아 응답할 수 없습니다."}), 200

if __name__ == '__main__':
    logger.info(f"Starting server in {FLASK_ENV} mode...")
    initialize_qa_system()
    app.run(host=HOST, port=PORT, debug=DEBUG) 