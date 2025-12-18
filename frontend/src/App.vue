<script setup>
import { ref } from 'vue'

import Home from './views/Home.vue'
import Auth from './views/Auth.vue'
import Register from './views/Registr.vue'
import Schedule from './views/Schedule.vue'
import CreateFlight from './views/CreateFlight.vue'

const currentPage = ref('home')

const setPage = (pageName) => {
  currentPage.value = pageName
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="page-container">
    <header class="navbar">
      <div class="container nav-content">
        <div class="nav-left">
          <a href="#" class="logo" @click.prevent="setPage('home')">
            <span>air</span>planet
          </a>
          
          <nav class="main-nav">
            <a 
              href="#" 
              :class="['nav-link', { active: currentPage === 'create' }]" 
              @click.prevent="setPage('create')"
            >
              Создание рейсов
            </a>
            <a 
              href="#" 
              :class="['nav-link', { active: currentPage === 'schedule' }]" 
              @click.prevent="setPage('schedule')"
            >
              Расписание
            </a>
          </nav>
        </div>
        
        <div class="nav-right">
          <button 
            class="btn-auth" 
            @click="setPage('auth')"
          >
            Войти
          </button>
        </div>
      </div>
    </header>

    <main class="content-wrapper">
      <Home v-if="currentPage === 'home'" />
      
      <Auth 
        v-else-if="currentPage === 'auth'" 
        @switch-page="setPage" 
      />
      
      <Register 
        v-else-if="currentPage === 'register'" 
        @switch-page="setPage" 
      />
      
      <Schedule 
        v-else-if="currentPage === 'schedule'" 
      />
      
      <CreateFlight 
        v-else-if="currentPage === 'create'" 
      />
    </main>

    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-info">
          <p>&copy; 2025 Airplanet Airlines. Все права защищены.</p>
          <span>Учебный проект по веб-разработке</span>
        </div>
        <div class="footer-links">
          <a href="#" @click.prevent="setPage('home')">Главная</a>
          <a href="#" @click.prevent="setPage('schedule')">Расписание</a>
          <a href="#">Поддержка</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;800&display=swap');

:root {
  --primary: #5f61f5;
  --primary-hover: #4a4cd9;
  --bg-color: #fcfcff;
  --text-main: #1a1a1a;
  --text-muted: #666;
  --border-color: #eee;
  --white: #ffffff;
}

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  -webkit-font-smoothing: antialiased;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  font-family: 'Fira Sans', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-main);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 25px;
  width: 100%;
  box-sizing: border-box;
}

.navbar {
  height: 80px;
  background: var(--white);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.02);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 45px;
}

.logo {
  font-size: 26px;
  font-weight: 800;
  text-decoration: none;
  color: var(--text-main);
  transition: transform 0.2s;
}

.logo:hover { transform: scale(1.02); }
.logo span { color: var(--primary); }

.main-nav {
  display: flex;
  gap: 30px;
}

.nav-link {
  text-decoration: none;
  color: var(--text-muted);
  font-weight: 500;
  font-size: 15px;
  transition: all 0.2s ease;
  position: relative;
}

.nav-link:hover, .nav-link.active {
  color: var(--primary);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -31px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--primary);
  border-radius: 3px 3px 0 0;
}

.btn-auth {
  background: var(--primary);
  color: var(--white);
  border: none;
  padding: 12px 28px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-auth:hover {
  background: var(--primary-hover);
  box-shadow: 0 5px 15px rgba(95, 97, 245, 0.25);
  transform: translateY(-1px);
}

.content-wrapper {
  flex: 1; 
  display: flex;
  flex-direction: column;
}

.footer {
  background: var(--white);
  border-top: 1px solid var(--border-color);
  padding: 35px 0;
  margin-top: auto;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-info p { margin: 0; font-weight: 600; color: #888; }
.footer-info span { font-size: 12px; color: #bbb; }

.footer-links { display: flex; gap: 25px; }
.footer-links a {
  text-decoration: none;
  color: #aaa;
  font-size: 14px;
  transition: color 0.2s;
}
.footer-links a:hover { color: var(--primary); }

@media (max-width: 850px) {
  .main-nav { display: none; } 
  .logo { font-size: 22px; }
  .navbar { height: 70px; }
}
</style>