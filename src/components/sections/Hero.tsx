import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      aria-label="Presentación principal"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-accent font-semibold text-lg mb-3 tracking-wide uppercase">
            Empresa de reformas
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transformamos tu hogar con{' '}
            <span className="text-accent">garantía y calidad</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Más de 15 años reformando hogares y negocios en toda España. Presupuesto gratuito, plazos garantizados y acabados de primera calidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="btn-primary text-center text-lg px-8 py-4"
              aria-label="Solicitar presupuesto gratuito"
            >
              Presupuesto gratuito
            </Link>
            <Link
              href="/servicios/reformas-integrales"
              className="btn-secondary text-center text-lg px-8 py-4"
            >
              Ver servicios
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-12">
            {[
              { label: '+500 obras completadas', icon: '🏆' },
              { label: 'Garantía 2 años', icon: '🛡️' },
              { label: 'Presupuesto en 24h', icon: '⚡' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-white">
                <span className="text-2xl" aria-hidden="true">{badge.icon}</span>
                <span className="font-medium text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
