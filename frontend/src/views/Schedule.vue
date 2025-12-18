<template>
  <div class="schedule-page">
    <div class="container">
      <div class="schedule-header">
        <h1>Расписание рейсов</h1>
        <p>Актуальная информация о вылетах и прибытиях <span>airplanet</span></p>
      </div>

      <div class="table-container">
        <table class="flights-table">
          <thead>
            <tr>
              <th>Рейс</th>
              <th>Откуда</th>
              <th>Куда</th>
              <th>Вылет</th>
              <th>Прибытие</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="flight in flights" :key="flight.id">
              <td class="flight-number">{{ flight.number }}</td>
              <td>{{ flight.from }}</td>
              <td>{{ flight.to }}</td>
              <td>{{ flight.departure }}</td>
              <td>{{ flight.arrival }}</td>
              <td>
                <span :class="['status-badge', flight.statusType]">
                  {{ flight.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const flights = ref([]); // Изначально список пуст
const loading = ref(true);

// Функция для получения данных с бэкенда
const fetchFlights = async () => {
  try {
    // Вызываем маршрут, который ты создал в src/routes/flight.routes.js
    const response = await axios.get('http://localhost:3000/api/v1/flights/search', {
      params: {
        origin: 'MOW',      // Код аэропорта
        destination: 'LED', 
        date: '2025-12-25'  // Формат YYYY-MM-DD
      }
    });
    
    // Записываем полученные рейсы в массив
    flights.value = response.data.flights;
  } catch (error) {
    console.error('Ошибка при загрузке рейсов:', error);
  } finally {
    loading.value = false;
  }
};

// Вызываем функцию при открытии страницы
onMounted(() => {
  fetchFlights();
});
</script>

<style scoped>
.schedule-page {
  padding: 60px 0;
  flex: 1;
}

.schedule-header {
  margin-bottom: 40px;
}

.schedule-header h1 { font-size: 36px; font-weight: 800; margin-bottom: 10px; }
.schedule-header p span { color: #5f61f5; font-weight: 700; }

.table-container {
  background: white;
  border-radius: 20px;
  border: 1px solid #eee;
  box-shadow: 0 10px 30px rgba(0,0,0,0.02);
  overflow: hidden;
}

.flights-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.flights-table th {
  background: #f9f9ff;
  padding: 20px;
  font-size: 13px;
  text-transform: uppercase;
  color: #5f61f5;
  letter-spacing: 0.5px;
  font-weight: 700;
}

.flights-table td {
  padding: 20px;
  border-bottom: 1px solid #f5f5f5;
  font-size: 15px;
  color: #333;
}

.flight-number {
  font-weight: 700;
  color: #1a1a1a;
}

/* Статусы */
.status-badge {
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
}

.pending { background: #f0f0f0; color: #666; }
.success { background: #e6fcf5; color: #0ca678; }
.warning { background: #fff9db; color: #f08c00; }
.info { background: #e7f5ff; color: #1971c2; }

@media (max-width: 768px) {
  .flights-table thead { display: none; }
  .flights-table tr { display: block; border-bottom: 1px solid #eee; padding: 10px; }
  .flights-table td { display: block; padding: 5px 10px; border: none; }
  .flights-table td::before { content: attr(data-label); font-weight: bold; }
}
</style>