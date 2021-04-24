const req = {
    "headers":{
        "Content-Type": "application/json; charset=utf-8",
    },
    "body": {
        "dataFiles": ["test1.pdf", "test2.pdf", "test3.pdf"]
    }
};

const res =
{ body:
    {
        "message": "File uploaded successfully.",
        "files": [
            {
                "fieldname": "dataFiles",
                "originalname": "test1.pdf",
                "encoding": "7bit",
                "mimetype": "application/pdf",
                "destination": "uploads",
                "filename": "1618883887997test1.pdf",
                "path": "uploads\\1618883887997test1.pdf",
                "size": 150184
            },
            {
                "fieldname": "dataFiles",
                "originalname": "test2.pdf",
                "encoding": "7bit",
                "mimetype": "application/pdf",
                "destination": "uploads",
                "filename": "1618883888017test2.pdf",
                "path": "uploads\\1618883888017test2.pdf",
                "size": 150184
            },
            {
                "fieldname": "dataFiles",
                "originalname": "test3.pdf",
                "encoding": "7bit",
                "mimetype": "application/pdf",
                "destination": "uploads",
                "filename": "1618883888029test3.pdf",
                "path": "uploads\\1618883888029test3.pdf",
                "size": 150184
            }
        ]
    }
};

describe('uploadfile Endpoint', () => {
    it('should upload many files successfully', () => {
  
      // expect(res.statusCode).toEqual(201)
      expect(res.body).toHaveProperty('message');
      expect(res.body).toHaveProperty('files');
      expect(res.body.files[0]).toHaveProperty('fieldname');
      expect(res.body.files[0].fieldname).toEqual('dataFiles');

      expect(res.body.files[0]).toHaveProperty('originalname');
      expect(res.body.files[0]).toHaveProperty('destination');
      expect(res.body.files[0]).toHaveProperty('filename');
      expect(res.body.files[0]).toHaveProperty('path');
      expect(res.body.files[0].destination).toEqual('uploads')
    })
  })