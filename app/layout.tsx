import './globals.css';
import type { Metadata } from 'next';
import { Inter, Creepster, Oswald } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const creepster = Creepster({ 
  subsets: ['latin'], 
  weight: '400',
  variable: '--font-creepster' 
});
const oswald = Oswald({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-oswald' 
});

export const metadata: Metadata = {
  title: 'Dream Inks Tattoo Studio - Your Skin, Our Canvas',
  description: 'Masterful Artistry. Unique Designs. Tattoos that Last. Professional tattoo studio with expert artists.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${creepster.variable} ${oswald.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}