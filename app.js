const express = require('express');
const cors = require('cors');
const userRouter = require('./src/routes/userRoutes')
const uploadRouter = require('./src/routes/upload');
const path = require('path');

const app = express();
app.use(express.static('test'))
app.use(cors());

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/file', uploadRouter);

module.exports = app;