'use client'

import { useState } from 'react'
import { gaEvents } from '@/lib/analytics'
import type { ContactFormData } from '@/types'

interface Props {
  defaultService?: string
  defaultZone?: string
}

export default function ContactForm({ defaultService, defaultZone }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data: ContactFormData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement)?.value || defaultService,
      zone: defaultZone,
      description: (form.elements.namedItem('description') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || 'Error al enviar el formulario')
      }

      gaEvents.contactFormSubmitted(data.service)
      setStatus('success')
      form.reset()
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Error desconocido')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="alert"
        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
      >
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">¡Solicitud recibida!</h3>
        <p className="text-green-700">
          Hemos recibido tu consulta. Te contactaremos en menos de 24 horas para ofrecerte un
          presupuesto sin compromiso.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre completo <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-required="true"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="Juan García"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-required="true"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="juan@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            aria-required="true"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="+34 600 000 000"
          />
        </div>
        {!defaultService && (
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Servicio
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
            >
              <option value="">Selecciona un servicio</option>
              <option value="reformas-integrales">Reformas Integrales</option>
              <option value="piscinas">Piscinas</option>
              <option value="jardineria">Jardinería</option>
              <option value="fontaneria">Fontanería</option>
              <option value="albanileria">Albañilería</option>
              <option value="electricidad">Electricidad</option>
            </select>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Describe tu proyecto
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
          placeholder="Cuéntanos qué quieres reformar, superficie aproximada y cualquier detalle relevante..."
        />
      </div>

      {status === 'error' && (
        <div role="alert" className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
          {errorMessage || 'Ha ocurrido un error. Por favor, inténtalo de nuevo.'}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
        className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </span>
        ) : (
          'Solicitar presupuesto gratuito'
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Al enviar aceptas nuestra{' '}
        <a href="/privacidad" className="underline hover:text-gray-700">política de privacidad</a>.
        Sin compromiso. Respuesta en menos de 24h.
      </p>
    </form>
  )
}
