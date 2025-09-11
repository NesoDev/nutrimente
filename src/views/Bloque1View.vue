<template>
  <div class="page-container">
    <main class="main-content">
      <h1 class="main-title">Bloque 1: Alimentando el futuro
desde de los primeros años</h1>
      <p class="description">
        En NutriMente, sabemos que una buena alimentación y el juego son clave para el desarrollo de los niños.
Por eso, creamos una plataforma digital con recursos prácticos, confiables y validados por expertos, para ayudar a padres y cuidadores a mejorar la alimentación y el aprendizaje de sus hijos.  
    </p>
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
    <section class="bottom-section">
      <div class="info-bar">
        <div class="info-text">
          NutriMente pone a disposición juegos que estimulan el desarrollo de los niños.
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
            En NutriMente, sabemos que una buena alimentación y el juego son clave para el desarrollo de los niños. 
            Por eso, creamos una plataforma digital con recursos prácticos, confiables y validados por expertos, 
            para ayudar a padres y cuidadores a mejorar la alimentación y el aprendizaje de sus hijos.
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
  name: 'AboutContent',
  data() {
    return {
      cloudName: 'dlejpox8a',
      cloudinaryVideoId: 'Video_1_corregido_1_ewlrfy',
      showPlayButton: true,
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
      this.showCard = !this.showCard; // 🔥 toggles white block
    }
  },
  mounted() {
    const video = this.$refs.videoPlayer;
    video.addEventListener('loadedmetadata', () => {
      if (video.paused) {
        this.showPlayButton = true;
      }
    });
  }
};
</script>


<style scoped>
.page-container {
  font-family: Arial, sans-serif;
  background-color: #f4feff;
  background-image: radial-gradient(circle, #e5f6f8 4px, transparent 1px);
  background-size: 20px 20px;
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

                font-family: 'Cooper Black', Arial, sans-serif;
                font-size: 45px;
                font-weight: bolder;
                color: #0DB68F;
                overflow-wrap: break-word;
                white-space: normal;

  width: fit-content;
                padding: 0px 10px;
                box-sizing: border-box;
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
    color: #6d8f9d;
    backdrop-filter: blur(2px);
    line-height: 1.6;
    text-align: center;
    max-width: 80ch;
}


/* Contenedor responsivo con aspecto 16:9 */
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  background-color: #f0f0f0;
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
  border: 20px solid white; /* Adjust border thickness here */
  border-radius: 80px; /* Make it more rounded to match the image */
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

  .subtitle {
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  .description {
    font-size: 0.95em;
    margin-bottom: 25px;
    text-align: justify; /* looks better on small screens */
  }

  /* Video adjustments */
  .video-container {
    border-radius: 10px;
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

  .subtitle {
    font-size: 1em;
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
  height: 150px;
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


</style>