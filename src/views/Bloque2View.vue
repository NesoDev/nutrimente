<template>
  <div class="page-container">
    <main class="main-content">
      <h1 class="main-title">Bloque 2: ¡Pequeños juegos, grandes mentes!</h1>
      <p class="description">
        En NutriMente, sabemos que una buena alimentación y el juego son clave para el desarrollo de los niños. 
        Por eso, creamos una plataforma digital con recursos prácticos, confiables y validados por expertos, 
        para ayudar a padres y cuidadores a mejorar la alimentación y el aprendizaje de sus hijos.
      </p>

      <!-- 👇 botones de categorías -->
      <div class="video-selector">
        <button 
          v-for="cat in Object.keys(videos)"
          :key="cat"
          @click="selectCategory(cat)" 
          :class="{ active: currentCategory === cat }">
          {{ labels[cat] }}
        </button>
      </div>

      <!-- 👇 botones de videos según la categoría -->
      <div class="video-selector sub-selector">
        <button 
          v-for="(video, index) in videos[currentCategory]" 
          :key="index"
          @click="selectVideo(index)"
          :class="{ active: currentVideoIndex === index }"
        >
          Video {{ index + 1 }}
        </button>
      </div>

      <div class="video-container">
        <video
          ref="videoPlayer"
          class="video-player"
          :src="cloudinaryVideoUrl"
          :poster="cloudinaryThumbnailUrl"
          preload="metadata"
          @play="handlePlay"
          @pause="handlePause"
          @click="togglePlay"
        >
          Your browser does not support the video tag.
        </video>
        <div v-if="showPlayButton" class="play-button-overlay" @click="togglePlay">
          <svg class="play-icon" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </main>

    <!-- ✅ Green + White Sections -->
    <section class="bottom-section">
      <div class="info-bar">
        <div class="info-text">
          {{ videos[currentCategory][currentVideoIndex].title }}
        </div>
        <div class="info-icon" @click="toggleCard">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <transition name="fade">
        <div v-if="showCard" class="content-card">
          <p class="card-text">
            {{ videos[currentCategory][currentVideoIndex].cardText }}
          </p>
          <div class="card-image-container">
            <img src="../assets/animal.png" alt="Cartoon animal" class="card-image" />
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutContent",
  data() {
    return {
      cloudName: "dlejpox8a",
      currentCategory: "4-6",   // ✅ categoría por defecto
      currentVideoIndex: 0,     // ✅ video por defecto
      showPlayButton: true,
      showCard: false,
      labels: {
        "4-6": "4 a 6 meses",
        "7-9": "7 a 9 meses",
        "10-12": "10 a 12 meses",
        "12-18": "12 a 18 meses",
        "18-24": "18 a 24 meses",
        "25-36": "25 a 36 meses",
      },
      videos: {
        "4-6": [
          { id: "v1756145232/Exploremos_diferentes_texturas_1_cxcpkk", title: "Exploramos diferentes texturas", cardText: "Tocar distintos objetos estimula la curiosidad y fortalece los sentidos de tu bebé." },
          { id: "v1756145959/Exploración_de_manos_y_pies_ua24mg", title: "Exploración de manos y pies", cardText: "Durante esta etapa, los bebés descubren su propio cuerpo y mejoran su percepción." },
          { id: "v1756146152/El_juego_de_la_botella_sensorial_1_guazyu", title: "Juego de la botella sensorial", cardText: "Este juego fortalece la observación y fomenta la interacción con colores y movimientos." },
        ],
        "7-9": [
          { id: "v1756145412/Música_y_percusión_kccyyt", title: "Música y percusión", cardText: "Los juegos musicales apoyan el ritmo, la memoria y la motricidad, favoreciendo la creatividad." },
          { id: "v1756146275/Escondamos_el_objeto_diogli", title: "Escondamos el objeto", cardText: "Tu bebé aprende que los objetos existen aunque no los vea, fortaleciendo su comprensión del mundo." },
          { id: "v1756146332/Cajita_de_tesoros_udawmy", title: "Cajita de tesoros", cardText: "Este juego fomenta la creatividad y la coordinación al manipular diferentes objetos." },
        ],
        "10-12": [
          { id: "v1756147303/Pelota_rodante_elpt9k", title: "Pelota rodante", cardText: "Rodar una pelota favorece la coordinación motora y la interacción social." },
          { id: "v1756147361/Movámonos_divertidamente_qwxcbk", title: "Movámonos divertidamente", cardText: "El movimiento estimula el equilibrio, la coordinación y la energía positiva." },
          { id: "v1756147431/Apilar_vasitos_yovitf", title: "Apilar vasitos", cardText: "Apilar fortalece la motricidad fina y la capacidad de resolver problemas." },
        ],
        "12-18": [
          { id: "v1756147533/Objetos_en_movimiento_heeuuc", title: "Objetos en movimiento", cardText: "Seguir objetos ayuda a entrenar la atención y la coordinación ojo-mano." },
          { id: "v1756147599/Clasificacion_sencilla_eynjqb", title: "Clasificación sencilla", cardText: "Clasificar fomenta el pensamiento lógico y la organización mental." },
          { id: "v1756147633/Armando_torres_con_bloques_dkwbgl", title: "Armando torres con bloques", cardText: "Construir con bloques desarrolla la paciencia y la creatividad." },
        ],
        "18-24": [
          { id: "v1756147719/Encontrando_la_tapa_correcta_alyjzp", title: "Encontrando la tapa correcta", cardText: "Emparejar tapas y envases estimula la memoria y la resolución de problemas." },
          { id: "v1756147822/Carreras_con_animalitos_zqw02y", title: "Carreras con animalitos", cardText: "Correr con juguetes motiva el ejercicio físico y la coordinación." },
          { id: "v1756147859/Búsqueda_de_objetos_mprtji", title: "Búsqueda de objetos", cardText: "La búsqueda estimula la curiosidad y fortalece la atención." },
        ],
        "25-36": [
          { id: "v1756147949/Los_muñecos_parlantes_c9is3f", title: "Los muñecos parlantes", cardText: "El juego simbólico con muñecos fomenta el lenguaje y la empatía." },
          { id: "v1756148016/La_tiendita_o2ifhp", title: "La tiendita", cardText: "Jugar a la tienda impulsa la imaginación y habilidades sociales." },
          { id: "v1756148077/Cocina_de_mentiritas_co1ykk", title: "Cocina de mentiritas", cardText: "La cocina simbólica desarrolla la creatividad y el juego colaborativo." },
        ],
      }
    };
  },
  computed: {
    cloudinaryVideoUrl() {
      return `https://res.cloudinary.com/${this.cloudName}/video/upload/${this.videos[this.currentCategory][this.currentVideoIndex].id}.mp4`;
    },
    cloudinaryThumbnailUrl() {
      return `https://res.cloudinary.com/${this.cloudName}/video/upload/f_jpg,q_auto,w_800/${this.videos[this.currentCategory][this.currentVideoIndex].id}.jpg`;
    },
  },
  methods: {
    togglePlay() {
      const video = this.$refs.videoPlayer;
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }
    },
    handlePlay() {
      this.showPlayButton = false;
    },
    handlePause() {
      this.showPlayButton = true;
    },
    toggleCard() {
      this.showCard = !this.showCard;
    },
    selectCategory(category) {
      this.currentCategory = category;
      this.currentVideoIndex = 0;
      this.showCard = false;
      this.resetVideo();
    },
    selectVideo(index) {
      this.currentVideoIndex = index;
      this.showCard = false;
      this.resetVideo();
    },
    resetVideo() {
      this.showPlayButton = true;
      this.$nextTick(() => {
        const video = this.$refs.videoPlayer;
        video.pause();
        video.currentTime = 0;
      });
    }
  },
  mounted() {
    const video = this.$refs.videoPlayer;
    video.addEventListener("loadedmetadata", () => {
      if (video.paused) {
        this.showPlayButton = true;
      }
    });
  },
};
</script>

<style scoped>
.video-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}
.video-selector button {
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background-color: #e0e0e0;
}
.video-selector button.active {
  background-color: #4caf50;
  color: white;
}
.sub-selector {
  margin-top: -5px;
}
</style>


<style scoped>
.video-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}
.video-selector button {
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background-color: #e0e0e0;
}
.video-selector button.active {
  background-color: #4caf50;
  color: white;
}
.sub-selector {
  margin-top: -5px;
}
.video-title {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}
</style>



<style scoped>
.page-container {
  font-family: Arial, sans-serif;
  background-color: #f7f3ed; /* Light beige background */
  min-height: 100vh;
  padding: 100px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-content {
  width: 80%;
  max-width: 900px;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
}

.main-title {
  margin-bottom: 10px;
  display: inline-block;
  border-radius: 5px;

                font-family: 'Solway', serif;
                font-size: 45px;
                font-weight: bolder;
                color: #0DB68F;
                overflow-wrap: break-word;
                white-space: normal;

  width: fit-content;
                padding: 0px 10px;
                box-sizing: border-box;
}



.description {
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 40px;
  text-align: center;
              font-family: 'Solway', serif;
            color: #848484;
}

/* Contenedor responsivo con aspecto 16:9 */
.video-container {
  position: relative;
  width: 100%; /* or 400px, 600px, etc. */
  max-width: 600px;        /* Set a reasonable max width */
  margin: 0 auto;          /* Center it horizontally */
  padding-bottom: 38.25%;
  background-color: #f0f0f0;
  border-radius: 20px; /* Rounded corners */
  overflow: hidden;
}


/* Video ocupa todo el contenedor, con borde blanco */
.video-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 15px solid white; /* Adjust border thickness here */
  border-radius: 40px; /* Make it more rounded to match the image */
  box-sizing: border-box;
  object-fit: cover; /* Ensures the video covers the area without distortion */
}

/* Play button overlay */
.play-button-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px; /* Adjust size as needed */
  height: 80px; /* Adjust size as needed */
  background-color: #7673FF; /* Blue background with transparency */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10; /* Ensure it's above the video */
  transition: background-color 0.3s ease;
}

.play-button-overlay:hover {
  background-color: #2925f5; /* Darker on hover */
}

.play-icon {
  fill: white;
  width: 40px; /* Size of the play icon */
  height: 40px; /* Size of the play icon */
}

/* Existing styles remain the same... */

/* 📱 Mobile-friendly adjustments */
@media (max-width: 768px) {
  .page-container {
    padding: 60px 35px 35px 35px; 
  }

  .main-content {
    width: 100%;
    padding: 30px;

  }

  .main-title {
    font-size: 1.8em;
    padding: 4px 10px;
  }

  

  .description {
    font-size: 0.95em;
    margin-bottom: 25px;
    text-align: justify; /* looks better on small screens */
  }

 

  .video-player {
    border: 8px solid white; /* thinner border on small screens */
    border-radius: 20px; /* less rounded for mobile */
  }

  .play-button-overlay {
    width: 60px;
    height: 60px;
  }

  .play-icon {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.5em;
  }



  .description {
    font-size: 0.9em;
  }

  .play-button-overlay {
    width: 50px;
    height: 50px;
  }

  .play-icon {
    width: 24px;
    height: 24px;
  }
}

/* New styles for the bottom section */
.bottom-section {
  width: 80%;
  max-width: 900px;
  margin-top: 0px;
}

.info-bar {
  background-color: #38b2ac; /* Greenish-teal color from the image */
  color: white;
  padding: 15px 25px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Solway', serif;
  font-size: 1.2em;
  margin-bottom: 20px;
}

.info-text {
  flex-grow: 1;
  text-align: left;
  font-size: 18px;
}

.info-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}

.info-icon .line {
  width: 30px;
  height: 3px;
  background-color: white;
  border-radius: 2px;
}

.content-card {
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 20px;
  align-items: center;
}

.card-text {
  flex: 1;
  font-size: 1em;
  line-height: 1.6;
  text-align: left;
  color: #848484;
  font-family: 'Solway', serif;
}

.card-image-container {
  width: 150px;
  height: 120px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Hide image on mobile (e.g., below 768px) */
@media (max-width: 768px) {
  .card-image-container {
    display: none;
  }
}
/* 👇 Add this outside any media query */
.mobile-text-only {
  display: none;
}

.bottom-section {
  width: 80%;
  max-width: 900px;
  margin-top: 0px;
}

.info-bar {
  background-color: #38b2ac;
  color: white;
  padding: 15px 25px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Solway', serif;
  font-size: 1.2em;
  margin-bottom: 20px;
}

.info-text {
  flex-grow: 1;
  text-align: left;
  font-size: 18px;
}

.info-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}

.info-icon .line {
  width: 30px;
  height: 3px;
  background-color: white;
  border-radius: 2px;
}

.content-card {
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 20px;
  align-items: center;
}

.card-text {
  flex: 1;
  font-size: 1em;
  line-height: 1.6;
  text-align: left;
  color: #848484;
  font-family: 'Solway', serif;
}

.card-image-container {
  width: 150px;
  height: 120px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .card-image-container {
    display: none; /* ✅ Hide image on mobile */
  }

  .info-bar {
    font-size: 1em;
    padding: 12px 18px;
  }

  .content-card {
    flex-direction: column;
    text-align: center;
  }

  .info-text {
    font-size: 14px;
    padding: 2px;
  }

  .video-container {
  position: relative;
  width: 100%; /* or 400px, 600px, etc. */
  max-width: 600px;        /* Set a reasonable max width */
  margin: 0 auto;          /* Center it horizontally */
  padding-bottom: 98.25%;
  background-color: #f0f0f0;
  border-radius: 20px; /* Rounded corners */
  overflow: hidden;
}
}

</style> 
