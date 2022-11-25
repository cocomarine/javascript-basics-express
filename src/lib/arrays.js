const getNthElement = (index, array) => {
  if (index < array.length) {
    return array[index];
  } else {
    return array[index-array.length];
  }
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(x => x.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(x => x.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(x => x.split('').reverse().join(''));
};

const onlyEven = numbers => {
  return numbers.filter(x => x % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter(x => array.indexOf(x) !== index);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(x => x.charAt(0).match(/[aeiou]/gi));
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((prevVal, currVal) => prevVal + currVal);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};