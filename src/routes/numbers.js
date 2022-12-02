const express = require('express');

const numbersController = require('../controllers/numbers');

const numbersRoute = express.Router();

numbersRoute.get('/add/:number1/and/:number2', numbersController.addNums);
numbersRoute.get('/subtract/:number2/from/:number1', numbersController.subNums);

module.exports = numbersRoute;
