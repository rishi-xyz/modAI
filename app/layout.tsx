import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/src/components/ui/sonner';
import { Web3Provider } from '@/src/components/globals/providers';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'ModAI',
  description: 'An Agentic Chat web app based on monad',
  icons: '/monad.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} antialiased`}
        suppressHydrationWarning
      >
        <Toaster position={'top-right'} />
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
