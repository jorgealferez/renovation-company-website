import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import type { Metadata } from 'next'
import AdminContactsClient from './AdminContactsClient'
import { COMPANY_NAME } from '@/lib/company'

export const metadata: Metadata = {
  title: `Contactos – Admin ${COMPANY_NAME}`,
  robots: { index: false, follow: false },
}

export default async function AdminContactsPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/api/auth/signin')

  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: 'desc' },
    take: 50,
  })

  return <AdminContactsClient initialContacts={contacts} />
}
