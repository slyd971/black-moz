export type ArtistSearchParams = Promise<Record<string, string | string[] | undefined>>;

export async function getRequestedArtistSlug(
  searchParams?: ArtistSearchParams,
  fallback = 'martina'
) {
  const params = searchParams ? await searchParams : {};
  const raw = params.client ?? params.artist ?? params.slug;
  const value = Array.isArray(raw) ? raw[0] : raw;
  return value?.trim() || fallback;
}
