import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

import { Footer } from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({
  variable: '--font-spaceGrotesk',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dmystified.tech/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  title: 'Tech Courses & Open Source Exploration with Experts - Dmystified',

  description:
    'Join Dmystified for live tech courses, open-source exposure, and professional guidance. Learn programming from industry experts in live classes. Empower your tech career with hands-on experience and practical skills.',
  twitter: {
    card: 'summary_large_image',
  },
  verification: {
    google: 'ikm_TGlrqUSyjmjmNUTMShS5NZQEj-SQjDhU36Wq_es',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
