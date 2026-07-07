import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    loader: 'custom',
    loaderFile: './src/shared/lib/image-loader.ts',
    deviceSizes: [390, 432, 524, 782, 860, 982, 1048, 1564, 1964],
    imageSizes: [48, 96, 144, 216],
    qualities: [25, 50, 75],
  },
};

export default nextConfig;
