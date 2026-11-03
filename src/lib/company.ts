// Central company configuration — all values from environment variables.
// Set NEXT_PUBLIC_COMPANY_NAME (and others) in Railway or .env.local to customise without code changes.
export const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || 'ReformaPro'
export const COMPANY_PHONE = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+34 900 000 000'
export const COMPANY_EMAIL = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@reformapro.es'
export const COMPANY_ADDRESS = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Calle Bramante, 45200 Illescas (Toledo)'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformapro.es'

// Titular del sitio (LSSI art. 10 y RGPD): los datos de los textos legales de simvixgroup.com,
// con el domicilio en Calle Bramante, Illescas. Son datos legales fijos, no de marca: no se
// configuran por entorno. Los datos registrales no se publican en ninguna fuente y no se inventan.
export const LEGAL_NAME = 'BYTEMEGA INNOVACION E INVERSIONES TECNOLOGICAS SL'
export const LEGAL_TAX_ID = 'B87816419'
export const LEGAL_STREET = 'Calle Bramante'
export const LEGAL_POSTAL_CODE = '45200'
export const LEGAL_LOCALITY = 'Illescas'
export const LEGAL_REGION = 'Toledo'
export const LEGAL_ADDRESS = `${LEGAL_STREET}, ${LEGAL_POSTAL_CODE} ${LEGAL_LOCALITY} (${LEGAL_REGION}), España`
export const LEGAL_EMAIL = 'support@simvix.com'
