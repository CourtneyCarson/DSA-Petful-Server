const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  // origin: CLIENT_ORIGIN
})
);

app.use('/users', require('../router/user-router'));
app.use('/cats', require('../router/cats-router'));
app.use('/dogs', require('../router/dogs-router'));

module.exports = app;
