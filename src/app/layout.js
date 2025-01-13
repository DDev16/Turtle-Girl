// app/layout.js
import { Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Turtle Girl Jewelry',
  description: 'Handcrafted jewelry inspired by nature',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-emerald-50 flex flex-col">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}