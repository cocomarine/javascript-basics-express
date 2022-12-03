const express = require('express');

const arraysController = require('../controllers/arrays');

const arraysRoute = express.Router();

arraysRoute.post('/element-at-index/:number', arraysController.getElementNthIndex);
arraysRoute.post('/to-string', arraysController.arrayToString);
arraysRoute.post('/append', arraysController.appendToArray);
arraysRoute.post('/starts-with-vowel', arraysController.elementsStartWithVowel);
arraysRoute.post('/remove-element', arraysController.removeNthElement);

module.exports = arraysRoute;
