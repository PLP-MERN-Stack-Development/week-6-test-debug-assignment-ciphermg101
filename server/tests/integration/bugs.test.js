const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../src/app');
const Bug = require('../../src/models/Bug');

describe('Bug API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });
  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.disconnect();
  });
  afterEach(async () => {
    await Bug.deleteMany();
  });

  it('should create a bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'Bug', description: 'Desc' });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Bug');
  });

  it('should get all bugs', async () => {
    await Bug.create({ title: 'Bug1' });
    const res = await request(app).get('/api/bugs');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it('should update a bug', async () => {
    const bug = await Bug.create({ title: 'Bug1' });
    const res = await request(app)
      .put(`/api/bugs/${bug._id}`)
      .send({ title: 'Updated', status: 'resolved' });
    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Updated');
    expect(res.body.status).toBe('resolved');
  });

  it('should delete a bug', async () => {
    const bug = await Bug.create({ title: 'Bug1' });
    const res = await request(app).delete(`/api/bugs/${bug._id}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Bug deleted');
  });
}); 