const express = require('express');

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
  countCharacters,
} = require('./lib/strings');

const { add, subtract } = require('./lib/numbers');

const app = express();

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

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(num1, num2) });
  }
});

app.get('/numbers/subtract/:number2/from/:number1', (req, res) => {
  const num1 = parseInt(req.params.number1, 10);
  const num2 = parseInt(req.params.number2, 10);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(num1, num2) });
  }
});

module.exports = app;
