// Central company configuration — all values from environment variables.
// Set NEXT_PUBLIC_COMPANY_NAME (and others) in Railway or .env.local to customise without code changes.
export const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || 'ReformaPro'
export const COMPANY_PHONE = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+34 900 000 000'
export const COMPANY_EMAIL = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@reformapro.es'
export const COMPANY_ADDRESS = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Calle Mayor 1, Madrid'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformapro.es'
