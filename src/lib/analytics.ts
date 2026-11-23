declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

const MEASUREMENT_ID = /^G-[A-Z0-9]{4,20}$/

/** ID de medicion valido de la variable de entorno (la escribe Simvix Brain en Railway) o null. */
export function gaMeasurementId(
  env: Record<string, string | undefined> = process.env
): string | null {
  const raw = (env.NEXT_PUBLIC_GA_MEASUREMENT_ID || env.GA_MEASUREMENT_ID || '').trim().toUpperCase()
  // el de ejemplo de .env.example (G-XXXXXXXXXX) no mide nada: es como no tener ID
  return MEASUREMENT_ID.test(raw) && !/^G-X+$/.test(raw) ? raw : null
}

/** gtag solo existe si la persona acepto el aviso; sin el, los eventos no hacen nada. */
function gtagListo(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

export function event(
  action: string,
  params?: {
    event_category?: string
    event_label?: string
    value?: number
    [key: string]: unknown
  }
): void {
  if (!gtagListo()) return
  window.gtag('event', action, params)
}

export const gaEvents = {
  contactFormSubmitted: (service?: string) =>
    event('contact_form_submitted', {
      event_category: 'CRM',
      event_label: service || 'general',
    }),
  ctaClicked: (label: string, location: string) =>
    event('cta_clicked', {
      event_category: 'Engagement',
      event_label: label,
      location,
    }),
  sectionViewed: (sectionName: string) =>
    event('section_viewed', {
      event_category: 'Engagement',
      event_label: sectionName,
    }),
}
