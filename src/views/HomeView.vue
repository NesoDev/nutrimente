<template>
  <div class="home">
    <HeroSection />
    <GuideSection />
    <Block1 />
  </div>
</template>

<script setup>
import GuideSection from '@/components/GuideSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import Block1 from '@/views/Bloque1View.vue'
</script>

<style scoped>
.home {
  width: 100%;
  height: auto;
  background: #F3F1EA;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>