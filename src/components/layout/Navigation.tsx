'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  {
    href: '/servicios/reformas-integrales',
    label: 'Servicios',
    children: [
      { href: '/servicios/reformas-integrales', label: 'Reformas Integrales' },
      { href: '/servicios/piscinas', label: 'Piscinas' },
      { href: '/servicios/jardineria', label: 'Jardinería' },
      { href: '/servicios/fontaneria', label: 'Fontanería' },
      { href: '/servicios/albanileria', label: 'Albañilería' },
      { href: '/servicios/electricidad', label: 'Electricidad' },
    ],
  },
  {
    href: '/reformas/cocina',
    label: 'Zonas del Hogar',
    children: [
      { href: '/reformas/cocina', label: 'Cocina' },
      { href: '/reformas/bano', label: 'Baño' },
      { href: '/reformas/salon', label: 'Salón' },
      { href: '/reformas/habitacion', label: 'Habitación' },
      { href: '/reformas/terraza', label: 'Terraza' },
      { href: '/reformas/sotano', label: 'Sótano' },
    ],
  },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <nav aria-label="Navegación principal">
      {/* Desktop */}
      <ul className="hidden md:flex items-center gap-1" role="list">
        {NAV_LINKS.map((link) => (
          <li key={link.href} className="relative group">
            {link.children ? (
              <>
                <button
                  aria-haspopup="true"
                  aria-expanded={openDropdown === link.href}
                  onClick={() =>
                    setOpenDropdown(openDropdown === link.href ? null : link.href)
                  }
                  className="px-4 py-2 text-gray-700 hover:text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-1"
                >
                  {link.label}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul
                  role="menu"
                  className="absolute top-full left-0 mt-1 w-52 bg-white shadow-xl rounded-xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                >
                  {link.children.map((child) => (
                    <li key={child.href} role="none">
                      <Link
                        role="menuitem"
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className="px-4 py-2 text-gray-700 hover:text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors block"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden p-2 text-gray-700"
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
        aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 md:hidden"
        >
          <ul className="py-4 px-4 space-y-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {link.children ? (
                  <details>
                    <summary className="px-4 py-2 text-gray-700 font-medium cursor-pointer list-none flex items-center justify-between">
                      {link.label}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <ul className="pl-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    className="block px-4 py-2 text-gray-700 font-medium hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
