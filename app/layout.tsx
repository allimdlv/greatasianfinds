import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AnnouncementBar } from '@/components/shared/AnnouncementBar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Great Asian Finds — Furniture with heritage. Spaces with story.',
    template: '%s | Great Asian Finds',
  },
  description:
    'A premium curated showroom of Asian furniture, decor, and statement home pieces sourced from Thailand, China, Korea, Indonesia, Vietnam, and the Philippines.',
  keywords: [
    'Asian furniture Philippines',
    'curated home decor',
    'teak furniture',
    'porcelain lamp',
    'rattan daybed',
    'capiz chandelier',
    'heritage pieces',
    'artisan home',
  ],
  openGraph: {
    title: 'Great Asian Finds',
    description: 'Furniture with heritage. Spaces with story.',
    locale: 'en_PH',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${dmSerif.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
