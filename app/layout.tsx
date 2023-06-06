import { Montserrat } from 'next/font/google';
import '../styles/globals.css';

/**
 * @description
 * This is the root layout for the entire application.
 * @see
 * https://nextjs.org/docs/advanced-features/custom-document
 *
 */

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'SNXTL Template',
  description: 'Next.js template with Tailwind CSS, TypeScript and Sanity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
