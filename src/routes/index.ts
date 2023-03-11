import { Router } from 'express'

import games from './games.route'

// Setup router
const router = Router()

// Configure each endpoint
router.use('/games', games)

export default router
