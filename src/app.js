const express = require('express');

const app = express();
app.use(express.json());

const stringsRoute = require('./routes/strings');
const numbersRoute = require('./routes/numbers');
const arraysRoute = require('./routes/arrays');
const booleansRoute = require('./routes/booleans');

app.use('/strings', stringsRoute);
app.use('/numbers', numbersRoute);
app.use('/arrays', arraysRoute);
app.use('/booleans', booleansRoute);

module.exports = app;
