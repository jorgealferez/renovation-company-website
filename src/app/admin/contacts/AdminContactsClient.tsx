'use client'

import { useState } from 'react'
import type { Contact } from '@/types'

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  NEW: { label: 'Nuevo', color: 'bg-blue-100 text-blue-800' },
  CONTACTED: { label: 'Contactado', color: 'bg-yellow-100 text-yellow-800' },
  QUOTED: { label: 'Presupuestado', color: 'bg-purple-100 text-purple-800' },
  CLOSED_WON: { label: 'Ganado ✓', color: 'bg-green-100 text-green-800' },
  CLOSED_LOST: { label: 'Perdido', color: 'bg-red-100 text-red-800' },
}

interface Props {
  initialContacts: Contact[]
}

export default function AdminContactsClient({ initialContacts }: Props) {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts)
  const [updating, setUpdating] = useState<string | null>(null)

  async function updateStatus(id: string, status: string) {
    setUpdating(id)
    try {
      const res = await fetch('/api/admin/contacts', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      })
      if (res.ok) {
        const updated = await res.json()
        setContacts((prev) => prev.map((c) => (c.id === id ? updated : c)))
      }
    } finally {
      setUpdating(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Panel de Contactos</h1>
          <div className="text-sm text-gray-300">
            {contacts.length} contactos
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {Object.entries(STATUS_LABELS).map(([status, { label, color }]) => {
            const count = contacts.filter((c) => c.status === status).length
            return (
              <div key={status} className="bg-white rounded-xl p-4 shadow-sm text-center">
                <p className="text-2xl font-bold text-primary">{count}</p>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${color}`}>
                  {label}
                </span>
              </div>
            )
          })}
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Contacto
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Teléfono
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Servicio / Zona
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Fecha
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {contacts.map((contact) => {
                  const statusInfo = STATUS_LABELS[contact.status]
                  return (
                    <tr key={contact.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{contact.name}</div>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-accent hover:underline"
                        >
                          {contact.email}
                        </a>
                        {contact.description && (
                          <p className="text-gray-500 text-xs mt-1 max-w-xs truncate">
                            {contact.description}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <a href={`tel:${contact.phone}`} className="text-gray-700 hover:text-accent">
                          {contact.phone}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {contact.service && <div>{contact.service}</div>}
                        {contact.zone && <div className="text-xs text-gray-400">{contact.zone}</div>}
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={contact.status}
                          onChange={(e) => updateStatus(contact.id, e.target.value)}
                          disabled={updating === contact.id}
                          aria-label={`Cambiar estado de ${contact.name}`}
                          className={`text-xs font-medium px-2 py-1 rounded-full border-0 cursor-pointer ${statusInfo.color}`}
                        >
                          {Object.entries(STATUS_LABELS).map(([value, { label }]) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4 text-gray-500 text-xs whitespace-nowrap">
                        {new Date(contact.createdAt).toLocaleDateString('es-ES', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            {contacts.length === 0 && (
              <div className="text-center py-16 text-gray-500">
                <p className="text-4xl mb-4" aria-hidden="true">📭</p>
                <p>No hay contactos todavía</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
