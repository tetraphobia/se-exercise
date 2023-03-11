import Joi, { ValidationResult } from 'joi'
import { IGame } from '../interfaces/game.interface'

/**
 * Validation for game objects.
 *
 * @param {IGame} game A Game object
 * @returns {ValidationResult} Joi ValidationResult
 */
export function Game (game: IGame): ValidationResult {
  const playerSchema = Joi.object({
    health: Joi.number().min(0).max(200).required(),
    moves: Joi.number().min(0).max(450).required(),
    pos: Joi.object({
      x: Joi.number().min(0).max(99).required(),
      y: Joi.number().min(0).max(99).required()
    })
  })

  const gameSchema = Joi.object({
    // Checks for a nested array of numbers
    board: Joi.array().items(
      Joi.array().items(Joi.number())
    ).required(),
    player: playerSchema.required()
  })

  return gameSchema.validate(game)
}
