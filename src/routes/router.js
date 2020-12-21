const express = require('express');
const app = express();

app.use('/task', require('./task'));

module.exports = app;