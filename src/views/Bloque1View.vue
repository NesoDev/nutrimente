<template>
  <div class="page-container">
    <div class="clouds-background">
    </div>
    <div class="grass-decoration"></div>

    <!-- Content wrapper with side images -->
    <div class="content-wrapper">
      <!-- Left side images -->
      <div class="side-images left-images">
        <img src="@/assets/bloque1/image1.png" alt="Decorative image 1" class="side-image">
        <img src="@/assets/bloque1/image2.png" alt="Decorative image 2" class="side-image">
        <img src="@/assets/bloque1/image3.png" alt="Decorative image 3" class="side-image">
        <img src="@/assets/bloque1/image4.png" alt="Decorative image 4" class="side-image">
        <img src="@/assets/bloque1/image5.png" alt="Decorative image 5" class="side-image">
      </div>

      <!-- Main content -->
      <main class="main-content">
        <h1 class="main-title">
          <span class="title-part1">Bloque 1:</span>
          <span class="title-part2">Alimentando el futuro</span>
          <span class="title-part3">desde los primeros años</span>
        </h1>
        <p class="description">
          ¿Sabías que está comprobado científicamente que un niño que <span class="highlight-1">se alimenta de manera saludable</span> crece sano, con una <span class="highlight-2">mayor capacidad de aprendizaje, mayor capacidad de atención, mejores notas en la escuela</span>, entre más beneficios?
      </p>
        <div class="video-container">
          <video
            ref="videoPlayer"
            class="video-player"
            controls
            :src="cloudinaryVideoUrl"
            :poster="cloudinaryThumbnailUrl"
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </main>

      <!-- Right side images -->
      <div class="side-images right-images">
        <img src="@/assets/bloque1/image6.png" alt="Decorative image 6" class="side-image">
        <img src="@/assets/bloque1/image7.png" alt="Decorative image 7" class="side-image">
        <img src="@/assets/bloque1/image8.png" alt="Decorative image 8" class="side-image">
        <img src="@/assets/bloque1/image9.png" alt="Decorative image 9" class="side-image">
        <img src="@/assets/bloque1/image10.png" alt="Decorative image 10" class="side-image">
      </div>
    </div>
    <section class="bottom-section">
      <div class="info-bar">
        <div class="info-text">
          Comiendo bien, crecerás mejor
        </div>
        <div class="info-icon" @click="toggleCard">
          <svg
            :class="{ 'rotated': showCard }"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <transition name="fade">
        <div v-if="showCard" class="content-card-expanded">
          <!-- Video Description -->
          <div class="video-description-section">
            <h3 class="section-subtitle">Sobre este video</h3>
            <p class="video-desc-text">
              La alimentación en los primeros años moldea el cerebro y el aprendizaje, por eso aquí se explica qué nutrientes clave sostienen la atención y la memoria. Además, veremos cómo la anemia, saltarse el desayuno o abusar de ultraprocesados restan energía y rendimiento. Proponemos cambios simple, por ejemplo, qué incluir en el plato y cómo organizar las comidas. Esto con el fin de impulsar el ánimo, la concentración y el aprendizaje de tu hijo.
            </p>
          </div>

          <!-- Curious Facts Section -->
          <div class="curious-facts-section">
            <h3 class="section-subtitle">¿Sabías que...?</h3>
            <div class="facts-grid">
              <div class="fact-item">
                <img src="../assets/horse_finger.png" alt="Mascota" class="fact-mascot">
                <p class="fact-text">Al jugar con bloques, el niño se divierte y desarrolla exploración, relaciones, resolución y lógica.</p>
              </div>
              <div class="fact-item">
                <img src="../assets/animal2_finger.png" alt="Mascota" class="fact-mascot">
                <p class="fact-text">El hierro es vital para el desarrollo cognitivo, favorece conexiones cerebrales para el aprendizaje y memoria.</p>
              </div>
              <div class="fact-item">
                <img src="../assets/jaguar.png" alt="Mascota" class="fact-mascot">
                <p class="fact-text">Los niños que tienen una mala dieta, tienen dificultades en la escuela, tanto en matemática como en aprendizaje verbal.</p>
              </div>
              <div class="fact-item">
                <img src="../assets/animal4_finger.png" alt="Mascota" class="fact-mascot">
                <p class="fact-text">La obesidad afecta directamente al desarrollo de tu hijo, generando problemas en la atención.</p>
              </div>
            </div>
          </div>
        </div>
      </transition>

    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutContent',
  data() {
    return {
      cloudName: 'dlejpox8a',
      cloudinaryVideoId: 'Video_1_corregido_1_ewlrfy',
      showCard: false,
    };
  },
  computed: {
    cloudinaryVideoUrl() {
      return `https://res.cloudinary.com/${this.cloudName}/video/upload/${this.cloudinaryVideoId}.mp4`;
    },
    cloudinaryThumbnailUrl() {
      return `https://res.cloudinary.com/${this.cloudName}/video/upload/f_jpg,q_auto,w_800/${this.cloudinaryVideoId}.jpg`;
    },
  },
  methods: {
    toggleCard() {
      this.showCard = !this.showCard;
    }
  }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');

@font-face {
    font-family: "BeachDay";
    src: url("@/assets/fonts/beachday.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    unicode-range: U+0041-005A, U+0061-007A;
}

.page-container {
  position: relative;
  font-family: Arial, sans-serif;
  background:
              repeating-linear-gradient(45deg, #f6faf1 0 8px, transparent 8px 20px);
  background-size: 20px 20px, auto;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  padding: 50px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  transition: background 1s ease-in-out;
  box-sizing: border-box;
}




@keyframes float-cloud {
  0%, 100% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(30px) translateY(-20px);
  }
}

/* Content wrapper with Grid layout */
.content-wrapper {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 30px;
  align-items: start;
  margin-bottom: 40px;
}

/* Side images containers */
.side-images {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 0;
}

.side-image {
  width: 100%;
  max-width: 180px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  object-fit: cover;
}

.side-image:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.left-images {
  justify-content: flex-start;
}

.right-images {
  justify-content: flex-start;
}

.main-content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 900px;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
}

.main-title {
  font-family: "Bubblegum Sans", "BeachDay", cursive, sans-serif;
  font-weight: 400;
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.2;
  letter-spacing: 2px;

  .title-part1 {
    display: inline-block;
    font-size: 60px;
    color: white;
    background-color: #f1b33f;
    padding: 8px 20px;
    border-radius: 12px;
    -webkit-text-stroke: 0px;
    text-shadow: none;
    transform: rotate(-1deg);
    box-shadow: 0 4px 12px rgba(241, 179, 63, 0.3);
    margin-bottom: 10px;
  }

  .title-part2 {
    display: block;
    font-size: 70px;
    color: #8dba3f;
    -webkit-text-stroke: 4px white;
    text-stroke: 4px white;
    paint-order: stroke fill;
    text-shadow: 3px 3px 0px #f1b33f,
                 5px 5px 0px #f1b33f;
    transform: rotate(-2deg);
  }

  .title-part3 {
    display: block;
    font-size: 60px;
    color: #70cdba;
    -webkit-text-stroke: 3px white;
    text-stroke: 3px white;
    paint-order: stroke fill;
    text-shadow: 3px 3px 0px #8dba3f,
                 5px 5px 0px #8dbb39;
    transform: rotate(1deg);
  }
}

.subtitle {
  color: #555;
  font-size: 1.5em;
  margin-bottom: 30px;
}

.description {
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #333333;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    padding: 20px 25px;
    line-height: 1.6;
    text-align: center;
    max-width: 65ch;
    margin: 20px auto 40px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    .highlight-1 {
        font-weight: bold;
        color: #8dba3f;
    }

    .highlight-2 {
        font-weight: bold;
        color: #70cdba;
    }
}


/* Contenedor responsivo con aspecto 16:9 */
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

/* Video ocupa todo el contenedor, con borde blanco */
.video-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 10px solid #ffffff;
  border-radius: 40px;
  box-sizing: border-box;
  object-fit: cover;
}

/* =================================================================
   RESPONSIVE DESIGN - MODERN BREAKPOINTS
   ================================================================= */

/* 🖥️ Pantallas ultrawide (1920px o más) */
@media (min-width: 1920px) {
  .page-container {
    padding: 80px 120px 40px 120px;
  }

  .content-wrapper {
    max-width: 1800px;
    grid-template-columns: 250px 1fr 250px;
    gap: 50px;
  }

  .side-image {
    max-width: 220px;
  }

  .main-content {
    max-width: 1200px;
    padding: 60px;
  }

  .main-title {
    .title-part1 {
      font-size: 75px;
      padding: 12px 28px;
    }

    .title-part2 {
      font-size: 90px;
    }

    .title-part3 {
      font-size: 75px;
    }
  }

  .description {
    font-size: 22px;
    padding: 28px 35px;
    max-width: 75ch;
  }

  .bottom-section {
    width: 70%;
    max-width: 1400px;
  }

  .info-bar {
    padding: 20px 35px;
    font-size: 1.4em;
  }

  .info-text {
    font-size: 22px;
  }

  .content-card-expanded {
    padding: 45px;
    gap: 40px;
  }

  .section-subtitle {
    font-size: 30px !important;
  }

  .video-desc-text {
    font-size: 20px !important;
  }

  .facts-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 30px !important;
  }

  .fact-mascot {
    width: 90px !important;
    height: 90px !important;
  }

  .fact-text {
    font-size: 18px !important;
  }
}

/* 🖥️ Monitores grandes (1440–1919px) */
@media (min-width: 1440px) and (max-width: 1919px) {
  .page-container {
    padding: 70px 80px 30px 80px;
  }

  .content-wrapper {
    max-width: 1600px;
    grid-template-columns: 220px 1fr 220px;
    gap: 40px;
  }

  .side-image {
    max-width: 200px;
  }

  .main-content {
    max-width: 1000px;
    padding: 50px;
  }

  .main-title {
    .title-part1 {
      font-size: 68px;
      padding: 10px 24px;
    }

    .title-part2 {
      font-size: 80px;
    }

    .title-part3 {
      font-size: 68px;
    }
  }

  .description {
    font-size: 20px;
    padding: 24px 30px;
    max-width: 70ch;
  }

  .bottom-section {
    width: 75%;
    max-width: 1200px;
  }

  .info-text {
    font-size: 20px;
  }

  .content-card-expanded {
    padding: 35px;
  }

  .section-subtitle {
    font-size: 26px !important;
  }

  .video-desc-text {
    font-size: 18px !important;
  }

  .facts-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  .fact-mascot {
    width: 80px !important;
    height: 80px !important;
  }

  .fact-text {
    font-size: 16px !important;
  }
}

/* 💻 Laptops (1024–1439px) */
@media (min-width: 1024px) and (max-width: 1439px) {
  .page-container {
    padding: 60px 40px 25px 40px;
  }

  .content-wrapper {
    max-width: 1400px;
    grid-template-columns: 180px 1fr 180px;
    gap: 35px;
  }

  .side-image {
    max-width: 160px;
  }

  .side-images {
    gap: 25px;
  }

  .main-content {
    max-width: 900px;
    padding: 40px;
  }

  .main-title {
    .title-part1 {
      font-size: 58px;
      padding: 8px 20px;
    }

    .title-part2 {
      font-size: 68px;
    }

    .title-part3 {
      font-size: 58px;
    }
  }

  .description {
    font-size: 18px;
    padding: 20px 25px;
    max-width: 65ch;
  }

  .bottom-section {
    width: 80%;
  }

  .content-card-expanded {
    padding: 30px;
  }

  .facts-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

/* 📱 Tabletas (768–1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .page-container {
    padding: 50px 30px 20px 30px;
  }

  .content-wrapper {
    grid-template-columns: 140px 1fr 140px;
    gap: 25px;
  }

  .side-image {
    max-width: 130px;
  }

  .side-images {
    gap: 20px;
  }

  .main-content {
    padding: 30px;
  }

  .main-title {
    .title-part1 {
      font-size: 48px;
      padding: 7px 18px;
      border-radius: 10px;
    }

    .title-part2 {
      font-size: 58px;
      -webkit-text-stroke: 3.5px white;
    }

    .title-part3 {
      font-size: 48px;
      -webkit-text-stroke: 2.5px white;
    }
  }

  .description {
    font-size: 17px;
    padding: 18px 22px;
    max-width: 55ch;
  }

  .bottom-section {
    width: 85%;
  }

  .info-bar {
    padding: 14px 22px;
    font-size: 1.1em;
  }

  .info-text {
    font-size: 17px;
  }

  .content-card-expanded {
    padding: 25px;
    gap: 25px;
  }

  .section-subtitle {
    font-size: 22px !important;
  }

  .video-desc-text {
    font-size: 15px !important;
  }

  .facts-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 18px !important;
  }

  .fact-item {
    padding: 14px;
    gap: 14px;
  }

  .fact-mascot {
    width: 65px !important;
    height: 65px !important;
  }

  .fact-text {
    font-size: 14px !important;
  }
}

/* 📱 Móviles grandes (481–767px) */
@media (min-width: 481px) and (max-width: 767px) {
  .page-container {
    padding: 40px 20px 18px 20px;
  }

  .grass-decoration {
    height: 35px;
  }

  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .side-images {
    display: none;
  }

  .main-content {
    width: 100%;
    padding: 25px 20px;
  }

  .main-title {
    margin-bottom: 18px;

    .title-part1 {
      font-size: 42px;
      padding: 7px 17px;
      border-radius: 10px;
      margin-bottom: 8px;
    }

    .title-part2 {
      font-size: 52px;
      -webkit-text-stroke: 2.8px white;
      text-shadow: 2.5px 2.5px 0px #f1b33f,
                   3.5px 3.5px 0px #f1b33f;
    }

    .title-part3 {
      font-size: 42px;
      -webkit-text-stroke: 2.2px white;
      text-shadow: 2.5px 2.5px 0px #8dba3f,
                   3.5px 3.5px 0px #8dbb39;
    }
  }

  .description {
    font-size: 16px;
    margin-bottom: 25px;
    padding: 16px 20px;
    max-width: 45ch;
    line-height: 1.65;
  }

  .video-container {
    border-radius: 12px;
  }

  .video-player {
    border: 9px solid #ffffff;
    border-radius: 30px;
  }

  .bottom-section {
    width: 90%;
    margin-top: 10px;
  }

  .info-bar {
    padding: 13px 18px;
    font-size: 1em;
    border-radius: 9px;
  }

  .info-text {
    font-size: 16px;
  }

  .content-card-expanded {
    padding: 22px;
    gap: 22px;
    border-radius: 16px;
  }

  .section-subtitle {
    font-size: 21px !important;
    margin-bottom: 13px !important;
  }

  .video-desc-text {
    font-size: 15px !important;
    line-height: 1.6;
  }

  .facts-grid {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }

  .fact-item {
    padding: 13px;
    gap: 13px;
    border-radius: 11px;
  }

  .fact-mascot {
    width: 62px !important;
    height: 62px !important;
  }

  .fact-text {
    font-size: 15px !important;
    line-height: 1.55;
  }
}

/* 📱 Móviles pequeños (<480px) */
@media (max-width: 480px) {
  .page-container {
    padding: 35px 16px 15px 16px;
  }

  .grass-decoration {
    height: 30px;
  }

  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .side-images {
    display: none;
  }

  .main-content {
    width: 100%;
    padding: 18px 15px;
  }

  .main-title {
    margin-bottom: 16px;

    .title-part1 {
      font-size: 34px;
      padding: 6px 14px;
      border-radius: 9px;
      margin-bottom: 7px;
    }

    .title-part2 {
      font-size: 44px;
      -webkit-text-stroke: 2.3px white;
      text-shadow: 2px 2px 0px #f1b33f,
                   3px 3px 0px #f1b33f;
    }

    .title-part3 {
      font-size: 34px;
      -webkit-text-stroke: 1.8px white;
      text-shadow: 2px 2px 0px #8dba3f,
                   3px 3px 0px #8dbb39;
    }
  }

  .description {
    font-size: 14px;
    margin-bottom: 22px;
    padding: 14px 16px;
    max-width: 38ch;
    line-height: 1.6;
  }

  .video-container {
    border-radius: 10px;
  }

  .video-player {
    border: 7px solid #ffffff;
    border-radius: 26px;
  }

  .bottom-section {
    width: 92%;
    margin-top: 8px;
  }

  .info-bar {
    padding: 11px 15px;
    font-size: 0.95em;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  .info-text {
    font-size: 14px;
  }

  .info-icon {
    svg {
      width: 20px;
      height: 20px;
    }
  }

  .content-card-expanded {
    padding: 18px;
    gap: 20px;
    border-radius: 14px;
  }

  .section-subtitle {
    font-size: 19px !important;
    margin-bottom: 12px !important;
  }

  .video-desc-text {
    font-size: 13px !important;
    line-height: 1.55;
  }

  .facts-grid {
    grid-template-columns: 1fr !important;
    gap: 14px !important;
  }

  .fact-item {
    padding: 11px;
    gap: 11px;
    border-radius: 10px;
  }

  .fact-mascot {
    width: 55px !important;
    height: 55px !important;
  }

  .fact-text {
    font-size: 13px !important;
    line-height: 1.5;
  }
}

/* New styles for the bottom section */
.bottom-section {
  width: 80%;
  max-width: 900px;
  margin-top: 0px;
}

.info-bar {
  background-color: #70cdba;
  color: white;
  padding: 15px 25px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Work Sans", sans-serif;
  font-size: 1.2em;
  margin-bottom: 20px;
}

.info-text {
  flex-grow: 1;
  text-align: left;
  font-size: 18px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  svg.rotated {
    transform: rotate(180deg);
  }

  &:hover svg {
    transform: scale(1.1);
  }

  &:hover svg.rotated {
    transform: rotate(180deg) scale(1.1);
  }
}

.content-card-expanded {
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.video-description-section {
  .section-subtitle {
    font-family: 'Work Sans', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #70cdba;
    margin-bottom: 15px;
    text-align: left;
  }

  .video-desc-text {
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.6;
    text-align: left;
    color: #333333;
  }
}

.curious-facts-section {
  .section-subtitle {
    font-family: 'Work Sans', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #8dba3f;
    margin-bottom: 20px;
    text-align: left;
  }

  .facts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .fact-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: rgba(246, 250, 241, 0.15);
    border-radius: 12px;
    border: 2px solid #f1b33f;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(255, 152, 0, 0.2);
    }

    .fact-mascot {
      width: 70px;
      height: 70px;
      flex-shrink: 0;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }

    .fact-text {
      flex: 1;
      font-family: 'Work Sans', sans-serif;
      font-size: 15px;
      font-weight: 600;
      line-height: 1.5;
      color: #424242;
      margin: 0;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}


</style>