import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ZONES, getZoneBySlug } from '@/lib/content'
import ContactForm from '@/components/ui/ContactForm'
import { COMPANY_NAME, SITE_URL } from '@/lib/company'

interface Props {
  params: { zona: string }
}

export async function generateStaticParams() {
  return ZONES.map((z) => ({ zona: z.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const zone = getZoneBySlug(params.zona)
  if (!zone) return { title: 'Zona no encontrada' }

  return {
    title: `${zone.title} – ${COMPANY_NAME}`,
    description: zone.description,
    openGraph: {
      title: `${zone.title} – ${COMPANY_NAME}`,
      description: zone.description,
      images: [{ url: zone.image, alt: zone.title }],
    },
  }
}

export default function ZonaPage({ params }: Props) {
  const zone = getZoneBySlug(params.zona)
  if (!zone) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: zone.title,
    description: zone.longDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    image: zone.image,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" aria-label={`Reforma de ${zone.title}`}>
        <div className="absolute inset-0">
          <Image
            src={zone.image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-gray-300 text-sm" role="list">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/reformas/cocina" className="hover:text-white">Zonas del hogar</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">{zone.title}</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{zone.title}</h1>
          <p className="text-xl text-gray-200 max-w-2xl">{zone.description}</p>
        </div>
      </section>

      {/* Content */}
      <section aria-labelledby="zone-content-title" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 id="zone-content-title" className="text-2xl font-bold text-primary mb-4">
                ¿Qué incluye la reforma?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">{zone.longDescription}</p>

              <h3 className="text-xl font-bold text-primary mb-4">Lo que hacemos por ti</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {zone.features.map((feature) => (
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
                  Presupuesto para tu {zone.title.toLowerCase()}
                </h2>
                <p className="text-gray-500 text-sm mb-6">Sin compromiso. Respuesta en 24h.</p>
                <ContactForm defaultZone={params.zona} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Other zones */}
      <section aria-labelledby="other-zones-title" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="other-zones-title" className="text-xl font-bold text-primary mb-6">
            Otras zonas del hogar
          </h2>
          <div className="flex flex-wrap gap-3">
            {ZONES.filter((z) => z.slug !== params.zona).map((z) => (
              <Link
                key={z.slug}
                href={`/reformas/${z.slug}`}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-accent hover:text-accent transition-colors"
              >
                {z.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
