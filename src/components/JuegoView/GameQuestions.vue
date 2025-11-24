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
import { computed, ref, watch, onUnmounted } from 'vue'
import { usePreguntasStore } from '@/components/JuegoView/Stores/Preguntas.js'
import { Howl } from 'howler'

const store = usePreguntasStore()
const current = computed(() => store.preguntas[store.index])

let sonido = null
let audioTimeout = null

const avanzarPregunta = () => {
  // 1. Limpieza de audio
  if (sonido) {
    sonido.stop()
    sonido.unload()
  }
  if (audioTimeout) clearTimeout(audioTimeout)

  // 2. Lógica de puntos:
  if (!bloqueado.value) {
    store.respuesta(false)
  }

  // 3. Avanzamos manualmente (ya que lo quitamos del store)
  store.siguientePregunta()
}

watch(
  current,
  (nuevaPregunta) => {
    if (!nuevaPregunta) return

    if (sonido) sonido.stop()
    if (audioTimeout) clearTimeout(audioTimeout)

    sonido = new Howl({
      src: [`/${nuevaPregunta.cancion}`],
      html5: true,
      volume: 0.5,
      onload: function () {
        const duracion = this.duration()
        const maxInicio = Math.max(0, duracion - 5)
        const inicioRandom = Math.random() * maxInicio
        this.seek(inicioRandom)
      },
    })

    sonido.play()

    // Solo paramos el audio a los 5s
    audioTimeout = setTimeout(() => {
      if (sonido) sonido.stop()
    }, 5000)
  },
  { immediate: true },
)

onUnmounted(() => {
  if (sonido) {
    sonido.stop()
    sonido.unload()
  }
  if (audioTimeout) clearTimeout(audioTimeout)
})

const shuffledAnswers = ref([])
const bloqueado = ref(false)
const seleccionada = ref(null)

watch(
  current,
  (nuevaPregunta) => {
    if (nuevaPregunta) {
      shuffledAnswers.value = [...nuevaPregunta.answers].sort(() => Math.random() - 0.5)
      bloqueado.value = false
      seleccionada.value = null
    }
  },
  { immediate: true },
)

function elegirRespuesta(opcion) {
  if (bloqueado.value) return

  bloqueado.value = true
  seleccionada.value = opcion

  const esCorrecta = opcion === current.value.correct

  if (sonido) sonido.stop()
  if (audioTimeout) clearTimeout(audioTimeout)

  store.respuesta(esCorrecta)
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
