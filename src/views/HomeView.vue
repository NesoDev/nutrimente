<template>
  <section class="hero">
    <header class="hero-header">
      <img src="@/assets/logo.svg" alt="Nutrimente Logo" class="logo" />
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/about">Nosotros</router-link>
        <router-link to="/contact">Contactos</router-link>
      </nav>
    </header>
    <div class="hero-content">
      <h1>
        <span class="highlight">Transforma la alimentación</span>
        <br />
        y el aprendizaje de tu hijo
      </h1>
      <p>
        En NutriMente, sabemos que una buena alimentación y el juego son clave para el desarrollo de los niños.
        Por eso, creamos una plataforma digital con recursos prácticos, confiables y validados por expertos, para ayudar a padres y cuidadores a mejorar la alimentación y el aprendizaje de sus hijos.
      </p>
      <div class="video">
        <img src="@/assets/portada.jpg" alt="Video portada" />
        <button class="play-button">▶</button>
      </div>
    </div>
    <div class="decorations">
     <img src="@/assets/bear.png" alt="Bear" class="bear" />
      <img src="@/assets/watermelon.png" alt="Watermelon" class="watermelon" />
      <img src="@/assets/leaves.png" alt="Leaves" class="leaves" />
    </div>
  </section>
</template>

<script setup>
// Aquí no necesitas lógica todavía
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 2rem;
}
.hero-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  height: 40px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
.hero-content h1 {
  font-size: 2rem;
  margin: 1rem 0;
}
.highlight {
  background: #d9f24a;
  padding: 0 5px;
}
.video {
  position: relative;
  display: inline-block;
  margin-top: 1rem;
}
.video img {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
}
.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: none;
  font-size: 2rem;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.decorations {
  margin-top: 2rem;
}
.bear, .watermelon, .leaves {
  height: 60px;
  margin: 0 10px;
}
</style>
