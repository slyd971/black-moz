import type { MetadataRoute } from 'next';
import { sherinArtist } from '@/data/artists/sherin';
import { buildArtistSitemapEntries } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return buildArtistSitemapEntries(sherinArtist);
}
