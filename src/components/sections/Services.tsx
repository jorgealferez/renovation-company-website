import { SERVICES } from '@/lib/content'
import ServiceCard from '@/components/ui/ServiceCard'

export default function Services() {
  return (
    <section aria-labelledby="services-title" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="services-title" className="section-title">
            Nuestros servicios
          </h2>
          <p className="section-subtitle mx-auto">
            Cubrimos todos los aspectos de la reforma y construcción. Un solo proveedor para todos tus proyectos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
