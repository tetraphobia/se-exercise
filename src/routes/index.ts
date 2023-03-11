import { Router } from 'express'

import games from './games.route'
import swagger from './swagger.route'

// Setup router
const router = Router()

// Configure each endpoint
router.use('/games', games)
router.use('/', swagger)

export default router
