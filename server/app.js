const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;

// Seed database
require('../db/seed').seed();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
// TODO: Add necessary middleware
// TODO: Handle request

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
