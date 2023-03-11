import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const DEV = process.env.NODE_ENV === 'development'

const server = express()

// Setup development middleware
if (DEV) {
  server.use(morgan('dev'))
}

// Setup other middleware
server.use(cors())

// Setup router rules
// app.use('/', router)

export default server
