<template>
  <div class="page-container">
    <div class="clouds-background">
    </div>
    <div class="grass-decoration"></div>

    <main class="main-content">
      <!-- 1. Título de la sección -->
      <h1 class="main-titleb2">
        <span class="title-part1">Bloque 2:</span>
        <span class="title-part2">¡Pequeños juegos,</span>
        <span class="title-part3">grandes mentes!</span>
      </h1>

      <!-- 2. Descripción de la sección -->
      <p class="description">
        En NutriMente, sabemos que una buena alimentación y el juego son clave para el desarrollo de los niños.
        Por eso, creamos una plataforma digital con recursos prácticos, confiables y validados por expertos,
        para ayudar a padres y cuidadores a mejorar la alimentación y el aprendizaje de sus hijos.
      </p>

      <!-- 3. Texto de ayuda -->
      <div class="help-text">
        <p>👇 Selecciona la edad de tu hijo para ver actividades apropiadas:</p>
      </div>

      <!-- 4. Botones de edad -->
      <div class="video-selector age-buttons">
        <button
          v-for="cat in Object.keys(videos)"
          :key="cat"
          @click="selectCategory(cat)"
          :class="{ active: currentCategory === cat }">
          {{ labels[cat] }}
        </button>
      </div>

      <!-- 5. Botones de video -->
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

      <!-- 6. Video -->

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
          { id: "v1756145232/Exploremos_diferentes_texturas_1_cxcpkk", title: "Exploramos diferentes texturas", cardText: "Ofrece al bebé objetos de diferentes texturas y tamaños, como un pañuelo suave o un juguete de plástico blando. Colócalo en un lugar seguro y anímalo a tocar y explorar cada objeto mientras le hablas con entusiasmo. Este juego ayuda a fortalecer la coordinación motora fina del bebé, mientras estimula su curiosidad y capacidad para procesar información sensorial, lo cual es fundamental para su aprendizaje y desarrollo cognitivo en el futuro." },
          { id: "v1756145959/Exploración_de_manos_y_pies_ua24mg", title: "Exploración de manos y pies", cardText: "Sienta al bebé sobre tu regazo y llévale sus manos hacia sus pies o su rostro. Mientras lo haces, menciona las partes del cuerpo. Este juego fomenta el sentido de identidad del bebé y la autopercepción, ayudando a que descubra que sus extremidades están conectadas a su cuerpo. Además, refuerza la coordinación motora y favorece la conexión emocional al interactuar con él de manera lúdica." },
          { id: "v1756146152/El_juego_de_la_botella_sensorial_1_guazyu", title: "Juego de la botella sensorial", cardText: "Llena una botella transparente con agua y añade elementos brillantes como brillantina o lentejuelas. Muévela frente al bebé para que observe cómo se desplazan los colores y las partículas dentro del agua. Este juego fomenta el seguimiento visual y la atención sostenida, mientras ayuda al bebé a entender la relación causa-efecto y refuerza su coordinación ojo-mano, elementos esenciales para su desarrollo cognitivo en esta etapa temprana." },
        ],
        "7-9": [
          { id: "v1756145412/Música_y_percusión_kccyyt", title: "Música y percusión", cardText: "Invita al bebé a golpear objetos que hagan sonido, como una cuchara sobre un recipiente o un pequeño tambor. Este juego no solo desarrolla la coordinación ojo-mano, sino que también favorece la percepción auditiva y la interacción social. A través del ritmo, el bebé aprende sobre turnos y experimenta el impacto de sus acciones, reforzando su sentido de autonomía y su capacidad para predecir resultados." },
          { id: "v1756146275/Escondamos_el_objeto_diogli", title: "Escondamos el objeto", cardText: "Esconde un juguete bajo una cobija ligera mientras el bebé observa. Anímalo a buscarlo diciendo su nombre o haciendo sonidos. Este juego fortalece la memoria del bebé y la capacidad para entender la permanencia del objeto, un hito clave en el desarrollo cognitivo. Además, fomenta la confianza en sí mismo y motiva al bebé a explorar activamente su entorno, lo que es fundamental para su aprendizaje." },
          { id: "v1756146332/Cajita_de_tesoros_udawmy", title: "Cajita de tesoros", cardText: "Coloca varios objetos seguros dentro de una caja y anima al bebé a abrirla y explorar su contenido. Este juego promueve la curiosidad y la resolución de problemas, ya que el bebé aprende que cada objeto tiene diferentes propiedades y texturas. Al manipular los objetos, también refuerza su motricidad fina y su comprensión de causa-efecto, esenciales para el desarrollo cognitivo temprano" },
        ],
        "10-12": [
          { id: "v1756147303/Pelota_rodante_elpt9k", title: "Pelota rodante", cardText: "Haz rodar una pelota ligera hacia el bebé e invítalo a devolvértela. Este juego fomenta la coordinación motora gruesa y enseña al bebé sobre turnos y participación activa. Al interactuar con la pelota, el bebé también fortalece el vínculo comunicativo con el cuidador y comprende la anticipación de los movimientos, lo que es crucial para su desarrollo cognitivo y social." },
          { id: "v1756147361/Movámonos_divertidamente_qwxcbk", title: "Movámonos divertidamente", cardText: "Coloca pequeños obstáculos suaves en el suelo y anima al bebé a gatear alrededor de ellos para alcanzar un juguete. Este juego refuerza la motricidad gruesa y mejora el equilibrio, mientras fomenta la resolución de problemas al buscar rutas alternativas. Además, al repetir el juego, el bebé gana confianza en sí mismo y fortalece sus habilidades motoras, lo que lo prepara para nuevos desafíos físicos" },
          { id: "v1756147431/Apilar_vasitos_yovitf", title: "Apilar vasitos", cardText: "Muestra al bebé cómo apilar vasos o recipientes, y anímalo a intentarlo. Este juego fortalece la coordinación mano-ojo, y ayuda al bebé a entender las relaciones de tamaño y estabilidad. A través de la repetición, el bebé también desarrolla paciencia y perseverancia, aprendiendo que el éxito llega con el esfuerzo y la práctica" },
        ],
        "12-18": [
          { id: "v1756147533/Objetos_en_movimiento_heeuuc", title: "Objetos en movimiento", cardText: "Dale al niño un recipiente con varios objetos pequeños y anímalo a ponerlos y sacarlos. Este juego mejora la coordinación mano-ojo y favorece la destreza de los dedos. Además, ayuda al niño a concentrarse y comprender conceptos como ‘dentro’ y ‘fuera’, lo cual es esencial para su desarrollo cognitivo y sus habilidades motoras finas." },
          { id: "v1756147599/Clasificacion_sencilla_eynjqb", title: "Clasificación sencilla", cardText: "Coloca varios objetos de diferentes colores o tamaños y muestra al niño cómo clasificarlos. Este juego estimula el razonamiento lógico y la atención, favoreciendo el desarrollo de la coordinación manual. Al aprender a clasificar objetos, el niño también mejora su capacidad para categorizar y distinguir entre diferentes características, lo cual es la base para aprendizajes posteriores." },
          { id: "v1756147633/Armando_torres_con_bloques_dkwbgl", title: "Armando torres con bloques", cardText: "Construir con bloques desarrolla la paciencia y la creatividad." },
        ],
        "18-24": [
          { id: "v1756147719/Encontrando_la_tapa_correcta_alyjzp", title: "Encontrando la tapa correcta", cardText: "Reúne varios recipientes plásticos y sus respectivas tapas, y mézclalas en una canasta. Luego, muestra al niño cómo encontrar la tapa correcta y ponla sobre el recipiente adecuado. Este juego estimula la coordinación ojo-mano y la resolución de problemas por ensayo y error. También mejora la concentración del niño mientras observa los detalles y aprende a manejar destrezas manuales necesarias para encajar cada tapa correctamente." },
          { id: "v1756147822/Carreras_con_animalitos_zqw02y", title: "Carreras con animalitos", cardText: "Dibuja dos líneas en el suelo para hacer un ‘carril’ y dale al niño un juguete que represente un animal, como un perrito o un carrito. Luego, haz una carrera hacia la meta, animando al niño a llegar al final. Este juego refuerza la motricidad gruesa, al caminar y mantener el equilibrio. Al mismo tiempo, enseña al niño sobre la noción de espacio y estimula la memoria espacial, mientras se divierte y comprende el concepto de ‘meta’." },
          { id: "v1756147859/Búsqueda_de_objetos_mprtji", title: "Búsqueda de objetos", cardText: "Este juego es sencillo pero muy efectivo. Pídele al niño que busque y traiga objetos familiares, como su zapato o su pelota. Felicítalo cuando lo logre y anímalo a hacerlo de nuevo. Este juego refuerza el vínculo entre el niño y el cuidador mientras fomenta la memoria a corto plazo y la capacidad de relacionar palabras con objetos. Además, ayuda al niño a sentirse más seguro de sus habilidades y mejora su autoestima." },
        ],
        "25-36": [
          { id: "v1756147949/Los_muñecos_parlantes_c9is3f", title: "Los muñecos parlantes", cardText: "Usa muñecos, peluches o títeres para crear historias interactivas con el niño. Anímalo a hacer hablar a los muñecos y expresarse, fomentando su imaginación y lenguaje. Este tipo de juego estimula la comunicación del niño, le ayuda a comprender sus emociones y las de los demás, y refuerza su empatía al ponerse en el lugar del personaje. Además, expande su vocabulario y le ayuda a mejorar su capacidad de expresión verbal." },
          { id: "v1756148016/La_tiendita_o2ifhp", title: "La tiendita", cardText: "Este juego simbólico permite que el niño asuma el rol de vendedor, mientras los adultos o compañeros son los clientes. Se pueden usar frutas de juguete o incluso objetos reales para simular la venta y compra. Este juego estimula la creatividad del niño, mejora su lenguaje y fortalece sus habilidades sociales al interactuar con los demás. También fomenta la comprensión de normas sociales, como esperar turnos y compartir, lo que es fundamental para su desarrollo emocional y social." },
          { id: "v1756148077/Cocina_de_mentiritas_co1ykk", title: "Cocina de mentiritas", cardText: "Usa utensilios de cocina de juguete o elementos reales (como ollas de plástico) y crea un espacio para que el niño simule cocinar. A medida que el niño “cocina”, interactúa con él haciendo preguntas sobre qué está preparando. Este juego desarrolla la creatividad y el lenguaje del niño al imitar roles cotidianos. Además, mejora sus habilidades socioemocionales al aprender a cooperar, comunicar y organizar sus ideas mientras juega." },
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
@import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');

@font-face {
    font-family: "BeachDay";
    src: url("@/assets/fonts/beachday.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    unicode-range: U+0041-005A, U+0061-007A;
}

.help-text {
  margin: 15px 0;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  border-left: 4px solid #FFAE50;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #FF6B00;
    text-align: center;
  }
}

/* Centered category selector */
.video-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
  justify-content: center;
}

/* Age buttons styling */
.video-selector.age-buttons button {
  padding: 12px 18px;
  border-radius: 25px;
  border: 3px solid #FFAE50;
  cursor: pointer;
  background-color: #FFF8E1;
  color: #FF6B00;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  font-size: 15px;
  transition: all 0.3s ease;
}

.video-selector.age-buttons button.active {
  background-color: #FFAE50;
  color: white;
  border-radius: 25px;
  box-shadow: -4px 4px 6px rgba(0, 0, 0, 0.4);
  font-weight: bold;
  transform: scale(1.05);
}

.video-selector.age-buttons button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 174, 80, 0.4);
}

/* Sub-selector aligned to the left */
.video-selector.sub-selector {
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 20px;
}

/* Button styles */
.video-selector.sub-selector button {
  padding: 10px 14px;
  border-radius: 25px;
  border: 2px solid #0DB68F;
  cursor: pointer;
  background-color: rgba(16, 156, 123, 0.7);
  color: white;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  transition: all 0.3s ease;
}

.video-selector.sub-selector button.active {
  background-color: #0DB68F;
  box-shadow: -4px 4px 6px rgb(255, 255, 20);
  font-weight: bold;
}

.video-selector.sub-selector button:hover {
  background-color: #0DB68F;
  transform: translateY(-2px);
}
</style>



<style scoped>

.page-container {
  position: relative;
  font-family: Arial, sans-serif;
  background: 
              repeating-linear-gradient(60deg, #fff0b3 0 10px, transparent 10px 20px);
  background-size: 25px 25px, auto;
  min-height: 100vh;
  padding: 100px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: background 1s ease-in-out;
}






.main-content {
  position: relative;
  z-index: 10;
  width: 80%;
  max-width: 900px;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
}

.main-titleb2 {
  font-family: "Bubblegum Sans", "BeachDay", cursive, sans-serif;
  font-weight: 400;
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.2;
  letter-spacing: 2px;

  .title-part1 {
    display: block;
    font-size: 60px;
    color: #FFD54F;
    -webkit-text-stroke: 2px #FF9800;
    text-shadow: 3px 3px 0px #4DD0E1,
                 5px 5px 0px #0288D1;
    transform: rotate(-1deg);
  }

  .title-part2 {
    display: block;
    font-size: 70px;
    color: #FF6B9D;
    -webkit-text-stroke: 3px #E91E63;
    text-shadow: 3px 3px 0px #0FDAC2,
                 5px 5px 0px #019a86;
    transform: rotate(2deg);
  }

  .title-part3 {
    display: block;
    font-size: 70px;
    color: #FF6B9D;
    -webkit-text-stroke: 3px #E91E63;
    text-shadow: 3px 3px 0px #0FDAC2,
                 5px 5px 0px #019a86;
    transform: rotate(2deg);
  }
}


.description {
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #5D4037;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    padding: 20px 25px;
    line-height: 1.6;
    text-align: center;
    max-width: 65ch;
    margin: 20px auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
/* Contenedor responsivo con aspecto 16:9 */
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  border-radius: 15px;
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
    padding: 60px 20px 35px 20px;
  }


  .grass-decoration {
    height: 40px;
  }

  .main-content {
    width: 100%;
    padding: 20px;
  }

  .main-titleb2 {
    .title-part1 {
      font-size: 40px;
      -webkit-text-stroke: 1.5px #FF9800;
      text-shadow: 2px 2px 0px #4DD0E1,
                   3px 3px 0px #0288D1;
    }

    .title-part2 {
      font-size: 50px;
      -webkit-text-stroke: 2px #E91E63;
      text-shadow: 2px 2px 0px #0FDAC2,
                   3px 3px 0px #019a86;
    }

    .title-part3 {
      font-size: 50px;
      -webkit-text-stroke: 2px #E91E63;
      text-shadow: 2px 2px 0px #0FDAC2,
                   3px 3px 0px #019a86;
    }
  }

  .help-text {
    padding: 12px 15px;

    p {
      font-size: 14px;
    }
  }

  .video-selector.age-buttons button {
    padding: 10px 14px;
    font-size: 13px;
  }

  .video-selector.sub-selector button {
    padding: 8px 12px;
    font-size: 14px;
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
  .main-titleb2 {
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
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.6;
    text-align: left;
    color: #555;
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
  font-family: "Work Sans", sans-serif;
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
  font-family: "Work Sans", sans-serif;
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
