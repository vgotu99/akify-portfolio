import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    loader: 'custom',
    loaderFile: './src/shared/lib/image-loader.ts',
    deviceSizes: [360, 375, 390, 432, 524, 640, 720, 750, 782, 860, 982],
    imageSizes: [48, 64, 96, 128, 144, 192, 216, 256, 320, 384],
    qualities: [25, 35, 50, 75],
  },
};

export default nextConfig;
