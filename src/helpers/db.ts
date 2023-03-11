import { connect, disconnect } from 'mongoose'
import logger from 'jet-logger'

/**
 * Connect to mongodb server with mongoose
 */
export function mongoConnect () {
  const uri = process.env.MONGO_URI || 'mongodb://root:example@localhost:27017'
  connect(uri)
    .then(() => {
      logger.info('Connected to MongoDB!')
    })
    .catch(err => {
      logger.err('Failed to connect to MongoDB!')
      logger.err(err)
    })
}

/**
 * Close mongodb connection
 */
export function mongoDisconnect () {
  disconnect()
    .then(() => {
      logger.info('Disconnected from MongoDB!')
    })
    .catch(err => {
      logger.err('Failed to disconnect from MongoDB!')
      logger.err(err)
    })
}
