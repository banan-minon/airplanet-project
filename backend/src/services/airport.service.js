// src/services/airport.service.js
const airportRepository = require('../repositories/airport.repository');

/**
 * Получает список всех аэропортов.
 * @returns {Promise<Array>}
 */
async function getAllAirports() {
  // Здесь может быть логика кэширования или дополнительная фильтрация
  const airports = await airportRepository.findAll();
  return airports;
}

/**
 * Получает детали аэропорта по ID или коду IATA.
 * @param {string|number} identifier - ID или код IATA.
 * @returns {Promise<Object|null>}
 */
async function getAirportDetails(identifier) {
  let airport;
  if (typeof identifier === 'number' || /^\d+$/.test(identifier)) {
    airport = await airportRepository.findById(parseInt(identifier));
  } else if (typeof identifier === 'string' && identifier.length === 3) {
    airport = await airportRepository.findByIataCode(identifier.toUpperCase());
  } else {
    throw new Error('Invalid airport identifier. Must be ID or 3-letter IATA code.');
  }

  if (!airport) {
    return null;
  }

  // Форматирование данных перед отправкой
  return {
    id: airport.id,
    name: airport.name,
    code: airport.iata_code,
    cityId: airport.city_id,
    timezone: airport.timezone,
  };
}

module.exports = {
  getAllAirports,
  getAirportDetails,
};