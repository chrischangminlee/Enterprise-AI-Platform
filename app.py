from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.llms import OpenAI
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
if not os.getenv('OPENAI_API_KEY'):
    raise ValueError(
        "OpenAI API 키가 설정되지 않았습니다. "
        ".env 파일에 OPENAI_API_KEY를 설정해주세요."
    )

# 환경 설정
FLASK_ENV = os.getenv('FLASK_ENV', 'development')
PORT = int(os.getenv('PORT', 5001))
HOST = os.getenv('HOST', '0.0.0.0')
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
    global qa_chain
    
    try:
        # PDF 파일들을 로드
        documents = []
        for filename in os.listdir(ADMIN_PDF_DIR):
            if filename.endswith('.pdf'):
                logger.info(f"Loading PDF: {filename}")
                loader = PyPDFLoader(os.path.join(ADMIN_PDF_DIR, filename))
                documents.extend(loader.load())
        
        if not documents:
            logger.warning("No PDF documents found.")
            return
        
        logger.info(f"Total documents loaded: {len(documents)}")
        
        # 문서 분할
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200
        )
        texts = text_splitter.split_documents(documents)
        logger.info(f"Total chunks created: {len(texts)}")
        
        # 임베딩 및 벡터 저장소 생성
        embeddings = OpenAIEmbeddings()
        vectordb = Chroma.from_documents(
            documents=texts,
            embedding=embeddings,
            persist_directory=DB_DIR
        )
        
        # QA 체인 생성
        qa_chain = RetrievalQA.from_chain_type(
            llm=OpenAI(temperature=0),
            chain_type="stuff",
            retriever=vectordb.as_retriever()
        )
        
        logger.info("QA system initialization completed!")
    except Exception as e:
        logger.error(f"Error initializing QA system: {str(e)}")
        raise

@app.route('/')
def home():
    return """
    <h1>K-Actuarial AI Agent</h1>
    <p>계리사 실무 관련 질의응답 시스템이 실행 중입니다.</p>
    <p>POST /query - 질문하기</p>
    """

@app.route('/query', methods=['POST'])
def query():
    if not qa_chain:
        logger.error("QA system not initialized")
        return jsonify({'error': 'QA 시스템이 초기화되지 않았습니다.'}), 500
    
    data = request.get_json()
    if not data or 'question' not in data:
        logger.warning("Invalid request: missing question")
        return jsonify({'error': '질문이 전송되지 않았습니다.'}), 400
    
    question = data['question']
    try:
        logger.info(f"Processing question: {question}")
        answer = qa_chain.run(question)
        return jsonify({'answer': answer}), 200
    except Exception as e:
        logger.error(f"Error processing question: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    logger.info(f"Starting server in {FLASK_ENV} mode...")
    initialize_qa_system()
    app.run(host=HOST, port=PORT, debug=DEBUG) 