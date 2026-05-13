export interface ContactFormData {
  name: string
  email: string
  phone: string
  service?: string
  zone?: string
  description?: string
}

export interface ContactMessage extends ContactFormData {
  source: string
  timestamp: string
}

export type ContactStatus = 'NEW' | 'CONTACTED' | 'QUOTED' | 'CLOSED_WON' | 'CLOSED_LOST'

export interface Contact {
  id: string
  name: string
  email: string
  phone: string
  service: string | null
  description: string | null
  zone: string | null
  source: string
  status: ContactStatus
  createdAt: Date
  updatedAt: Date
}

export interface ServiceData {
  slug: string
  title: string
  description: string
  longDescription: string
  features: string[]
  image: string
  icon: string
}

export interface ZoneData {
  slug: string
  title: string
  description: string
  longDescription: string
  features: string[]
  image: string
}
