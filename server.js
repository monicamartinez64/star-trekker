const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;

require('dotenv').config();
require('./config/database');

const astroRouter = require('./routes/astros');
const observationRouter = require('./routes/observations');
const userRouter = require('./routes/users');
const cors = require('cors');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/astros', astroRouter);
app.use('/api/observations', observationRouter);

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});
