import type { Metadata, Viewport } from 'next';
import './globals.css';
import { sherinArtist } from '@/data/artists/sherin';

const hostname = sherinArtist.domain ?? sherinArtist.vercelSubdomain;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${hostname}`),
  title: {
    default: sherinArtist.seo.title,
    template: '%s',
  },
  description: sherinArtist.seo.description,
};

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
