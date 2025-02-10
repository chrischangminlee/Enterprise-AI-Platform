from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.embeddings import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_community.llms import OpenAI
from langchain.chains import RetrievalQA
import os
import logging

logger = logging.getLogger(__name__)

class QAService:
    def __init__(self):
        self.qa_chain = None
        self.initialize_qa_system()

    def initialize_qa_system(self):
        """QA 시스템을 초기화하고 PDF 문서를 처리합니다."""
        try:
            if not os.getenv('OPENAI_API_KEY'):
                logger.warning("OpenAI API 키가 설정되지 않았습니다.")
                return

            # PDF 문서 로드
            pdf_dir = 'admin_pdfs'
            documents = []
            for file in os.listdir(pdf_dir):
                if file.endswith('.pdf'):
                    loader = PyPDFLoader(os.path.join(pdf_dir, file))
                    documents.extend(loader.load())

            # 텍스트 분할
            text_splitter = RecursiveCharacterTextSplitter(
                chunk_size=1000,
                chunk_overlap=200
            )
            texts = text_splitter.split_documents(documents)

            # 임베딩 및 벡터 저장소 생성
            embeddings = OpenAIEmbeddings()
            vectorstore = Chroma.from_documents(
                documents=texts,
                embedding=embeddings,
                persist_directory="db"
            )

            # QA 체인 생성
            llm = OpenAI(temperature=0)
            self.qa_chain = RetrievalQA.from_chain_type(
                llm=llm,
                chain_type="stuff",
                retriever=vectorstore.as_retriever()
            )
            logger.info("QA 시스템이 성공적으로 초기화되었습니다.")
        except Exception as e:
            logger.error(f"QA 시스템 초기화 중 오류 발생: {str(e)}")

    async def get_answer(self, question: str) -> str:
        """질문에 대한 답변을 생성합니다."""
        if not self.qa_chain:
            return "현재 QA 시스템이 초기화되지 않았습니다. OpenAI API 키를 확인해주세요."
        
        try:
            result = self.qa_chain.run(question)
            return result
        except Exception as e:
            logger.error(f"답변 생성 중 오류 발생: {str(e)}")
            return f"답변 생성 중 오류가 발생했습니다: {str(e)}" 