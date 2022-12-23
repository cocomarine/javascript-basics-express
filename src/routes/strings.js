const express = require('express');
const stringsController = require('../controllers/strings');

const stringsRoute = express.Router();
stringsRoute.get('/hello/:string', stringsController.hello);
stringsRoute.get('/upper/:string', stringsController.upper);
stringsRoute.get('/lower/:string', stringsController.lower);
stringsRoute.get('/first-characters/:string', stringsController.firstChar);
stringsRoute.get('/count/:string', stringsController.countChar);

module.exports = stringsRoute;
