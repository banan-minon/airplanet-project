// src/repositories/airport.repository.js
const db = require('../config/db.config');

/**
 * Получает все аэропорты.
 * @returns {Promise<Array>} Список аэропортов.
 */
async function findAll() {
  const sql = 'SELECT id, name, code, city_id, iata_code, timezone FROM airports ORDER BY name';
  const { rows } = await db.query(sql);
  return rows;
}

/**
 * Получает аэропорт по его ID.
 * @param {number} id - ID аэропорта.
 * @returns {Promise<Object|null>} Объект аэропорта или null.
 */
async function findById(id) {
  const sql = 'SELECT id, name, code, city_id, iata_code, timezone FROM airports WHERE id = $1';
  const { rows } = await db.query(sql, [id]);
  return rows[0] || null;
}

/**
 * Получает аэропорт по коду IATA.
 * @param {string} iataCode - Код IATA (3 символа).
 * @returns {Promise<Object|null>} Объект аэропорта или null.
 */
async function findByIataCode(iataCode) {
  const sql = 'SELECT id, name, code, city_id, iata_code, timezone FROM airports WHERE iata_code = $1';
  const { rows } = await db.query(sql, [iataCode]);
  return rows[0] || null;
}

module.exports = {
  findAll,
  findById,
  findByIataCode,
};