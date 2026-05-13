import Link from 'next/link'
import Image from 'next/image'
import type { ServiceData } from '@/types'

interface Props {
  service: ServiceData
}

export default function ServiceCard({ service }: Props) {
  return (
    <article className="card group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} - ReformaPro`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        <span className="absolute bottom-3 left-3 text-3xl" aria-hidden="true">
          {service.icon}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
        <Link
          href={`/servicios/${service.slug}`}
          className="text-accent font-semibold text-sm hover:text-accent-700 flex items-center gap-1 group/link"
          aria-label={`Ver más sobre ${service.title}`}
        >
          Ver más
          <span aria-hidden="true" className="group-hover/link:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>
    </article>
  )
}
