import './globals.css';
import { Inter } from 'next/font/google';
import GlobalNav from '../components/navigation/GlobalNav';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}