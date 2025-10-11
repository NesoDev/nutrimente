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
                        <span id="line-1">¡Bienvenidos a</span>
                        <span id="line-2">Nutrimente!</span>
                    </h1>
                </div>
                <p>
                    Una plataforma digital con recursos
                    <span id="p-1">prácticos, confiables y validados por expertos</span>,
                    que busca sensibilizar y orientar a padres y cuidadores sobre la importancia de una alimentación saludable y el juego en los primeros años,
                    para <span id="p-2">informar, guiar y brindar herramientas accesibles</span> que impulsen el desarrollo integral de los niños.
                </p>
            </div>

            <div class="video-with-mascots">
                <!-- Mascota izquierda -->
                <img src="@/assets/animal2_finger.png" alt="Mascota" class="mascot-left desktop-only">

                <div class="video">
                    <div class="video-wrapper">
                        <video controls width="100%" height="auto" :poster="cloudinaryThumbnailUrl">
                            <source :src="cloudinaryVideoUrl" type="video/mp4">
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                </div>

                <!-- Mascota derecha -->
                <img src="@/assets/animal3_finger.png" alt="Mascota" class="mascot-right desktop-only">
            </div>


            <div class="highlight-phrase">
                <div class="phrase-content">
                    <img src="@/assets/animal4_finger.png" alt="Mascota" class="phrase-mascot">
                    <p>"Cada pequeño cambio cuenta y puede marcar la diferencia en su futuro"</p>
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
            cloudinaryVideoId: 'VIDEO_PRESENTACI%C3%93N_NUTRIMENTE_1_1_1_pcbzkw',
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
    max-width: 100vw;
    min-height: 100vh;
    height: auto;
    background-color: #f9f9ef;
    background-image: radial-gradient(circle, #f6faf1 4px, transparent 1px);
    background-size: 20px 20px;
    overflow-x: hidden;
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}

.cloud-bg-img {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.05));
    z-index: 1;
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
    z-index: 1;

    .main-bg-img {
        width: 100%;
        height: auto;
        display: block;
        filter: drop-shadow(0 -4px 12px rgba(141, 186, 63, 0.15));
        transform-origin: bottom center;
    }

    .extension-bg-img {
        display: none;
        transform-origin: top center;
    }
}

.highlight-phrase {
    padding: 20px 24px;
    border-radius: 20px;
    background: linear-gradient(135deg, #f6faf1 0%, #f9f9ef 100%);
    border: 3px solid #f1b33f;
    box-shadow: 0 6px 20px rgba(241, 179, 63, 0.3);
    max-width: 700px;
    margin: 0 auto;
    width: 100%;

    .phrase-content {
        display: flex;
        align-items: center;
        gap: 16px;
        justify-content: center;

        .phrase-mascot {
            width: 60px;
            height: auto;
            flex-shrink: 0;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
            animation: bounce 2s ease-in-out infinite;
        }

        p {
            font-family: "Work Sans", sans-serif;
            font-weight: 700;
            font-size: 18px;
            text-align: left;
            margin: 0;
            line-height: 1.5;
            background-image: linear-gradient(135deg, #8dba3f 0%, #f1b33f 50%, #70cdba 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
    }
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }
    25% {
        transform: translateY(-8px) rotate(-5deg);
    }
    50% {
        transform: translateY(0) rotate(0deg);
    }
    75% {
        transform: translateY(-5px) rotate(5deg);
    }
}

#container {
    position: relative;
    width: 90%;
    max-width: 1300px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 35px;
    padding: 20px;
    margin: 0 auto;

    .decorations {
        position: absolute;
        top: -20px;
        width: 100%;
        max-width: 1500px;
        left: 50%;
        transform: translateX(-50%);
        pointer-events: none;

        .desktop-only {
            display: block;
        }

        .mobile-only {
            display: none;
        }

        #bear,
        #decoration-left {
            position: absolute;
            top: 0;
            left: 0;
            width: 140px;
            height: auto;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }

        #watermelon,
        #decoration-right {
            position: absolute;
            top: 0;
            right: 0;
            width: 140px;
            height: auto;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }
    }

    .text {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        margin-top: 20px;

        .main-text {
            position: relative;
            height: auto;
            width: auto;
            margin-bottom: -5px;

            h1 {
                position: relative;
                text-align: center;
                font-family: "BeachDay", "Cooper Black", cursive;
                font-weight: 400;
                margin: 0;
                z-index: 2;
                line-height: 1.1;
                letter-spacing: 2px;

                #line-1 {
                    display: block;
                    white-space: nowrap;
                    font-size: 50px;
                    color: #8dba3f;
                    -webkit-text-stroke: 2px #8dbb39;
                    text-shadow: 3px 3px 0px #f1b33f,
                                 5px 5px 0px #f1b33f;
                    transform: rotate(-2deg);
                }

                #line-2 {
                    display: block;
                    white-space: nowrap;
                    font-size: 68px;
                    color: #70cdba;
                    -webkit-text-stroke: 3px #70cdba;
                    text-shadow: 3px 3px 0px #8dba3f,
                                 5px 5px 0px #8dbb39;
                    transform: rotate(1deg);
                }
            }
        }

        p {
            text-align: center;
            font-family: "Work Sans", sans-serif;
            font-weight: 600;
            font-size: 17px;
            color: #333333;
            max-width: 850px;
            backdrop-filter: blur(2px);
            padding: 12px 20px;
            border-radius: 8px;
            line-height: 1.7;
            margin: 0 auto;

            #p-1 {
                font-weight: bold;
                color: #8dba3f
            }

            #p-2 {
                font-weight: bold;
                color: #70cdba
            }
        }
    }

    .video-with-mascots {
        display: flex;
        align-items: center;
        gap: 60px;
        width: 100%;
        max-width: 1200px;
        justify-content: center;

        .mascot-left,
        .mascot-right {
            width: 100px;
            height: auto;
            flex-shrink: 0;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
            animation: float 3s ease-in-out infinite;
        }

        .mascot-left {
            animation-delay: 0s;
        }

        .mascot-right {
            animation-delay: 1.5s;
        }
    }

    .video {
        flex: 1;
        width: 100%;
        max-width: 750px;
        aspect-ratio: 16/9;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border: 10px solid #ffffff;
        border-radius: 40px;
        position: relative;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

        .video-wrapper {
            width: 100%;
            height: 100%;
            object-fit: fill;
            overflow: hidden;
            border-radius: 30px;

            video {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-15px);
        }
    }
}

/* Large desktop (1440px+) */
@media (min-width: 1441px) {
    #container {
        max-width: 1400px;

        .decorations {
            max-width: 1600px;

            #bear,
            #decoration-left {
                width: 160px;
            }

            #watermelon,
            #decoration-right {
                width: 160px;
            }
        }

        .video-with-mascots {
            gap: 80px;

            .mascot-left,
            .mascot-right {
                width: 110px;
            }
        }

        .video {
            max-width: 800px;
        }
    }
}

/* Standard laptop (1024px - 1440px) */
@media (max-width: 1440px) {
    #container {
        width: 88%;
        gap: 32px;

        .decorations {
            #bear,
            #decoration-left {
                width: 130px;
            }

            #watermelon,
            #decoration-right {
                width: 130px;
            }
        }

        .text {
            .main-text {
                h1 {
                    #line-1 {
                        font-size: 46px;
                    }

                    #line-2 {
                        font-size: 62px;
                    }
                }
            }

            p {
                font-size: 16px;
                max-width: 800px;
            }
        }

        .video-with-mascots {
            gap: 50px;

            .mascot-left,
            .mascot-right {
                width: 90px;
            }
        }

        .video {
            max-width: 700px;
        }
    }

    .highlight-phrase {
        max-width: 650px;
        padding: 18px 22px;

        .phrase-content {
            .phrase-mascot {
                width: 55px;
            }

            p {
                font-size: 17px;
            }
        }
    }
}

/* Small laptop (1024px - 1280px) */
@media (max-width: 1280px) {
    #container {
        width: 90%;
        gap: 28px;

        .decorations {
            #bear,
            #decoration-left {
                width: 115px;
            }

            #watermelon,
            #decoration-right {
                width: 115px;
            }
        }

        .text {
            .main-text {
                h1 {
                    #line-1 {
                        font-size: 42px;
                    }

                    #line-2 {
                        font-size: 56px;
                    }
                }
            }

            p {
                font-size: 15px;
                max-width: 750px;
            }
        }

        .video-with-mascots {
            gap: 45px;

            .mascot-left,
            .mascot-right {
                width: 80px;
            }
        }

        .video {
            max-width: 650px;
        }
    }

    .highlight-phrase {
        max-width: 600px;
        padding: 16px 20px;

        .phrase-content {
            .phrase-mascot {
                width: 50px;
            }

            p {
                font-size: 16px;
            }
        }
    }
}

/* Tablet landscape */
@media (max-width: 1024px) {
    #container {
        width: 92%;
        gap: 25px;
        padding: 15px;

        .decorations {
            #bear,
            #decoration-left {
                width: 100px;
            }

            #watermelon,
            #decoration-right {
                width: 100px;
            }
        }

        .text {
            .main-text {
                h1 {
                    #line-1 {
                        font-size: 38px;
                        -webkit-text-stroke: 1.8px #8dbb39;
                    }

                    #line-2 {
                        font-size: 52px;
                        -webkit-text-stroke: 2.5px #70cdba;
                    }
                }
            }

            p {
                font-size: 15px;
                max-width: 700px;
            }
        }

        .video-with-mascots {
            gap: 35px;

            .mascot-left,
            .mascot-right {
                width: 70px;
            }
        }

        .video {
            max-width: 600px;
        }
    }

    .highlight-phrase {
        max-width: 550px;
        padding: 16px 18px;

        .phrase-content {
            .phrase-mascot {
                width: 48px;
            }

            p {
                font-size: 16px;
            }
        }
    }
}

/* Tablet portrait */
@media (max-width: 768px) {
    #hero-section {
        min-height: 100vh;
        padding: 20px 0;
    }

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
            height: 20vh;
            background: #70cdba;
        }
    }

    #container {
        width: 90%;
        gap: 22px;
        padding: 20px 10px 60px 10px;

        .decorations {
            .desktop-only {
                display: none;
            }

            .mobile-only {
                display: block;
            }

            #bear {
                position: absolute;
                top: -10px;
                left: 5px;
                width: 45px;
            }

            #watermelon {
                position: absolute;
                top: -10px;
                right: 5px;
                width: 45px;
            }
        }

        .text {
            gap: 12px;
            margin-top: 10px;

            .main-text {
                margin-bottom: -5px;

                h1 {
                    #line-1 {
                        font-size: 34px;
                        -webkit-text-stroke: 1.6px #8dbb39;
                        text-shadow: 2px 2px 0px #f1b33f,
                                     3px 3px 0px #f1b33f;
                    }

                    #line-2 {
                        font-size: 46px;
                        -webkit-text-stroke: 2.2px #70cdba;
                        text-shadow: 2px 2px 0px #8dba3f,
                                     3px 3px 0px #8dbb39;
                    }
                }
            }

            p {
                color: #333333;
                font-size: 14px;
                max-width: 95%;
                padding: 12px 16px;
            }
        }

        .video-with-mascots {
            flex-direction: column;
            gap: 0;
            width: 100%;

            .mascot-left,
            .mascot-right {
                display: none;
            }
        }

        .video {
            border: 10px solid #ffffff;
            border-radius: 32px;
            max-width: 100%;
        }
    }

    .highlight-phrase {
        max-width: 90%;
        padding: 15px 18px;

        .phrase-content {
            gap: 12px;

            .phrase-mascot {
                width: 45px;
            }

            p {
                font-size: 15px;
            }
        }
    }
}

/* Small mobile */
@media (max-width: 480px) {
    #container {
        width: 92%;
        gap: 18px;

        .text {
            .main-text {
                h1 {
                    #line-1 {
                        font-size: 30px;
                        -webkit-text-stroke: 1.4px #8dbb39;
                    }

                    #line-2 {
                        font-size: 40px;
                        -webkit-text-stroke: 2px #70cdba;
                    }
                }
            }

            p {
                font-size: 13px;
                padding: 10px 14px;
            }
        }

        .video {
            border: 8px solid #ffffff;
            border-radius: 28px;

            .video-wrapper {
                border-radius: 20px;
            }
        }
    }

    .highlight-phrase {
        padding: 14px 16px;

        .phrase-content {
            gap: 10px;

            .phrase-mascot {
                width: 40px;
            }

            p {
                font-size: 14px;
            }
        }
    }
}
</style>