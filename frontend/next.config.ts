import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 사이트로 빌드
  output: 'export',

  // GitHub Pages 배포 시 basePath 설정
  // (프로덕션 모드에서만 /K_Actuary_AI_Agent 적용)
  basePath: process.env.NODE_ENV === 'production' ? '/K_Actuary_AI_Agent' : '',

  images: {
    // GitHub Pages 호스팅에서는 Next 이미지 최적화 기능 사용 불가
    // (옵션 사용 시 외부 서버 설정이 필요)
    unoptimized: true,
  },

  // /경로/ 형태로 끝에 slash를 붙이도록
  trailingSlash: true,
};

export default nextConfig;
