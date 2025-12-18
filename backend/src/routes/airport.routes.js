const express = require('express');
const router = express.Router();
const airportController = require('../controllers/airport.controller');

// Маршрут для получения всех аэропортов
router.get('/', airportController.getAirports);

// Маршрут для получения аэропорта по ID или коду IATA
router.get('/:identifier', airportController.getAirportByIdentifier);

module.exports = router;