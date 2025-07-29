<template>
    <div class="hero-section">
        <img src="../assets/hero.png" alt="">
        <div class="text">
            <span class="main-text">
                <h1>Transforma la alimentación y el aprendizaje de tu hijo</h1>
                <img src="../assets/underline.svg" alt="">
            </span>
            <p class="desc-text">
                En NutriMente, sabemos que una buena alimentación y el juego son clave para el desarrollo de los niños. Por eso, creamos una plataforma digital con recursos prácticos, confiables y validados por expertos, para ayudar a padres y cuidadores a mejorar la alimentación y el aprendizaje de sus hijos.
            </p>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tilt+Warp&display:wght@200&display=swap');

.hero-section {
    width: 100%;
    height: 100dvh;
    background: #F3F1EA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    .text {
        width: 80%;
        height: fit-content;
        text-align: center;
        background: #dadada;
        display: flex;
        flex-direction: column;
        gap: 20px;

        span {
            h1 {
                font-family: 'Tilt Warp', cursive;
                font-size: 30px;
            }
            
            img {
                width: fit-content;
                height: 20px;
            }
        }


    }
}

img {
    width: 100%;
    height: 100%;
    display: none;
}
</style>
