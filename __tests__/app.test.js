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

describe('PATCH/api/details', () => {
    test('200 - update DataBase', () => {
        const obj = {
            "active sections": ['text', 'gallery'],
            "text_image": "test text for this section",
            "text_buttons": "test text for sections with buttons",
            "gallery": {
                "title": "this is title",
                "img": []
            },
            "text": "another test text"
        }
        return request(app)
        .patch('/api/details')
        .send(obj)
        .expect(200)
        .then((res) => {
            expect(res.body.msg).toBe('data updated')
        })
    })
})
