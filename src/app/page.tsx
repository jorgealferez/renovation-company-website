import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import ContactForm from '@/components/ui/ContactForm'
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS, SITE_URL } from '@/lib/company'

export const metadata: Metadata = {
  title: `${COMPANY_NAME} – Empresa de Reformas Integrales en España`,
  description:
    'Reformas integrales, cocinas, baños, piscinas y jardinería. Más de 15 años de experiencia. Presupuesto gratuito sin compromiso en menos de 24h.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: COMPANY_NAME,
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  telephone: COMPANY_PHONE,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_ADDRESS,
    addressLocality: 'Madrid',
    postalCode: '28013',
    addressCountry: 'ES',
  },
  email: COMPANY_EMAIL,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  sameAs: [],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <Stats />
      <Testimonials />

      {/* Contact section */}
      <section aria-labelledby="contact-section-title" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="contact-section-title" className="section-title">
              Solicita tu presupuesto gratuito
            </h2>
            <p className="section-subtitle mx-auto">
              Cuéntanos tu proyecto y te responderemos en menos de 24 horas
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
