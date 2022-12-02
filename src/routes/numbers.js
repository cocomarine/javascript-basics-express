const express = require('express');

const numbersController = require('../controllers/numbers');

const numbersRoute = express.Router();

numbersRoute.get('/add/:number1/and/:number2', numbersController.addNums);
numbersRoute.get('/subtract/:number2/from/:number1', numbersController.subNums);
numbersRoute.post('/multiply', numbersController.multiplyNums);
numbersRoute.post('/divide', numbersController.divideNums);
numbersRoute.post('/remainder', numbersController.remainerNums);
numbersRoute.post('/power', numbersController.powerNum);
numbersRoute.post('/round', numbersController.roundNum);
numbersRoute.post('/absolute', numbersController.absoluteNum);
numbersRoute.post('/quotient', numbersController.quotientNums);

module.exports = numbersRoute;
