<template>
    <div id="hero-section">
        <img class="cloud-bg-img fade-in-slow" id="cloud-bg-mobile" src="@/assets/cloud-bg-mobile.svg" alt="">
        <img class="cloud-bg-img fade-in-slow" id="cloud-bg-desktop" src="@/assets/cloud-bg-desktop.svg" alt="">
        <div id="wave-bg-img" class="wave-animation">
            <img class="main-bg-img" id="bg-img-desktop" src="@/assets/wave-bg-desktop.svg" alt="">
            <div class="extension-bg-img"></div>
        </div>

        <div id="container">
            <div class="decorations">
                <img id="bear" class="float-animation bear-bounce" src="@/assets/bear.png" alt="">
                <img id="watermelon" class="float-animation watermelon-bounce" src="@/assets/watermelon.png" alt="">
            </div>
            <div class="text fade-in-up">
                <div class="main-text">
                    <h1 class="text-reveal">Transforma la alimentación y el aprendizaje de tu hijo</h1>
                    <img src="@/assets/hightlight.svg" alt="" class="highlight-animation">
                </div>
                <p class="fade-in-up-delayed">
                    En NutriMente, sabemos que una buena alimentación y el juego son clave para el desarrollo de los
                    niños.
                    Por eso, creamos una plataforma digital con recursos prácticos, confiables y validados por expertos,
                    para ayudar a padres y cuidadores a mejorar la alimentación y el aprendizaje de sus hijos.
                </p>
            </div>

            <div class="video scale-in-video">
                <div class="video-wrapper hover-lift">
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
@import url('https://fonts.googleapis.com/css2?family=Solway:wght@500&display=swap');

/* Animaciones Keyframes */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInSlow {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes floatAnimation {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

@keyframes bearBounce {

    0%,
    100% {
        transform: translateY(0px) rotate(-2deg);
    }

    50% {
        transform: translateY(-15px) rotate(2deg);
    }
}

@keyframes watermelonBounce {

    0%,
    100% {
        transform: translateY(0px) rotate(2deg);
    }

    50% {
        transform: translateY(-12px) rotate(-2deg);
    }
}

@keyframes scaleInVideo {
    from {
        opacity: 0;
        transform: scale(0.8);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes textReveal {
    from {
        opacity: 0;
        transform: translateY(20px);
        filter: blur(3px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
    }
}

@keyframes highlightDraw {
    from {
        opacity: 0;
        transform: scaleX(0) translateX(-50%);
        transform-origin: left center;
    }

    to {
        opacity: 1;
        transform: scaleX(1) translateX(-50%);
        transform-origin: left center;
    }
}

@keyframes waveMove {

    0%,
    100% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(2px);
    }
}

@keyframes hoverLift {
    from {
        transform: translateY(0) scale(1);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    to {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
}

/* Clases de animación */
.fade-in-slow {
    animation: fadeInSlow 2s ease-out;
}

.fade-in-up {
    animation: fadeInUp 1s ease-out 0.3s both;
}

.fade-in-up-delayed {
    animation: fadeInUp 1s ease-out 0.6s both;
}

.float-animation {
    animation: floatAnimation 3s ease-in-out infinite;
}

.bear-bounce {
    animation: bearBounce 4s ease-in-out infinite;
    animation-delay: 0.5s;
}

.watermelon-bounce {
    animation: watermelonBounce 3.5s ease-in-out infinite;
    animation-delay: 1s;
}

.scale-in-video {
    animation: scaleInVideo 1.2s ease-out 0.8s both;
}

.text-reveal {
    animation: textReveal 1.2s ease-out 0.4s both;
}

.highlight-animation {
    animation: highlightDraw 1.5s ease-out 1.2s both;
}

.wave-animation {
    animation: waveMove 6s ease-in-out infinite;
}

.hover-lift {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover {
        animation: hoverLift 0.4s ease-out forwards;
    }
}

#hero-section {
    position: relative;
    width: 100%;
    height: 100dvh;
    background: linear-gradient(135deg, #F3F1EA 0%, #F8F6F0 100%);
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
    }

    .extension-bg-img {
        display: none;
    }
}

#container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
    width: 70%;
    height: 80dvh;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    .decorations {
        position: absolute;
        top: 0;
        width: 100%;

        #bear {
            position: absolute;
            top: 10px;
            left: -120px;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.1) rotate(5deg);
            }
        }

        #watermelon {
            position: absolute;
            top: 10px;
            right: -120px;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.1) rotate(-5deg);
            }
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

            img {
                position: absolute;
                left: 50%;
                top: -25px;
                width: 110%;
                z-index: 1;
            }

            h1 {
                position: relative;
                text-align: center;
                font-family: 'Solway', serif;
                font-size: 36px;
                color: #5b3636;
                max-width: 21ch;
                margin: 0;
                z-index: 2;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            }
        }

        p {
            text-align: center;
            font-family: 'Solway', serif;
            font-size: 16px;
            color: #848484;
            max-width: 80ch;
            background: rgba(243, 241, 234, 0.9);
            backdrop-filter: blur(10px);
            padding: 10px;
            border-radius: 8px;
            line-height: 1.6;
        }
    }

    .video {
        flex: 1;
        background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
        display: flex;
        //aspect-ratio: 16/9;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border: 20px solid #ffffff;
        border-radius: 48px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        position: relative;

        &::before {
            content: '';
            position: absolute;
            inset: -2px;
            background: linear-gradient(45deg, #06B58E, #4ECDC4, #45B7D1, #96CEB4);
            border-radius: 50px;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &:hover::before {
            opacity: 0.1;
        }

        .video-wrapper {
            width: 100%;
            height: 100%;
            object-fit: cover;
            overflow: hidden;
            border-radius: 28px;

            video {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;

                &:hover {
                    transform: scale(1.02);
                }
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
            background: linear-gradient(180deg, #06B58E 0%, #06B58E 100%);
        }
    }

    #container {
        width: 90%;
        height: 80dvh;

        .decorations {
            position: absolute;
            top: 0;
            width: 100%;

            #bear {
                position: absolute;
                top: 10px;
                left: -20px;
                width: 60px;
            }

            #watermelon {
                position: absolute;
                top: 10px;
                right: -20px;
                width: 60px;
            }
        }

        .text {

            gap: 1px;

            .main-text {
                img {
                    top: -20px;
                    width: 300px;
                    height: 80px;
                }

                h1 {
                    text-align: center;
                    font-family: 'Solway', serif;
                    font-size: 30px;
                    max-width: 20ch;
                }
            }

            p {
                font-size: 15px;
                max-width: 60ch;
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

    /* Animaciones móvil más suaves */
    .bear-bounce,
    .watermelon-bounce {
        animation-duration: 5s;
    }

    .float-animation {
        animation-duration: 4s;
    }
}

/* Animaciones adicionales para interacciones */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
</style>