import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const startTime = Date.now()

  try {
    // Check DB connectivity
    await prisma.$queryRaw`SELECT 1`

    return NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      responseTime: `${Date.now() - startTime}ms`,
      services: {
        database: 'ok',
        api: 'ok',
      },
    })
  } catch (err) {
    console.error('[Health] DB check failed:', err)
    return NextResponse.json(
      {
        status: 'degraded',
        timestamp: new Date().toISOString(),
        services: {
          database: 'error',
          api: 'ok',
        },
      },
      { status: 503 }
    )
  }
}
