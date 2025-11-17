<script setup>
import JuegoMusical from './components/JuegoView/Textos/JuegoMusical.vue'
import NavBar from './components/componetsComunes/NavBar.vue'
import Final from './components/componetsComunes/footer.vue'
</script>

<template>
  <NavBar />
  <router-view />

  <Final />
</template>

<style scoped></style>
