const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;
const path = require('path');
const favicon = require('serve-favicon');

require('dotenv').config();
require('./config/database');

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

const astroRouter = require('./routes/astros');
const observationRouter = require('./routes/observations');
const weatherRouter = require('./routes/weather');
const userRouter = require('./routes/users');
const cors = require('cors')

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/astros', astroRouter);
app.use('/api/observations', observationRouter);
app.use('/api/weather', weatherRouter);


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });

