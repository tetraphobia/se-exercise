import request from 'supertest'
import { expect } from 'chai'
import server from '../src/server'

const BASEURL = '/games'
const ID = 1

// Generate test data
const game = {
  board: {
    state: Array.from(Array(100).fill(0), () => new Array(100).fill(0))
  },
  player: {
    health: 200,
    moves: 450,
    pos_x: 0,
    pos_y: 0
  }
}

describe(`GET ${BASEURL}`, () => {
  it('responds 200 OK', async () => {
    const res = await request(server)
      .get(BASEURL)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')

    expect(res.statusCode).to.be.equal(200)
    expect(res.body[0].board).to.be.equal(game.board)
    expect(res.body[0].player).to.be.equal(game.player)
  })
})

describe(`GET ${BASEURL}/:id`, () => {
  it('responds 200 OK', async () => {
    const res = await request(server)
      .get(`${BASEURL}/${ID}`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')

    expect(res.statusCode).to.be.equal(200)
    expect(res.body.board).to.be.equal(game.board)
    expect(res.body.player).to.be.equal(game.player)
  })
})
