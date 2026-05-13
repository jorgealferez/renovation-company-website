import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '20')
  const status = searchParams.get('status')
  const skip = (page - 1) * limit

  const where = status ? { status: status as 'NEW' | 'CONTACTED' | 'QUOTED' | 'CLOSED_WON' | 'CLOSED_LOST' } : {}

  const [contacts, total] = await Promise.all([
    prisma.contact.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.contact.count({ where }),
  ])

  return NextResponse.json({
    data: contacts,
    pagination: {
      total,
      page,
      limit,
      pages: Math.ceil(total / limit),
    },
  })
}

export async function PATCH(request: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { id, status } = body

  if (!id || !status) {
    return NextResponse.json({ error: 'Missing id or status' }, { status: 400 })
  }

  const contact = await prisma.contact.update({
    where: { id },
    data: { status },
  })

  return NextResponse.json(contact)
}
