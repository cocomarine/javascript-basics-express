const express = require('express');

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
  countCharacters,
} = require('./lib/strings');

const {
  add,
  subtract,
  multiply,
  divide,
  remainder,
  power,
  round,
  absolute,
  quotient,
} = require('./lib/numbers');

const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/arrays');

const { negate, truthiness, isOdd } = require('./lib/booleans');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  }
});

app.get('/strings/count/:string', (req, res) => {
  res.status(200).json({ result: countCharacters(req.params.string) });
});

app.get('/numbers/add/:number1/and/:number2', (req, res) => {
  const num1 = parseInt(req.params.number1, 10);
  const num2 = parseInt(req.params.number2, 10);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(num1, num2) });
  }
});

app.get('/numbers/subtract/:number2/from/:number1', (req, res) => {
  const num1 = parseInt(req.params.number1, 10);
  const num2 = parseInt(req.params.number2, 10);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(num1, num2) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const num1 = req.body.a;
  const num2 = req.body.b;

  if (num1 == undefined || num2 == undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(num1)) || Number.isNaN(parseInt(num2))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(num1, num2) });
  }
});

app.post('/numbers/divide', (req, res) => {
  const num1 = req.body.a;
  const num2 = req.body.b;

  if (num2 == 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if ((!num1 || !num2) && num1 != 0) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(num1)) || Number.isNaN(parseInt(num2))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(num1, num2) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const num1 = req.body.a;
  const num2 = req.body.b;

  if (num2 == 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if ((!num1 || !num2) && num1 != 0) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(num1)) || Number.isNaN(parseInt(num2))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(num1, num2) });
  }
});

app.post('/numbers/power', (req, res) => {
  const num1 = req.body.a;
  const num2 = req.body.b;

  if (num1 == undefined || num2 == undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(num1)) || Number.isNaN(parseInt(num2))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: power(num1, num2) });
  }
});

app.post('/numbers/round', (req, res) => {
  const num = req.body.a;

  if (num == undefined) {
    res.status(400).json({ error: 'Parameter required.' });
  } else if (Number.isNaN(parseInt(num))) {
    res.status(400).json({ error: 'Parameter must be a valid number.' });
  } else {
    res.status(200).json({ result: round(num) });
  }
});

app.post('/numbers/absolute', (req, res) => {
  const num = req.body.a;

  if (num == undefined) {
    res.status(400).json({ error: 'Parameter required.' });
  } else if (Number.isNaN(parseInt(num))) {
    res.status(400).json({ error: 'Parameter must be a valid number.' });
  } else {
    res.status(200).json({ result: absolute(num) });
  }
});

app.post('/numbers/quotient', (req, res) => {
  const num1 = req.body.a;
  const num2 = req.body.b;

  if (num2 == 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if ((!num1 || !num2) && num1 != 0) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(num1)) || Number.isNaN(parseInt(num2))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: quotient(num1, num2) });
  }
});

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

// app.post('/arrays/remove-element', (req, res) => {
//   res.status(200).json({ result: removeNthElement2(req.query.index, req.body.array) });
// });

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

module.exports = app;
