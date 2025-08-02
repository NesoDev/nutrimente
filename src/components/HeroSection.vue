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
        <div class="box-decorate">
            <img id="bear" src="../assets/bear.png" alt="">
            <img id="watermelon" src="../assets/watermelon.png" alt="">
        </div>

        <div class="group-video-bg">
            <div class="video-wrapper" @click="handleVideoClick">
                <video ref="video" class="video-player" :src="cloudinaryVideoUrl" :poster="cloudinaryThumbnailUrl"
                    preload="metadata" @ended="onVideoEnded"></video>

                <!-- Botón de Play -->
                <button v-if="!isPlaying" class="custom-play-button" :class="{ visible: showControls }"
                    @click.stop="playVideo">
                    <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_455_7)">
                            <path
                                d="M8.20829 6.14933C8.10109 1.57425 12.9495 -1.43181 16.9997 0.698521L44.793 15.3171C48.8997 17.4772 49.1052 23.2817 45.1616 25.7268L18.1039 42.5029C14.1603 44.948 9.0526 42.1829 8.94391 37.5441L8.20829 6.14933Z"
                                fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_455_7">
                                <rect width="48" height="43.4124" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>

                <!-- Botón de Pause -->
                <button v-else class="custom-pause-button" :class="{ visible: showControls }" @click.stop="playVideo">
                    <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_488_11)">
                            <path
                                d="M14.4 7.06977C14.4 3.16524 11.1764 0 7.2 0C3.22355 0 0 3.16524 0 7.06977V30.9302C0 34.8348 3.22355 38 7.2 38C11.1764 38 14.4 34.8348 14.4 30.9302V7.06977Z"
                                fill="white" />
                            <path
                                d="M35.7389 7.06977C35.7389 3.16524 32.5153 0 28.5389 0C24.5624 0 21.3389 3.16524 21.3389 7.06977V30.9302C21.3389 34.8348 24.5624 38 28.5389 38C32.5153 38 35.7389 34.8348 35.7389 30.9302V7.06977Z"
                                fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_488_11">
                                <rect width="36" height="38" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>

            <!-- Inline SVG for Desktop -->
            <svg class="bg" id="bg-desktop" viewBox="0 0 1512 602" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_g_396_3)">
                    <path
                        d="M-159.806 374.632C-175.826 368.693 -187.062 367.738 -195 374.632H-159.806C-103.033 395.679 13.8264 479.313 256.926 497.921C283.384 499.947 382 499.947 382 499.947V374.632H-159.806Z"
                        fill="#06B58E" />
                </g>
                <g filter="url(#filter1_g_396_3)">
                    <path
                        d="M1715.81 379.838C1731.83 373.899 1743.06 372.943 1751 379.838H1715.81C1659.03 400.885 1542.17 484.519 1299.07 503.127C1272.62 505.152 1174 505.152 1174 505.152V379.838H1715.81Z"
                        fill="#06B58E" />
                </g>
                <g filter="url(#filter2_g_396_3)">
                    <path
                        d="M1143.5 392.196C1143.5 392.196 1450.2 470.883 1138.5 494.741C1128.31 495.522 1005.89 492.688 859.235 488.908L761 522.33L647.454 483.282C477.794 478.671 329.5 474.441 329.5 474.441L373.5 389.073L647.454 483.282C717.381 485.183 790.937 487.148 859.235 488.908L1143.5 392.196Z"
                        fill="#06B58E" />
                </g>
                <g filter="url(#filter3_g_396_3)">
                    <path
                        d="M875.414 421.867C875.414 421.867 992.747 500.553 873.501 524.412C869.601 525.192 822.769 522.358 766.662 518.579L729.08 552L685.64 512.953C620.733 508.342 564 504.111 564 504.111L580.833 418.743L685.64 512.953C712.392 514.853 740.533 516.818 766.662 518.579L875.414 421.867Z"
                        fill="#06B58E" />
                </g>
                <g filter="url(#filter4_g_396_3)">
                    <path
                        d="M-159.806 374.632C-175.826 368.693 -187.062 367.738 -195 374.632H-159.806C-103.033 395.679 13.8264 479.313 256.926 497.921C283.384 499.947 382 499.947 382 499.947V374.632H-159.806Z"
                        fill="#06B58E" />
                </g>
                <g filter="url(#filter5_g_396_3)">
                    <path
                        d="M1715.81 379.838C1731.83 373.899 1743.06 372.943 1751 379.838H1715.81C1659.03 400.885 1542.17 484.519 1299.07 503.127C1272.62 505.152 1174 505.152 1174 505.152V379.838H1715.81Z"
                        fill="#06B58E" />
                </g>
                <g filter="url(#filter6_g_396_3)">
                    <path
                        d="M1143.5 392.196C1143.5 392.196 1450.2 470.883 1138.5 494.741C1128.31 495.522 1005.89 492.688 859.235 488.908L761 522.33L647.454 483.282C477.794 478.671 329.5 474.441 329.5 474.441L373.5 389.073L647.454 483.282C717.381 485.183 790.937 487.148 859.235 488.908L1143.5 392.196Z"
                        fill="#06B58E" />
                </g>
                <g filter="url(#filter7_g_396_3)">
                    <path
                        d="M875.414 421.867C875.414 421.867 992.747 500.553 873.501 524.412C869.601 525.192 822.769 522.358 766.662 518.579L729.08 552L685.64 512.953C620.733 508.342 564 504.111 564 504.111L580.833 418.743L685.64 512.953C712.392 514.853 740.533 516.818 766.662 518.579L875.414 421.867Z"
                        fill="#06B58E" />
                </g>
                <g filter="url(#filter8_g_396_3)">
                    <path
                        d="M1122.62 479.646C1419.92 455.787 1127.39 377.101 1127.39 377.101L767 384.909L392.967 373.978L351 459.345C351 459.345 1097.39 481.671 1122.62 479.646Z"
                        fill="#06B58E" />
                </g>
                <path
                    d="M31.492 50.5039C0 75.0913 0 161.479 0 161.479V425.767H760V25.9161C760 25.9161 678 25.9161 656 28.1069C396.822 53.9168 124.968 180.086 94.9757 146.195C118.47 125.595 155.96 143.537 168.957 69.7751C104.473 50.5039 91.6042 173.679 60.9844 128.918C102.974 104.33 147.462 69.7751 120.969 0C31.492 34.5553 71.9816 103.001 36.4907 128.918C60.9844 86.3882 45.9883 65.788 31.492 50.5039Z"
                    fill="#06B58E" />
                <path
                    d="M1480.51 53.0225C1512 78.836 1512 169.532 1512 169.532V447H752V27.2085C752 27.2085 834 27.2085 856 29.5086C1115.18 56.6056 1387.03 189.067 1417.02 153.486C1393.53 131.858 1356.04 150.695 1343.04 73.2547C1407.53 53.0225 1420.4 182.34 1451.02 135.347C1409.03 109.533 1364.54 73.2547 1391.03 0C1480.51 36.2786 1440.02 108.138 1475.51 135.347C1451.02 90.6963 1466.01 69.0687 1480.51 53.0225Z"
                    fill="#06B58E" />
                <defs>
                    <filter id="filter0_g_396_3" x="-245" y="319.813" width="677" height="230.134"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.033333335071802139 0.033333335071802139"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="100" xChannelSelector="R" yChannelSelector="G"
                            result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_396_3">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                    <filter id="filter1_g_396_3" x="1124" y="325.018" width="677" height="230.134"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.033333335071802139 0.033333335071802139"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="100" xChannelSelector="R" yChannelSelector="G"
                            result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_396_3">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                    <filter id="filter2_g_396_3" x="279.5" y="339.073" width="1048.84" height="233.257"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.033333335071802139 0.033333335071802139"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="100" xChannelSelector="R" yChannelSelector="G"
                            result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_396_3">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                    <filter id="filter3_g_396_3" x="514" y="368.743" width="463" height="233.257"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.033333335071802139 0.033333335071802139"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="100" xChannelSelector="R" yChannelSelector="G"
                            result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_396_3">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                    <filter id="filter4_g_396_3" x="-245" y="319.813" width="677" height="230.134"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.033333335071802139 0.033333335071802139"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="100" xChannelSelector="R" yChannelSelector="G"
                            result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_396_3">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                    <filter id="filter5_g_396_3" x="1124" y="325.018" width="677" height="230.134"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.033333335071802139 0.033333335071802139"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="100" xChannelSelector="R" yChannelSelector="G"
                            result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_396_3">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                    <filter id="filter6_g_396_3" x="279.5" y="339.073" width="1048.84" height="233.257"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.033333335071802139 0.033333335071802139"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="100" xChannelSelector="R" yChannelSelector="G"
                            result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_396_3">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                    <filter id="filter7_g_396_3" x="514" y="368.743" width="463" height="233.257"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.033333335071802139 0.033333335071802139"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="100" xChannelSelector="R" yChannelSelector="G"
                            result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_396_3">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                    <filter id="filter8_g_396_3" x="301" y="323.977" width="1005" height="205.798"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.033333335071802139 0.033333335071802139"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="100" xChannelSelector="R" yChannelSelector="G"
                            result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_396_3">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>



            <!-- Inline SVG for Mobile -->
            <svg class="bg" id="bg-mobile" viewBox="0 0 430 522" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.3652 32.6512C-3.05176e-05 48.5471 -3.05176e-05 104.397 -3.05176e-05 104.397V467.5H215V83.3463C215 83.3463 186 83.5 156 89.5C60.4852 108.603 51 103 55.3873 94.5164C65 80.5 90.9518 92.7979 98.5311 45.1101C60.926 32.6512 53.4211 112.285 35.5645 83.3463C60.0515 67.4504 85.9961 45.1101 70.546 0C18.3652 22.3403 41.9777 66.5911 21.2804 83.3463C35.5645 55.8506 26.8191 42.5324 18.3652 32.6512Z"
                    fill="#06B58E" />
                <path
                    d="M411.635 32.6512C430 48.5471 430 104.397 430 104.397V466H215V83.3463C215 83.3463 244 83.5 274 89.5C369.515 108.603 379 103 374.613 94.5164C365 80.5 339.048 92.7979 331.469 45.1101C369.074 32.6512 376.579 112.285 394.435 83.3463C369.948 67.4504 344.004 45.1101 359.454 0C411.635 22.3403 388.022 66.5911 408.72 83.3463C394.435 55.8506 403.181 42.5324 411.635 32.6512Z"
                    fill="#06B58E" />
                <g filter="url(#filter0_g_261_79)">
                    <path
                        d="M189.183 497.984C189.183 497.984 268.375 447.202 187.892 431.804C185.26 431.301 153.651 433.13 115.783 435.569L90.4176 414L61.0989 439.199C17.291 442.175 -21 444.906 -21 444.906L-9.63875 500L61.0989 439.199C79.1546 437.973 98.1475 436.705 115.783 435.569L189.183 497.984Z"
                        fill="#06B58E" />
                </g>
                <g filter="url(#filter1_g_261_79)">
                    <path
                        d="M334.183 495.984C334.183 495.984 413.375 445.202 332.892 429.804C330.26 429.301 298.651 431.13 260.783 433.569L235.418 412L206.099 437.199C162.291 440.175 124 442.906 124 442.906L135.361 498L206.099 437.199C224.155 435.973 243.148 434.705 260.783 433.569L334.183 495.984Z"
                        fill="#06B58E" />
                </g>
                <g filter="url(#filter2_g_261_79)">
                    <path
                        d="M476.183 492.984C476.183 492.984 555.375 442.202 474.892 426.804C472.26 426.301 440.651 428.13 402.783 430.569L377.418 409L348.099 434.199C304.291 437.175 266 439.906 266 439.906L277.361 495L348.099 434.199C366.155 432.973 385.148 431.705 402.783 430.569L476.183 492.984Z"
                        fill="#06B58E" />
                </g>
                <g filter="url(#filter3_g_261_79)">
                    <path
                        d="M255.938 500.274C255.938 500.274 171.182 479.499 237.025 441.677C239.178 440.44 267.423 432.513 301.336 423.235L317.024 396.612L350.341 409.931C389.62 399.333 423.992 390.183 423.992 390.183L430.725 442.068L350.341 409.931C334.152 414.299 317.129 418.914 301.336 423.235L255.938 500.274Z"
                        fill="#06B58E" />
                </g>
                <g filter="url(#filter4_g_261_79)">
                    <path
                        d="M-40.3606 456.636C-44.7484 455.074 -47.8258 454.822 -50 456.636H-40.3606C-24.8106 462.173 7.19655 484.177 73.7804 489.072C81.0271 489.605 108.038 489.605 108.038 489.605V456.636H-40.3606Z"
                        fill="#06B58E" />
                </g>
                <g filter="url(#filter5_g_261_79)">
                    <path
                        d="M473.361 458.006C477.748 456.443 480.826 456.192 483 458.006H473.361C457.811 463.543 425.803 485.546 359.22 490.442C351.973 490.975 324.962 490.975 324.962 490.975V458.006H473.361Z"
                        fill="#06B58E" />
                </g>
                <g filter="url(#filter6_g_261_79)">
                    <path
                        d="M307.951 454.822C307.951 454.822 391.953 475.523 306.581 481.8C303.789 482.006 270.26 481.26 230.092 480.266L203.186 489.059L172.086 478.786C125.617 477.572 85 476.459 85 476.459L97.0514 454L172.086 478.786C191.239 479.286 211.385 479.803 230.092 480.266L307.951 454.822Z"
                        fill="#06B58E" />
                </g>
                <defs>
                    <filter id="filter0_g_261_79" x="-42.6" y="392.4" width="288.2" height="129.2"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.031948883086442947 0.031948883086442947"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="43.200000762939453" xChannelSelector="R"
                            yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_261_79">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                    <filter id="filter1_g_261_79" x="102.4" y="390.4" width="288.2" height="129.2"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.031948883086442947 0.031948883086442947"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="43.200000762939453" xChannelSelector="R"
                            yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_261_79">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                    <filter id="filter2_g_261_79" x="244.4" y="387.4" width="288.2" height="129.2"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.031948883086442947 0.031948883086442947"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="43.200000762939453" xChannelSelector="R"
                            yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_261_79">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                    <filter id="filter3_g_261_79" x="190.371" y="368.583" width="261.954" height="153.291"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.031948883086442947 0.031948883086442947"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="43.200000762939453" xChannelSelector="R"
                            yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_261_79">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                    <filter id="filter4_g_261_79" x="-71.6" y="433.768" width="201.238" height="77.4369"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.031948883086442947 0.031948883086442947"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="43.200000762939453" xChannelSelector="R"
                            yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_261_79">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                    <filter id="filter5_g_261_79" x="303.362" y="435.138" width="201.238" height="77.4369"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.031948883086442947 0.031948883086442947"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="43.200000762939453" xChannelSelector="R"
                            yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_261_79">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                    <filter id="filter6_g_261_79" x="63.4" y="432.4" width="303.083" height="78.2585"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.031948883086442947 0.031948883086442947"
                            numOctaves="3" seed="7612" />
                        <feDisplacementMap in="shape" scale="43.200000762939453" xChannelSelector="R"
                            yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_261_79">
                            <feMergeNode in="displacedImage" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutContent',
    data() {
        return {
            cloudName: 'dlejpox8a',
            cloudinaryVideoId: 'Video_1_corregido_1_ewlrfy',
            isPlaying: false,
            showControls: true,
            hideControlsTimeout: null
        };
    },
    computed: {
        cloudinaryVideoUrl() {
            return `https://res.cloudinary.com/${this.cloudName}/video/upload/${this.cloudinaryVideoId}.mp4`;
        },
        cloudinaryThumbnailUrl() {
            return `https://res.cloudinary.com/${this.cloudName}/video/upload/f_jpg,q_auto,w_800/${this.cloudinaryVideoId}.jpg`;
        }
    },
    methods: {
        playVideo() {
            const video = this.$refs.video;

            if (this.isPlaying) {
                video.pause();
            } else {
                video.play();
            }

            this.isPlaying = !this.isPlaying;
            this.showVideoControlsTemporarily();
        },
        showVideoControlsTemporarily() {
            this.showControls = true;

            clearTimeout(this.hideControlsTimeout);

            // Solo ocultar si está reproduciendo
            if (this.isPlaying) {
                this.hideControlsTimeout = setTimeout(() => {
                    this.showControls = false;
                }, 1200);
            }
        },
        handleVideoClick() {
            this.showVideoControlsTemporarily();
        },
        onVideoEnded() {
            const video = this.$refs.video;
            video.pause();
            video.currentTime = 0;
            video.load(); // esto recarga el video y vuelve a mostrar el poster
            this.isPlaying = false;
            this.showControls = true;
            clearTimeout(this.hideControlsTimeout);
        },
        handleHover(state) {
            this.showControls = state;
        },
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Solway:wght@500&display=swap');

.hero-section {
    width: 100%;
    height: auto;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 80px;
    padding: 120px 0px 0px 0px;

    .text {
        width: 70%;
        height: fit-content;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 20px;
        z-index: 1;

        .main-text {
            h1 {
                font-family: 'Solway', serif;
                font-size: 45px;
                font-weight: bolder;
                color: #5b3636;
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

    .group-video-bg {
        position: relative;
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;


        .video-wrapper {
            position: relative;
            top: -30px;
            width: 60%;
            height: 450px;
            background: white;
            border: 18px solid #fff;
            border-radius: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            z-index: 1;

            .video-player {
                height: 100%;
                min-height: 100%;
                min-width: 100%;
                object-fit: cover;
                background: white;
            }

            .custom-play-button,
            .custom-pause-button {
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
                transition: background-color 0.3s ease, opacity 0.3s ease;
                opacity: 0;
                pointer-events: none;
            }

            .custom-play-button:focus,
            .custom-pause-button:focus {
                outline: none !important;
                box-shadow: none !important;
                -webkit-tap-highlight-color: transparent;
                /* para móviles */
            }

            .custom-play-button.visible,
            .custom-pause-button.visible {
                opacity: 1;
                pointer-events: auto;
            }

            .custom-play-button:hover {
                background-color: rgb(132, 130, 242);
            }

            img {
                width: 40px;
                height: 40px;
            }
        }

        .bg {
            position: absolute;
            z-index: 0;
            bottom: -180px;
            width: 100%;
        }


        #bg-desktop {
            display: block;
        }

        #bg-mobile {
            display: none;
        }
    }

    .box-decorate {
        position: absolute;
        top: 120px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 65dvw;
        align-items: center;
        padding: 0px;
        box-sizing: border-box;

        img {
            width: 120px;
        }

    }
}

@media (max-width: 768px) {
    .hero-section {
        gap: 0px;
        padding: 80px 0px 0px 0px;

        .text {
            width: calc(100% - 20px);
            gap: 12px;

            .main-text {
                h1 {
                    font-size: 28px;
                }
            }

            .desc-text {
                font-size: 14px;
            }
        }

        .group-video-bg {
            .video-wrapper {
                position: absolute;
                top: 110px;
                width: 85%;
                height: fit-content;
                aspect-ratio: 4/3;
                overflow: hidden;
                border: 10px solid #fff;
                border-radius: 52px;
                display: flex;
                align-items: center;
                justify-content: center;

                .video-player {
                    width: auto;
                    min-height: 100%;
                    object-fit: cover;
                }

                .custom-play-button,
                .custom-pause-button {
                    width: 80px;
                    height: 80px;
                    -webkit-tap-highlight-color: transparent;
                }

                img {
                    width: 40px;
                    height: 40px;
                }
            }

            .bg {
                position: relative;
                z-index: 0;
                bottom: 0px;
                width: 100%;
            }

            #bg-desktop {
                display: none;
            }

            #bg-mobile {
                display: block;
            }
        }

        .box-decorate {
            top: 80px;
            width: 100%;
            justify-content: space-between;
            padding: 0px 10px;

            img {
                width: 65px;
                height: auto;
            }
        }
    }
}
</style>
