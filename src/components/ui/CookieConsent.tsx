'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { gaEvents } from '@/lib/analytics'

const CONSENT_KEY = 'reformapro_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      // Show after a short delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    gaEvents.cookieConsentAccepted()
    setVisible(false)
  }

  function handleReject() {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    gaEvents.cookieConsentRejected()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 md:p-6 shadow-2xl"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <h2 id="cookie-title" className="font-semibold text-lg mb-1">
            Usamos cookies
          </h2>
          <p id="cookie-desc" className="text-gray-300 text-sm">
            Utilizamos cookies propias y de terceros (Google Analytics) para analizar el tráfico y
            mejorar nuestra web. Puedes aceptar todas las cookies o rechazar las no esenciales.{' '}
            <Link href="/privacidad" className="text-accent underline hover:text-accent-300">
              Política de privacidad
            </Link>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 border border-gray-500 text-gray-300 rounded-lg hover:border-white hover:text-white transition-colors text-sm"
          >
            Solo esenciales
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-600 transition-colors text-sm font-semibold"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  )
}
