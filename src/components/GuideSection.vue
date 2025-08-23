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
    background: linear-gradient(to bottom, #0FDAC2, #f4feff);
    border-radius: 0px 0px 40px 40px;
}

.container {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

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
            color: #0E8AF7;
            text-align: center;
        }

        p {
            font-family: "Work Sans", sans-serif;
            font-weight:600;
            font-size: 18px;
            color: #6d8f9d;
            font-size: 18px;
            backdrop-filter: blur(2px);
            max-width: 50ch;
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
            width: 300px;
        }

        .blocks {
            width: 100%;
            height: 600px;
            background: yellow;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;

            .block {
                flex: 1 1 30%;
                min-width: 500px;
                max-width: 600pc;
                height: 170px;
                background: #ffffff;
            }
        }
    }
}

@media (max-width: 768px) {
    #guide-section {
        gap: 60px;
    }

    .extension-bg-img {
        height: 10px;
        border-radius: 0px 0px 40px 40px;
    }

    .container {
        .text {
            flex-direction: column;
            align-items: center;
            gap: 20px;

            h2 {
                font-size: 30px;
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
        }
    }
}
</style>