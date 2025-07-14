# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Enterprise AI Insights Platform** - A comprehensive platform providing AI information and tools to help prepare for daily life with AI (AI와 함께하는 일상을 준비하는 AI 정보 Insights Platform).

### Key Features
- **AI Tools Showcase**: Interactive tools for actuarial and insurance professionals
- **Educational Content**: Blog posts and articles about AI implementation
- **Professional Resources**: Specialized AI agents for K-Actuarial tasks

### Repository Information
- **Repository Name**: Enterprise-AI-Platform
- **GitHub Pages URL**: https://chrischangminlee.github.io/Enterprise-AI-Platform/
- **Previous Name**: K_Actuary_AI_Agent_Platform (renamed)

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
- **Base path**: `/Enterprise-AI-Platform`
- **Build output**: `frontend/out/`
- **Deployment steps**:
  1. Run `npm run build` in frontend directory
  2. Commit all changes including the `out/` directory
  3. Push to main branch
  4. GitHub Pages automatically serves from the configured source

### Git Workflow
```bash
# After making changes
git add -A
git commit -m "Your commit message"
git push origin main

# If repository was renamed, update remote URL
git remote set-url origin https://github.com/chrischangminlee/Enterprise-AI-Platform.git
```

## Architecture Overview

### Frontend (Next.js 15.2.4)
- **Framework**: Next.js with App Router (v13+)
- **Deployment**: Static export for GitHub Pages
- **Styling**: Tailwind CSS with responsive design
- **TypeScript**: Strict mode enabled
- **Key Features**:
  - Static site generation with `output: 'export'`
  - Responsive navigation with mobile support
  - Image optimization disabled for static hosting
  - Trailing slashes enabled for proper GitHub Pages routing

#### Page Structure
- `/` - Main landing page with platform introduction and featured content
- `/ai-tools/` - Showcase of AI tools including:
  - K-Actuarial AI Agent (https://kactuaryagent.streamlit.app/)
  - K-Actuary 약관 정보 추출 AI Agent (https://kactuarypdf.streamlit.app/)
- `/blog-posts/` - Educational articles and Tistory blog integration

### Backend (FastAPI)
- **Framework**: FastAPI with async support
- **Port**: 5001 (configurable)
- **Architecture**:
  - Entry Point: `backend/src/main.py`
  - Routers: `backend/src/routers/` (actuarial.py)
  - Services: `backend/src/services/` (qa_service.py)
  - CORS enabled for frontend integration

### AI/ML Components
- **Vector Database**: ChromaDB for document embeddings
- **Document Processing**: PDF analysis and Q&A capabilities
- **AI Integration**: LangChain and OpenAI APIs
- **Data Storage**:
  - PDFs: `backend/data/pdfs/`
  - Vector DB: `backend/data/vector_db/`

## Important Configuration Files

### Frontend Configuration
- `frontend/next.config.ts` - Next.js configuration with GitHub Pages settings
- `frontend/tsconfig.json` - TypeScript configuration (strict mode)
- `frontend/tailwind.config.ts` - Tailwind CSS customization
- `frontend/.env.local` - Environment variables (create from .env.local.example)
- `frontend/package.json` - Dependencies and scripts

### Backend Configuration
- `backend/.env` - Environment variables (create from .env.example)
- `backend/requirements.txt` - **Missing**: Must be created with:
  ```
  fastapi
  uvicorn[standard]
  python-dotenv
  langchain
  langchain-community
  chromadb
  openai
  pypdf
  pydantic
  ```

## Development Considerations

### Frontend Guidelines
1. **Static Export Limitations**: 
   - No server-side rendering (SSR)
   - No API routes (use external backend)
   - Images must be unoptimized
   - All routes must have trailing slashes

2. **Image Handling**:
   - Store images in `frontend/public/images/`
   - Reference with full base path: `/Enterprise-AI-Platform/images/[filename]`
   - Use Next.js Image component with `unoptimized` prop

3. **TypeScript Best Practices**:
   - Define interfaces for all data structures
   - Use strict typing for props and state
   - Avoid `any` type usage

4. **Responsive Design**:
   - Mobile-first approach with Tailwind breakpoints
   - Test on various screen sizes
   - Ensure navigation works on mobile devices

### Backend Guidelines
1. **API Design**:
   - RESTful endpoints with clear naming
   - Async functions for I/O operations
   - Proper error handling and status codes

2. **Security**:
   - Environment variables for sensitive data
   - CORS configuration for production
   - Input validation with Pydantic models

## Common Tasks

### Adding a New Frontend Page
1. Create directory: `frontend/src/app/[page-name]/`
2. Add `page.tsx` with proper TypeScript types
3. Update navigation in `layout.tsx` if needed
4. Test with `npm run dev` before building

### Adding a New API Endpoint
1. Create/update router in `backend/src/routers/`
2. Implement service logic in `backend/src/services/`
3. Register router in `backend/src/main.py`
4. Update CORS settings if needed

### Updating Static Content
1. Add images to `frontend/public/images/`
2. Reference with full base path in components
3. Build and test locally before deploying

### Troubleshooting

#### Build Errors
- Clear `.next` directory: `rm -rf frontend/.next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

#### GitHub Pages Issues
- Ensure `basePath` matches repository name
- Verify `out/` directory is committed
- Check GitHub Pages settings in repository
- Wait 5-10 minutes for changes to propagate

#### Image Loading Issues
- Verify image paths include base path
- Check that images exist in `public/images/`
- Ensure `unoptimized: true` in next.config.ts

## Project Maintenance

### Regular Tasks
1. Update dependencies monthly
2. Review and update TypeScript types
3. Monitor GitHub Pages build status
4. Check for security vulnerabilities with `npm audit`

### Before Major Changes
1. Create a feature branch
2. Test thoroughly in development
3. Build and verify static export
4. Test on GitHub Pages preview if available

## Additional Resources
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)