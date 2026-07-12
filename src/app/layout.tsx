import type { Metadata, Viewport } from 'next';
import './globals.css';
import { blackmozArtist } from '@/data/artists/blackmoz';

const hostname = blackmozArtist.domain ?? blackmozArtist.vercelSubdomain;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${hostname}`),
  title: {
    default: blackmozArtist.seo.title,
    template: '%s',
  },
  description: blackmozArtist.seo.description,
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
