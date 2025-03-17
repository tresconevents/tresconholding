import './globals.css';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Anek_Devanagari, Manrope } from 'next/font/google';

const anekDevanagari = Anek_Devanagari({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'Trescon Holdings',
  description: "Building Tomorrow's Business Ecosystem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@400;500;700&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>

      {/* <body className={`${inter.className} ${manrope.variable} overflow-x-hidden`}> */}
      <body className={`${manrope.className} overflow-x-hidden`}>

        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}