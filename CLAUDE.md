# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Chris Chang Min Lee's AI Insights - A platform providing AI information and tools to help prepare for daily life with AI (AI와 함께하는 일상을 준비하는 AI 정보 Insights Platform).

## Key Commands

### Frontend Development
```bash
cd frontend
npm install          # Install dependencies
npm run dev          # Start development server on port 3000
npm run build        # Build static site for GitHub Pages deployment
npm run lint         # Run linting
```

### Backend Development
```bash
cd backend
# Note: No requirements.txt exists - create one first with necessary dependencies
uvicorn src.main:app --reload --port 5001    # Start FastAPI server
```

### GitHub Pages Deployment
The frontend is configured for static export to GitHub Pages:
- Base path: `/Enterprise-AI-Platform`
- Build output: `frontend/out/`
- Run `npm run build` in frontend directory to generate static files

## Architecture Overview

### Frontend (Next.js 15.2.4)
- **App Router Structure**: Uses Next.js 13+ App Router in `frontend/src/app/`
- **Static Export**: Configured for GitHub Pages deployment with `output: 'export'`
- **Styling**: Tailwind CSS with global styles in `app/globals.css`
- **Key Pages**:
  - `/` - Main landing page with platform introduction
  - `/ai-tools/` - AI tools showcase
  - `/blog-posts/` - Blog posts and articles from Tistory

### Backend (FastAPI)
- **Entry Point**: `backend/src/main.py` - FastAPI application with CORS middleware
- **API Structure**: Routers in `backend/src/routers/` (actuarial.py)
- **Services**: Business logic in `backend/src/services/` (qa_service.py)
- **Data Storage**:
  - PDFs: `backend/data/pdfs/`
  - Vector DB: `backend/data/vector_db/` (ChromaDB for document embeddings)
- **Port**: Runs on port 5001 by default

### AI/ML Components
- Vector database using ChromaDB for document search
- Q&A service in `backend/src/services/qa_service.py`
- Integration with LangChain and OpenAI (per README)

## Important Configuration Files

### Frontend
- `frontend/next.config.ts` - Static export and GitHub Pages configuration
- `frontend/tsconfig.json` - TypeScript with strict mode enabled
- `frontend/tailwind.config.ts` - Tailwind CSS configuration
- `frontend/.env.local` - Frontend environment variables (create from .env.local.example)

### Backend
- `backend/.env` - Backend environment variables (create from .env.example)
- **Missing**: `backend/requirements.txt` - Must be created with Python dependencies

## Development Considerations

1. **Static Site Limitations**: The frontend is configured for static export, so dynamic Next.js features (SSR, API routes) are not available.

2. **Missing Python Dependencies**: No `requirements.txt` file exists. When creating one, include:
   - fastapi
   - uvicorn
   - python-dotenv
   - langchain
   - chromadb
   - Any OpenAI/AI libraries used

3. **Environment Variables**: Both frontend and backend require environment configuration files that need to be created from example files.

4. **CORS Configuration**: Backend is configured to accept requests from the frontend URL specified in environment variables.

5. **TypeScript**: Frontend uses TypeScript with strict mode - ensure all new code is properly typed.

6. **URL Structure**: All frontend routes use trailing slashes due to `trailingSlash: true` configuration.

## Common Tasks

### Adding a New Frontend Page
1. Create a new directory under `frontend/src/app/[page-name]/`
2. Add `page.tsx` file in the directory
3. Follow existing page patterns for layout and styling

### Adding a New API Endpoint
1. Create or update router file in `backend/src/routers/`
2. Implement service logic in `backend/src/services/`
3. Update `backend/src/main.py` to include new router if needed

### Updating Static Content
1. Images go in `frontend/public/images/`
2. Remember images are unoptimized due to static export configuration

### Deploying to GitHub Pages
1. Run `npm run build` in frontend directory
2. Commit the `frontend/out/` directory
3. Push to repository - GitHub Pages will serve from this directory