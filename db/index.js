const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carousel-recommended', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('successfully connected to the database...');
});

module.exports.db = db;
