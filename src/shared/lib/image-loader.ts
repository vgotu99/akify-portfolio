import type { ImageLoaderProps } from 'next/image';

const IMAGE_PROXY_URL = process.env.NEXT_PUBLIC_IMAGE_PROXY_URL ?? '';
const IMAGE_STORAGE_URLS = [
  process.env.NEXT_PUBLIC_IMAGE_STORAGE_URL ?? '',
  process.env.NEXT_PUBLIC_ASSETS_IMAGE_STORAGE_URL ?? '',
  process.env.NEXT_PUBLIC_DEV_IMAGE_STORAGE_URL ?? '',
].filter(Boolean);

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  const matchedUrl = IMAGE_STORAGE_URLS.find((url) => src.includes(url));
  const proxiedUrl = matchedUrl
    ? src.replace(matchedUrl, IMAGE_PROXY_URL)
    : src;
  const separator = proxiedUrl.includes('?') ? '&' : '?';

  return `${proxiedUrl}${separator}tr=w-${width},q-${quality || 75},f-avif`;
}
