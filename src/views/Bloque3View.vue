<template>
  <div class="page-container">
    <div class="clouds-background">
    </div>
    <div class="grass-decoration"></div>

    <!-- Content wrapper with side images -->
    <div class="content-wrapper">
      <!-- Left side images -->
      <div class="side-images left-images">
        <img src="@/assets/bloque3/image1.png" alt="Decorative image 1" class="side-image">
        <img src="@/assets/bloque3/image2.png" alt="Decorative image 2" class="side-image">
        <img src="@/assets/bloque3/image3.png" alt="Decorative image 3" class="side-image">
        <img src="@/assets/bloque3/image4.png" alt="Decorative image 4" class="side-image">
        <img src="@/assets/bloque3/image5.png" alt="Decorative image 5" class="side-image">
      </div>

      <!-- Main content -->
      <main class="main-content">
        <!-- Modal -->
      <transition name="fade">
        <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
          <div class="modal-content">
            <button class="close-btn" @click="closeModal">✖</button>
            <div v-if="selectedRecipe">
              <!-- Animal mascot in modal -->
              <!-- <div class="modal-mascot-container">
                <img src="../assets/animal.png" alt="Mascota NutriMente" class="modal-mascot">
              </div> -->
              <div class="modal-header">
                <h2>{{ selectedRecipe.name }}</h2>
                <p class="recipe-meta">
                  <span v-if="selectedRecipe.consistency"><strong>Consistencia:</strong> {{ selectedRecipe.consistency }}</span>
                  <span v-if="selectedRecipe.capacity"> | <strong>Capacidad gástrica:</strong> {{ selectedRecipe.capacity }}</span>
                </p>
              </div>

              <div class="modal-section" v-if="selectedRecipe.ingredients && selectedRecipe.ingredients.length">
                <h3>Ingredientes</h3>
                <ul class="ingredients-grid">
                  <li v-for="(ingredient, index) in selectedRecipe.ingredients" :key="index">{{ ingredient }}</li>
                </ul>
              </div>

              <div class="modal-section" v-if="selectedRecipe.preparation && selectedRecipe.preparation.length">
                <h3>Preparación</h3>
                <ol>
                  <li v-for="(step, index) in selectedRecipe.preparation" :key="index">{{ step }}</li>
                </ol>
              </div>

              <div class="modal-section" v-if="selectedRecipe.nutrition">
                <h3>Información Nutricional (por porción)</h3>
                <div class="nutrition-grid">
                  <div class="nutrition-item" v-for="(value, key) in selectedRecipe.nutrition" :key="key">
                    <strong>{{ key.charAt(0).toUpperCase() + key.slice(1) }}:</strong> {{ value }}
                  </div>
                </div>
              </div>
              <div class="modal-section" v-if="selectedRecipe.recommendations && selectedRecipe.recommendations.length">
                <h3>Recomendaciones</h3>
                <ul>
                  <li v-for="(rec, index) in selectedRecipe.recommendations" :key="index">{{ rec }}</li>
                </ul>
              </div>  
            </div>
          </div>

        </div>
      </transition>

      <h1 class="main-titleb3">
        <span class="title-part1">Bloque 3:</span>
        <span class="title-part2">Alimentando</span>
        <span class="title-part3">su futuro</span>
      </h1>

      <p class="description">
        En NutriMente, sabemos que una <span class="highlight-1">buena alimentación y el juego son clave para el desarrollo</span> de los niños.
        Por eso, creamos una plataforma digital con <span class="highlight-2">recursos prácticos, confiables y validados por expertos</span>,
        para ayudar a padres y cuidadores a mejorar la alimentación y el aprendizaje de sus hijos.
      </p>

      <!-- Age group buttons -->
      <div class="age-group-section">
        <div class="age-group-buttons">

          <button
            v-for="(ageGroup, index) in ageGroups"
            :key="index"
            class="age-group-button"
            :class="{ active: selectedAgeGroup === ageGroup.id }"
            @click="selectAgeGroup(ageGroup.id)"
          >
            {{ ageGroup.label }}
          </button>
        </div>
      </div>

      <!-- Map instruction text -->
      <div class="map-instruction">
        <p>🗺️ <strong>Explora las recetas regionales:</strong> Haz clic en una región del mapa (Costa, Sierra o Selva) para descubrir recetas tradicionales y nutritivas adaptadas a cada edad.</p>
      </div>

      <!-- Map section -->
      <div class="map-section">
        <div class="map-container">
          <div class="map-wrapper">
            <!-- Google Charts Peru Map -->
            <div id="peru_map" class="google-map"></div>
          </div>
          
          <div class="region-info">
            <div class="region-header">
              <h3>{{ currentRegion.name }}</h3>
              <p class="region-description">{{ currentRegion.description }}</p>
            </div>
            

            
            <div class="recipes-section">
              <h4>Recetarios disponibles:</h4>
              <div class="recipe-buttons">
                <button 
                  v-for="(recipe, index) in filteredRecipes" 
                  :key="index"
                  :class="['recipe-button', { available: recipe.available }]"
                  :disabled="!recipe.available"
                  @click="selectRecipe(recipe)"
                >
                  {{ recipe.name }}
                  <span class="plus-icon" v-if="recipe.available">+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Video buttons -->
      <div class="video-selector sub-selector">
        <button 
          v-for="(video, index) in videos" 
          :key="index"
          @click="selectVideo(index)"
          :class="{ active: currentVideoIndex === index }"
        >
          Video {{ index + 1 }}
        </button>
      </div>

      <div class="video-container">
        <video
          ref="videoPlayer"
          class="video-player"
          controls
          :src="cloudinaryVideoUrl"
          :poster="cloudinaryThumbnailUrl"
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </main>

    <!-- Right side images -->
    <div class="side-images right-images">
      <img src="@/assets/bloque3/image6.png" alt="Decorative image 6" class="side-image">
      <img src="@/assets/bloque3/image7.png" alt="Decorative image 7" class="side-image">
      <img src="@/assets/bloque3/image8.png" alt="Decorative image 8" class="side-image">
      <img src="@/assets/bloque3/image9.png" alt="Decorative image 9" class="side-image">
      <img src="@/assets/bloque3/image10.png" alt="Decorative image 10" class="side-image">
    </div>
  </div>

    <!-- Green + White Sections -->
    <section class="bottom-section">
      <div class="info-bar">
        <div class="info-text">
          {{ videos[currentVideoIndex].title }}
        </div>
        <div class="info-icon" @click="toggleCard">
          <svg
            :class="{ 'rotated': showCard }"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <transition name="fade">
        <div v-if="showCard" class="content-card" :class="{ 'reverse-layout': isImageLeft }">
          <p class="card-text">
            {{ displayCardText }}
          </p>
          <div class="card-image-container">
            <img :src="currentAnimalImage" alt="Cartoon animal" class="card-image" />
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutContent",
  data() {
    return {
      showModal: false,
      selectedRecipe: null,
      cloudName: "dlejpox8a",
      currentVideoIndex: 0,
      showCard: false,
      isImageLeft: false,       // Controla si la imagen está a la izquierda
      currentAnimalImage: null, // Ruta de la imagen seleccionada
      animalImagesLeft: [
        require('@/assets/animals_to_left/animal2_finger.png'),
        require('@/assets/animals_to_left/animal4_finger.png'),
        require('@/assets/animals_to_left/jaguar.png')
      ],
      animalImagesRight: [
        require('@/assets/animals_to_right/animal_2.png'),
        require('@/assets/animals_to_right/animal1.png'),
        require('@/assets/animals_to_right/animal3_finger.png')
      ],
      selectedRegion: 'costa',
      selectedAgeGroup: 'all', // Default to show all recipes
      
      // Age groups configuration
      ageGroups: [
        { id: '6-8', label: '6-8 meses' },
        { id: '9-11', label: '9-11 meses' },
        { id: '12-24', label: '12-24 meses' },
        { id: '24-36', label: '24-36 meses' }
      ],
      
      videos: [
        { 
          id: "v1756570756/El_cuento_del_bocado_zhbl6o", 
          title: "El cuento del bocado", 
          cardText: "Convierte cada bocado en una pequeña historia. Si el bebé está comiendo zanahoria, dile: ‘Esta zanahoria vivía en una granja mágica y quiere darte superpoderes’. Si está comiendo arroz, invéntate algo como: ‘Estos granitos de arroz son copos de nieve que llegaron para una fiesta’. Este tipo de juego no solo hace la comida más atractiva, sino que también estimula la imaginación, el vocabulario y la capacidad de atención del bebé. Al crear una experiencia divertida y creativa, el bebé se sentirá más motivado a probar nuevos sabores y disfrutar de la comida." 
        },
        { 
          id: "v1756570824/Exploradores_del_sabor_1_cgb3en", 
          title: "Exploradores del sabor", 
          cardText: "Coloca diferentes alimentos en la bandeja de tu bebé, como zanahoria cocida, mango o palta, y deja que los toque, aplaste y pruebe a su propio ritmo. Puedes preguntarle: ‘¿Está suave o rugoso?’ o ‘¿De qué color es?’. Este tipo de exploración no solo permite que el bebé descubra texturas y sabores nuevos, sino que también fortalece su coordinación motora fina y le enseña a disfrutar de la comida. Al permitirle explorar sin presión, fomentas una relación positiva con la comida que le ayudará a aceptar alimentos variados a medida que crece." 
        },
        { 
          id: "v1756571026/Voces_sabrosas_tthjlz", 
          title: "Voces sabrosas", 
          cardText: "Mientras tu bebé come, háblale con una voz suave y expresiva, contándole lo que está comiendo, como: “Mmm, esta papilla de plátano es dulce, ¿te gusta?”, o haciendo sonidos divertidos, como si la cuchara fuera un avión aterrizando. Este tipo de interacción no solo hace que la comida sea más divertida, sino que también favorece el desarrollo del lenguaje y la comunicación del bebé, ya que está aprendiendo nuevas palabras y sonidos. Además, cuando la comida se vive como un momento positivo y amoroso, el bebé se siente más seguro y es más probable que disfrute de los nuevos alimentos que pruebe." 
        }
      ],
      regions: [
        {
          id: 'costa',
          name: 'REGIÓN COSTA',
          className: 'region-costa',
          description: 'Rica tradición culinaria costera con ingredientes marinos frescos y productos de tierras fértiles.',
          departments: ['PE-LAL', 'PE-LAM', 'PE-PIU', 'PE-TUM', 'PE-CAL', 'PE-LIM', 'PE-LMA', 'PE-ICA', 'PE-ARE', 'PE-MOQ', 'PE-TAC', 'PE-ANC'],
          recipes: [
  { 
    name: 'Papilla de camote con pollo y espinaca', 
    available: true, 
    description: 'Papilla nutritiva rica en vitaminas y minerales para bebés de 6 a 8 meses.',
    ageGroup: '6-8',
    consistency: 'Papilla',
    capacity: '250 ml',
    ingredients: [
      'Camote sancochado: ½ unidad mediana (80 g)',
      'Sangrecita de pollo sancochado: 2 cucharadas (30 g)',
      'Espinaca cocida: 2 hojas (10 g)',
      'Leche materna: 2 cucharadas (30 ml)',
      'Aceite vegetal: 1 cucharadita (5 ml)'
    ],
    preparation: [
      'Sancochar el camote pelado hasta que esté suave.',
      'Cocer la sangrecita sin sal, luego aplastar con un tenedor.',
      'Cocer la espinaca en poca agua por 2 minutos y picar finamente.',
      'Aplastar todos los ingredientes con el tenedor, junto con la leche materna y el aceite vegetal hasta obtener una papilla homogénea.'
    ],
    nutrition: {
      energia: '162 Kcal',
      proteina: '6.6 g',
      grasa: '6.6 g',
      carbohidratos: '18.6 g',
      fibra: '2.5 g',
      hierro: '10 mg'
    },
    recommendations: [
      'Comenzar a los 6 meses, manteniendo la lactancia materna a demanda hasta los 2 años o más.',
      'En esta etapa (6 a 8 meses), la textura de los alimentos debe ir de purés y papillas más espesos y grumosos.',
      'Empezar con comidas espesas como papillas, purés y mazamorras, evitando alimentos líquidos como caldos o sopas que aportan baja densidad nutricional.',
      'El volumen de los alimentos es de acuerdo a la capacidad gástrica del niño.'
    ]
  },
{ 
  name: 'Picado de papa con pallares y huevo e higadito', 
  available: true, 
  description: 'Receta nutritiva rica en proteínas, hierro y fibra para bebés de 9 a 11 meses.', 
  ageGroup: '9-11',
  consistency: 'Picado en trozos pequeños y finos',
  capacity: '279 ml',
  ingredients: [
    'Papa amarilla sancochada: 2 cucharadas (40 g)',
    'Pallares cocidos: 2 cucharadas (30 g)',
    'Huevo sancochado: ½ unidad (25 g)',
    'Hígado de pollo sancochado: 2 cucharadas (40 g)',
    'Aceite vegetal: 1 cucharadita (5 ml)'
  ],
  preparation: [
    'Cocinar los pallares y papa, reservar.',
    'Sancochar el huevo y picar.',
    'Sancochar hígado de pollo y picar.',
    'Picar todo finamente y mezclar con la papa y pallares (retirar la cáscara de los pallares).',
    'Servir tibio, asegurando textura blanda.'
  ],
  nutrition: {
    energia: '250 Kcal',
    proteina: '17.3 g',
    grasa: '10 g',
    carbohidratos: '23 g',
    fibra: '6 g',
    hierro: '6 mg'
  },
  recommendations: [
    'En esta etapa, la textura de los alimentos cambia a pequeños trozos blandos, adaptados a la capacidad del niño, lo que promueve la tolerancia a nuevos alimentos, mejora la masticación y evita problemas futuros con la alimentación.',
    'Evitar alimentos con riesgo de atragantamiento (como nueces enteras, zanahorias crudas en trozos grandes o uvas enteras).',
    'Incorporar alimentos que la familia consume, adaptándolos en textura y tamaño para el niño.'
  ]
},
{ 
  name: 'Estofado de pescado con papa y arroz', 
  available: true, 
  description: 'Plato nutritivo con pescado, vegetales y arroz, ideal para bebés de 12 a 24 meses.', 
  ageGroup: '12-24',
  consistency: 'Trozado',
  capacity: '300 ml',
  ingredients: [
    'Pescado bonito cocido en trozos: 2 cucharadas (30 g)',
    'Papa en cubos cocida: ½ unidad (50 g)',
    'Arvejas cocidas: 2 cucharadas (20 g)',
    'Cebolla de cabeza: 1 cucharada (10 g)',
    'Tomate picado: 1 cucharada (15 g)',
    'Aceite vegetal: 1 cucharadita (5 ml)',
    'Arroz cocido: ¼ de taza (aprox. 250 ml)',
    'Ajo picado: 1 cucharada (5 g)'
  ],
  preparation: [
    'Dorar ajos, cebolla y tomate con el aceite.',
    'Añadir arvejas, papa y pescado; cocinar 5 minutos.',
    'Trozar bien todos los ingredientes y servir.',
    'Acompañar con arroz.'
  ],
  nutrition: {
    energia: '344 Kcal',
    proteina: '14 g',
    grasa: '7 g',
    carbohidratos: '56 g',
    fibra: '2 g',
    hierro: '2 mg'
  },
  recommendations: [
    'El pescado aporta importantes beneficios nutricionales en la dieta infantil, incluyendo proteínas de alta calidad, ácidos grasos omega-3, hierro, zinc, vitaminas y minerales.',
    'Ofrezca una amplia variedad de alimentos de todos los grupos: verduras, frutas, cereales integrales, proteínas (carne, pollo, pescado, huevo, legumbres) y lácteos enteros para un crecimiento adecuado.',
    'Agregue frutas y verduras ricas en vitamina C para mejorar la absorción del hierro y prevenir la anemia.'
  ]
},
{ 
  name: 'Guiso de frejoles con arroz y bistec, con ensalada fresca', 
  available: true, 
  description: 'Comida sólida y balanceada con frejoles, arroz, carne y ensalada fresca para niños de 24 a 36 meses.', 
  ageGroup: '24-36',
  consistency: 'Sólida',
  capacity: null, // No se especifica capacidad gástrica en este grupo
  ingredients: [
    'Frejol cocido: ½ taza (60 g)',
    'Cebolla de cabeza: 1 cucharada (10 g)',
    'Tomate picado: 1 cucharada (15 g)',
    'Ajo picado: 1 cucharada (5 g)',
    'Aceite vegetal: 2 cucharaditas (10 ml)',
    'Arroz cocido: ¾ taza (50 g)',
    'Bistec: 1 filete mediano (50 g)',
    'Zanahoria rallada cocida: 1 cucharada (15 g)',
    'Lechuga picada: ½ taza (20 g)',
    'Pepino picado: 40 g',
    'Limón (jugo): 5 ml'
  ],
  preparation: [
    'Dejar remojando los frejoles el día anterior.',
    'Sancochar los frejoles y escurrir una vez que haya hervido para colocarlo nuevamente en agua hervida.',
    'Picar la cebolla, ajos y tomate en cuadrados finos.',
    'Hacer el aderezo de los frejoles con cebolla, ajos, tomate y aceite.',
    'Preparar el arroz con aderezo de ajos.',
    'Aderezar el bistec con ajos y sal, luego colocar en la sartén con 5 ml de aceite, esperar que dore y voltear.',
    'Para la ensalada: Lavar la lechuga hoja por hoja y lavar el pepino con la zanahoria, luego picar y añadir jugo de limón y sal.',
    'Servir tibio el guiso y arroz, acompañar con la ensalada.'
  ],
  nutrition: {
    energia: '490 Kcal',
    proteina: '29 g',
    grasa: '13 g',
    carbohidratos: '66 g',
    fibra: '17 g',
    hierro: '7 mg'
  },
  recommendations: [
    'Comer menestras es importante porque son alimentos altamente nutritivos que aportan fibra, proteínas vegetales, vitaminas del complejo B (B1, B2, B3), hierro de origen vegetal, minerales y carbohidratos que brindan energía duradera al organismo.',
    'Su consumo frecuente, recomendado de 2 a 3 veces por semana, ayuda a mejorar la digestión, evitar el estreñimiento, prevenir la anemia, disminuir el colesterol y controlar la presión arterial.'
  ]
},


          ]
        },
        {
          id: 'sierra',
          name: 'REGIÓN SIERRA',
          className: 'region-sierra',
          description: 'Herencia andina con granos, tubérculos y tradiciones milenarias de la cordillera.',
          departments: ['PE-CUS', 'PE-APU', 'PE-HUV', 'PE-AYA', 'PE-JUN', 'PE-PAS', 'PE-HUC', 'PE-CAJ', 'PE-PUN'],
          recipes: [
{ 
  name: 'Papilla de quinua con zapallo y sangrecita', 
  available: true, 
  description: 'Papilla nutritiva rica en proteínas, hierro y vitaminas, ideal para bebés de 6 a 8 meses.', 
  ageGroup: '6-8',
  consistency: 'Papilla',
  capacity: '250 ml',
  ingredients: [
    'Quinua cocida: 2 cucharadas (30 g)',
    'Zapallo macre cocido: 2 cucharadas (50 g)',
    'Sangrecita cocida: 2 cucharadas (30 g)',
    'Leche materna: 2 cucharadas (30 ml)',
    'Aceite vegetal: 1 cucharadita (5 ml)'
  ],
  preparation: [
    'Lavar y cocinar la quinua (1 parte de quinua por 3 de agua).',
    'Cocer el zapallo hasta que esté muy suave.',
    'Cocer la sangrecita de pollo.',
    'Cocer la papa amarilla.',
    'Mezclar la quinua, zapallo, papa amarilla, aceite vegetal y sangrecita; aplastar con un tenedor hasta obtener una masita.',
    'Añadir leche materna a la preparación anterior para ajustar la consistencia a puré.'
  ],
  nutrition: {
    energia: '195 Kcal',
    proteina: '8.3 g',
    grasa: '7.9 g',
    carbohidratos: '23.3 g',
    fibra: '2.1 g',
    hierro: '10 mg'
  },
  recommendations: [
    'Preparar los alimentos con higiene y libres de contaminantes.',
    'Observar señales de hambre y saciedad del niño; no forzar la alimentación.',
    'No añadir sal ni azúcares durante la alimentación complementaria, mantener los alimentos naturales.'
  ]
},

{ 
  name: 'Puré de papa con hígado y acelga', 
  available: true, 
  description: 'Puré nutritivo con hierro, proteínas y fibra, ideal para bebés de 9 a 11 meses.', 
  ageGroup: '9-11',
  consistency: 'Puré / Picado fino',
  capacity: '279 ml',
  ingredients: [
    'Papa amarilla cocida: ½ unidad grande (100 g)',
    'Hígado cocido: 2 cucharadas (30 g)',
    'Zanahoria cocida: 1 cucharada (15 g)',
    'Acelga cocida y picada: 1 cucharada (10 g)',
    'Aceite vegetal: ½ cucharadita (3 ml)'
  ],
  preparation: [
    'Cocinar la papa amarilla y picar en trozos pequeños.',
    'Cocinar el hígado y picar en trozos pequeños.',
    'Cocinar la zanahoria y picar en trozos pequeños.',
    'Cocer la acelga por 2 minutos y picar.',
    'Mezclar todo con aceite y servir.'
  ],
  nutrition: {
    energia: '169 Kcal',
    proteina: '8 g',
    grasa: '5 g',
    carbohidratos: '25 g',
    fibra: '2 g',
    hierro: '5 mg'
  },
  recommendations: [
    'El hígado es un alimento muy completo y nutritivo que aporta hierro en cantidades adecuadas, esencial para prevenir y tratar la anemia infantil.',
    'Contribuye al desarrollo cerebral, la formación de glóbulos rojos, la salud ocular y el fortalecimiento del sistema inmunológico.',
    'El hígado contiene proteínas de alta calidad y varias vitaminas importantes para el desarrollo del bebé, como vitamina B12, vitamina A, vitamina B2 (riboflavina), folato y colina.',
    'La variedad de colores en los vegetales permite añadir más nutrientes y fibra.',
    'La fibra ayuda a promover una digestión saludable.'
  ]
},
{ 
  name: 'Guiso de trigo con pollo y queso fresco', 
  available: true, 
  description: 'Plato nutritivo y balanceado con trigo, pollo y queso fresco, ideal para niños de 12 a 24 meses.', 
  ageGroup: '12-24',
  consistency: 'Trozado',
  capacity: '300 ml',
  ingredients: [
    'Trigo cocido: 2 cucharadas (40 g)',
    'Arroz cocido: 3 cucharadas (40 g)',
    'Pollo: 1 trozo mediano (40 g)',
    'Queso fresco de vaca: 1 tajada delgada (20 g)',
    'Aceite vegetal: 1 cucharadita (5 ml)',
    'Cebolla de cabeza: 1 cucharada (10 g)',
    'Tomate picado: 1 cucharada (15 g)',
    'Ajo picado: 1 cucharada (5 g)'
  ],
  preparation: [
    'Cocinar el trigo previamente remojado.',
    'Cocinar el zapallo y mezclar.',
    'Añadir el pollo trozado y el aceite.',
    'Servir como un plato mixto, en trozos blandos.'
  ],
  nutrition: {
    energia: '370 Kcal',
    proteina: '17 g',
    grasa: '16 g',
    carbohidratos: '40 g',
    fibra: '2 g',
    hierro: '2 mg'
  },
  recommendations: [
    'El trigo aporta carbohidratos para energía, fibra y algunos minerales, complementando otros grupos alimenticios esenciales para el crecimiento y desarrollo.',
    'El queso es un alimento importante por su aporte nutricional, entre ellos la proteína de alto valor biológico y la fuente rica en calcio.',
    'El calcio es fundamental para el crecimiento y fortalecimiento de huesos y dientes, además de participar en procesos fisiológicos como la coagulación sanguínea, contracción muscular y transmisión de impulsos nerviosos.',
    'El consumo de queso es especialmente crucial en niños para alcanzar un buen desarrollo óseo.'
  ]
},
{ 
  name: 'Guiso de quinua con habas, huevo y papa', 
  available: true, 
  description: 'Plato sólido y nutritivo con quinua, habas, huevo y papa, ideal para niños de 24 a 36 meses.', 
  ageGroup: '24-36',
  consistency: 'Sólida',
  capacity: '300 ml',
  ingredients: [
    'Quinua cocida: 3 cucharadas (45 g)',
    'Habas cocidas: 2 cucharadas (30 g)',
    'Huevo revuelto cocido: 2 unidades (100 g)',
    'Queso fresco de vaca: 1 tajada delgada (20 g)',
    'Cebolla de cabeza: 1 cucharada (10 g)',
    'Tomate picado: 1 cucharada (15 g)',
    'Ajo picado: 1 cucharada (5 g)',
    'Aceite vegetal: 2 cucharaditas (10 ml)',
    'Papa cocida: 1 unidad (115 g)'
  ],
  preparation: [
    'Cocinar la quinua, el haba y el huevo por separado.',
    'Picar en cuadros pequeños el ajo, cebolla y tomate.',
    'Hacer el aderezo de la quinua con ajo, cebolla y tomate.',
    'Añadir quinua, habas y huevo revuelto.',
    'Cocinar la papa hasta que esté suave.',
    'Servir el guiso de quinua con huevo sancochado, acompañado con papa sancochada y decorar con queso fresco picado en cuadros pequeños.'
  ],
  nutrition: {
    energia: '611 Kcal',
    proteina: '28 g',
    grasa: '29 g',
    carbohidratos: '61 g',
    fibra: '7 g',
    hierro: '6 mg'
  },
  recommendations: [
    'La quinua es una buena fuente de fibra dietética, que favorece la digestión, regula el tránsito intestinal y ayuda a prevenir el estreñimiento.',
    'Su contenido en minerales como calcio, hierro, magnesio, fósforo, manganeso y zinc contribuye al mantenimiento de huesos fuertes y favorece el crecimiento del niño.',
    'La quinua contiene vitaminas del complejo B, vitamina E y niacina, además de compuestos bioactivos con propiedades antioxidantes, antiinflamatorias, inmunomoduladoras y anticancerígenas potenciales.',
    'El queso fresco de vaca aporta proteína de alta calidad, es rico en calcio y fósforo, y contiene vitaminas del complejo B, vitamina A y D, que apoyan la salud del sistema nervioso, la formación de glóbulos rojos, la absorción de calcio y el fortalecimiento del sistema inmunológico.'
  ]
},


          ]
        },
        {
          id: 'selva',
          name: 'REGIÓN SELVA',
          className: 'region-selva',
          description: 'Biodiversidad amazónica con frutas exóticas, pescados de río y medicina natural.',
          departments: ['PE-LOR', 'PE-UCA', 'PE-MDD', 'PE-SAM', 'PE-AMA'],
          recipes: [
{ 
  name: 'Papilla de plátano verde con sangrecita', 
  available: true, 
  description: 'Papilla nutritiva con plátano verde, sangrecita y zanahoria, ideal para bebés de 6 a 8 meses en la Selva.', 
  ageGroup: '6-8',
  consistency: 'Papilla',
  capacity: '250 ml',
  ingredients: [
    'Plátano verde cocido: ½ unidad (60 g)',
    'Zanahoria cocida: 2 cucharadas (50 g)',
    'Sangrecita cocida: 2 cucharadas (30 g)',
    'Leche materna: 2 cucharadas (30 ml)',
    'Aceite vegetal: ½ cucharadita (2 ml)'
  ],
  preparation: [
    'Hervir el plátano verde pelado hasta que esté muy blando.',
    'Cocinar la zanahoria hasta que esté suave.',
    'Cocinar la sangrecita.',
    'Machacar y mezclar el plátano verde, zanahoria, sangrecita y leche materna hasta formar una papilla.',
    'Añadir el aceite y mezclar.'
  ],
  nutrition: {
    energia: '195 Kcal',
    proteina: '8.3 g',
    grasa: '7.9 g',
    carbohidratos: '23.3 g',
    fibra: '2.1 g',
    hierro: '10 mg'
  },
  recommendations: [
    'La leche materna durante los primeros 6 meses es fundamental porque proporciona al bebé todos los nutrientes y el agua que necesita para un crecimiento y desarrollo saludables.',
    'La introducción de alimentos como la sangrecita se recomienda a partir de los 6 meses, debido a su alto contenido de hierro, ayudando a prevenir la anemia.',
    'Los vegetales ofrecen vitaminas (A, C y del grupo B), minerales (como hierro, calcio y potasio), fibra y antioxidantes que fortalecen el sistema inmunológico y contribuyen al desarrollo físico y cerebral del bebé.'
  ]
},

{ 
  name: 'Guiso de yuca con pollo y cocona', 
  available: true, 
  description: 'Guiso suave y nutritivo con yuca, pollo, sangrecita y cocona, ideal para bebés de 9 a 11 meses en la Selva.', 
  ageGroup: '9-11',
  consistency: 'Puré/Guiso',
  capacity: '250 ml',
  ingredients: [
    'Yuca cocida: 3 cucharadas (80 g)',
    'Pollo cocido y desmenuzado: 2 cucharadas (30 g)',
    'Cocona cocida sin piel: 1 cucharada (20 g)',
    'Aceite vegetal: 1 cucharadita (5 ml)',
    'Sangrecita de pollo cocida: 1 cucharada (15 g)'
  ],
  preparation: [
    'Hervir la yuca hasta que esté muy suave, picar en trozos pequeños.',
    'Cocer el pollo y desmenuzar.',
    'Pelar y cocer la cocona sin cáscara.',
    'Cocer y picar la sangrecita.',
    'Picar todo, mezclar con aceite.'
  ],
  nutrition: {
    energia: '216 Kcal',
    proteina: '9 g',
    grasa: '6 g',
    carbohidratos: '32 g',
    fibra: '2 g',
    hierro: '5 mg'
  },
  recommendations: [
    'El consumo de macronutrientes (carbohidratos, proteínas y grasas) es fundamental para el crecimiento y desarrollo físico y cerebral del bebé, especialmente en la alimentación complementaria que inicia a los 6 meses.',
    'Los carbohidratos son una fuente principal de energía, y los cereales, frutas y verduras aportan carbohidratos complejos y fibras que favorecen la digestión y el suministro constante de energía.',
    'Las proteínas son esenciales para el desarrollo y reparación de tejidos, crecimiento muscular, y formación de enzimas y hormonas; fuentes recomendadas incluyen carnes, huevos, legumbres, lácteos e incluso órganos como hígado y bazo.',
    'Las grasas son vitales para el desarrollo cerebral y ocular, especialmente las grasas omega-3 como el DHA; además ayudan a la absorción de vitaminas liposolubles (A, D, E, K).'
  ]
},
{ 
  name: 'Puré de plátano con paiche y ensalada cocida', 
  available: true, 
  description: 'Puré nutritivo de plátano bellaco con pescado paiche y ensalada cocida de vegetales, ideal para niños de 12 a 24 meses en la Selva.', 
  ageGroup: '12-24',
  consistency: 'Puré/Ensalada cocida',
  capacity: '300 ml',
  ingredients: [
    'Plátano bellaco sancochado: ½ unidad (60 g)',
    'Pescado paiche cocido y picado: 2 cucharadas (40 g)',
    'Zanahoria cocida y picada: 1 cucharada (50 g)',
    'Calabacín local cocido: 2 cucharadas (60 g)',
    'Aceite vegetal: 1 cucharadita (5 ml)'
  ],
  preparation: [
    'Cocinar el plátano y aplastar con un tenedor hasta obtener un puré, añadir aceite vegetal.',
    'Cocinar la zanahoria y el calabacín en cuadros medianos.',
    'Cocer el paiche y picar, retirando las espinas.',
    'Servir tibio.'
  ],
  nutrition: {
    energia: '248 Kcal',
    proteina: '17 g',
    grasa: '9 g',
    carbohidratos: '27 g',
    fibra: '5 g',
    hierro: '2 mg'
  },
  recommendations: [
    'El paiche aporta minerales clave como hierro, zinc, calcio, magnesio, potasio y sodio.',
    'El calcio y el magnesio son importantes para el desarrollo óseo y la salud dental, además de participar en funciones musculares y equilibrio electrolítico.',
    'Consulta siempre con tu pediatra para ajustar las recomendaciones a las necesidades particulares de tu niño, sobre todo si existen condiciones médicas o alergias alimentarias.'
  ]
},
{ 
  name: 'Ensalada cocida de yuca, gallina y plátano', 
  available: true, 
  description: 'Ensalada cocida nutritiva de yuca, gallina, plátano bellaco y cocona, ideal para niños de 24 a 36 meses en la Selva.', 
  ageGroup: '24-36',
  consistency: 'Ensalada cocida',
  capacity: '350 ml',
  ingredients: [
    'Yuca cocida en trozos: 2 cucharadas (60 g)',
    'Gallina: un filete mediano (80 g)',
    'Plátano bellaco cocido: ½ unidad (60 g)',
    'Aceite vegetal: 1 cucharadita (5 ml)',
    'Cocona: 2 cucharadas (30 g)',
    'Cebolla de cabeza: 1 cucharada (10 g)',
    'Jugo de limón: 5 ml'
  ],
  preparation: [
    'Cocinar la yuca y el plátano sin sal.',
    'Picar en trozos pequeños la cocona y la cebolla.',
    'Sancochar la gallina y picar en trozos pequeños.',
    'Mezclar todo y añadir el aceite vegetal y el jugo de limón.'
  ],
  nutrition: {
    energia: '352 Kcal',
    proteina: '17 g',
    grasa: '8 g',
    carbohidratos: '58 g',
    fibra: '3 g',
    hierro: '2 mg'
  },
  recommendations: [
    'El plátano verde es una fuente de energía de liberación lenta y aporta nutrientes esenciales como vitaminas del complejo B (B6), magnesio, calcio y ácido fólico.',
    'La vitamina B6 y los triptófanos presentes en el plátano verde favorecen la producción de serotonina, mejorando el estado de ánimo y funciones neurológicas.',
    'El plátano verde tiene un bajo índice glucémico y menor contenido de azúcares comparado con el plátano maduro.',
    'La gallina es una fuente de proteínas de alto valor biológico, esenciales para el crecimiento, mantenimiento y reparación de tejidos musculares y celulares.'
  ]
},


     
          ]
        }
      ],
      googleChart: null,
      chartDataTable: null
    };
  },
  computed: {
    cloudinaryVideoUrl() {
      return `https://res.cloudinary.com/${this.cloudName}/video/upload/${this.videos[this.currentVideoIndex].id}.mp4`;
    },
    cloudinaryThumbnailUrl() {
      return `https://res.cloudinary.com/${this.cloudName}/video/upload/f_jpg,q_auto,w_800/${this.videos[this.currentVideoIndex].id}.jpg`;
    },
    currentRegion() {
      return this.regions.find(region => region.id === this.selectedRegion) || this.regions[0];
    },
    filteredRecipes() {
      if (this.selectedAgeGroup === 'all') {
        return this.currentRegion.recipes;
      }
      return this.currentRegion.recipes.filter(recipe => recipe.ageGroup === this.selectedAgeGroup);
    },
    displayCardText() {
      // Check if window width is mobile (768px or less)
      if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        const fullText = this.videos[this.currentVideoIndex].cardText;
        // Find the position of the second period
        const firstPeriod = fullText.indexOf('.');
        if (firstPeriod === -1) return fullText; // No period found, return full text

        const secondPeriod = fullText.indexOf('.', firstPeriod + 1);
        if (secondPeriod === -1) return fullText; // Only one period, return full text

        // Return text up to and including the second period
        return fullText.substring(0, secondPeriod + 1);
      }
      // For desktop, return full text
      return this.videos[this.currentVideoIndex].cardText;
    }
  },
  methods: {
    selectRecipe(recipe) {
      if (recipe.available) {
        this.selectedRecipe = recipe;
        this.showModal = true;
      }
    },
    closeModal() {
      this.showModal = false;
      this.selectedRecipe = null;
    },
    selectAgeGroup(ageGroupId) {
      this.selectedAgeGroup = ageGroupId;
    },
    toggleCard() {
      this.showCard = !this.showCard;
    },
    selectVideo(index) {
      this.currentVideoIndex = index;
      this.showCard = false;
      this.randomizeImageAndLayout();
      this.resetVideo();
    },
    randomizeImageAndLayout() {
      // Decidir aleatoriamente si la imagen va a la izquierda o derecha
      this.isImageLeft = Math.random() < 0.5;

      // Seleccionar imagen aleatoria de la carpeta correspondiente
      if (this.isImageLeft) {
        // Texto a la derecha, imagen a la izquierda -> usar animals_to_left
        const randomIndex = Math.floor(Math.random() * this.animalImagesLeft.length);
        this.currentAnimalImage = this.animalImagesLeft[randomIndex];
      } else {
        // Texto a la izquierda, imagen a la derecha -> usar animals_to_right
        const randomIndex = Math.floor(Math.random() * this.animalImagesRight.length);
        this.currentAnimalImage = this.animalImagesRight[randomIndex];
      }
    },
    resetVideo() {
      this.$nextTick(() => {
        const video = this.$refs.videoPlayer;
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    },
    loadGoogleCharts() {
      if (typeof google !== 'undefined' && google.charts) {
        google.charts.load('current', {
          'packages': ['geochart'],
          'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
        });
        google.charts.setOnLoadCallback(this.drawMap);
      } else {
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.onload = () => {
          google.charts.load('current', {
            'packages': ['geochart'],
            'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
          });
          google.charts.setOnLoadCallback(this.drawMap);
        };
        document.head.appendChild(script);
      }
    },
    drawMap() {
      this.chartDataTable = google.visualization.arrayToDataTable([
        ['Department', 'Region', 'Opacity'],
        // Costa
        ['PE-LAL', 1, 1], ['PE-LAM', 1, 1], ['PE-PIU', 1, 1], ['PE-TUM', 1, 1],
        ['PE-CAL', 1, 1], ['PE-LIM', 1, 1], ['PE-LMA', 1, 1], ['PE-ICA', 1, 1],
        ['PE-ARE', 1, 1], ['PE-MOQ', 1, 1], ['PE-TAC', 1, 1], ['PE-ANC', 1, 1],
        // Sierra
        ['PE-CUS', 2, 0.2], ['PE-APU', 2, 0.2], ['PE-HUV', 2, 0.2], ['PE-AYA', 2, 0.2],
        ['PE-JUN', 2, 0.2], ['PE-PAS', 2, 0.2], ['PE-HUC', 2, 0.2],
        ['PE-CAJ', 2, 0.2], ['PE-PUN', 2, 0.2],
        // Selva
        ['PE-LOR', 3, 0.2], ['PE-UCA', 3, 0.2], ['PE-MDD', 3, 0.2], ['PE-SAM', 3, 0.2], ['PE-AMA', 3, 0.2]
      ]);

      this.googleChart = new google.visualization.GeoChart(document.getElementById('peru_map'));

      google.visualization.events.addListener(this.googleChart, 'select', () => {
        const selection = this.googleChart.getSelection();
        if (selection.length > 0) {
          const selectedRow = selection[0].row;
          const regionValue = this.chartDataTable.getValue(selectedRow, 1);
          const regionMap = { 1: 'costa', 2: 'sierra', 3: 'selva' };
          const regionId = regionMap[regionValue];
          if (regionId) {
            this.selectRegion(regionId);
          }
        }
      });

      this.updateMapColors();
    },
    selectRegion(regionId) {
      this.selectedRegion = regionId;
      this.selectedAgeGroup = 'all'; // Reset age group filter when changing regions
      this.updateMapColors();
    },
    updateMapColors() {
      if (this.googleChart && this.chartDataTable) {
        const numRows = this.chartDataTable.getNumberOfRows();
        for (let i = 0; i < numRows; i++) {
          const regionValue = this.chartDataTable.getValue(i, 1);
          const regionMap = { 1: 'costa', 2: 'sierra', 3: 'selva' };
          const regionId = regionMap[regionValue];
          if (regionId === this.selectedRegion) {
            this.chartDataTable.setCell(i, 2, 1);
          } else {
            this.chartDataTable.setCell(i, 2, 0.2);
          }
        }

        const options = {
          region: 'PE',
          resolution: 'provinces',
          width: 350,
          height: 400,
          colorAxis: {
            colors: ['#FFD700', '#8B4513', '#90EE90'],
            minValue: 1,
            maxValue: 3
          },
          backgroundColor: '#ffffff',
          datalessRegionColor: '#f5f5f5',
          defaultColor: '#f5f5f5',
          legend: 'none',
          tooltip: { trigger: 'selection' },
          keepAspectRatio: true,
          displayMode: 'regions'
        };

        this.googleChart.draw(this.chartDataTable, options);
      }
    }
  },
  mounted() {
    // Inicializar imagen y layout aleatorio al montar el componente
    this.randomizeImageAndLayout();
    this.loadGoogleCharts();
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');

@font-face {
     font-family: 'Work Sans', sans-serif;
    src: url("@/assets/fonts/beachday.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    unicode-range: U+0041-005A, U+0061-007A;
}

.modal-mascot-container {
  position: absolute;
  top: 170px;
  right: 140px;
  width: 80px;
  height: 80px;
  z-index: 10;

  .modal-mascot {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));
    animation: wiggle 3s ease-in-out infinite;
  }
}

@keyframes wiggle {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg) scale(1.05);
  }
  75% {
    transform: rotate(10deg) scale(1.05);
  }
}

.map-instruction {
  margin: 20px 0;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  border-left: 4px solid #8dba3f;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #8dbb39;
    text-align: center;
    line-height: 1.5;

    strong {
      color: #8dbb39;
    }
  }
}

/* Age group buttons */
.age-group-section {
  margin-bottom: 25px;
}

.age-group-section h4 {
  color: #333;
   font-family: 'Work Sans', sans-serif;
  margin-bottom: 15px;
  font-size: 1em;
}

.age-group-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
  justify-content: center;
}

.age-group-button {
  padding: 12px 18px;
  border-radius: 25px;
  border: 3px solid #f1b33f;
  cursor: pointer;
  background-color: #f6faf1;
  color: #8dba3f;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  font-size: 15px;
  transition: all 0.3s ease;
}

.age-group-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(241, 179, 63, 0.4);
}

.age-group-button.active {
  background-color: #f1b33f;
  color: white;
  border-radius: 25px;
  box-shadow: -4px 4px 6px rgba(0, 0, 0, 0.4);
  font-weight: bold;
  transform: scale(1.05);
}

/* Centered category selector */
.video-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
  justify-content: center;
}

/* Sub-selector aligned to the left */
.video-selector.sub-selector {
  justify-content: flex-start;
  margin-top: -5px;
}

/* Button styles */
.video-selector button {
  padding: 10px 14px;
  border-radius: 25px;
  border: 2px solid #70cdba;
  cursor: pointer;
  background-color: rgba(112, 205, 186, 0.7);
  color: white;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  transition: all 0.3s ease;
}

.video-selector button:hover {
  background-color: #70cdba;
  transform: translateY(-2px);
}

/* Active button style */
.video-selector button.active {
  background-color: #70cdba;
  box-shadow: -4px 4px 6px rgb(241, 179, 63);
  font-weight: bold;
}

.page-container {
  position: relative;
   font-family: 'Work Sans', sans-serif;
  background:
              radial-gradient(circle, #f6faf1 3px, transparent 1px);
  background-size: 25px 25px, auto;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  padding: 50px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  transition: background 1s ease-in-out;
  box-sizing: border-box;
}

/* Content wrapper with Grid layout */
.content-wrapper {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 30px;
  align-items: start;
  margin-bottom: 40px;
}

/* Side images containers */
.side-images {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 0;
}

.side-image {
  width: 100%;
  max-width: 180px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  object-fit: cover;
}

.side-image:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.left-images {
  justify-content: flex-start;
}

.right-images {
  justify-content: flex-start;
}

.main-content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 900px;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
}


.main-titleb3 {
  font-family: "Bubblegum Sans", "BeachDay", cursive, sans-serif;
  font-weight: 400;
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.2;
  letter-spacing: 2px;

  .title-part1 {
    display: inline-block;
    font-size: 60px;
    color: white;
    background-color: #f1b33f;
    padding: 8px 20px;
    border-radius: 12px;
    -webkit-text-stroke: 0px;
    text-shadow: none;
    transform: rotate(-1deg);
    box-shadow: 0 4px 12px rgba(241, 179, 63, 0.3);
    margin-bottom: 10px;
  }

  .title-part2 {
    display: block;
    font-size: 70px;
    color: #8dba3f;
    -webkit-text-stroke: 4px white;
    text-stroke: 4px white;
    paint-order: stroke fill;
    text-shadow: 3px 3px 0px #f1b33f,
                 5px 5px 0px #f1b33f;
    transform: rotate(-2deg);
  }

  .title-part3 {
    display: block;
    font-size: 70px;
    color: #70cdba;
    -webkit-text-stroke: 4px white;
    text-stroke: 4px white;
    paint-order: stroke fill;
    text-shadow: 3px 3px 0px #8dba3f,
                 5px 5px 0px #8dbb39;
    transform: rotate(1deg);
  }
}

.description {
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #333333;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    padding: 20px 25px;
    line-height: 1.6;
    text-align: center;
    max-width: 65ch;
    margin: 20px auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    .highlight-1 {
        font-weight: bold;
        color: #8dba3f;
    }

    .highlight-2 {
        font-weight: bold;
        color: #70cdba;
    }
}

/* Map Section Styles */
.map-section {
  margin: 40px 0;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.map-container {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.map-wrapper {
  position: relative;
  flex: 1;
  max-width: 350px;
}

/* Google Charts Map Container */
.google-map {
  width: 350px;
  height: 400px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  overflow: visible;
  position: relative;
}

.google-map > div {
  width: 100% !important;
  height: 100% !important;
}

.google-map svg {
  width: 100% !important;
  height: 100% !important;
}

.region-info {
  flex: 1;
  text-align: left;
}

.region-header h3 {
  color: #f1b33f;
  font-family: "Work Sans", sans-serif;
  font-size: 1.2em;
  margin-bottom: 10px;
  background-color: #f1b33f;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: bold;
}

.region-description {
  color: #333333;
  font-family: "Work Sans", sans-serif;
  line-height: 1.5;
  margin-bottom: 20px;
}

.recipes-section h4 {
  color: #333;
  font-family: "Work Sans", sans-serif;
  margin-bottom: 15px;
}

.recipe-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.recipe-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Work Sans", sans-serif;
  font-size: 0.9em;
  transition: all 0.3s ease;
}

.recipe-button.available {
  background-color: #70cdba;
  color: white;
}

.recipe-button.available:hover {
  background-color: #70cdba;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.recipe-button:not(.available) {
  background-color: #E5E5E5;
  color: #999;
  cursor: not-allowed;
}


.plus-icon {
  font-size: 1.2em;
  font-weight: bold;
}

/* Video container */
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.video-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 10px solid #ffffff;
  border-radius: 40px;
  box-sizing: border-box;
  object-fit: cover;
}

/* =================================================================
   RESPONSIVE STYLES - TABLET & MOBILE
   ================================================================= */

/* 💻 Tablet adjustments (max-width: 1200px) */
@media (max-width: 1200px) {
  .content-wrapper {
    grid-template-columns: 150px 1fr 150px;
    gap: 20px;
  }

  .side-image {
    max-width: 130px;
  }

  .side-images {
    gap: 20px;
  }
}

/* ====================================================== */
/* ====================================================== */
/* ====================================================== */

/* 📱 Mobile adjustments (max-width: 768px) */
@media (max-width: 768px) {
  /* Page container */
  .page-container {
    padding: 60px 20px 35px 20px;
  }

  /* Content layout - stack and hide side images */
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .side-images {
    display: none;
  }

  .main-content {
    width: 100%;
    padding: 0px;
  }

  /* Title styles */
  .main-titleb3 {
    .title-part1 {
      font-size: 40px;
      padding: 6px 16px;
      border-radius: 10px;
    }
    .title-part2 {
      font-size: 50px;
      -webkit-text-stroke: 2.5px white;
      text-stroke: 2.5px white;
      text-shadow: 2px 2px 0px #f1b33f,
                   3px 3px 0px #f1b33f;
    }
    .title-part3 {
      font-size: 50px;
      -webkit-text-stroke: 2.5px white;
      text-stroke: 2.5px white;
      text-shadow: 2px 2px 0px #8dba3f,
                   3px 3px 0px #8dbb39;
    }
  }

  /* Description text */
  .description {
    font-size: 15px;
    margin-bottom: 25px;
    padding: 15px 18px;
    max-width: 40ch;

    .highlight-1 {
        font-weight: bold;
        color: #8dba3f;
    }

    .highlight-2 {
        font-weight: bold;
        color: #70cdba;
    }
  }

  /* Map instruction */
  .map-instruction {
    padding: 12px 10px;
  }
  .map-instruction p {
    font-size: 14px;
  }

  /* Modal mascot - hide on mobile */
  .modal-mascot-container {
    display: none;
  }

  /* Map section */
  .map-container {
    flex-direction: column;
    gap: 20px;
  }

  .map-wrapper {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .google-map {
    width: 100%;
    max-width: 350px;
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .google-map > * {
    width: 100% !important;
    height: 100% !important;
    transform: none;
    margin: 0 auto;
  }

  .region-info {
    text-align: center;
    width: 100%;
  }

  /* Age group buttons */
  .age-group-buttons {
    justify-content: center;
  }

  /* Video player */
  .video-player {
    border: 8px solid white;
    border-radius: 20px;
  }

  .play-button-overlay {
    width: 60px;
    height: 60px;
  }

  .play-icon {
    width: 28px;
    height: 28px;
  }

  .video-container {
    padding-bottom: 98.25%;
  }

  /* Bottom section (info bar and content card) */
  .bottom-section {
    width: 90%;
    margin-top: 15px;
  }

  .info-bar {
    font-size: 1em;
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  /* Hide animal image on mobile */
  .card-image-container {
    display: none !important;
  }

  .content-card {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .card-text {
    font-size: 14px;
    line-height: 1.5;
  }

  .info-text {
    font-size: 14px;
    padding: 0;
    text-align: center;
  }

  /* Recipe buttons */
  .recipe-button {
    padding: 10px 14px;
    font-size: 0.85em;
  }

  /* Map section spacing */
  .map-section {
    margin: 25px 0;
    padding: 15px;
  }

  /* Modal adjustments */
  .modal-content {
    max-width: 92%;
    width: 92%;
    padding: 0.9rem;
    max-height: 80vh;
  }

  .modal-header {
    margin-bottom: 0.8rem;
    padding-bottom: 0.5rem;
  }

  .modal-header h2 {
    font-size: 1.05rem;
    line-height: 1.3;
  }

  .recipe-meta {
    font-size: 0.75rem;
  }

  .modal-section {
    margin-bottom: 0.8rem;
  }

  .modal-section h3 {
    font-size: 0.9rem;
    padding-left: 5px;
  }

  .modal-section ul li,
  .modal-section ol li {
    font-size: 0.78rem;
    margin-bottom: 0.25rem;
    line-height: 1.35;
  }

  .nutrition-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 6px 10px;
  }

  .nutrition-item {
    padding: 6px;
  }

  .nutrition-item strong {
    font-size: 0.75rem;
  }

  .nutrition-item span {
    font-size: 0.7rem;
  }

  .close-btn {
    top: 8px;
    right: 10px;
    font-size: 1.4rem;
  }

  /* Ingredients grid - single column on mobile */
  .ingredients-grid {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
}

/* 📱 Extra small mobile (max-width: 480px) */
@media (max-width: 480px) {
  .main-titleb3 {
    font-size: 1.5em;
  }

  .description {
    font-size: 0.9em;
  }

  .video-player {
    border: 8px solid #ffffff;
    border-radius: 28px;
  }

  .recipe-button {
    padding: 10px 15px;
    font-size: 0.8em;
  }

  .google-map {
    width: 100%;
    max-width: 300px;
    height: 350px;
  }

  .google-map > * {
    width: 100% !important;
    height: 100% !important;
    transform: none;
  }

  .age-group-button {
    font-size: 0.75em;
    padding: 6px 12px;
  }
}

/* =================================================================
   BOTTOM SECTION STYLES (Info bar & Content card)
   ================================================================= */
.bottom-section {
  width: 80%;
  max-width: 900px;
  margin-top: 0px;
}

.info-bar {
  background-color: #70cdba;
  color: white;
  padding: 15px 25px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
   font-family: 'Work Sans', sans-serif;
  font-size: 1.2em;
  margin-bottom: 20px;
}

.info-text {
  flex-grow: 1;
  text-align: left;
  font-size: 18px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  svg.rotated {
    transform: rotate(180deg);
  }

  &:hover svg {
    transform: scale(1.1);
  }

  &:hover svg.rotated {
    transform: rotate(180deg) scale(1.1);
  }
}

.content-card {
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 20px;
  align-items: center;
}

.content-card.reverse-layout {
  flex-direction: row-reverse;
}

.card-text {
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.6;
    text-align: left;
    color: #333333;
}

.card-image-container {
  width: 150px;
  height: 120px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* ====================================================== */
/* ====================================================== */
/* ====================================================== */


/* =================================================================
   MODAL STYLES
   ================================================================= */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  max-width: 800px;
  width: 95%;
  text-align: left;
  position: relative;
  max-height: 65vh;
  overflow-y: auto;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}

.modal-header {
  margin-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.6rem;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.3rem;
  color: #70cdba;
   font-family: 'Work Sans', sans-serif;
  line-height: 1.2;
}

.recipe-meta {
  font-size: 0.8rem;
  color: #666;
  margin-top: 3px;
   font-family: 'Work Sans', sans-serif;
}

.modal-section {
  margin-bottom: 1rem;
}

.modal-section h3 {
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.4rem;
   font-family: 'Work Sans', sans-serif;
  border-left: 3px solid #70cdba;
  padding-left: 6px;
}

.modal-section ul,
.modal-section ol {
  padding-left: 1rem;
  margin: 0;
}

.modal-section ul li,
.modal-section ol li {
  margin-bottom: 0.3rem;
  color: #444;
  line-height: 1.4;
  font-size: 0.85rem;
  font-family: 'Work Sans', sans-serif;
}

/* Ingredients grid - two columns */
.ingredients-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.3rem 1rem;
  padding-left: 1rem;
  margin: 0;
}

.ingredients-grid li {
  margin-bottom: 0.3rem;
  color: #444;
  line-height: 1.4;
  font-size: 0.85rem;
  font-family: 'Work Sans', sans-serif;
}

.nutrition-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 8px 12px;
  margin-top: 0.4rem;
}

.nutrition-item {
  background: #f8fdfd;
  border: 1px solid #e0f2f1;
  padding: 8px;
  border-radius: 6px;
  text-align: center;
}

.nutrition-item strong {
  display: block;
  color: #70cdba;
  font-size: 0.8rem;
}

.nutrition-item span {
  font-size: 0.75rem;
  color: #555;
}

.recommendations-list {
  list-style: disc;
  padding-left: 1.2rem;
}

.recommendations-list li {
  margin-bottom: 0.4rem;
  color: #555;
  font-size: 0.85rem;
  line-height: 1.3;
   font-family: 'Work Sans', sans-serif;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #999;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 4px;
}

.close-btn:hover {
  color: #333;
}

.recipe-description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
  margin-bottom: 1rem;
   font-family: 'Work Sans', sans-serif;
}

.coming-soon {
  text-align: center;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.coming-soon h3 {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: #0DB68F;
}

.coming-soon p {
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  color: #666;
}

.modal-content::-webkit-scrollbar {
  width: 6px;
}

.modal-content::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: #999;
}

</style>