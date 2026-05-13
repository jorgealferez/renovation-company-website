/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://reformapro.es',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin' },
      { userAgent: '*', disallow: '/api' },
    ],
  },
  exclude: ['/admin/*', '/api/*'],
  additionalPaths: async (config) => {
    const servicios = [
      'reformas-integrales',
      'piscinas',
      'jardineria',
      'fontaneria',
      'albanileria',
      'electricidad',
    ]
    const reformas = [
      'cocina',
      'bano',
      'salon',
      'habitacion',
      'terraza',
      'sotano',
    ]
    const paths = []
    for (const s of servicios) {
      paths.push({ loc: `/servicios/${s}`, lastmod: new Date().toISOString() })
    }
    for (const r of reformas) {
      paths.push({ loc: `/reformas/${r}`, lastmod: new Date().toISOString() })
    }
    return paths
  },
}
