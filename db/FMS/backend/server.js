var express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

var app = express();
var port = process.env.PORT || 3000;

const select = require ('./select');

// enable CORS
app.use(cors());
// app.use(cors({ credentials: true, origin: 'http://localhost:4200' }));
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// serving static files
app.use('/uploads', express.static('uploads'));

// handle storage using multer
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads');
	},
	filename: function (req, file, cb) {
		// cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);  //js2 -OR- null, Date.now() + file.originalname
           cb(null, Date.now() + file.originalname);  
    }
});
var upload = multer({ storage: storage }); //js1


function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function isFileSizeValid(file){
	let tmpsize = formatBytes(file.size);
	if (/\s+MB/.test(tmpsize)) {
		let tmp2 = tmpsize;
		tmp2 = tmp2.replace('MB', '').trim();
		return tmp2 > 200
	} 
}

// handle single file upload
app.post('/uploadfile', upload.single('dataFile'), (req, res, next) => {    //dataFile is the name of the input-file control on UI.
	const file = req.file;  // js3: if any input it will come like req.body.whatevernameOfInput
	if (!file) {
		return res.status(400).send({ message: 'Please upload a file.' });
	}

	if (isFileSizeValid(req.file)){
		return res.status(400).send({ message: 'Please upload file less than 200MB.' });
	}

	return res.send({ message: 'File uploaded successfully.', file });
});

// var multiupload = multer({ storage: storage }).array('dataFiles',2); //js1

// handle multiple file upload
app.post('/uploadfiles', upload.array('dataFiles', 10), (req, res, next) => {
	const files = req.files;
	let totalFileSize = 0;

	console.log('files: ', files, files.length);
	for (let i = 0; i<files.length; i++) {

		//1.
		totalFileSize = totalFileSize + files[i]['size'];

		//2.
		// console.log( isFileSizeValid(files[i]) ); 
		if ( isFileSizeValid(files[i]) ) {
			return res.status(400).send({ message: 'Please upload file less than 200MB.' });
		}
	}
	// 1. 500GB check
	// let tmpTotalsize = formatBytes(totalFileSize);
	// console.log('===>', totalFileSize, tmpTotalsize);
	// if (/\s+GB/.test(tmpTotalsize)) {
	// 	let totaltmp2 = tmpTotalsize;
	// 	totaltmp2 = totaltmp2.replace('GB', '').trim();
	// 	console.log('totaltmp2: ', totaltmp2);
	// 	if(totaltmp2 > 500) {
	// 		return res.status(400).send({ message: 'Total filesize cannot be greater than 500GB' });
	// 	}
	// } 

	// 2.
	if (!files || (files && files.length === 0)) {
		return res.status(400).send({ message: 'Please upload a file.' });
	}
	return res.send({ message: 'File uploaded successfully.', files });
});

// endpoint #1
app.get('/', (req, res) => {
	res.send('Welcome to the File Management System');
});

// getAllfiles
const fs = require('fs');
const getFileInfoFromFolder = (route) => {
  const files = fs.readdirSync(route, 'utf8');
  route = __dirname + '\\' + route;
//   console.log(route);
  const response = [];
  for (let file of files) {
    const extension = path.extname(file);
    const fileSizeInBytes = fs.statSync(route + '\\' + file).size;
	// console.log(extension, fileSizeInBytes);
	// const downloadLink = `${__dirname}\\uploads\\${file}`;
	const downloadFile = `${file}`;
	response.push({ file, extension, fileSizeInBytes, download: downloadFile, preview: downloadFile });
  }
	//   console.log('response: ', response);
  return response;
}
// const { name, extenstion, fileSizeInBytes } = getFileInfoFromFolder("uploads");
app.get('/getAllFiles', (req, res) => {
	res.send (getFileInfoFromFolder("uploads"));
});

app.listen(port, () => {
	console.log('Server started on: ' + port);
});




select.connectToDb();
select.getMaxFileId();
select.insertToFiledetails();

