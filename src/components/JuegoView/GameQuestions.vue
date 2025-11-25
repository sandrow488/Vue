<template>
  <div v-if="current" class="question-container">
    <h2>Pregunta {{ store.index + 1 }}</h2>
    <p class="pregunta-texto">{{ current.question }}</p>

    <div class="options">
      <button
        v-for="option in shuffledAnswers"
        :key="option"
        class="answer-btn"
        :disabled="bloqueado"
        @click="elegirRespuesta(option)"
        :class="{
          correct: bloqueado && option === current.correct,
          wrong: bloqueado && option === seleccionada && option !== current.correct,
        }"
      >
        {{ option }}
      </button>

      <button class="btn-siguiente" @click="avanzarPregunta">
        {{ bloqueado ? 'Siguiente Pregunta ➡' : 'Saltar Pregunta ⏭' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { usePreguntasStore } from '@/components/JuegoView/Stores/Preguntas.js'
// Importamos nuestras funciones sencillas del archivo externo
import { reproducirCancion, detenerCancion } from '@/utils/audioService.js'

const store = usePreguntasStore()
// Obtenemos la pregunta actual basada en el índice del store
const current = computed(() => store.preguntas[store.index])

const shuffledAnswers = ref([])
const bloqueado = ref(false)
const seleccionada = ref(null)

// Función auxiliar para mezclar respuestas y preparar la UI
function prepararPregunta() {
  if (current.value) {
    // Mezclamos las respuestas
    shuffledAnswers.value = [...current.value.answers].sort(() => Math.random() - 0.5)
    // Reseteamos el estado visual
    bloqueado.value = false
    seleccionada.value = null

    // REPRODUCIMOS EL AUDIO AQUÍ DIRECTAMENTE
    reproducirCancion(current.value.cancion)
  }
}

// 1. Al montar el componente, cargamos la primera pregunta
onMounted(() => {
  prepararPregunta()
})

// 2. Al salir del componente, paramos el audio por si acaso
onUnmounted(() => {
  detenerCancion()
})

// 3. Lógica para elegir respuesta
function elegirRespuesta(opcion) {
  if (bloqueado.value) return

  // Paramos la música inmediatamente al responder
  detenerCancion()

  bloqueado.value = true
  seleccionada.value = opcion

  const esCorrecta = opcion === current.value.correct
  store.respuesta(esCorrecta)
}

// 4. Lógica para pasar a la siguiente
function avanzarPregunta() {
  // Si el usuario no respondió y le dio a "Saltar", restamos puntos (opcional)
  // o simplemente paramos la música actual
  detenerCancion()

  if (!bloqueado.value) {
    store.respuesta(false) // Penalización por saltar sin responder
  }

  // Avanzamos el índice en el store
  store.siguientePregunta()

  // Si el juego NO ha acabado, preparamos la siguiente pregunta y audio
  if (!store.acabado) {
    prepararPregunta()
  }
}
</script>

<style scoped>
.question-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  color: #6a11cb;
}

.pregunta-texto {
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.answer-btn {
  padding: 15px;
  font-size: 18px;
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.answer-btn:hover:not(:disabled) {
  background-color: #f0f0f0;
  border-color: #6a11cb;
}

.btn-siguiente {
  padding: 15px;
  font-size: 18px;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
}
.btn-siguiente:hover {
  background-color: #e68a00;
}

.correct {
  background-color: #4caf50 !important;
  color: white;
  border-color: #4caf50;
}

.wrong {
  background-color: #f44336 !important;
  color: white;
  border-color: #f44336;
}
</style>
