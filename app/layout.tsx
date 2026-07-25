import type {Metadata} from 'next';
import { Inter, Oswald, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Jacobo Hernandez | Elite Tennis Coaching',
  description: 'Elite high-performance tennis coaching focused on technical mastery, tactical intelligence, mental resilience, and complete player development.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#050B14] text-white selection:bg-[#E1FF00] selection:text-black line-height-relaxed overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
