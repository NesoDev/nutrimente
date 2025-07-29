<template>
  <div class="page-container">
    <main class="main-content">
      <h1 class="main-title">¿Quiénes somos?</h1>
      <h2 class="subtitle">Apasionados. Creativos.</h2>
      <p class="description">
        Somos estudiantes de Psicología de la Universidad Nacional Mayor de San Marcos, comprometidos con el desarrollo integral de la infancia. Hemos creado Nutrimente, un proyecto que busca sensibilizar y orientar a padres, madres y cuidadores sobre la importancia de una alimentación saludable en los primeros años de vida para potenciar el desarrollo cognitivo infantil.
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
  </div>
</template>

<script>
export default {
  name: 'AboutContent',
  data() {
    return {
      cloudName: 'dlejpox8a',
      cloudinaryVideoId: 'Video_1_corregido_1_ewlrfy',
      showPlayButton: true, // Initially show the play button
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
  },
  mounted() {
    // Ensure the play button is visible when the video loads (before first play)
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
  color: #333;
  font-size: 2.5em;
  margin-bottom: 10px;
  background-color: #ffe082;
  display: inline-block;
  padding: 5px 15px;
  border-radius: 5px;
}

.subtitle {
  color: #555;
  font-size: 1.5em;
  margin-bottom: 30px;
}

.description {
  color: #777;
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 40px;
  text-align: left;
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
</style>