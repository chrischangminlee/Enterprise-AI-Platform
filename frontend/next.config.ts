import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/K_Actuary_AI_Agent' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chrischangminlee.github.io',
        pathname: '/K_Actuary_AI_Agent/**',
      },
    ],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://chrischangminlee.github.io/K_Actuary_AI_Agent' : '',
  trailingSlash: true,
};

export default nextConfig;
