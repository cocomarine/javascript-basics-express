const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
  countCharacters,
} = require('../lib/strings');

const hello = (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
};

const upper = (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
};

const lower = (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
};

const firstChar = (req, res) => {
  if (req.query.length) {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  }
};

const countChar = (req, res) => {
  res.status(200).json({ result: countCharacters(req.params.string) });
};

module.exports = {
  hello,
  upper,
  lower,
  firstChar,
  countChar,
};
