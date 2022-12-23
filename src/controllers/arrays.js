const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

const getElementNthIndex = (req, res) => {
  res.status(200).json({ result: getNthElement(parseInt(req.params.number, 10), req.body.array) });
};

const arrayToString = (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
};

const appendToArray = (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
};

const elementsStartWithVowel = (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
};

const removeNthElement = (req, res) => {
  const indexNum = req.query.index;

  if (indexNum === undefined) {
    res.status(200).json({ result: removeNthElement2(0, req.body.array) });
  } else {
    res.status(200).json({ result: removeNthElement2(parseInt(indexNum, 10), req.body.array) });
  }
};

module.exports = {
  getElementNthIndex,
  arrayToString,
  appendToArray,
  elementsStartWithVowel,
  removeNthElement,
};
