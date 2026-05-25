export type ArtistCategory = 'Singer' | 'DJ' | 'Producer' | 'Live Performer';

export type ArtistMediaAsset = {
  src: string;
  alt: string;
};

export type ArtistGalleryImage = ArtistMediaAsset & {
  caption: string;
};

export type ArtistSocialLink = {
  platform: 'Instagram' | 'Threads' | 'TikTok' | 'YouTube' | 'Spotify' | 'LinkedIn';
  handle: string;
  url: string;
};

export type ArtistStreamingLink = {
  platform:
    | 'Spotify'
    | 'Apple Music'
    | 'iTunes'
    | 'Deezer'
    | 'YouTube Music'
    | 'SoundCloud'
    | 'Amazon Music'
    | 'iHeartRadio';
  url: string;
  label: string;
  embedUrl?: string;
};

export type ArtistContactPoint = {
  name: string;
  email: string;
  phone?: string;
  role: string;
};

export type ArtistHighlight = {
  label: string;
  value: string;
  detail: string;
};

export type ArtistPressQuote = {
  source: string;
  quote: string;
  kind: string;
};

export type ArtistPressRelease = {
  eyebrow: string;
  title: string;
  locationDate: string;
  intro: string;
  body: string[];
  quote: string;
  footer: string;
};

export type ArtistVideo = {
  title: string;
  note: string;
  embedId?: string;
  cover: string;
};

export type ArtistSeo = {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogImageAlt?: string;
  pages?: {
    gallery?: { title: string; description: string };
    listen?: { title: string; description: string };
  };
};

export type ArtistDomainConfig = {
  domain: string | null;
  vercelSubdomain: string;
};

export type Artist = ArtistDomainConfig & {
  slug: string;
  name: string;
  stageName: string;
  tagline: string;
  city: string;
  country: string;
  category: ArtistCategory;
  genre: string;
  description: string;
  shortBio: string;
  longBio: string;
  bioQuote?: string;
  heroImage: ArtistMediaAsset;
  gallery: ArtistGalleryImage[];
  socials: ArtistSocialLink[];
  streamingLinks: ArtistStreamingLink[];
  bookingEmail: string;
  managementContact: ArtistContactPoint | null;
  pressContact: ArtistContactPoint | null;
  highlights: ArtistHighlight[];
  pressQuotes: ArtistPressQuote[];
  pressRelease?: ArtistPressRelease;
  videos: ArtistVideo[];
  seo: ArtistSeo;
};
