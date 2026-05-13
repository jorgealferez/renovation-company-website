const STATS = [
  { value: '+500', label: 'Obras completadas', description: 'Proyectos entregados satisfactoriamente' },
  { value: '15+', label: 'Años de experiencia', description: 'Transformando hogares y negocios' },
  { value: '98%', label: 'Clientes satisfechos', description: 'Según encuestas post-obra' },
  { value: '24h', label: 'Respuesta de presupuesto', description: 'Te respondemos en menos de un día' },
]

export default function Stats() {
  return (
    <section aria-labelledby="stats-title" className="py-16 bg-primary">
      <h2 id="stats-title" className="sr-only">Nuestros números</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <p className="text-4xl lg:text-5xl font-bold text-accent mb-2" aria-label={stat.value}>
                  {stat.value}
                </p>
                <p className="text-white font-semibold text-lg">{stat.label}</p>
                <p className="text-gray-300 text-sm mt-1">{stat.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
