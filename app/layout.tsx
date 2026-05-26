import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AMPO Realty | Luxury Real Estate Philippines',
  description: 'AMPO Realty is a luxury property ecosystem with AI search, premium market insights, and enterprise-grade agent tools.',
  metadataBase: new URL('https://www.amporealty.ph'),
  openGraph: {
    title: 'AMPO Realty | Luxury Real Estate Philippines',
    description: 'Discover premium estates, AI-powered search, investment tools, and elite agent experiences.',
    type: 'website',
    url: 'https://www.amporealty.ph',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
        width: 1600,
        height: 900,
        alt: 'AMPO Realty luxury estate'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMPO Realty | Luxury Real Estate Philippines',
    description: 'Elite property marketplace with AI search, investment analysis, and immersive storytelling.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
