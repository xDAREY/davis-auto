import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { NavigationProvider } from './providers'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Davis House of Automotive | Luxury Vehicle Brokerage',
  description: 'Discover curated luxury and high-performance vehicles. Premium automotive brokerage specializing in rare finds and exceptional quality.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/davisicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  keywords: ['luxury cars', 'automotive brokerage', 'rare vehicles', 'high performance'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F5EE' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        <NavigationProvider>
          {children}
        </NavigationProvider>
        <Analytics />
      </body>
    </html>
  )
}
