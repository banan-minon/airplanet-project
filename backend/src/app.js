// src/app.js (Обновлено)
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Подключение маршрутов
const airportRoutes = require('./routes/airport.routes');
const flightRoutes = require('./routes/flight.routes');

// Middleware для обработки JSON-тела запросов
app.use(express.json());

// Базовый маршрут для проверки работоспособности
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Flight Booking Backend API is running!' });
});

// Подключение маршрутов для API v1
app.use('/api/v1/airports', airportRoutes);
app.use('/api/v1/flights', flightRoutes);

// Обработка 404 ошибок
app.use((req, res, next) => {
    res.status(404).json({ message: 'Resource not found' });
});

// Глобальный обработчик ошибок (для Express)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});