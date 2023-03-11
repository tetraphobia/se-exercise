import { Request, Response } from 'express'
import { GameModel } from '../models/game.model'

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
   * Create a saved game
   *
   * @param {Request} req Express Request
   * @param {Response} res Express Response
   */
  async create (req: Request, res: Response): Promise<void> {
    // TODO: Put validation here
    const game = await GameModel.create(req.body)
    res.status(201).json(game)
  }
}
