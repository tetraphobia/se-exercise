import request from 'supertest'
import { expect } from 'chai'
import { server } from '../src/server'
import { mongoConnect } from '../src/helpers/db'
import { IGame } from '../src/interfaces/game.interface'

describe('API endpoints', () => {
  before('Connect to MongoDB', () => {
    mongoConnect()
  })
  describe('GET /games', () => {
    it('responds 200 OK', async () => {
      const res = await request(server)
        .get('/games')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')

      expect(res.statusCode).to.equal(200)
    })
  })

  describe('POST /games', () => {
    it('responds 201 Created', async () => {
      // Generate a test body
      const body: IGame = {
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

      const res = await request(server)
        .post('/games')
        .send(body)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')

      expect(res.statusCode).to.equal(201)
      expect(res.body).to.have.property('_id')
    })
  })
})
