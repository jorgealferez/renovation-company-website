import type { ServiceData, ZoneData } from '@/types'

export const SERVICES: ServiceData[] = [
  {
    slug: 'reformas-integrales',
    title: 'Reformas Integrales',
    description: 'Transformamos por completo tu hogar o local comercial con soluciones llave en mano.',
    longDescription:
      'Nuestro servicio de reformas integrales cubre todo el proceso desde el diseño inicial hasta la entrega final. Coordinamos todos los gremios necesarios: albañilería, fontanería, electricidad, carpintería y pintura. Te garantizamos calidad, cumplimiento de plazos y transparencia total en el presupuesto.',
    features: [
      'Proyecto personalizado con planos 3D',
      'Coordinación de todos los gremios',
      'Gestión de licencias y permisos',
      'Materiales de primera calidad',
      'Garantía de 2 años en obra',
      'Limpieza final incluida',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    icon: '🏗️',
  },
  {
    slug: 'piscinas',
    title: 'Piscinas',
    description: 'Diseño y construcción de piscinas a medida: enterradas, elevadas y de hormigón.',
    longDescription:
      'Construimos la piscina de tus sueños adaptada a tu espacio y presupuesto. Desde piscinas de obra enterradas hasta pools elevadas con gresite, mosaico o liner. Incluimos sistema de filtración, iluminación LED y domótica para gestionar tu piscina desde el móvil.',
    features: [
      'Piscinas enterradas y elevadas',
      'Gresite, mosaico, liner o hormigón visto',
      'Sistemas de filtración y depuración',
      'Iluminación LED subacuática',
      'Jacuzzi y spas integrados',
      'Mantenimiento anual disponible',
    ],
    image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&q=80',
    icon: '🏊',
  },
  {
    slug: 'jardineria',
    title: 'Jardinería y Paisajismo',
    description: 'Creamos y mantenemos jardines a medida que transforman tus exteriores.',
    longDescription:
      'Diseñamos jardines funcionales y estéticamente bellos adaptados al clima de tu zona. Desde jardines mediterráneos de bajo mantenimiento hasta huertos urbanos, pérgolas con plantas trepadoras y zonas de relax exterior. También ofrecemos servicios de mantenimiento mensual.',
    features: [
      'Diseño de jardín personalizado',
      'Plantas autóctonas y de bajo consumo',
      'Sistema de riego automático',
      'Iluminación exterior solar y LED',
      'Huertos y jardines verticales',
      'Mantenimiento periódico',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    icon: '🌿',
  },
  {
    slug: 'fontaneria',
    title: 'Fontanería',
    description: 'Instalaciones y reparaciones de fontanería con materiales de alta durabilidad.',
    longDescription:
      'Realizamos todo tipo de trabajos de fontanería: desde pequeñas reparaciones de averías hasta instalaciones completas de cuartos de baño, cocinas y sistemas de calefacción. Trabajamos con tuberías de cobre, PVC y multicapa, y ofrecemos servicio de urgencias 24h.',
    features: [
      'Instalación completa de baños y cocinas',
      'Cambio de tuberías y saneamiento',
      'Termos y calentadores',
      'Calefacción por suelo radiante',
      'Detección de fugas sin obra',
      'Urgencias 24h',
    ],
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80',
    icon: '🔧',
  },
  {
    slug: 'albanileria',
    title: 'Albañilería',
    description: 'Trabajos de albañilería profesional: tabiques, solados, alicatados y más.',
    longDescription:
      'Nuestro equipo de albañiles realiza todo tipo de trabajos: construcción y derribo de tabiques, solados y alicatados, revestimientos de fachadas, impermeabilizaciones y arreglo de humedades. Usamos materiales de primera y nuestro trabajo cumple con todos los códigos técnicos de edificación.',
    features: [
      'Derribo y construcción de tabiques',
      'Solados y alicatados',
      'Enfoscados y enyesados',
      'Impermeabilización de terrazas',
      'Arreglo de humedades y filtraciones',
      'Rehabilitación de fachadas',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    icon: '🧱',
  },
  {
    slug: 'electricidad',
    title: 'Electricidad',
    description: 'Instalaciones eléctricas legalizadas, domótica y certificados de instalación.',
    longDescription:
      'Realizamos instalaciones eléctricas nuevas, ampliaciones de cuadros eléctricos, cambios de mecanismos y luminaria. Somos instaladores autorizados y emitimos el Certificado de Instalación Eléctrica (CIE) necesario para la legalización. También instalamos sistemas domóticos y puntos de recarga para vehículos eléctricos.',
    features: [
      'Instalación eléctrica completa',
      'Ampliación de cuadros eléctricos',
      'Domótica y automatización del hogar',
      'Puntos de recarga para VE',
      'Certificado de instalación eléctrica',
      'Placas solares fotovoltaicas',
    ],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80',
    icon: '⚡',
  },
]

export const ZONES: ZoneData[] = [
  {
    slug: 'cocina',
    title: 'Reforma de Cocina',
    description: 'Cocinas modernas y funcionales adaptadas a tu estilo de vida.',
    longDescription:
      'La cocina es el corazón del hogar. Diseñamos y reformamos cocinas que combinan estética y funcionalidad: desde cocinas modernas con islas hasta cocinas rústicas de madera. Incluimos instalación de electrodomésticos, encimeras de silestone, suelos y azulejos, y toda la instalación eléctrica y de fontanería.',
    features: [
      'Diseño 3D previo a la obra',
      'Encimeras de silestone, granito o madera',
      'Instalación de electrodomésticos',
      'Iluminación LED integrada',
      'Extractor potente y silencioso',
      'Muebles a medida',
    ],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
  },
  {
    slug: 'bano',
    title: 'Reforma de Baño',
    description: 'Baños de diseño con las mejores marcas y acabados de alta calidad.',
    longDescription:
      'Transformamos tu baño en un spa privado. Cambiamos platos de ducha por duchas a ras de suelo, instalamos mamparas de vidrio templado, grifería de diseño, sanitarios suspendidos y sistemas de ventilación. Todo con gestión completa de fontanería, alicatado y electricidad.',
    features: [
      'Ducha a ras de suelo con desagüe lineal',
      'Mamparas de vidrio templado',
      'Sanitarios suspendidos',
      'Suelo radiante eléctrico',
      'Doble lavabo y grifería de diseño',
      'Ventilación forzada silenciosa',
    ],
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
  },
  {
    slug: 'salon',
    title: 'Reforma de Salón',
    description: 'Salones amplios, luminosos y con diseño contemporáneo.',
    longDescription:
      'Reformamos salones para hacerlos más grandes visualmente y funcionales. Derribamos tabiques para crear espacios abiertos, instalamos suelos de madera o porcelánico, falsos techos con iluminación empotrada y carpintería a medida. Coordinamos pintura, electricidad y climatización.',
    features: [
      'Apertura de espacios mediante derribo',
      'Suelos de madera o porcelánico',
      'Falsos techos con LED empotrado',
      'Carpintería a medida',
      'Chimeneas bioetanol o de leña',
      'Climatización integrada',
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
  },
  {
    slug: 'habitacion',
    title: 'Reforma de Habitación',
    description: 'Dormitorios confortables y optimizados al máximo para el descanso.',
    longDescription:
      'Creamos habitaciones que maximizan el espacio y el confort: armarios empotrados a medida, suelos de tarima flotante, iluminación indirecta y pintura de calidad. También habilitamos buhardillas y espacios irregulares convirtiéndolos en dormitorios acogedores.',
    features: [
      'Armarios empotrados a medida',
      'Suelo de tarima o moqueta',
      'Iluminación indirecta y empotrada',
      'Tabique trasdosado para aislamiento',
      'Suelo radiante opcional',
      'Escritorios y estanterías integradas',
    ],
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80',
  },
  {
    slug: 'terraza',
    title: 'Reforma de Terraza',
    description: 'Terrazas impermeabilizadas y habilitadas como espacio de vida exterior.',
    longDescription:
      'Convertimos tu terraza en un espacio exterior de primera: impermeabilizamos suelos y paredes, instalamos suelos de madera composite, porcelánico exterior o tarima ipe, montamos pérgolas bioclimáticas, sistemas de riego y iluminación. También cerramos terrazas para ampliar la superficie habitable.',
    features: [
      'Impermeabilización garantizada',
      'Suelos composite y porcelánico exterior',
      'Pérgolas bioclimáticas',
      'Iluminación y enchufe exterior',
      'Cerramiento de cristal o aluminio',
      'Jardines verticales y maceteros',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
  },
  {
    slug: 'sotano',
    title: 'Habilitación de Sótano',
    description: 'Transformamos sótanos y garajes en espacios habitables y útiles.',
    longDescription:
      'Convertimos sótanos oscuros y húmedos en espacios habitables y luminosos: oficinas en casa, sala de juegos, bodega, gimnasio privado o cuarto de lavandería. Resolvemos problemas de humedad, mejoramos la iluminación y la ventilación, e instalamos escaleras de acceso cómodas.',
    features: [
      'Solución de humedades y filtraciones',
      'Ventilación mecánica controlada',
      'Iluminación artificial optimizada',
      'Aislamiento térmico y acústico',
      'Escaleras y acceso adaptado',
      'Suelos técnicos y tarimas',
    ],
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80',
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getZoneBySlug(slug: string): ZoneData | undefined {
  return ZONES.find((z) => z.slug === slug)
}
