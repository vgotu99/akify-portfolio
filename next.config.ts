import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [25, 50, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.IMAGE_STORAGE_URL ?? '',
      },
    ],
  },
};

export default nextConfig;
