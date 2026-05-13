import Link from 'next/link'

export default function CTA() {
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+34 900 000 000'

  return (
    <section
      aria-labelledby="cta-title"
      className="py-20 bg-gradient-to-br from-primary to-primary-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Pídenos un presupuesto gratuito y sin compromiso. Te respondemos en menos de 24 horas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="btn-primary text-lg px-8 py-4"
            aria-label="Solicitar presupuesto gratuito"
          >
            Solicitar presupuesto
          </Link>
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="btn-secondary text-lg px-8 py-4"
            aria-label={`Llamar ahora al ${phone}`}
          >
            Llamar ahora: {phone}
          </a>
        </div>
      </div>
    </section>
  )
}
