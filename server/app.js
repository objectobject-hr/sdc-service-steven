const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router.js');

const app = express();
const port = 3004;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../dist'));

app.use('/', router);

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
