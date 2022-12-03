const express = require('express');

const booleansController = require('../controllers/booleans');

const booleansRoute = express.Router();

booleansRoute.post('/negate', booleansController.negateValues);
booleansRoute.post('/truthiness', booleansController.truthinessTest);
booleansRoute.get('/is-odd/:number', booleansController.isOddNum);
booleansRoute.get('/:string/starts-with/:charater', booleansController.startsWithChar);

module.exports = booleansRoute;
