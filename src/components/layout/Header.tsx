import Link from 'next/link'
import Navigation from './Navigation'
import { COMPANY_NAME, COMPANY_PHONE } from '@/lib/company'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label={`${COMPANY_NAME} – Inicio`}>
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center" aria-hidden="true">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="font-bold text-xl text-primary">
              {COMPANY_NAME}
            </span>
          </Link>

          {/* Nav */}
          <Navigation />

          {/* CTA */}
          <a
            href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`}
            className="hidden lg:flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-600 transition-colors text-sm"
            aria-label={`Llamar a ${COMPANY_PHONE}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {COMPANY_PHONE}
          </a>
        </div>
      </div>
    </header>
  )
}
