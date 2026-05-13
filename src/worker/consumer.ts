import amqplib from 'amqplib'
import { PrismaClient } from '@prisma/client'
import type { ContactMessage } from '../types'

const EXCHANGE = process.env.RABBITMQ_EXCHANGE || 'renovation.events'
const QUEUE = process.env.RABBITMQ_QUEUE || 'renovation.contacts'
const ROUTING_KEY = 'contact.new'

const prisma = new PrismaClient()

async function start(): Promise<void> {
  const url = process.env.RABBITMQ_URL
  if (!url) throw new Error('RABBITMQ_URL environment variable is not set')

  console.log('[Worker] Connecting to RabbitMQ...')
  const connection = await amqplib.connect(url)
  const channel = await connection.createChannel()

  await channel.assertExchange(EXCHANGE, 'topic', { durable: true })
  await channel.assertQueue(QUEUE, { durable: true })
  await channel.bindQueue(QUEUE, EXCHANGE, ROUTING_KEY)

  // Process one message at a time
  channel.prefetch(1)

  console.log(`[Worker] Waiting for messages in queue "${QUEUE}". Press CTRL+C to exit.`)

  channel.consume(QUEUE, async (msg) => {
    if (!msg) return

    try {
      const content = msg.content.toString()
      const data: ContactMessage = JSON.parse(content)

      console.log(`[Worker] Processing contact from: ${data.email}`)

      await prisma.contact.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service ?? null,
          zone: data.zone ?? null,
          description: data.description ?? null,
          source: data.source || 'website',
          status: 'NEW',
        },
      })

      console.log(`[Worker] Contact saved successfully: ${data.email}`)
      channel.ack(msg)
    } catch (err) {
      console.error('[Worker] Error processing message:', err)
      // Requeue the message for retry (but not indefinitely)
      channel.nack(msg, false, false)
    }
  })

  // Graceful shutdown
  process.on('SIGTERM', async () => {
    console.log('[Worker] SIGTERM received, shutting down...')
    await channel.close()
    await connection.close()
    await prisma.$disconnect()
    process.exit(0)
  })

  process.on('SIGINT', async () => {
    console.log('[Worker] SIGINT received, shutting down...')
    await channel.close()
    await connection.close()
    await prisma.$disconnect()
    process.exit(0)
  })
}

start().catch((err) => {
  console.error('[Worker] Fatal error:', err)
  process.exit(1)
})
