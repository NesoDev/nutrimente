# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**NutriMente** is a digital platform for parents and caregivers focused on child nutrition and development through interactive educational content. Built with Vue 3, TypeScript, and Vue Router.

## Development Commands

- **Development server**: `npm run serve` (runs on port 8080)
- **Production build**: `npm run build`
- **Lint**: `npm run lint`
- **Install dependencies**: `npm install`

## Architecture

### Tech Stack
- Vue 3 (Composition API with `<script setup>`)
- TypeScript
- Vue Router 4
- Vuex 4 (state management - currently minimal usage)
- Vue CLI 5

### Project Structure

- **src/views/**: Page components
  - `HomeView.vue` - Main landing page that composes all block sections
  - `Bloque1View.vue`, `Bloque2View.vue`, `Bloque3View.vue` - Content block sections (educational blocks)
  - `AboutView.vue` - About page (lazy-loaded)

- **src/components/**: Reusable UI components
  - `HeroSection.vue` - Landing hero section
  - `GuideSection.vue` - Guide/information section

- **src/router/index.ts**: Route definitions with lazy loading for secondary routes

- **src/store/index.ts**: Vuex store (currently empty skeleton)

- **src/assets/**: Static assets including custom fonts (sovba_regular.otf, beachday.ttf) and educational graphics

### Key Patterns

1. **Component composition**: `HomeView` acts as a composition root, importing and organizing all block views as components
2. **Scoped styles**: All components use scoped CSS with SCSS syntax
3. **Responsive design**: Media queries for mobile breakpoints at 768px
4. **Video integration**: Uses Cloudinary for video hosting (see Bloque1View for implementation pattern)

### Dev Server Configuration

The dev server in `vue.config.js` is configured to bind to `0.0.0.0:8080` for network access with WebSocket support.
