import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/search', '/install'],
    },
    sitemap: 'https://web.akify.io/sitemap.xml',
    host: 'https://web.akify.io',
  };
}
