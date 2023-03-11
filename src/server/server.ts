import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import Router from '../routes'
import { mongoConnect } from '../helpers/db'

const DEV = process.env.NODE_ENV === 'development'

const server = express()

// Setup development middleware
if (DEV) {
  server.use(morgan('dev'))
}

// Setup other middleware
server.use(cors())

// Setup routes
server.use('/', Router)

// Connect to Mongodb
mongoConnect()

export { server }
