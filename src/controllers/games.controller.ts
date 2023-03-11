import { Request, Response } from 'express'
import { Game } from '../models/game.model'

export class GamesController {
  /**
   *
   * @param {Request} req Express Request
   * @param {Response} res Express Response
   */
  async getAll (req: Request, res: Response): Promise<void> {
    return void
  }
  async getOne (req: Request, res: Response): Promise<void> {
    return void
  }
  async create (req: Request, res: Response): Promise<void> {
    return void
  }
  async update (req: Request, res: Response): Promise<void> {
    return void
  }
}
