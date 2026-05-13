import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+34 900 000 000'
  const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@reformapro.es'
  const address = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Calle Mayor 1, Madrid'

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center" aria-hidden="true">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="font-bold text-lg">Reforma<span className="text-accent">Pro</span></span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empresa de reformas integrales con más de 15 años de experiencia transformando hogares y negocios en toda España.
            </p>
          </div>

          {/* Servicios */}
          <nav aria-label="Servicios">
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                ['Reformas Integrales', '/servicios/reformas-integrales'],
                ['Piscinas', '/servicios/piscinas'],
                ['Jardinería', '/servicios/jardineria'],
                ['Fontanería', '/servicios/fontaneria'],
                ['Albañilería', '/servicios/albanileria'],
                ['Electricidad', '/servicios/electricidad'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Zonas */}
          <nav aria-label="Zonas del hogar">
            <h3 className="font-semibold text-lg mb-4">Zonas del Hogar</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                ['Cocina', '/reformas/cocina'],
                ['Baño', '/reformas/bano'],
                ['Salón', '/reformas/salon'],
                ['Habitación', '/reformas/habitacion'],
                ['Terraza', '/reformas/terraza'],
                ['Sótano', '/reformas/sotano'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <address className="not-italic space-y-3 text-sm text-gray-300">
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {address}
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">
                  {phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${email}`} className="hover:text-accent transition-colors">
                  {email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-600 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {currentYear} ReformaPro. Todos los derechos reservados.</p>
          <nav aria-label="Legal">
            <ul className="flex gap-4">
              <li>
                <Link href="/privacidad" className="hover:text-white transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/aviso-legal" className="hover:text-white transition-colors">
                  Aviso legal
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
