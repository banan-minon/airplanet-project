const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flight.controller');

// Маршрут для поиска рейсов
router.get('/search', flightController.searchFlights);

module.exports = router;