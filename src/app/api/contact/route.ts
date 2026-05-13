import { NextRequest, NextResponse } from 'next/server'
import { publishContact } from '@/lib/rabbitmq'
import type { ContactFormData, ContactMessage } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Input validation
    const { name, email, phone } = body

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Nombre inválido' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 6) {
      return NextResponse.json({ error: 'Teléfono inválido' }, { status: 400 })
    }

    const message: ContactMessage = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      service: body.service?.trim() || undefined,
      zone: body.zone?.trim() || undefined,
      description: body.description?.trim() || undefined,
      source: 'website',
      timestamp: new Date().toISOString(),
    }

    await publishContact(message)

    return NextResponse.json(
      { success: true, message: 'Tu solicitud ha sido recibida correctamente.' },
      { status: 201 }
    )
  } catch (err) {
    console.error('[API /contact] Error:', err)
    return NextResponse.json(
      { error: 'Error interno del servidor. Por favor, inténtalo más tarde.' },
      { status: 500 }
    )
  }
}
