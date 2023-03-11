import { Router } from 'express'

import { GamesController } from '../controllers/games.controller'

const router = Router()
const controller = new GamesController()

/**
 * @openapi
 * components:
 *   schemas:
 *     Game:
 *       type: object
 *       properties:
 *         board:
 *           type: array
 *           items:
 *             type: array
 *             items:
 *               type: number
 *         player:
 *           type: object
 *           properties:
 *             health:
 *               type: number
 *             moves:
 *               type: number
 *             pos:
 *               type: object
 *               properties:
 *                 x:
 *                   type: number
 *                 y:
 *                   type: number
 */

/**
 * @openapi
 * /games:
 *  get:
 *    summary: Return a list of Games.
 *    tags: [Games]
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: List all Games
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Game'
 */
router.get('/', controller.getAll)

/**
 * @openapi
 * /games/{id}:
 *   get:
 *     summary: Return a Game by ID.
 *     tags: [Games]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Show a single Game
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Game'
 */
router.get('/:id', controller.getOne)

/**
 * @openapi
 * /games:
 *  post:
 *    summary: Create a new Game
 *    description: |
 *      Creates a new Game.
 *      Health must be at least 0, and at most 200.
 *      Moves must be at least 0, and at most 450.
 *      A player's x or y position must be at least 0 and at most 99.
 *      Returns the Game you created as JSON.
 *    tags: [Games]
 *    produces:
 *      - application/json
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Game'
 *    responses:
 *      201:
 *        description: Game created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Game'
 */
router.post('/', controller.create)

/**
 * @openapi
 * /games/{id}:
 *  put:
 *    summary: Update a Game
 *    description: |
 *      Updates a Game.
 *      Health must be at least 0, and at most 200.
 *      Moves must be at least 0, and at most 450.
 *      A player's x or y position must be at least 0 and at most 99.
 *      Returns the updated Game as JSON.
 *    tags: [Games]
 *    produces:
 *      - application/json
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Game'
 *    responses:
 *      200:
 *        description: Game updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Game'
 */
router.put('/:id', controller.update)

export default router
