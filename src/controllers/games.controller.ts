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
}
