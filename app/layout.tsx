import '../styles/globals.css';
import '@livekit/components-styles';
import '@livekit/components-styles/prefabs';
import type { Metadata, Viewport } from 'next';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: {
    default: 'EPIQ Live | Private gatherings for EPIQ Society',
    template: '%s',
  },
  description:
    'Private video gatherings for EPIQ Society communities.',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    url: 'https://live.epiq.one',
    images: [
      {
        url: 'https://live.epiq.one/images/livekit-meet-open-graph.png',
        width: 1376,
        height: 768,
        type: 'image/png',
      },
    ],
    siteName: 'EPIQ Live',
  },
  icons: {
    icon: {
      rel: 'icon',
      url: '/favicon.ico',
    },
    apple: [
      {
        rel: 'apple-touch-icon',
        url: '/images/livekit-apple-touch.png',
        sizes: '180x180',
      },
      { rel: 'mask-icon', url: '/images/livekit-safari-pinned-tab.svg', color: '#04aaf3' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '##0c1526',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body data-lk-theme="default">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
