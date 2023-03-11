import { Request, Response } from 'express'
import { GameModel } from '../models/game.model'
import * as Validators from '../validators'

export class GamesController {
  /**
   * Get all games
   *
   * @param {Request} req Express Request
   * @param {Response} res Express Response
   * @returns {Promise<void>}
   */
  async getAll (req: Request, res: Response): Promise<void> {
    const games = await GameModel.find()

    res.json(games)
  }

  /**
   * Get one game
   *
   * @param {Request} req Express Request
   * @param {Response} res Express Response
   * @returns {Promise<void>}
   */
  async getOne (req: Request, res: Response): Promise<void> {
    const game = await GameModel.findById(req.params.id)

    if (!game) {
      res.status(404)
      return
    }

    res.json(game)
  }

  /**
   * Create a saved game
   *
   * @param {Request} req Express Request
   * @param {Response} res Express Response
   */
  async create (req: Request, res: Response): Promise<void> {
    const validation = Validators.Game(req.body)
    if (validation.error) {
      res.status(400).json(validation.error)
      return
    }

    const game = await GameModel.create(req.body)
    res.status(201).json(game)
  }

  /**
   * Update a saved game
   *
   * @param {Request} req Express Request
   * @param {Response} res Express Response
   */
  async update (req: Request, res: Response): Promise<void> {
    const validation = Validators.Game(req.body)
    if (validation.error) {
      res.status(400).json(validation.error)
      return
    }

    const game = await GameModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      upsert: true
    })

    if (!game) {
      res.status(404)
      return
    }

    res.status(200).json(game)
  }
}
