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
} = require('../lib/numbers');

const addNums = (req, res) => {
  const num1 = parseInt(req.params.number1, 10);
  const num2 = parseInt(req.params.number2, 10);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(num1, num2) });
  }
};

const subNums = (req, res) => {
  const num1 = parseInt(req.params.number1, 10);
  const num2 = parseInt(req.params.number2, 10);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(num1, num2) });
  }
};

const multiplyNums = (req, res) => {
  const num1 = req.body.a;
  const num2 = req.body.b;

  if (num1 === undefined || num2 === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(num1, 10)) || Number.isNaN(parseInt(num2, 10))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(num1, num2) });
  }
};

const divideNums = (req, res) => {
  const num1 = req.body.a;
  const num2 = req.body.b;

  if (num2 === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if ((!num1 || !num2) && num1 !== 0) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(num1, 10)) || Number.isNaN(parseInt(num2, 10))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(num1, num2) });
  }
};

const remainerNums = (req, res) => {
  const num1 = req.body.a;
  const num2 = req.body.b;

  if (num2 === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if ((!num1 || !num2) && num1 !== 0) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(num1, 10)) || Number.isNaN(parseInt(num2, 10))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(num1, num2) });
  }
};

const powerNum = (req, res) => {
  const num1 = req.body.a;
  const num2 = req.body.b;

  if (num1 === undefined || num2 === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(num1, 10)) || Number.isNaN(parseInt(num2, 10))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: power(num1, num2) });
  }
};

const roundNum = (req, res) => {
  const num = req.body.a;

  if (num === undefined) {
    res.status(400).json({ error: 'Parameter required.' });
  } else if (Number.isNaN(parseInt(num, 10))) {
    res.status(400).json({ error: 'Parameter must be a valid number.' });
  } else {
    res.status(200).json({ result: round(num) });
  }
};

const absoluteNum = (req, res) => {
  const num = req.body.a;

  if (num === undefined) {
    res.status(400).json({ error: 'Parameter required.' });
  } else if (Number.isNaN(parseInt(num, 10))) {
    res.status(400).json({ error: 'Parameter must be a valid number.' });
  } else {
    res.status(200).json({ result: absolute(num) });
  }
};

const quotientNums = (req, res) => {
  const num1 = req.body.a;
  const num2 = req.body.b;

  if (num2 === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if ((!num1 || !num2) && num1 !== 0) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(num1, 10)) || Number.isNaN(parseInt(num2, 10))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: quotient(num1, num2) });
  }
};

module.exports = {
  addNums,
  subNums,
  multiplyNums,
  divideNums,
  remainerNums,
  powerNum,
  roundNum,
  absoluteNum,
  quotientNums,
};
