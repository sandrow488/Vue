<template>
  <div v-if="current" class="question-container">
    <h2>Pregunta {{ store.index + 1 }}</h2>
    <div class="barra-fondo">
      <div class="barra-relleno" :class="{ animando: estaSonando }"></div>
    </div>
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
    </div>

    <p v-if="bloqueado" class="mensaje-espera">Siguiente pregunta en camino...</p>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { usePreguntasStore } from '@/components/JuegoView/Stores/Preguntas.js'
import { reproducirCancion, detenerCancion } from '@/utils/audioService.js'

const store = usePreguntasStore()
const current = computed(() => store.preguntas[store.index])

const shuffledAnswers = ref([])
const bloqueado = ref(false)
const seleccionada = ref(null)
const estaSonando = ref(false)

function prepararPregunta() {
  if (current.value) {
    shuffledAnswers.value = [...current.value.answers].sort(() => Math.random() - 0.5)
    bloqueado.value = false
    seleccionada.value = null
    reproducirAudio()
  }
}

function reproducirAudio() {
  if (current.value) {
    estaSonando.value = false
    reproducirCancion(current.value.cancion)

    setTimeout(() => {
      if (!bloqueado.value) {
        estaSonando.value = true
      }
    }, 50)
  }
}

onMounted(() => {
  prepararPregunta()
})

onUnmounted(() => {
  detenerCancion()
})

function elegirRespuesta(opcion) {
  if (bloqueado.value) return

  estaSonando.value = false
  detenerCancion()
  bloqueado.value = true
  seleccionada.value = opcion

  const esCorrecta = opcion === current.value.correct
  store.respuesta(esCorrecta)

  setTimeout(() => {
    avanzarPregunta()
  }, 2000)
}

function avanzarPregunta() {
  estaSonando.value = false
  store.siguientePregunta()
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
  margin-bottom: 10px;
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

.mensaje-espera {
  font-size: 0.9rem;
  color: #666;
  margin-top: 15px;
  font-style: italic;
}

.barra-fondo {
  width: 100%;
  max-width: 600px;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-bottom: 20px;
  overflow: hidden;
}

.barra-relleno {
  height: 100%;
  width: 0%;
  background-color: #6a11cb;
  border-radius: 5px;
  transition: none;
}

.barra-relleno.animando {
  width: 100%;
  transition: width 5s linear;
}
</style>