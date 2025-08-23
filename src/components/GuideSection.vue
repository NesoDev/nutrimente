<template>
    <div id="guide-section">
        <div class="extension-bg-img"></div>
        <div class="container">
            <div class="text">
                <h2 class="main-text">Nutrimente te brinda</h2>
                <p>
                    Juegos, recetas y recursos prácticos para el desarrollo de tu hijo, todo ordenado por bloques
                    temáticos.
                </p>
            </div>
            <div class="content">
                <img src="@/assets/jaguar.svg" alt="">
                <div class="blocks">
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

@font-face {
    font-family: "BeachDay";
    src: url("@/assets/fonts/beachday.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}

#guide-section {
    width: 100%;
    height: auto;
    background-color: #f4feff;
    background-image: radial-gradient(circle, #e5f6f8 4px, transparent 1px);
    background-size: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 120px;
    padding-bottom: 80px;
}

.extension-bg-img {
    width: 100%;
    height: 60px;
    background: #0FDAC2;
    border-radius: 0px 0px 20px 20px;
}

.container {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    .text {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 50px;

        h2 {
            font-family: "BeachDay";
            font-weight: 200;
            font-size: 50px;
            color: #FFBB52;
            letter-spacing: 4px;
            -webkit-text-stroke: 2px #8f5a5c;
            text-align: center;
        }

        p {
            font-family: "Work Sans", sans-serif;
            font-weight: 600;
            font-size: 18px;
            color: #6d8f9d;
            backdrop-filter: blur(2px);
            max-width: 50ch;
            line-height: 1.6;
        }
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;

        img {
            display: block;
            width: 30dvw;
        }

        .blocks {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            row-gap: 20px;
            justify-content: center;

            .block {
                max-width: 100%;
                width: 40%;
                min-width: 400px;
                height: 170px;
                flex-shrink: 0;
                background: #fff;
                border-radius: 32px;
                border:  1px solid #e5f6f8;
                box-shadow:  0px 0px 10px 2px #e9f5f5;

            }
        }
    }
}

@media (max-width: 768px) {
    #guide-section {
        gap: 60px;
    }

    .extension-bg-img {
        height: 20px;
    }

    .container {
        gap: 30px;

        .text {
            flex-direction: column;
            align-items: center;
            gap: 20px;

            h2 {
                font-size: 30px;
                -webkit-text-stroke: 1px #693f41;
            }

            p {
                text-align: center;
                color: #53767e;
                font-size: 15px;
            }
        }

        .content {
            img {
                display: none;
            }

            .blocks {
                gap: 10px;

                .block {
                    border-radius: 20px;
                }
            }
        }
    }
}
</style>