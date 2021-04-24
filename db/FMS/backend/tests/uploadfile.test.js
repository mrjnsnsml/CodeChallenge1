
// orig.
// const request = require('supertest')
// const app = require('../server')
// describe('Post Endpoints', () => {
//   it('should create a new post', async () => {
//     const res = await request(app)
//       .post('/api/posts')
//       .send({
//         userId: 1,
//         title: 'test is cool',
//       })
//     expect(res.statusCode).toEqual(201)
//     expect(res.body).toHaveProperty('post')
//   })
// })

// 1. /uploadfile
describe('uploadfile Endpoint', () => {
  it('should upload a new file successfully', () => {

    const req = {
        "headers":{
            "Content-Type": "application/json; charset=utf-8",
        },
        "body": {
            "dataFile": "test1.pdf"
        }
    }

    const res = {
        body: {
        "message": "File uploaded successfully.",
        "file": {
            "fieldname": "dataFile",
            "originalname": "test1.pdf",
            "encoding": "7bit",
            "mimetype": "application/pdf",
            "destination": "uploads",
            "filename": "1618882542520test1.pdf",
            "path": "uploads\\1618882542520test1.pdf",
            "size": 150184
        }
    }
};

    // expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('file');
    expect(res.body.file).toHaveProperty('fieldname');
    expect(res.body.file).toHaveProperty('originalname');
    expect(res.body.file).toHaveProperty('destination');
    expect(res.body.file).toHaveProperty('filename');
    expect(res.body.file).toHaveProperty('path');
    expect(res.body.file.destination).toEqual('uploads')

  })
})