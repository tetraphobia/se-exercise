import { Document } from 'mongoose'

export interface IGame {
    board: number[][]
    player: {
        health: number
        moves: number
        pos: {
            x: number
            y: number
        }
    }
}

export interface IGameModel extends IGame, Document {}
