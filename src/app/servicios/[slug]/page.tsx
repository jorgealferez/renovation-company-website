import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { SERVICES, getServiceBySlug } from '@/lib/content'
import ContactForm from '@/components/ui/ContactForm'
import { COMPANY_NAME, SITE_URL } from '@/lib/company'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return { title: 'Servicio no encontrado' }

  return {
    title: `${service.title} – ${COMPANY_NAME}`,
    description: service.description,
    openGraph: {
      title: `${service.title} – ${COMPANY_NAME}`,
      description: service.description,
      images: [{ url: service.image, alt: service.title }],
    },
  }
}

export default function ServicioPage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.longDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    areaServed: 'España',
    image: service.image,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" aria-label={`Servicio: ${service.title}`}>
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-gray-300 text-sm" role="list">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/servicios/reformas-integrales" className="hover:text-white">Servicios</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">{service.title}</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {service.icon} {service.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">{service.description}</p>
        </div>
      </section>

      {/* Content */}
      <section aria-labelledby="service-content-title" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 id="service-content-title" className="text-2xl font-bold text-primary mb-4">
                ¿Qué incluye este servicio?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">{service.longDescription}</p>

              <h3 className="text-xl font-bold text-primary mb-4">Características principales</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                    <span className="text-accent font-bold text-lg mt-0.5" aria-hidden="true">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form sidebar */}
            <aside>
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-primary mb-2">
                  Solicita presupuesto para {service.title}
                </h2>
                <p className="text-gray-500 text-sm mb-6">Sin compromiso. Respuesta en 24h.</p>
                <ContactForm defaultService={params.slug} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section aria-labelledby="other-services-title" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="other-services-title" className="text-xl font-bold text-primary mb-6">
            Otros servicios
          </h2>
          <div className="flex flex-wrap gap-3">
            {SERVICES.filter((s) => s.slug !== params.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-accent hover:text-accent transition-colors"
              >
                {s.icon} {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
