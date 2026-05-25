import type { MetadataRoute } from 'next';
import { sherinArtist } from '@/data/artists/sherin';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = sherinArtist.domain ?? sherinArtist.vercelSubdomain;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://${host}/sitemap.xml`,
    host,
  };
}
