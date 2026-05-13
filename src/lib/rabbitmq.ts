import amqplib, { type Connection, type Channel } from 'amqplib'
import type { ContactMessage } from '@/types'

const EXCHANGE = process.env.RABBITMQ_EXCHANGE || 'renovation.events'
const QUEUE = process.env.RABBITMQ_QUEUE || 'renovation.contacts'
const ROUTING_KEY = 'contact.new'

let connection: Connection | null = null
let channel: Channel | null = null

async function getChannel(): Promise<Channel> {
  if (channel) return channel

  const url = process.env.RABBITMQ_URL
  if (!url) throw new Error('RABBITMQ_URL environment variable is not set')

  connection = await amqplib.connect(url)
  channel = await connection.createChannel()

  await channel.assertExchange(EXCHANGE, 'topic', { durable: true })
  await channel.assertQueue(QUEUE, { durable: true })
  await channel.bindQueue(QUEUE, EXCHANGE, ROUTING_KEY)

  // Handle connection errors
  connection.on('error', (err) => {
    console.error('[RabbitMQ] Connection error:', err.message)
    connection = null
    channel = null
  })

  connection.on('close', () => {
    console.warn('[RabbitMQ] Connection closed')
    connection = null
    channel = null
  })

  return channel
}

export async function publishContact(data: ContactMessage): Promise<boolean> {
  try {
    const ch = await getChannel()
    const message = Buffer.from(JSON.stringify(data))
    return ch.publish(EXCHANGE, ROUTING_KEY, message, {
      persistent: true,
      contentType: 'application/json',
    })
  } catch (err) {
    console.error('[RabbitMQ] Failed to publish contact:', err)
    // Reset channel on error so next call will reconnect
    channel = null
    connection = null
    throw err
  }
}

export async function closeConnection(): Promise<void> {
  try {
    await channel?.close()
    await connection?.close()
  } finally {
    channel = null
    connection = null
  }
}
