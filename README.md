# NutriMente

**Plataforma digital educativa para el desarrollo infantil a través de la nutrición y el juego**

---

## 📖 Descripción del Proyecto

**NutriMente** es una plataforma web diseñada para sensibilizar y orientar a padres y cuidadores sobre la importancia de una alimentación saludable y el juego en los primeros años de vida. La aplicación ofrece recursos prácticos, confiables y validados por expertos para impulsar el desarrollo integral de los niños.

### Objetivo Principal

Informar, guiar y brindar herramientas accesibles que ayuden a padres y cuidadores a:
- Mejorar los hábitos alimenticios de los niños desde los primeros meses
- Estimular el desarrollo cognitivo y motor a través del juego
- Acceder a recetas nutritivas regionales (Costa, Sierra y Selva del Perú)
- Comprender la importancia de la nutrición en el aprendizaje infantil

---

## 🎯 Características Principales

### **Bloque 1: Alimentando el Futuro desde los Primeros Años**
- Video educativo sobre la importancia de la alimentación temprana
- Contenido validado por expertos en nutrición infantil
- Juegos interactivos que estimulan el desarrollo de los niños

### **Bloque 2: ¡Pequeños Juegos, Grandes Mentes!**
- Biblioteca de actividades de juego organizadas por edad (4-36 meses):
  - 4 a 6 meses: Exploración sensorial y motricidad
  - 7 a 9 meses: Música, memoria y resolución de problemas
  - 10 a 12 meses: Motricidad gruesa y coordinación
  - 12 a 18 meses: Clasificación y construcción
  - 18 a 24 meses: Memoria espacial y autoestima
  - 25 a 36 meses: Juego simbólico y habilidades sociales
- Videos demostrativos con explicaciones pedagógicas
- Descripción detallada de beneficios cognitivos y motores

### **Bloque 3: Alimentando su Futuro**
- **Recetario regional interactivo** con mapa del Perú (Costa, Sierra, Selva)
- Recetas organizadas por grupo de edad:
  - 6-8 meses: Papillas y purés
  - 9-11 meses: Picados en trozos pequeños
  - 12-24 meses: Alimentos trozados
  - 24-36 meses: Comidas sólidas
- Información nutricional completa (energía, proteínas, hierro, etc.)
- Ingredientes y preparación paso a paso
- Recomendaciones nutricionales por especialistas
- Videos educativos sobre alimentación saludable

---

## 🛠️ Tecnologías Utilizadas

- **Vue 3** con Composition API y Options API
- **TypeScript** para mayor seguridad en el código
- **Vue Router 4** para navegación SPA
- **Vuex 4** para gestión de estado
- **Sass/SCSS** para estilos avanzados
- **Google Charts API** para visualización del mapa regional
- **Cloudinary** para almacenamiento y streaming de videos
- **Vue CLI 5** para desarrollo y compilación

---

## 🚀 Configuración del Proyecto

### Instalación de dependencias
```bash
npm install
```

### Servidor de desarrollo
```bash
npm run serve
```
El servidor se ejecuta en `http://localhost:8080` (también accesible desde la red local en `http://0.0.0.0:8080`)

### Compilación para producción
```bash
npm run build
```

### Linting y corrección de código
```bash
npm run lint
```

---

## 📂 Estructura del Proyecto

```
src/
├── assets/          # Imágenes, SVG, fuentes personalizadas
├── components/      # Componentes reutilizables
│   ├── HeroSection.vue      # Sección hero de la landing page
│   └── GuideSection.vue     # Navegación por bloques
├── views/           # Vistas principales
│   ├── HomeView.vue         # Página principal (composición de bloques)
│   ├── Bloque1View.vue      # Video educativo sobre alimentación
│   ├── Bloque2View.vue      # Juegos por edad con videos
│   └── Bloque3View.vue      # Recetario regional con mapa interactivo
├── router/          # Configuración de rutas
└── store/           # Estado global (Vuex)
```

---

## 🎨 Diseño y UX

- **Diseño responsivo** optimizado para móviles y escritorio
- **Paleta de colores** suave y amigable (#F3F1EA, #0FDAC2, #56ABF7)
- **Fuentes personalizadas**: BeachDay, Cooper Black, Work Sans
- **Iconografía educativa** con ilustraciones de animales y alimentos
- **Navegación intuitiva** con scroll suave entre secciones

---

## 📊 Datos y Contenido

### Recetas Regionales
- **Costa**: Papilla de camote con pollo, estofado de pescado, guiso de frejoles
- **Sierra**: Papilla de quinua con zapallo, puré de papa con hígado, guiso de trigo
- **Selva**: Papilla de plátano verde, guiso de yuca, ensalada cocida de yuca

### Videos Educativos
- Videos alojados en **Cloudinary** para carga rápida
- Controles personalizados con overlay de reproducción
- Miniaturas (thumbnails) optimizadas automáticamente

---

## 🌐 Configuración Adicional

### Google Maps API
El proyecto utiliza Google Charts GeoChart para visualizar el mapa regional del Perú. La API key está configurada en `Bloque3View.vue`:
```javascript
mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
```

### Cloudinary
Los videos se sirven desde la cuenta de Cloudinary:
```javascript
cloudName: 'dlejpox8a'
```

---

## 📝 Notas de Desarrollo

- Los componentes usan **scoped styles** para evitar conflictos de CSS
- El proyecto sigue las convenciones de **Vue 3** con soporte para Composition y Options API
- Las animaciones CSS incluyen **fade transitions** para modales y tarjetas
- El diseño móvil utiliza **media queries** en `@media (max-width: 768px)`

---

## 🤝 Contribuciones

Este proyecto fue desarrollado con el objetivo de apoyar la educación nutricional infantil en el Perú. Para consultas o mejoras, contacta al equipo de desarrollo.

---

## 📄 Licencia

Proyecto privado. Todos los derechos reservados.

---

## 🔗 Referencias Adicionales

- [Documentación de Vue 3](https://vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Vue CLI Configuration Reference](https://cli.vuejs.org/config/)
- [Google Charts GeoChart](https://developers.google.com/chart/interactive/docs/gallery/geochart)
