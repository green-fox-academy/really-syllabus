const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('TESTING GET / ENDPOINT WITHOUT QUERY', (t) => {
  request(app)
    .get('/')
    .expect(210)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {message: 'wrong query'}, 'without query test');
      t.end();
    });
});

test('TESTING GET / ENDPOINT WITHOUT QUERY', (t) => {
  request(app)
    .get('/?cica=rozi')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {cica: 'rozi'}, 'with query test');
      t.end();
    });
});

test('TESTING POST /api/macska ENDPOINT WITH body', (t) => {
  request(app)
    .post('/api/macska')
    .send({ cica : 'rozi'})
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, { message: 'got it'}, 'with good body test');
      t.end();
    });
});
