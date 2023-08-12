import { SiteSettings } from '@/models/siteSettings';
import { groq } from 'next-sanity';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { sanityClient } from './lib/sanity';

const getSiteSettings = async () => {
  const query = groq`*[_type == "siteSettings"]`;
  const data = await sanityClient.fetch(query);

  return data[0];
};

/**
 * @description
 * This is the root layout for the entire application.
 * @see
 * https://nextjs.org/docs/advanced-features/custom-document
 *
 */
const montserrat = Montserrat({ subsets: ['latin'] });

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const metadata: SiteSettings = await getSiteSettings();

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <title>{metadata.siteTitle}</title>
        <meta name='description' content={metadata.seo.metaDesc ?? ''} />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
