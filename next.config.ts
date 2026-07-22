import type { NextConfig } from 'next';
import {
  DEVICE_SIZES,
  IMAGE_QUALITIES,
  IMAGE_SIZES,
} from './src/shared/config/image';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    loader: 'custom',
    loaderFile: './src/shared/lib/image-loader.ts',
    deviceSizes: [...DEVICE_SIZES],
    imageSizes: [...IMAGE_SIZES],
    qualities: [...IMAGE_QUALITIES],
  },
};

export default nextConfig;
