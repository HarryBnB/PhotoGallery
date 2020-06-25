//const app = require('../server/index.js')
const supertest = require('supertest');
const request = supertest('http://localhost:3000');
const regeneratorRuntime = require('regenerator-runtime');

describe("/rooms/0/photos/1 path", () => {
  it('should only have one object', async done => {
    const response = await request.get('/rooms/0/photos/1')
    expect(response.status).toBe(200)
    expect(response.body.length).toBe(1);
    expect(typeof response.body[0]).toBe('object');
    done()
  })
  it('should respond 1 as photo_id', async done => {
    const response = await request.get('/rooms/0/photos/1')
    expect(response.status).toBe(200)
    expect(response.body[0].photo_id).toBe(1);
    done()
  })
  it('should respond 0 as property_id', async done => {
    const response = await request.get('/rooms/0/photos/1')
    expect(response.status).toBe(200)
    expect(response.body[0].property_id).toBe(0);
    done()
  })
});