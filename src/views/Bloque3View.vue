import { ref, onMounted } from 'vue';

<template>
  <div class="page-container">
    <main class="main-content">
      <h1 class="main-title">Bloque 3: Alimentando su futuro</h1>

      <p class="description">
        En NutriMente, sabemos que una buena alimentación y el juego son clave para el desarrollo de los niños. 
        Por eso, creamos una plataforma digital con recursos prácticos, confiables y validados por expertos, 
        para ayudar a padres y cuidadores a mejorar la alimentación y el aprendizaje de sus hijos.
      </p>

      <!-- Map section -->
      <div class="map-section">
        <div class="map-container">
          <div class="map-wrapper">
            <!-- Google Charts Peru Map -->
            <div id="peru_map" class="google-map"></div>
          </div>
          
          <div class="region-info">
            <div class="region-header">
              <h3>{{ currentRegion.name }}</h3>
              <p class="region-description">{{ currentRegion.description }}</p>
            </div>
            
            <div class="recipes-section">
              <h4>Recetarios disponibles:</h4>
              <div class="recipe-buttons">
                <button 
                  v-for="(recipe, index) in currentRegion.recipes" 
                  :key="index"
                  :class="['recipe-button', { available: recipe.available }]"
                  :disabled="!recipe.available"
                  @click="selectRecipe(recipe)"
                >
                  {{ recipe.name }}
                  <span class="plus-icon" v-if="recipe.available">+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 👇 botones de videos -->
      <div class="video-selector sub-selector">
        <button 
          v-for="(video, index) in videos" 
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
          {{ videos[currentVideoIndex].title }}
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
            {{ videos[currentVideoIndex].cardText }}
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
      currentVideoIndex: 0,
      showPlayButton: true,
      showCard: false,
      selectedRegion: 'costa', // Default region
      videos: [
        { 
          id: "v1756570756/El_cuento_del_bocado_zhbl6o", 
          title: "El cuento del bocado", 
          cardText: "Una historia divertida que ayuda a los niños a entender la importancia de comer bien y explorar nuevos sabores." 
        },
        { 
          id: "v1756570824/Exploradores_del_sabor_1_cgb3en", 
          title: "Exploradores del sabor", 
          cardText: "Un juego emocionante donde los niños descubren diferentes texturas y sabores de manera divertida." 
        },
        { 
          id: "v1756571026/Voces_sabrosas_tthjlz", 
          title: "Voces sabrosas", 
          cardText: "Actividad interactiva que combina sonidos y sabores para estimular múltiples sentidos durante la alimentación." 
        }
      ],
      regions: [
        {
          id: 'costa',
          name: 'REGIÓN COSTA',
          className: 'region-costa',
          description: 'Rica tradición culinaria costera con ingredientes marinos frescos y productos de tierras fértiles.',
          departments: ['PE-LAL', 'PE-LAM', 'PE-PIU', 'PE-TUM', 'PE-CAL', 'PE-LIM', 'PE-LMA', 'PE-ICA', 'PE-ARE', 'PE-MOQ', 'PE-TAC'],
          recipes: [
            { name: 'Recetario 1', available: true },
            { name: 'Recetario 2', available: false },
            { name: 'Recetario 3', available: false }
          ]
        },
        {
          id: 'sierra',
          name: 'REGIÓN SIERRA',
          className: 'region-sierra',
          description: 'Herencia andina con granos, tubérculos y tradiciones milenarias de la cordillera.',
          departments: ['PE-CUS', 'PE-APU', 'PE-HUV', 'PE-AYA', 'PE-JUN', 'PE-PAS', 'PE-HUC', 'PE-ANC', 'PE-CAJ', 'PE-PUN'],
          recipes: [
            { name: 'Recetario 1', available: false },
            { name: 'Recetario 2', available: true },
            { name: 'Recetario 3', available: false }
          ]
        },
        {
          id: 'selva',
          name: 'REGIÓN SELVA',
          className: 'region-selva',
          description: 'Biodiversidad amazónica con frutas exóticas, pescados de río y medicina natural.',
          departments: ['PE-LOR', 'PE-UCA', 'PE-MDD', 'PE-SAM', 'PE-AMA'],
          recipes: [
            { name: 'Recetario 1', available: false },
            { name: 'Recetario 2', available: false },
            { name: 'Recetario 3', available: true }
          ]
        }
      ],
      googleChart: null,
      chartDataTable: null
    };
  },
  computed: {
    cloudinaryVideoUrl() {
      return `https://res.cloudinary.com/${this.cloudName}/video/upload/${this.videos[this.currentVideoIndex].id}.mp4`;
    },
    cloudinaryThumbnailUrl() {
      return `https://res.cloudinary.com/${this.cloudName}/video/upload/f_jpg,q_auto,w_800/${this.videos[this.currentVideoIndex].id}.jpg`;
    },
    currentRegion() {
      return this.regions.find(region => region.id === this.selectedRegion) || this.regions[0];
    }
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
    },
    selectRecipe(recipe) {
      if (recipe.available) {
        console.log(`Selected recipe: ${recipe.name} from ${this.currentRegion.name}`);
        this.$emit('recipe-selected', {
          region: this.selectedRegion,
          recipe: recipe.name
        });
      }
    },
    loadGoogleCharts() {
      if (typeof google !== 'undefined' && google.charts) {
        google.charts.load('current', {
          'packages': ['geochart'],
          'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
        });
        google.charts.setOnLoadCallback(this.drawMap);
      } else {
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.onload = () => {
          google.charts.load('current', {
            'packages': ['geochart'],
            'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
          });
          google.charts.setOnLoadCallback(this.drawMap);
        };
        document.head.appendChild(script);
      }
    },
    drawMap() {
      this.chartDataTable = google.visualization.arrayToDataTable([
        ['Department', 'Region', 'Opacity'],
        // Costa
        ['PE-LAL', 1, 1], ['PE-LAM', 1, 1], ['PE-PIU', 1, 1], ['PE-TUM', 1, 1], 
        ['PE-CAL', 1, 1], ['PE-LIM', 1, 1], ['PE-LMA', 1, 1], ['PE-ICA', 1, 1], 
        ['PE-ARE', 1, 1], ['PE-MOQ', 1, 1], ['PE-TAC', 1, 1],
        // Sierra
        ['PE-CUS', 2, 0.2], ['PE-APU', 2, 0.2], ['PE-HUV', 2, 0.2], ['PE-AYA', 2, 0.2], 
        ['PE-JUN', 2, 0.2], ['PE-PAS', 2, 0.2], ['PE-HUC', 2, 0.2], ['PE-ANC', 2, 0.2], 
        ['PE-CAJ', 2, 0.2], ['PE-PUN', 2, 0.2],
        // Selva
        ['PE-LOR', 3, 0.2], ['PE-UCA', 3, 0.2], ['PE-MDD', 3, 0.2], ['PE-SAM', 3, 0.2], ['PE-AMA', 3, 0.2]
      ]);

      this.googleChart = new google.visualization.GeoChart(document.getElementById('peru_map'));

      google.visualization.events.addListener(this.googleChart, 'select', () => {
        const selection = this.googleChart.getSelection();
        if (selection.length > 0) {
          const selectedRow = selection[0].row;
          const regionValue = this.chartDataTable.getValue(selectedRow, 1);
          const regionMap = { 1: 'costa', 2: 'sierra', 3: 'selva' };
          const regionId = regionMap[regionValue];
          if (regionId) {
            this.selectRegion(regionId);
          }
        }
      });

      this.updateMapColors();
    },
    selectRegion(regionId) {
      this.selectedRegion = regionId;
      this.updateMapColors();
      console.log(`Selected region: ${regionId}`);
    },
    updateMapColors() {
      if (this.googleChart && this.chartDataTable) {
        const numRows = this.chartDataTable.getNumberOfRows();
        for (let i = 0; i < numRows; i++) {
          const regionValue = this.chartDataTable.getValue(i, 1);
          const regionMap = { 1: 'costa', 2: 'sierra', 3: 'selva' };
          const regionId = regionMap[regionValue];
          if (regionId === this.selectedRegion) {
            this.chartDataTable.setCell(i, 2, 1); // Full opacity
          } else {
            this.chartDataTable.setCell(i, 2, 0.2); // 80% transparent
          }
        }

        const options = {
          region: 'PE',
          resolution: 'provinces',
          width: 350,
          height: 400,
          colorAxis: {
            colors: ['#8B4513', '#FFD700', '#90EE90'],
            minValue: 1,
            maxValue: 3
          },
          backgroundColor: '#ffffff',
          datalessRegionColor: '#f5f5f5',
          defaultColor: '#f5f5f5',
          legend: 'none',
          tooltip: { trigger: 'selection' }
        };

        this.googleChart.draw(this.chartDataTable, options);
      }
    }
  },
  mounted() {
    const video = this.$refs.videoPlayer;
    window.addEventListener('resize', this.handleResize);
    video.addEventListener("loadedmetadata", () => {
      if (video.paused) {
        this.showPlayButton = true;
      }
    });
    this.loadGoogleCharts();
  }
};
</script>


<style scoped>
/* Centered category selector */
.video-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
  justify-content: center;
}

/* Sub-selector aligned to the left */
.video-selector.sub-selector {
  justify-content: flex-start;
  margin-top: -5px;
}

/* Button styles */
.video-selector button {
  padding: 10px 14px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  background-color: rgba(16, 156, 123, 0.7);
  color: white;
}

/* Active button style */
.video-selector button.active {
  background-color: #0DB68F;
  box-shadow: -4px 4px 6px rgb(255, 255, 20);
  font-weight: bold;
}

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

/* Map Section Styles */
.map-section {
  margin: 40px 0;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.map-container {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.map-wrapper {
  position: relative;
  flex: 1;
  max-width: 350px;
}

/* Google Charts Map Container */
.google-map {
  width: 100%;
  height: auto;       /* allow height to adjust with width */
  aspect-ratio: 1/1;  /* keeps it square so Peru is not distorted */
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  max-width: 100%;    /* prevent overflow */
}

.region-info {
  flex: 1;
  text-align: left;
}

.region-header h3 {
  color: #F4A261;
  font-family: 'Solway', serif;
  font-size: 1.2em;
  margin-bottom: 10px;
  background-color: #F4A261;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: bold;
}

.region-description {
  color: #848484;
  font-family: 'Solway', serif;
  line-height: 1.5;
  margin-bottom: 20px;
}

.recipes-section h4 {
  color: #333;
  font-family: 'Solway', serif;
  margin-bottom: 15px;
}

.recipe-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.recipe-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Solway', serif;
  font-size: 0.9em;
  transition: all 0.3s ease;
}

.recipe-button.available {
  background-color: #38B2AC;
  color: white;
}

.recipe-button.available:hover {
  background-color: #2C9A93;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.recipe-button:not(.available) {
  background-color: #E5E5E5;
  color: #999;
  cursor: not-allowed;
}

.plus-icon {
  font-size: 1.2em;
  font-weight: bold;
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

  .map-container {
    flex-direction: column;
    gap: 20px;
  }

  .map-wrapper {
    max-width: 100%;
  }

  .google-map {
    aspect-ratio: 4/5; /* taller aspect for mobile */
    max-width: 90%;    /* take almost full width */
    margin: 0 auto;    /* center */
  }

  .region-info {
    text-align: center;
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

  .video-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding-bottom: 98.25%;
    background-color: #f0f0f0;
    border-radius: 20px;
    overflow: hidden;
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

  .recipe-button {
    padding: 10px 15px;
    font-size: 0.8em;
  }

  .google-map {
    aspect-ratio: 3/4; /* even taller for very small screens */
    max-width: 100%;
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
  cursor: pointer;
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

  .map-wrapper {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
}
</style>