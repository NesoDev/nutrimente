<template>
  <div class="app">
    <div class="head">
      <div class="logo">
        <img src="./assets/logo-nutrimente.png" alt="">
        <h2>Nutrimente</h2>
      </div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <div></div>
    </div>
      <router-view />
  </div>
</template>

<style>
.app {
  position: relative;
  width: 100%;
  height: 100%;
  background: #F3F1EA;
  display: flex;
  flex-direction: column;
}

.head {
  position:fixed;
  top: 0;
  width: 100%;
  height: 75px;
  background: black;
}

</style>
