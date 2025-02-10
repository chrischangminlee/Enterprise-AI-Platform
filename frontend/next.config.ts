import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/K_Actuary_AI_Agent' : '',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};

export default nextConfig;
