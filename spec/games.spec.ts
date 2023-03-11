import request from 'supertest'
import { expect } from 'chai'
import { server } from '../src/server'

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
})
