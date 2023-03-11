import request from 'supertest'
import { expect } from 'chai'
import { server } from '../src/server'
import { mongoConnect } from '../src/helpers/db'
import { gameData } from './data'

before('Connect to MongoDB', () => {
  mongoConnect()
})
describe('API endpoints', () => {
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
        .send(gameData)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')

      expect(res.statusCode).to.equal(201)
      expect(res.body).to.have.property('_id')
    })
  })

  describe('GET /games/:id', () => {
    it('responds 200 OK', async () => {
      const test = await request(server)
        .post('/games')
        .send(gameData)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')

      expect(test.statusCode).to.equal(201)
      expect(test.body).to.have.property('_id')

      const res = await request(server)
        .get('/games/' + test.body._id)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')

      expect(res.statusCode).to.equal(200)
      expect(res.body).to.have.property('_id')
    })
  })

  describe('PUT /games/:id', () => {
    it('responds 200 OK', async () => {
      const test = await request(server)
        .post('/games')
        .send(gameData)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')

      expect(test.statusCode).to.equal(201)
      expect(test.body).to.have.property('_id')

      const updates = structuredClone(gameData)
      updates.player.health = 150

      const res = await request(server)
        .put('/games/' + test.body._id)
        .send(updates)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')

      expect(res.statusCode).to.equal(200)
      expect(res.body).to.have.property('_id')
      expect(res.body.player.health).to.equal(150)
    })
  })
})

describe('Request body validation', () => {
  describe('POST /games', () => {
    it('responds 400 Bad Request (Invalid type)', async () => {
      const res = await request(server)
        .post('/games')
        .send({ player: 2222 })
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')

      expect(res.statusCode).to.equal(400)
      expect(res.body).to.have.property('details')
    })
  })

  describe('PUT /games/:id', () => {
    it('responds 400 Bad Request (Missing required parameter)', async () => {
      const test = await request(server)
        .post('/games')
        .send(gameData)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')

      expect(test.statusCode).to.equal(201)
      expect(test.body).to.have.property('_id')

      const updates = {
        player: {
          health: 10
        }
      }

      const res = await request(server)
        .put('/games/' + test.body._id)
        .send(updates)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')

      expect(res.statusCode).to.equal(400)
      expect(res.body).to.have.property('details')
    })
    it('responds 400 Bad Request (Health too high)', async () => {
      const test = await request(server)
        .post('/games')
        .send(gameData)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')

      expect(test.statusCode).to.equal(201)
      expect(test.body).to.have.property('_id')

      const updates = structuredClone(gameData)
      updates.player.health = 9999

      const res = await request(server)
        .put('/games/' + test.body._id)
        .send(updates)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')

      expect(res.statusCode).to.equal(400)
      expect(res.body).to.have.property('details')
    })
  })
})
