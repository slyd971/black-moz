import type { Metadata } from 'next';
import { ArtistGalleryPage } from '@/components/press-kit';
import { martinaArtist } from '@/data/artists/martina';
import { buildArtistMetadata } from '@/lib/seo';
import { resolveArtist } from '@/lib/airtable';
import { getRequestedArtistSlug, type ArtistSearchParams } from '@/lib/requested-artist';

type PageProps = {
  searchParams?: ArtistSearchParams;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const artist = await resolveArtist(await getRequestedArtistSlug(searchParams, martinaArtist.slug));
  return buildArtistMetadata(artist, '/gallery');
}

export default async function GalleryPage({ searchParams }: PageProps) {
  const artist = await resolveArtist(await getRequestedArtistSlug(searchParams, martinaArtist.slug));
  return <ArtistGalleryPage artist={artist} />;
}
