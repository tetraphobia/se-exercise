import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc, { Options } from 'swagger-jsdoc'

const opts: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SE Exercise',
      version: '1.0.0'
    }
  },
  apis: ['./src/routes/*.ts']
}

const router = Router()
const swaggerSpec = swaggerJSDoc(opts)

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default router
