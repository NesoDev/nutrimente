<template>
  <div class="app">
    <div class="head">
      <div class="logo">
        <img src="./assets/logo-nutrimente.png" alt="">
        <h2>Nutrimente</h2>
      </div>
      <nav>
        <router-link to="/" exact-active-class="active">Inicio</router-link>
        <div class="circle" />
        <router-link to="/about" exact-active-class="active">Nosotros</router-link>
      </nav>
      <div></div>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.app {
  position: relative;
  width: 100%;
  height: 100%;
  background: #F3F1EA;
  display: flex;
  flex-direction: column;
}

.head {
  position: fixed;
  top: 0;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 50px;
  z-index: 999;

  .logo {
    width: fit-content;
    height: 50px;
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    gap: 10px;
    border-radius: 9999px;

    img {
      width: 20px;
      aspect-ratio: 1/1;
    }

    h2 {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 15px;
    }
  }

  nav {
    position: absolute;
    left: 50%;
    transform: translateX(-77%);
    width: fit-content;
    height: 50px;
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    gap: 15px;
    border-radius: 9999px;

    a {
      text-decoration: none;
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 15px;
      color: #C6C6C6;
      transition: color 0.3s ease;
    }

    a.active {
      color: #767B85;
    }

    .circle {
      width: 10px;
      aspect-ratio: 1/1;
      background: #F4F4F4;
      border-radius: 9999px;
    }
  }
}

@media (max-width: 768px) {
    .head { 
        padding: 20px 10px;
    }
}
</style>
