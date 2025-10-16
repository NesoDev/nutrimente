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
          Sabías que... está comprobado científicamente que un niño que se alimenta de manera saludable crece sano, con una mayor capacidad de aprendizaje, mayor capacidad de atención, mejores notas en la escuela, entre más beneficios?
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
          NutriMente pone a disposición juegos que estimulan el desarrollo de los niños.
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
              En NutriMente, sabemos que una buena alimentación y el juego son clave para el desarrollo de los niños.
              Por eso, creamos una plataforma digital con recursos prácticos, confiables y validados por expertos,
              para ayudar a padres y cuidadores a mejorar la alimentación y el aprendizaje de sus hijos.
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
    text-shadow: 3px 3px 0px #70cdba,
                 5px 5px 0px #70cdba;
    transform: rotate(2deg);
  }

  .title-part3 {
    display: block;
    font-size: 60px;
    color: #f1b33f;
    -webkit-text-stroke: 3px white;
    text-stroke: 3px white;
    paint-order: stroke fill;
    text-shadow: 3px 3px 0px #8dba3f,
                 5px 5px 0px #8dbb39;
    transform: rotate(-1deg);
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

/* Existing styles remain the same... */

/* 💻 Tablet adjustments */
@media (max-width: 1200px) {
  .content-wrapper {
    grid-template-columns: 150px 1fr 150px;
    gap: 20px;
  }

  .side-image {
    max-width: 130px;
  }

  .side-images {
    gap: 20px;
  }
}

/* 📱 Mobile-friendly adjustments */
@media (max-width: 768px) {
  .page-container {
    padding: 60px 20px 35px 20px;
  }

  .clouds-background {
    .cloud {
      width: 150px !important;
    }
  }

  .grass-decoration {
    height: 40px;
  }

  /* Stack layout on mobile - hide side images */
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .side-images {
    display: none;
  }

  .main-content {
    width: 100%;
    padding: 20px;
  }

  .main-title {
    .title-part1 {
      font-size: 40px;
      padding: 6px 16px;
      border-radius: 10px;
    }

    .title-part2 {
      font-size: 50px;
      -webkit-text-stroke: 2.5px white;
      text-stroke: 2.5px white;
      text-shadow: 2px 2px 0px #70cdba,
                   3px 3px 0px #70cdba;
    }

    .title-part3 {
      font-size: 40px;
      -webkit-text-stroke: 2px white;
      text-stroke: 2px white;
      text-shadow: 2px 2px 0px #8dba3f,
                   3px 3px 0px #8dbb39;
    }
  }

  .subtitle {
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  .description {
    font-size: 15px;
    margin-bottom: 25px;
    padding: 15px 18px;
    max-width: 40ch;
  }

  .content-card-expanded {
    padding: 20px;
    gap: 20px;

    .video-description-section {
      .section-subtitle {
        font-size: 20px;
      }

      .video-desc-text {
        font-size: 14px;
      }
    }

    .curious-facts-section {
      .section-subtitle {
        font-size: 20px;
      }

      .facts-grid {
        grid-template-columns: 1fr;
        gap: 15px;
      }

      .fact-item {
        padding: 12px;
        gap: 12px;

        .fact-mascot {
          width: 60px;
          height: 60px;
        }

        .fact-text {
          font-size: 14px;
        }
      }
    }
  }

  /* Video adjustments */
  .video-container {
    border-radius: 10px;
  }

  .video-player {
    border: 10px solid #ffffff;
    border-radius: 32px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.5em;
  }

  .subtitle {
    font-size: 1em;
  }

  .description {
    font-size: 0.9em;
  }

  .video-player {
    border: 8px solid #ffffff;
    border-radius: 28px;
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