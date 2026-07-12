import type { MetadataRoute } from 'next';
import { blackmozArtist } from '@/data/artists/blackmoz';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = blackmozArtist.domain ?? blackmozArtist.vercelSubdomain;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://${host}/sitemap.xml`,
    host,
  };
}
