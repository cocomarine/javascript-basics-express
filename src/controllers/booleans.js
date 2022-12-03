const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

const negateValues = (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
};

const truthinessTest = (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
};

const isOddNum = (req, res) => {
  const num = parseInt(req.params.number, 10);

  if (Number.isNaN(num)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(num) });
  }
};

const startsWithChar = (req, res) => {
  const char = req.params.charater;

  if (char.length === 1) {
    res.status(200).json({ result: startsWith(char, req.params.string) });
  } else {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
};

module.exports = {
  negateValues,
  truthinessTest,
  isOddNum,
  startsWithChar,
};
