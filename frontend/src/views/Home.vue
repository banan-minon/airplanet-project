<template>
  <main class="main-content">
    <div class="container center-wrapper">
      <div class="hero-text">
        <h1>Летай с <span>Airplanet</span></h1>
        <p>Простая система бронирования и управления рейсами.</p>
      </div>

      <div class="search-panel">
        <div class="search-field">
          <label>Откуда</label>
          <input type="text" placeholder="Город вылета">
        </div>
        <div class="search-field">
          <label>Куда</label>
          <input type="text" placeholder="Город прибытия">
        </div>
        <div class="search-field">
          <label>Дата</label>
          <input type="date">
        </div>
        <button class="btn-find">Найти</button>
      </div>
    </div>
  </main>
</template>
``
<style scoped>

  :root {
  --primary: #5f61f5;
  --bg: #fcfcff;
  --hover-blue:#4548f7;
}
.main-content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.center-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}
.hero-text h1 { font-size: 56px; font-weight: 800; margin-bottom: 15px; }
.hero-text h1 span { color: var(--primary); }
.hero-text p { font-size: 19px; color: #666; margin-bottom: 40px; }

.search-panel {
  background: white;
  border: 1px solid #ddd;
  border-radius: 16px;
  display: flex;
  width: 100%;
  max-width: 900px;
  box-shadow: 0 10px 30px rgba(95, 97, 245, 0.08);
  overflow: hidden;
}
.search-field { flex: 1; 
  padding: 20px; 
  border-right: 1px solid #eee; 
  text-align: left; 
}
.search-field:last-child { 
  border-right: none; 
}
.search-field label { 
  font-size: 11px; 
  font-weight: 700; 
  color: var(--primary); 
  text-transform: uppercase; 
}
.search-field input { 
  border: none; 
  outline: none; 
  width: 100%; 
  font-size: 16px; 
  margin-top: 5px; 
}
.btn-find { 
  background-color: #fd3e5e; 
  color: white; 
  border: none; 
  padding: 0 40px; 
  font-weight: 700; 
  cursor: pointer; 
  transition: 0.3s;
}

.btn-find:hover {
  background-color: #fd1239;
}

@media (max-width: 850px) {
  .search-panel { flex-direction: column; }
  .search-field { border-right: none; border-bottom: 1px solid #eee; }
}
</style>