const {
  add,
  subtract,
  // multiply,
  // divide,
  // remainder,
  // power,
  // round,
  // absolute,
  // quotient,
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

module.exports = {
  addNums,
  subNums,
};
