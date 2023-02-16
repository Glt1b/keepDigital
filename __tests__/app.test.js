const request = require('supertest');
const app = require('../app');

describe('GET/api/details', () => {
    test('200 - respond with project details', () => {
        return request(app)
        .get('/api/details')
        .expect(200)
        .then((res) => {
            console.log(res.body.data)
            expect(res.body.data).toBeInstanceOf(Object)
        })
    })
})
