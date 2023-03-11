import { Router } from 'express'

import { GamesController } from '../controllers/games.controller'

const router = Router()
const controller = new GamesController()

/**
 * GET /games
 *
 * Return all games
 */
router.get('/', controller.getAll)

/**
 * GET /games/:id
 *
 * Return game matching id
 */
// router.get('/:id', controller.getOne)

/**
 * POST /games
 *
 * Create new saved game
 */
router.post('/', controller.create)

/**
 * PUT /games/:id
 *
 * Update existing saved game
 */
// router.put('/:id', controller.update)

export default router
