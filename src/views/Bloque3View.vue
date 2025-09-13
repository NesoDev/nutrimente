<template>
  <div class="page-container">
    <main class="main-content">
      <!-- Modal -->
      <transition name="fade">
        <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
          <div class="modal-content">
            <button class="close-btn" @click="closeModal">✖</button>
            <div v-if="selectedRecipe">
              <div class="modal-header">
                <h2>{{ selectedRecipe.name }}</h2>
                <p class="recipe-meta">
                  <span v-if="selectedRecipe.consistency"><strong>Consistencia:</strong> {{ selectedRecipe.consistency }}</span>
                  <span v-if="selectedRecipe.capacity"> | <strong>Capacidad gástrica:</strong> {{ selectedRecipe.capacity }}</span>
                </p>
              </div>

              <div class="modal-section" v-if="selectedRecipe.ingredients && selectedRecipe.ingredients.length">
                <h3>Ingredientes</h3>
                <ul>
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

      <h1 class="main-titleb3">Bloque 3: Alimentando su futuro</h1>

      <p class="description">
        En NutriMente, sabemos que una buena alimentación y el juego son clave para el desarrollo de los niños. 
        Por eso, creamos una plataforma digital con recursos prácticos, confiables y validados por expertos, 
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
          :src="cloudinaryVideoUrl"
          :poster="cloudinaryThumbnailUrl"
          preload="metadata"
          @play="handlePlay"
          @pause="handlePause"
          @click="togglePlay"
        >
          Your browser does not support the video tag.
        </video>
        <div v-if="showPlayButton" class="play-button-overlay" @click="togglePlay">
          <svg class="play-icon" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </main>

    <!-- Green + White Sections -->
    <section class="bottom-section">
      <div class="info-bar">
        <div class="info-text">
          {{ videos[currentVideoIndex].title }}
        </div>
        <div class="info-icon" @click="toggleCard">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <transition name="fade">
        <div v-if="showCard" class="content-card">
          <p class="card-text">
            {{ videos[currentVideoIndex].cardText }}
          </p>
          <div class="card-image-container">
            <img src="../assets/animal.png" alt="Cartoon animal" class="card-image" />
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
      showPlayButton: true,
      showCard: false,
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
          departments: ['PE-LAL', 'PE-LAM', 'PE-PIU', 'PE-TUM', 'PE-CAL', 'PE-LIM', 'PE-LMA', 'PE-ICA', 'PE-ARE', 'PE-MOQ', 'PE-TAC'],
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
          departments: ['PE-CUS', 'PE-APU', 'PE-HUV', 'PE-AYA', 'PE-JUN', 'PE-PAS', 'PE-HUC', 'PE-ANC', 'PE-CAJ', 'PE-PUN'],
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
    togglePlay() {
      const video = this.$refs.videoPlayer;
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }
    },
    handlePlay() {
      this.showPlayButton = false;
    },
    handlePause() {
      this.showPlayButton = true;
    },
    toggleCard() {
      this.showCard = !this.showCard;
    },
    selectVideo(index) {
      this.currentVideoIndex = index;
      this.showCard = false;
      this.resetVideo();
    },
    resetVideo() {
      this.showPlayButton = true;
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
        ['PE-ARE', 1, 1], ['PE-MOQ', 1, 1], ['PE-TAC', 1, 1],
        // Sierra
        ['PE-CUS', 2, 0.2], ['PE-APU', 2, 0.2], ['PE-HUV', 2, 0.2], ['PE-AYA', 2, 0.2], 
        ['PE-JUN', 2, 0.2], ['PE-PAS', 2, 0.2], ['PE-HUC', 2, 0.2], ['PE-ANC', 2, 0.2], 
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
            colors: ['#8B4513', '#FFD700', '#90EE90'],
            minValue: 1,
            maxValue: 3
          },
          backgroundColor: '#ffffff',
          datalessRegionColor: '#f5f5f5',
          defaultColor: '#f5f5f5',
          legend: 'none',
          tooltip: { trigger: 'selection' }
        };

        this.googleChart.draw(this.chartDataTable, options);
      }
    }
  },
  mounted() {
    const video = this.$refs.videoPlayer;
    if (video) {
      video.addEventListener("loadedmetadata", () => {
        if (video.paused) {
          this.showPlayButton = true;
        }
      });
    }
    this.loadGoogleCharts();
  }
};
</script>

<style scoped>
/* Age group buttons */
.age-group-section {
  margin-bottom: 25px;
}

.age-group-section h4 {
  color: #333;
  font-family: 'Solway', serif;
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
    padding: 10px 14px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    background-color: #FFAE50;
    color: white;
}

.age-group-button:hover {
  background-color: #FFAE50;
}

.age-group-button.active {
    background-color: #FFAE50;
    color: white;
    border-radius: 25px;
    box-shadow: -4px 4px 6px rgba(0, 0, 0, 0.4);
    font-weight: bold;

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
  border: none;
  cursor: pointer;
  background-color: rgba(16, 156, 123, 0.7);
  color: white;
}

/* Active button style */
.video-selector button.active {
  background-color: #0DB68F;
  box-shadow: -4px 4px 6px rgb(255, 255, 20);
  font-weight: bold;
}

.page-container {
  font-family: Arial, sans-serif;
  background-color: #f4feff;
  background-image: radial-gradient(circle, #e5f6f8 4px, transparent 1px);
  background-size: 20px 20px;
  min-height: 100vh;
  padding: 100px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-content {
  width: 80%;
  max-width: 900px;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
}

.main-titleb3 {
  margin-bottom: 10px;
  display: inline-block;
  border-radius: 5px;

                font-family: 'Cooper Black', Arial, sans-serif;
                font-size: 45px;
                font-weight: bolder;
                color: #0DB68F;
                overflow-wrap: break-word;
                white-space: normal;

  width: fit-content;
                padding: 0px 10px;
                box-sizing: border-box;
}

.description {
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #6d8f9d;
    backdrop-filter: blur(2px);
    line-height: 1.6;
    text-align: center;
    max-width: 80ch;
    margin-top: 40px;
    margin-bottom: 40px;
}

/* Map Section Styles */
.map-section {
  margin: 40px 0;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding-left: -0px; /* new */
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
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  max-width: 100%;
}

.region-info {
  flex: 1;
  text-align: left;
}

.region-header h3 {
  color: #F4A261;
  font-family: 'Solway', serif;
  font-size: 1.2em;
  margin-bottom: 10px;
  background-color: #F4A261;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: bold;
}

.region-description {
  color: #848484;
  font-family: 'Solway', serif;
  line-height: 1.5;
  margin-bottom: 20px;
}

.recipes-section h4 {
  color: #333;
  font-family: 'Solway', serif;
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
  font-family: 'Solway', serif;
  font-size: 0.9em;
  transition: all 0.3s ease;
}

.recipe-button.available {
  background-color: #38B2AC;
  color: white;
}

.recipe-button.available:hover {
  background-color: #2C9A93;
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
}

.video-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 15px solid white;
  border-radius: 40px;
  box-sizing: border-box;
  object-fit: cover;
}

/* Play button overlay */
.play-button-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color: #7673FF;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s ease;
}

.play-button-overlay:hover {
  background-color: #2925f5;
}

.play-icon {
  fill: white;
  width: 40px;
  height: 40px;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .page-container {
    padding: 60px 35px 35px 35px; 
  }

  .main-content {
    width: 100%;
    padding: 30px;
  }

  .main-titleb3 {
    font-size: 1.8em;
    padding: 4px 10px;
  }

  .description {
    font-size: 0.95em;
    margin-bottom: 25px;
    text-align: justify;
  }
  

  .map-container {
    flex-direction: column;
    gap: 20px;
  }

  .map-wrapper {
    max-width: 100%;
  }

  .google-map {
    aspect-ratio: 4/5;
    max-width: 90%;
    margin: 0 auto;
  }

  .region-info {
    text-align: center;
  }

  .age-group-buttons {
    justify-content: center;
  }

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
}



@media (max-width: 480px) {
  .main-titleb3 {
    font-size: 1.5em;
  }

  .description {
    font-size: 0.9em;
  }

  .play-button-overlay {
    width: 50px;
    height: 50px;
  }

  .play-icon {
    width: 24px;
    height: 24px;
  }

  .recipe-button {
    padding: 10px 15px;
    font-size: 0.8em;
  }

  .google-map {
    aspect-ratio: 3/4;
    max-width: 100%;
  }

  .age-group-button {
    font-size: 0.75em;
    padding: 6px 12px;
  }
}

/* Bottom section styles */
.bottom-section {
  width: 80%;
  max-width: 900px;
  margin-top: 0px;
}

.info-bar {
  background-color: #38b2ac;
  color: white;
  padding: 15px 25px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Solway', serif;
  font-size: 1.2em;
  margin-bottom: 20px;
}

.info-text {
  flex-grow: 1;
  text-align: left;
  font-size: 18px;
}

.info-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
}

.info-icon .line {
  width: 30px;
  height: 3px;
  background-color: white;
  border-radius: 2px;
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

.card-text {
  flex: 1;
  font-size: 1em;
  line-height: 1.6;
  text-align: left;
  color: #848484;
  font-family: 'Solway', serif;
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

/* Mobile adjustments for bottom section */
@media (max-width: 768px) {
  .card-image-container {
    display: none;
  }

  .info-bar {
    font-size: 1em;
    padding: 12px 18px;
  }

  .content-card {
    flex-direction: column;
    text-align: center;
  }

  .info-text {
    font-size: 14px;
    padding: 2px;
  }

  .map-wrapper {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

/* Modal styles */
/* Modal styles */
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
  max-width: 800px; /* Reduced from 750px */
  width: 95%; /* Reduced from 95% */
  text-align: left;
  position: relative;
  max-height: 65vh; /* Reduced from 90vh */
  overflow-y: auto;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}

.modal-header {
  margin-bottom: 1rem; /* Reduced from 1.5rem */
  border-bottom: 1px solid #e0e0e0; /* Thinner border */
  padding-bottom: 0.6rem; /* Reduced from 0.8rem */
}

.modal-header h2 {
  margin: 0;
  font-size: 1.3rem; /* Reduced from 1.6rem */
  color: #0DB68F;
  font-family: 'Solway', serif;
  line-height: 1.2;
}

.recipe-meta {
  font-size: 0.8rem; /* Reduced from 0.9rem */
  color: #666;
  margin-top: 3px; /* Reduced from 5px */
  font-family: 'Solway', serif;
}

/* Section titles */
.modal-section {
  margin-bottom: 1rem; /* Reduced from 1.5rem */
}

.modal-section h3 {
  font-size: 1rem; /* Reduced from 1.2rem */
  color: #333;
  margin-bottom: 0.4rem; /* Reduced from 0.6rem */
  font-family: 'Solway', serif;
  border-left: 3px solid #38B2AC; /* Thinner border */
  padding-left: 6px; /* Reduced from 8px */
}

/* Ingredient & preparation lists */
.modal-section ul,
.modal-section ol {
  padding-left: 1rem; /* Reduced from 1.2rem */
  margin: 0;
}

.modal-section ul li,
.modal-section ol li {
  margin-bottom: 0.3rem; /* Reduced from 0.4rem */
  color: #444;
  line-height: 1.4; /* Reduced from 1.5 */
  font-size: 0.85rem; /* Reduced from 0.95rem */
  font-family: 'Solway', serif;
}

/* Nutrition facts in grid - More compact */
.nutrition-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Reduced from 120px */
  gap: 8px 12px; /* Reduced gaps */
  margin-top: 0.4rem;
}

.nutrition-item {
  background: #f8fdfd;
  border: 1px solid #e0f2f1;
  padding: 8px; /* Reduced from 10px */
  border-radius: 6px; /* Smaller radius */
  text-align: center;
}

.nutrition-item strong {
  display: block;
  color: #0DB68F;
  font-size: 0.8rem; /* Reduced from 0.9rem */
}

.nutrition-item span {
  font-size: 0.75rem; /* Reduced from 0.85rem */
  color: #555;
}

/* Recommendations list */
.recommendations-list {
  list-style: disc;
  padding-left: 1.2rem;
}

.recommendations-list li {
  margin-bottom: 0.4rem; /* Reduced from 0.5rem */
  color: #555;
  font-size: 0.85rem; /* Reduced from 0.95rem */
  line-height: 1.3; /* Reduced from 1.4 */
  font-family: 'Solway', serif;
}

/* Close button refinement */
.close-btn {
  position: absolute;
  top: 10px; /* Reduced from 14px */
  right: 12px; /* Reduced from 16px */
  background: none;
  border: none;
  font-size: 1.5rem; /* Reduced from 1.8rem */
  font-weight: bold;
  color: #999;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 4px; /* Added padding for better click area */
}

.close-btn:hover {
  color: #333;
}

/* Description paragraph - more compact */
.recipe-description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
  margin-bottom: 1rem;
  font-family: 'Solway', serif;
}

/* Coming soon section - more compact */
.coming-soon {
  text-align: center;
  padding: 1rem; /* Reduced padding */
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

/* Scrollbar for overflowing content */
.modal-content::-webkit-scrollbar {
  width: 6px; /* Thinner scrollbar */
}

.modal-content::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: #999;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .modal-content {
    max-width: 95%;
    width: 95%;
    padding: 1rem;
    max-height: 85vh;
  }
  
  .modal-header h2 {
    font-size: 1.1rem;
  }
  
  .nutrition-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .modal-section h3 {
    font-size: 0.95rem;
  }
  
  .modal-section ul li,
  .modal-section ol li {
    font-size: 0.8rem;
  }
}

</style>