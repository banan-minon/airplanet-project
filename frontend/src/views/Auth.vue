<template>
  <div class="centered-view">
    <div class="auth-card">
      <h2>Войти</h2>
      <p>С возвращением в <span>airplanet</span></p>
      
      <form class="form-body" @submit.prevent>
        <div class="input-item">
          <label>E-mail</label>
          <input type="email" placeholder="mail@example.com">
        </div>
        <div class="input-item">
          <label>Пароль</label>
          <input type="password" placeholder="••••••••">
        </div>
        <button class="btn-submit">Войти</button>
      </form>
      
      <div class="switch-text">
        Нет аккаунта? <a href="#" @click.prevent="$emit('switch-page', 'register')" class="hover-btn">Создать</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['switch-page'])
</script>

<style scoped>
.centered-view { flex: 1; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    padding: 20px; 
}
.auth-card { 
    background: #fff; 
    width: 100%; 
    max-width: 380px; 
    padding: 45px; 
    border-radius: 24px; 
    box-shadow: 0 10px 40px rgba(0,0,0,0.03); 
    border: 1px solid #f0f0f0; 
    text-align: center; 
}
.auth-card h2 { 
    font-size: 30px; 
    margin: 0 0 10px; 
    font-weight: 800; 
}
.auth-card p span { 
    color: #5f61f5; 
    font-weight: 700; 
}
.form-body { 
    display: flex; 
    flex-direction: column; 
    gap: 18px; 
    margin-top: 30px; 
    text-align: left; 
}
.input-item label { font-size: 11px; 
    font-weight: 700; 
    color: #5f61f5; 
    text-transform: uppercase; 
    margin-bottom: 6px; 
    display: block;     
}
.hover-btn {
    transition: 0.3s;
}
.hover-btn:hover {
    color: #4548f7;
}
.input-item input { width: 100%; padding: 14px; border: 1px solid #eee; border-radius: 12px; background: #f9f9ff; box-sizing: border-box; }
.btn-submit { 
    background: #5f61f5; 
    color: white; 
    border: none; 
    padding: 16px; 
    border-radius: 12px; 
    font-weight: 700; 
    cursor: pointer; 
    margin-top: 10px; 
    transition: 0.5s;
}
.btn-submit:hover {
        background-color: #4548f7;
}
.switch-text { margin-top: 25px; font-size: 14px; color: #888; }
.switch-text a { color: #5f61f5; text-decoration: none; font-weight: 600; }
</style>