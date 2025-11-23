<script setup>
import { onMounted } from 'vue'
import Nombre from '@/components/JuegoView/Nombre.vue'
import GameQuestions from '@/components/JuegoView/GameQuestions.vue'
import { useRegistrarstore } from '@/components/JuegoView/Stores/registrarstore'
import { usePreguntasStore } from '@/components/JuegoView/Stores/Preguntas'

const registrarStore = useRegistrarstore()
const preguntasStore = usePreguntasStore()

onMounted(() => {
  preguntasStore.cargarPreguntas()
})
</script>
<template>
 <div class="juego-view">
    
    <Nombre v-if="!registrarStore.nombre" />

    <div v-else>
      
      <div v-if="!preguntasStore.acabado">
        <h1>Jugando: {{ registrarStore.nombre }}</h1>
        <p>Puntos: {{ preguntasStore.puntaje }}</p>
        <GameQuestions />
      </div>

      <div v-else class="resultado-final">
        <h1>¡Juego Terminado!</h1>
        <p>Tu puntuación final es: {{ preguntasStore.puntaje }}</p>
        <router-link to="/">
            <button class="btn-volver">Volver al Inicio</button>
        </router-link>
      </div>

    </div>
  </div>
</template>
<style scoped>
.juego-view {
  text-align: center;
  padding: 20px;
  min-height: 60vh; /* Para que no quede pegado arriba */
}

.resultado-final {
  margin-top: 50px;
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  display: inline-block;
}

.btn-volver {
  margin-top: 20px;
  padding: 10px 20px;
  background-image: linear-gradient(120deg, #6a11cb, #e0238c);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
</style>
