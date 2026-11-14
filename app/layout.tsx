import type { Metadata } from 'next';
import { Fraunces, Instrument_Sans } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { site } from '@/lib/content';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/photo.png',
        width: 298,
        height: 296,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: site.title,
    description: site.description,
    creator: '@iztef',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: site.email,
  image: `${site.url}/photo.png`,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://twitter.com/iztef',
    'https://github.com/msfern',
    'https://codepen.io/msfern',
    'https://www.linkedin.com/in/stephanie-fernandes-30365233/',
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body
      className={`${fraunces.variable} ${instrumentSans.variable} border-l-4 border-vermillion antialiased sm:border-l-8`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-vermillion focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </body>
  </html>
);

export default RootLayout;
