var express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
var cors = require('cors');
require('dotenv').config();

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
  console.log('req.file vvvvv');
  console.log(req.file);
  console.log('req.file.fieldname: ' + req.file.fieldname)
  console.log('req.file.mimetype: ' + req.file.mimetype);
  console.log('req.file.size: ' + req.file.size);
  res.json({
    name: req.file.fieldname,
    type: req.file.mimetype,
    size: Number(req.file.size)
  });
});



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
