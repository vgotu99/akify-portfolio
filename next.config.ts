import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    minimumCacheTTL: 8640000,
    formats: ['image/webp'],
    deviceSizes: [390, 432, 524, 782, 860, 982, 1048, 1564, 1964],
    imageSizes: [48, 96, 144, 216],
    qualities: [25, 50, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.IMAGE_STORAGE_URL ?? '',
      },
      {
        protocol: 'https',
        hostname: process.env.ASSETS_IMAGE_STORAGE_URL ?? '',
      },
      {
        protocol: 'https',
        hostname: process.env.DEV_IMAGE_STORAGE_URL ?? '',
      },
    ],
  },
};

export default nextConfig;
