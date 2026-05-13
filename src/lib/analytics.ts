declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export function pageview(url: string): void {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return
  window.gtag('config', GA_MEASUREMENT_ID, { page_path: url })
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
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return
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
  cookieConsentAccepted: () =>
    event('cookie_consent_accepted', { event_category: 'GDPR' }),
  cookieConsentRejected: () =>
    event('cookie_consent_rejected', { event_category: 'GDPR' }),
}
