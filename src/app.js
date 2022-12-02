const express = require('express');

const app = express();

app.use(express.json());

const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/arrays');

const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

const stringsRoute = require('./routes/strings');

const numbersRoute = require('./routes/numbers');

app.use('/strings', stringsRoute);

app.use('/numbers', numbersRoute);

app.post('/arrays/element-at-index/:number', (req, res) => {
  const num = parseInt(req.params.number, 10);

  res.status(200).json({ result: getNthElement(num, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  res.status(200).json({ result: removeNthElement2(req.query.index, req.body.array) });
});

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const num = parseInt(req.params.number, 10);

  if (Number.isNaN(num)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(num) });
  }
});

app.get('/booleans/:string/starts-with/:charater', (req, res) => {
  const char = req.params.charater;

  if (char.length === 1) {
    res.status(200).json({ result: startsWith(char, req.params.string) });
  } else {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
});

module.exports = app;
