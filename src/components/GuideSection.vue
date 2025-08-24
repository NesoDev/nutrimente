<template>
    <div id="guide-section">
        <div class="extension-bg-img"></div>
        <div class="container">
            <div class="text">
                <h2 class="main-text">Nutrimente te brinda</h2>
                <p>
                    Juegos interactivos, recetas saludables y herramientas prácticas para acompañar el crecimiento de tu hijo. Todo está organizado por bloques temáticos para que puedas acceder fácil y rápido a lo que necesitas.
                </p>
            </div>
            <div class="content">
                <img class="img-content" src="@/assets/jaguar.svg" alt="">
                <div class="blocks">
                    <div class="block" id="block-1">
                        <img class="img-block" src="@/assets/apple.svg" alt="">
                        <div class="text-block">
                            <div class="top-text">
                                <h3>Bloque 1</h3>
                                <div class="top-btn">
                                    <img src="@/assets/arrow-right.svg" alt="" />
                                </div>
                            </div>
                            <p class="bottom-text">
                                Alimentando el futuro desde de los primeros años.
                            </p>
                        </div>
                    </div>
                    <div class="block" id="block-2">
                        <img class="img-block" src="@/assets/blocks.svg" alt="">
                        <div class="text-block">
                            <div class="top-text">
                                <h3>Bloque 2</h3>
                                <div class="top-btn">
                                    <img src="@/assets/arrow-right.svg" alt="" />
                                </div>
                            </div>
                            <p class="bottom-text">
                                Alimentando el futuro desde de los primeros años.
                            </p>
                        </div>
                    </div>
                    <div class="block" id="block-3">
                        <img class="img-block" src="@/assets/calculator.svg" alt="">
                        <div class="text-block">
                            <div class="top-text">
                                <h3>Bloque 3</h3>
                                <div class="top-btn">
                                    <img src="@/assets/arrow-right.svg" alt="" />
                                </div>
                            </div>
                            <p class="bottom-text">
                                Alimentando el futuro desde de los primeros años.
                            </p>
                        </div>
                    </div>
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        h2 {
            font-family: "BeachDay";
            font-weight: 200;
            font-size: 70px;
            color: #57ABF7;
            letter-spacing: 4px;
            -webkit-text-stroke: 2px #106CD5;
            text-align: center;
        }

        p {
            font-family: "Work Sans", sans-serif;
            font-weight: 600;
            font-size: 18px;
            color: #6d8f9d;
            backdrop-filter: blur(2px);
            line-height: 1.6;
            text-align: center;
            max-width: 80ch;
        }
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;

        .img-content {
            display: block;
            width: 30dvw;
        }

        .blocks {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            row-gap: 40px;
            justify-content: center;

            .block {
                max-width: 100%;
                width: 40%;
                min-width: 420px;
                height: 170px;
                flex-shrink: 0;
                background: #ffffff;
                border-radius: 32px;
                border: 4px solid #ededed;
                box-shadow: 0px 0px 10px 2px #e9f5f5;
                gap: 25px;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 16px;
                box-sizing: border-box;

                .img-block {
                    height: 100%;
                    width: auto;
                    border-radius: 16px;
                    box-shadow: 0 0 2px 2px #e8edef;
                }

                .text-block {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;

                    .top-text {
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;

                        h3 {
                            font-family: "Work Sans", sans-serif;
                            font-weight: bold;
                            font-size: 30px;
                            color: #606060;
                        }

                        .top-btn {
                            background: #FFFFFF;
                            width: 40px;
                            height: 40px;
                            border-radius: 20px;
                            box-shadow: 0 0 2px 2px #e8edef;

                            img {
                                width: 100%;
                            }
                        }
                    }

                    .bottom-text {
                        font-family: "Work Sans", sans-serif;
                        font-weight: 500;
                        font-size: 18px;
                        color: #949494;
                        line-height: 1.6;
                    }
                }
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
                -webkit-text-stroke: 1px #106CD5;
            }

            p {
                text-align: center;
                color: #53767e;
                font-size: 15px;
            }
        }

        .content {
            .img-content {
                display: none;
            }

            .blocks {
                gap: 10px;

                .block {
                    border-radius: 20px;
                    flex-direction: row;

                    .img-block {
                        display: block;
                    }

                    .text-block {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        gap: 5px;

                        .top-text {
                            width: 100%;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                        }

                        .bottom-text {
                            font-family: "Work Sans", sans-serif;
                            font-weight: 500;
                            font-size: 15px;
                            color: #6d8f9d;
                        }
                    }
                }
            }
        }
    }
}
</style>