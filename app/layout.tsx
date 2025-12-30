import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import SmoothScroll from '../components/ui/SmoothScroll';
import Spotlight from '../components/ui/Spotlight';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sarthak Bhadiyadra | Portfolio',
  description: 'Creative Developer & UI/UX Designer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} bg-background text-foreground overflow-x-hidden antialiased selection:bg-primary selection:text-white`}>
        {/* <SmoothScroll> */}
          <Spotlight />
          {children}
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}
