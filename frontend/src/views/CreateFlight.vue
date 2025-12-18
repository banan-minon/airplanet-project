<template>
  <div class="create-flight-page">
    <div class="container">
      <div class="form-card">
        <div class="form-header">
          <div class="icon-circle">✈️</div>
          <h1>Создание нового рейса</h1>
          <p>Заполните данные для добавления рейса в систему <span>airplanet</span></p>
        </div>

        <form class="flight-form" @submit.prevent="handleCreate">
          <div class="form-grid">
            <div class="input-group">
              <label>Номер рейса</label>
              <input type="text" placeholder="Напр: AP-123" required>
            </div>
            
            <div class="input-group">
              <label>Статус</label>
              <select>
                <option value="pending">Ожидается</option>
                <option value="info">Регистрация</option>
                <option value="success">Вылетел</option>
              </select>
            </div>

            <div class="input-group">
              <label>Город отправления</label>
              <input type="text" placeholder="Откуда" required>
            </div>

            <div class="input-group">
              <label>Город прибытия</label>
              <input type="text" placeholder="Куда" required>
            </div>

            <div class="input-group">
              <label>Время вылета</label>
              <input type="time" required>
            </div>

            <div class="input-group">
              <label>Время прибытия</label>
              <input type="time" required>
            </div>
          </div>

          <button type="submit" class="btn-create">Опубликовать рейс</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleCreate = () => {
  alert('Рейс успешно создан! (Имитация бэкенда)');
};
</script>

<style scoped>
.create-flight-page {
  padding: 60px 0;
  flex: 1;
  display: flex;
  align-items: center;
}

.form-card {
  background: white;
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
  border-radius: 30px;
  border: 1px solid #eee;
  box-shadow: 0 20px 60px rgba(0,0,0,0.03);
}

.form-header {
  text-align: center;
  margin-bottom: 40px;
}

.icon-circle {
  width: 60px;
  height: 60px;
  background: #f0f1ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin: 0 auto 20px;
}

.form-header h1 { font-size: 32px; font-weight: 800; margin-bottom: 10px; }
.form-header p span { color: #5f61f5; font-weight: 700; }

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 35px;
}

.input-group label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  color: #5f61f5;
  text-transform: uppercase;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}

.input-group input, .input-group select {
  width: 100%;
  padding: 14px 18px;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  background: #f9f9ff;
  font-size: 15px;
  box-sizing: border-box;
}

.btn-create {
  width: 100%;
  background: #5f61f5;
  color: white;
  border: none;
  padding: 18px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
}

.btn-create:hover {
  background: #4a4cd9;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(95, 97, 245, 0.2);
}

@media (max-width: 600px) {
  .form-grid { grid-template-columns: 1fr; }
  .form-card { padding: 30px 20px; }
}
</style>