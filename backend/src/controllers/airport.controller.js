const airportService = require('../services/airport.service');

/**
 * GET /api/v1/airports
 * Получить список всех аэропортов.
 */
async function getAirports(req, res) {
  try {
    const airports = await airportService.getAllAirports();
    res.status(200).json(airports);
  } catch (error) {
    console.error('Error fetching airports:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

/**
 * GET /api/v1/airports/:identifier
 * Получить детали аэропорта по ID или коду IATA.
 */
async function getAirportByIdentifier(req, res) {
  const { identifier } = req.params;
  try {
    const airport = await airportService.getAirportDetails(identifier);

    if (!airport) {
      return res.status(404).json({ message: 'Airport not found' });
    }

    res.status(200).json(airport);
  } catch (error) {
    if (error.message.includes('Invalid airport identifier')) {
      return res.status(400).json({ message: error.message });
    }
    console.error('Error fetching airport details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getAirports,
  getAirportByIdentifier,
};