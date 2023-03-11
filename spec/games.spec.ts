import request from 'supertest'
import { expect } from 'chai'
import { server } from '../src/server'
import { mongoConnect } from '../src/helpers/db'
import { GameData } from './data'

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
      const res = await request(server)
        .post('/games')
        .send(GameData)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')

      expect(res.statusCode).to.equal(201)
      expect(res.body).to.have.property('_id')
    })
  })

  // describe('GET /games/:id', () => {
  //   it('responds 200 OK', async () => {
  //     const res = await request(server)
  //       .get('/games/1')
  //       .set('Accept', 'application/json')
  //       .set('Content-Type', 'application/json')

  //     expect(res.statusCode).to.equal(200)
  //   })
  // })
})
