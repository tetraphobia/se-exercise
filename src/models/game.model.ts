import { Model, model, Schema } from 'mongoose'
import { IGameModel } from '../interfaces/game.interface'

const GameSchema = new Schema({
  board: { type: [[Number]], required: true },
  player: {
    health: { type: Number, required: true },
    moves: { type: Number, required: true },
    pos: {
      x: { type: Number, required: true },
      y: { type: Number, required: true }
    }
  }
})

export const GameModel: Model<IGameModel> = model<IGameModel>('Game', GameSchema)
