import type { Metadata } from 'next';
import { ArtistListenPage } from '@/components/press-kit';
import { blackmozArtist } from '@/data/artists/blackmoz';
import { buildArtistMetadata } from '@/lib/seo';
import { resolveArtist } from '@/lib/airtable';
import { getRequestedArtistSlug, type ArtistSearchParams } from '@/lib/requested-artist';

type PageProps = {
  searchParams?: ArtistSearchParams;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const artist = await resolveArtist(await getRequestedArtistSlug(searchParams, blackmozArtist.slug));
  return buildArtistMetadata(artist, '/listen');
}

export default async function ListenPage({ searchParams }: PageProps) {
  const artist = await resolveArtist(await getRequestedArtistSlug(searchParams, blackmozArtist.slug));
  return <ArtistListenPage artist={artist} />;
}
