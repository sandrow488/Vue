<script setup>
import Comenzar from '@/components/JuegoView/Nombre.vue'
import { useRegistrarstore } from '@/components/JuegoView/Stores/registrarstore'
</script>
<template>
  <Comenzar v-if="!useRegistrarstore().nombre" />
  <div v-else>
    <h1>Bienvenido al juego, {{ useRegistrarstore().nombre }}!</h1>
  </div>
</template>
