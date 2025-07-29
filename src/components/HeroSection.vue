<template>
    <div class="hero-section">
        <div class="text">
            <div class="main-text">
                <h1>
                    <span class="highlight">Transforma la alimentación</span><br>
                    y el aprendizaje de tu hijo
                </h1>
            </div>
            <p class="desc-text">
                En NutriMente, sabemos que una buena alimentación y el juego son clave para el desarrollo de los niños.
                Por eso, creamos una plataforma digital con recursos prácticos, confiables y validados por expertos,
                para ayudar a padres y cuidadores a mejorar la alimentación y el aprendizaje de sus hijos.
            </p>
        </div>
        <img class="decorate" id="bear" src="../assets/bear.png" alt="">
        <img class="decorate" id="watermelon" src="../assets/watermelon.png" alt="">
        <video class="video-player" :src="cloudinaryVideoUrl" :poster="cloudinaryThumbnailUrl" controls
            preload="metadata">
            Your browser does not support the video tag.
        </video>
        <img class="bg" src="../assets/bg-home.svg" alt="">
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
            // Constructs the video URL for MP4 format
            return `https://res.cloudinary.com/${this.cloudName}/video/upload/${this.cloudinaryVideoId}.mp4`;
        },
        cloudinaryThumbnailUrl() {
            // Constructs a thumbnail URL (e.g., first frame as JPG)
            // This approach is typically more reliable for generating thumbnails from video IDs.
            // It specifies the desired format (f_jpg) and quality (q_auto), and a width (w_800).
            return `https://res.cloudinary.com/${this.cloudName}/video/upload/f_jpg,q_auto,w_800/${this.cloudinaryVideoId}.jpg`;
            // If the above doesn't work, try explicitly requesting the first frame:
            // return `https://res.cloudinary.com/${this.cloudName}/video/upload/q_auto,f_jpg,pg_1,w_800/${this.cloudinaryVideoId}.jpg`;
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Solway:wght@500&display=swap');

.hero-section {
    position: relative;
    width: 100%;
    height: fit-content;
    background: #F3F1EA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 40px;
    padding: 120px 0px 220px 0px;

    .text {
        width: 60%;
        height: fit-content;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 20px;

        .main-text {
            h1 {
                font-family: 'Tilt Warp', cursive;
                font-size: 40px;
                overflow-wrap: break-word;
                white-space: normal;
            }

            .highlight {
                width: fit-content;
                padding: 0px 10px;
                box-sizing: border-box;
                background-color: #FFEC8C;
            }
        }

        .desc-text {
            font-family: 'Solway', serif;
            color: #848484;
        }
    }

    .video-player {
        width: 70%;
        height: auto;
        background: #fff;
        z-index: 1;
        border-radius: 60px;
        border: 20px solid #fff;
    }

    .bg {
        position: absolute;
        z-index: 0;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .decorate {
        position: absolute;
    }

    #bear {
        left: 150px;
        top: 120px;
    }

    #watermelon {
        right: 150px;
        top: 120px;
    }
}

@media (max-width: 768px) {
    .hero-section { 
        padding: 60px 0px 20px 0px;
    }

    .hero-section .text {
        /* Adaptaciones para el texto */
    }

    .hero-section .video-player {
        /* Adaptaciones para el video */
    }

    .hero-section #bear,
    .hero-section #watermelon {
        /* Adaptaciones para decoraciones móviles */
    }
}
</style>
