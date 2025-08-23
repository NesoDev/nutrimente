<template>
    <div id="hero-section">
        <img class="cloud-bg-img" id="cloud-bg-mobile" src="@/assets/cloud-bg-mobile.svg" alt="">
        <img class="cloud-bg-img" id="cloud-bg-desktop" src="@/assets/cloud-bg-desktop.svg" alt="">
        <div id="wave-bg-img">
            <img class="main-bg-img" id="bg-img-desktop" src="@/assets/wave-bg-desktop.svg" alt="">
            <div class="extension-bg-img"></div>
        </div>

        <div id="container">
            <div class="decorations">
                <!-- Mobile -->
                <img id="bear" class="mobile-only" src="@/assets/bear.png" alt="">
                <img id="watermelon" class="mobile-only" src="@/assets/watermelon.png" alt="">

                <!-- Desktop -->
                <img id="decoration-left" class="desktop-only" src="@/assets/decoration-left.svg" alt="">
                <img id="decoration-right" class="desktop-only" src="@/assets/decoration-right.svg" alt="">
            </div>
            <div class="text">
                <div class="main-text">
                    <h1>
                        <span id="line-1">Aprendizaje que</span>
                        <span id="line-2">nutre y divierte</span>
                    </h1>
                </div>
                <p>
                    NutriMente ofrece recursos expertos y prácticos para padres y cuidadores que buscan mejorar la
                    alimentación y el aprendizaje de los más chicos a través de la <span id="p-1">NUTRICIÓN</span> y el
                    <span id="p-2">JUEGO</span>.
                </p>
            </div>

            <div class="video">
                <div class="video-wrapper">
                    <video controls width="100%" height="auto" :poster="cloudinaryThumbnailUrl">
                        <source :src="cloudinaryVideoUrl" type="video/mp4">
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cloudName: 'dlejpox8a',
            cloudinaryVideoId: 'Video_1_corregido_1_ewlrfy',
        }
    },
    computed: {
        cloudinaryVideoUrl() {
            return `https://res.cloudinary.com/${this.cloudName}/video/upload/${this.cloudinaryVideoId}.mp4`;
        },
        cloudinaryThumbnailUrl() {
            return `https://res.cloudinary.com/${this.cloudName}/video/upload/f_jpg,q_auto,w_800/${this.cloudinaryVideoId}.jpg`;
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

@font-face {
    font-family: "BeachDay";
    src: url("@/assets/fonts/beachday.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}

#hero-section {
    position: relative;
    width: 100%;
    height: 100dvh;
    background-color: #f4feff;
    /* color base */
    background-image: radial-gradient(circle, #e5f6f8 4px, transparent 1px);
    background-size: 20px 20px;
    /* distancia entre puntos */
    overflow: hidden;
}

.cloud-bg-img {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.05));
}

#cloud-bg-desktop {
    display: block;
}

#cloud-bg-mobile {
    display: none;
}

#wave-bg-img {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0;

    .main-bg-img {
        width: 100%;
        height: auto;
        display: block;
        filter: drop-shadow(0 -4px 12px rgba(6, 181, 142, 0.15));
        transform-origin: bottom center;
    }

    .extension-bg-img {
        display: none;
        transform-origin: top center;
    }
}

#container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
    width: 70%;
    height: 80dvh;
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    .decorations {
        position: absolute;
        top: 0;
        width: 100%;

        .desktop-only {
            display: block;
        }

        .mobile-only {
            display: none;
        }

        #bear,
        #decoration-left {
            position: absolute;
            top: 10px;
            left: -200px;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }

        #watermelon,
        #decoration-right {
            position: absolute;
            top: 10px;
            right: -200px;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }
    }

    .text {
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .main-text {
            position: relative;
            height: auto;
            width: auto;
            margin-bottom: -15px;

            h1 {
                position: relative;
                text-align: center;
                font-family: "BeachDay";
                font-weight: 200;
                margin: 0;
                z-index: 2;
                line-height: 1;

                #line-1 {
                    display: block;
                    white-space: nowrap;
                    font-size: 50px;
                    color: #1783e2;
                }

                #line-2 {
                    display: block;
                    white-space: nowrap;
                    font-size: 80px;
                    color: #0FDAC2;
                }
            }
        }

        p {
            text-align: center;
            font-family: "Work Sans", sans-serif;
            font-weight:600;
            font-size: 18px;
            color: #6d8f9d;
            max-width: 80ch;
            backdrop-filter: blur(2px);
            padding: 10px;
            border-radius: 8px;
            line-height: 1.6;

            #p-1 {
                font-weight: bold;
                color: #0E8AF7
            }

            #p-2 {
                font-weight: bold;
                color: #0FDAC2
            }
        }
    }

    .video {
        flex: 1;
        aspect-ratio: 16/9;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border: 12px solid #ffffff;
        border-radius: 48px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        position: relative;

        .video-wrapper {
            width: 100%;
            height: 100%;
            object-fit: fill;
            overflow: hidden;
            border-radius: 28px;

            video {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

@media (max-width: 768px) {
    #cloud-bg-desktop {
        display: none;
    }

    #cloud-bg-mobile {
        display: block;
    }

    #wave-bg-img {
        .extension-bg-img {
            display: block;
            width: 100%;
            height: 30dvh;
            background: #0FDAC2;
        }
    }

    #container {
        width: 90%;
        height: 80dvh;
        bottom: 30px;

        .decorations {
            position: absolute;
            top: 0;
            width: 100%;

            .desktop-only {
                display: none;
            }

            .mobile-only {
                display: block;
            }

            #bear {
                position: absolute;
                top: -5px;
                left: -0px;
                width: 40px;
            }

            #watermelon {
                position: absolute;
                top: -5px;
                right: -0px;
                width: 40px;
            }
        }

        .text {
            .main-text {

                h1 {
                    #line-1 {
                        font-size: 30px;
                    }

                    #line-2 {
                        font-size: 45px;
                    }
                }
            }

            p {
                color: #53767e;
                font-size: 15px;
                max-width: 40ch;
                padding: 15px;
            }
        }

        .video {
            border: 12px solid #ffffff;
            border-radius: 40px;
            aspect-ratio: auto;

            .video-wrapper {
                aspect-ratio: inherit;
                border-radius: 28px;
            }
        }
    }
}
</style>