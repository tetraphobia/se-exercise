import { IGame } from '../../src/interfaces/game.interface'

export const gameData: IGame = {
  board: [[0]],
  player: {
    health: 200,
    moves: 450,
    pos: {
      x: 0,
      y: 0
    }
  }
}
