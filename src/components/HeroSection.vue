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
        <div class="video-wrapper">
            <video ref="video" class="video-player" :src="cloudinaryVideoUrl" :poster="cloudinaryThumbnailUrl"
                preload="metadata" @click="playVideo"></video>
            <button class="custom-play-button" @click="playVideo">
                <img src="../assets/play.svg" alt="">
            </button>
        </div>
        <img class="bg" id="bg-desktop" src="../assets/bg-desktop.svg" alt="">
        <img class="bg" id="bg-mobile" src="../assets/bg-mobile.svg" alt="">
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
    methods: {
        playVideo() {
            const video = this.$refs.video;
            video.play();
            const btn = document.querySelector('.custom-play-button');
            if (btn) btn.style.display = 'none';
        }
    }
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
        z-index: 1;

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

    .video-wrapper {
        position: relative;
        width: 70%;
        display: flex;
        justify-content: center;
        z-index: 1;

        .video-player {
            height: 100%;
            background: #fff;
            display: block;
            border-radius: 68px;
            border: 20px solid #fff;
        }

        .custom-play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #7673FF;
            border: none;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 2;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease;
        }

        .custom-play-button:hover {
            background-color: rgb(132, 130, 242);
        }
    }

    .bg {
        position: absolute;
        z-index: 0;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    #bg-desktop {
        display: block;
    }

    #bg-mobile {
        display: none;
    }

    .decorate {
        position: absolute;
        z-index: 1;
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
        gap: 200px;
        padding: 100px 0px;

        .text {
            width: calc(100% - 60px);

            .main-text {
                h1 {
                    font-size: 24px;
                }
            }

            .desc-text {
                font-size: 14px;
            }
        }

        .video-wrapper {
            width: 85%;
            aspect-ratio: 1/1;
            overflow: hidden;
            border: 12px solid #fff;
            border-radius: 52px;

            .video-player {
                height: 100%;
                border-radius: 58px;
            }

            .custom-play-button {
                width: 80px;
                height: 80px;
            }

            img {
                width: 40px;
                height: 40px;
            }
        }

        #bg-desktop {
            display: none;
        }

        #bg-mobile {
            display: block;
        }

        .decorate {
            width: 50px;
            height: auto;
        }

        #bear {
            left: -10px;
            top: 100px;
        }

        #watermelon {
            right: -10px;
            top: 100px;
        }
    }
}
</style>
