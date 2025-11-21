<template>
  <div class="question">
    <p>{{ current.preguntas }}</p>

    <div class="options">
      <button v-for="option in current.respuestas" :key="option" @click="choose(option)">
        {{ option }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { usePreguntasStore } from '@/components/JuegoView/Stores/Preguntas'
const quizStore = usePreguntasStore()

const current = computed(() => quizStore.preguntas[quizStore.index])

function choose(option) {
  quizStore.respuesta(option === current.value.correct)
}
</script>
