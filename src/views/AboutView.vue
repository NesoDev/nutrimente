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
          class="video-player"
          :src="cloudinaryVideoUrl"
          :poster="cloudinaryThumbnailUrl"
          controls
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Video ocupa todo el contenedor, con borde blanco */
.video-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 20px solid white;   /* Ajusta grosor aquí */
  border-radius: 15px;
  box-sizing: border-box;
}
</style>
