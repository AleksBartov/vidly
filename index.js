const mongoose = require('mongoose');
const morgan = require('morgan');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const express = require('express');
const app = express();

mongoose.connect('mongodb://AleksBartov:Merahba2018@ds247439.mlab.com:47439/aleksbartovworks')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));