import dotenv from 'dotenv'
import { connect } from 'mongoose'
import logger from 'jet-logger'

/**
 * Connect to mongodb server with mongoose
 */
export function mongoConnect () {
  dotenv.config()
  const uri: string = process.env.MONGO_URI || 'mongodb://admin:pass@localhost:27017'
  connect(uri)
    .then(() => {
      logger.info('Connected to MongoDB!')
    })
    .catch(err => {
      logger.err('Failed to connect to MongoDB!')
      logger.err(err)
    })
}
