import type { Metadata } from 'next'
import ContactForm from '@/components/ui/ContactForm'
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS, SITE_URL } from '@/lib/company'

export const metadata: Metadata = {
  title: `Contacto – ${COMPANY_NAME}`,
  description: `Contacta con ${COMPANY_NAME} para solicitar un presupuesto gratuito sin compromiso. Respondemos en menos de 24 horas.`,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contacto ${COMPANY_NAME}`,
  url: `${SITE_URL}/contacto`,
}

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-primary py-16" aria-label="Encabezado contacto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Contacta con nosotros</h1>
          <p className="text-xl text-gray-200">
            Cuéntanos tu proyecto. Presupuesto gratuito en menos de 24 horas.
          </p>
        </div>
      </section>

      <section aria-labelledby="contact-main-title" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 id="contact-main-title" className="text-2xl font-bold text-primary mb-6">
                Solicita tu presupuesto gratuito
              </h2>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <ContactForm />
              </div>
            </div>

            {/* Info */}
            <aside aria-label="Información de contacto">
              <h2 className="text-2xl font-bold text-primary mb-6">Información de contacto</h2>
              <div className="space-y-6">
                <article className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Teléfono</h3>
                    <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="text-accent hover:underline">
                      {COMPANY_PHONE}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Lun–Vie 8:00–19:00, Sáb 9:00–14:00</p>
                  </div>
                </article>

                <article className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href={`mailto:${COMPANY_EMAIL}`} className="text-accent hover:underline">
                      {COMPANY_EMAIL}
                    </a>
                  </div>
                </article>

                <article className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Dirección</h3>
                    <address className="not-italic text-gray-600">{COMPANY_ADDRESS}</address>
                  </div>
                </article>
              </div>

              {/* Guarantee box */}
              <div className="mt-8 bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h3 className="font-bold text-primary mb-3">¿Por qué elegirnos?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    'Presupuesto detallado sin costes ocultos',
                    'Equipo propio (sin subcontratas desconocidas)',
                    'Garantía de 2 años en todos los trabajos',
                    'Limpieza y recogida de escombros incluida',
                    'Seguimiento diario de la obra',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5" aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
