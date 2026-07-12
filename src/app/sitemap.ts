import type { MetadataRoute } from 'next';
import { blackmozArtist } from '@/data/artists/blackmoz';
import { buildArtistSitemapEntries } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return buildArtistSitemapEntries(blackmozArtist);
}
