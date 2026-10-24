import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

// Self-hosted at build time by next/font; the stylesheets reference these
// variables wherever they previously named the families directly.
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-dm-serif', display: 'swap' })

export const metadata: Metadata = {
  title: 'Yap & Render — Language, without limits',
  description: 'Yap & Render translates spoken language into Indian Sign Language, making more conversations possible.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f1e9',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
