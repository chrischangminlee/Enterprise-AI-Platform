import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/K_Actuary_AI_Agent',
  images: {
    loader: 'custom',
    loaderFile: './image-loader.ts',
  },
  assetPrefix: '/K_Actuary_AI_Agent/',
};

export default nextConfig;
