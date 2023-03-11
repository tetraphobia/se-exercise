import { connect } from 'mongoose'
import logger from 'jet-logger'

/**
 * Connect to mongodb server with mongoose
 *
 * @param {string} uri Optional param specifying mongodb uri
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
