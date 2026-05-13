import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/ui/ContactForm'
import { COMPANY_NAME } from '@/lib/company'

export const metadata: Metadata = {
  title: `Sobre Nosotros – ${COMPANY_NAME}`,
  description: `Conoce a ${COMPANY_NAME}: más de 15 años reformando hogares con profesionalidad, honestidad y calidad. Conoce nuestro equipo y filosofía de trabajo.`,
}

const VALUES = [
  {
    icon: '🎯',
    title: 'Calidad garantizada',
    description: 'Todos nuestros trabajos incluyen garantía de 2 años. Usamos materiales de primeras marcas y técnicos certificados.',
  },
  {
    icon: '🤝',
    title: 'Honestidad total',
    description: 'Presupuesto cerrado sin sorpresas. Lo que acordamos es lo que cobras. Sin costes ocultos.',
  },
  {
    icon: '⏱️',
    title: 'Cumplimiento de plazos',
    description: 'Respetamos los plazos acordados. Si hay algún retraso por causas mayores, te avisamos con antelación.',
  },
  {
    icon: '🧹',
    title: 'Limpieza y orden',
    description: 'Dejamos tu hogar impecable al finalizar. Protegemos muebles y zonas no afectadas durante toda la obra.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-primary" aria-label={`Sobre ${COMPANY_NAME}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Más de 15 años transformando hogares
            </h1>
            <p className="text-xl text-gray-200">
              Somos una empresa familiar con sede en Madrid, especializada en reformas integrales y servicios de construcción. Nuestro compromiso: calidad, honestidad y plazos cumplidos.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section aria-labelledby="historia-title" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="historia-title" className="section-title mb-6">
                Nuestra historia
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {COMPANY_NAME} nació en 2009 de la mano de dos maestros de obra con la visión de crear una empresa de reformas diferente: una donde el cliente sea siempre lo primero y la calidad no sea negociable.
                </p>
                <p>
                  Empezamos con un pequeño equipo de 5 personas y hoy somos más de 40 profesionales especializados en distintos gremios: albañilería, fontanería, electricidad, carpintería y diseño de interiores.
                </p>
                <p>
                  Hemos completado más de 500 proyectos, desde pequeñas reformas de baños hasta rehabilitaciones integrales de edificios completos. Cada proyecto, independientemente de su tamaño, recibe la misma dedicación y cuidado.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt={`Equipo de ${COMPANY_NAME} trabajando en una reforma`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="valores-title" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="valores-title" className="section-title">
              Nuestros valores
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value) => (
              <article key={value.title} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-4" aria-hidden="true">{value.icon}</div>
                <h3 className="font-bold text-primary text-lg mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-nosotros-title" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="contact-nosotros-title" className="section-title">
              ¿Hablamos de tu proyecto?
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
