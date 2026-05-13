import amqplib, { type ChannelModel, type Channel } from 'amqplib'
import type { ContactMessage } from '@/types'

const EXCHANGE = process.env.RABBITMQ_EXCHANGE || 'renovation.events'
const QUEUE = process.env.RABBITMQ_QUEUE || 'renovation.contacts'
const ROUTING_KEY = 'contact.new'

let connection: ChannelModel | null = null
let channel: Channel | null = null

async function getChannel(): Promise<Channel> {
  if (channel) return channel

  const url = process.env.RABBITMQ_URL
  if (!url) throw new Error('RABBITMQ_URL environment variable is not set')

  const conn = await amqplib.connect(url)
  connection = conn

  const ch = await conn.createChannel()
  await ch.assertExchange(EXCHANGE, 'topic', { durable: true })
  await ch.assertQueue(QUEUE, { durable: true })
  await ch.bindQueue(QUEUE, EXCHANGE, ROUTING_KEY)

  conn.on('error', (err) => {
    console.error('[RabbitMQ] Connection error:', err.message)
    connection = null
    channel = null
  })

  conn.on('close', () => {
    console.warn('[RabbitMQ] Connection closed')
    connection = null
    channel = null
  })

  channel = ch
  return ch
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
