import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieConsent from '@/components/ui/CookieConsent'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformapro.es'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ReformaPro – Empresa de Reformas Integrales',
    template: '%s | ReformaPro',
  },
  description:
    'Empresa de reformas integrales con más de 15 años de experiencia. Cocinas, baños, piscinas, jardinería y más. Presupuesto gratuito en 24h.',
  keywords: ['reformas', 'reformas integrales', 'reformas Madrid', 'empresa reformas', 'presupuesto reforma'],
  authors: [{ name: 'ReformaPro' }],
  creator: 'ReformaPro',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    siteName: 'ReformaPro',
    title: 'ReformaPro – Empresa de Reformas Integrales',
    description: 'Empresa de reformas integrales con más de 15 años de experiencia.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ReformaPro – Reformas de calidad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReformaPro – Empresa de Reformas Integrales',
    description: 'Empresa de reformas integrales con más de 15 años de experiencia.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <GoogleAnalytics />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
