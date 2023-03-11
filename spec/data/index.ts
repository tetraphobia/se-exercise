import { IGame } from '../../src/interfaces/game.interface'

export const GameData: IGame = {
  board: Array.from(Array(100).fill(0), () => new Array(100).fill(0)),
  player: {
    health: 200,
    moves: 450,
    pos: {
      x: 0,
      y: 0
    }
  }
}
