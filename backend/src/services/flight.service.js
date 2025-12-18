const flightRepository = require('../repositories/flight.repository');

/**
 * Выполняет поиск рейсов.
 * @param {string} origin - Код IATA отправления.
 * @param {string} destination - Код IATA прибытия.
 * @param {string} date - Дата отправления (YYYY-MM-DD).
 * @returns {Promise<Array>}
 */
async function findFlights(origin, destination, date) {
  // Простая валидация кодов IATA (3 буквы)
  if (!/^[A-Z]{3}$/.test(origin) || !/^[A-Z]{3}$/.test(destination)) {
    throw new Error('Invalid IATA codes. Must be 3 uppercase letters.');
  }

  // Простая валидация формата даты
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error('Invalid date format. Must be YYYY-MM-DD.');
  }

  const flights = await flightRepository.searchFlights(origin, destination, date);

  // Бизнес-логика: добавление информации о доступности мест и цене (имитация)
  const flightsWithDetails = flights.map(flight => ({
    ...flight,
    available_seats: Math.floor(Math.random() * 150) + 50, // Имитация
    base_price: (Math.random() * 500 + 100).toFixed(2), // Имитация
  }));

  return flightsWithDetails;
}

module.exports = {
  findFlights,
};