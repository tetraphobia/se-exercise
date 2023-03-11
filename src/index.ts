import dotenv from 'dotenv'

import logger from 'jet-logger'
import { mongoConnect } from './helpers/db'

import { server } from './server'

// Init Dotenv
dotenv.config()

const PORT = process.env.PORT || 3000

// Connect to Mongodb
mongoConnect()

// Start Express server
const msg = `Express server started on ${PORT}`
server.listen(PORT, () => logger.info(msg))
