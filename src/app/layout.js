import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/transitionProvider';
//import type { AppProps } from 'next/app'
import AppThemeProvider from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lahiru_D',
  description: 'The best animated portfolio page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
  {/* Theme (dark/light) provider */}
  <AppThemeProvider>
          <TransitionProvider>{children}</TransitionProvider>
  </AppThemeProvider>
      </body>
    </html>
  );
}
