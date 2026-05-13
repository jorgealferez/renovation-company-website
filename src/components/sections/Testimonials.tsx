const TESTIMONIALS = [
  {
    id: 1,
    name: 'María González',
    location: 'Madrid',
    rating: 5,
    text: 'Reformaron nuestra cocina y el baño en tiempo récord. El equipo fue muy profesional, limpio y puntual. El resultado es espectacular. 100% recomendables.',
    service: 'Reforma integral cocina y baño',
  },
  {
    id: 2,
    name: 'Carlos Martínez',
    location: 'Barcelona',
    rating: 5,
    text: 'Construyeron nuestra piscina el verano pasado y quedamos encantados. Cumplieron plazos y presupuesto al centavo. El sistema de iluminación LED es precioso.',
    service: 'Construcción de piscina',
  },
  {
    id: 3,
    name: 'Ana López',
    location: 'Valencia',
    rating: 5,
    text: 'Hicieron una reforma integral de nuestro local comercial. Trabajo impecable, atención al detalle y siempre disponibles para resolver cualquier duda.',
    service: 'Reforma local comercial',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div aria-label={`Puntuación: ${rating} de 5 estrellas`} className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="testimonials-title" className="section-title">
            Lo que dicen nuestros clientes
          </h2>
          <p className="section-subtitle mx-auto">
            Más de 500 familias y negocios ya han confiado en nosotros
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <StarRating rating={t.rating} />
              <blockquote className="mt-4 text-gray-700 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <footer className="mt-6 flex items-center gap-3">
                <div
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  aria-hidden="true"
                >
                  {t.name[0]}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-primary">{t.name}</cite>
                  <p className="text-sm text-gray-500">{t.location} · {t.service}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
