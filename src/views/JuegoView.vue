<script setup>
import { onMounted, computed, watch } from 'vue'
import Nombre from '@/components/JuegoView/Nombre.vue'
import GameQuestions from '@/components/JuegoView/GameQuestions.vue'
import { useRegistrarstore } from '@/components/JuegoView/Stores/registrarstore'
import { usePreguntasStore } from '@/components/JuegoView/Stores/Preguntas'
import { saveScore } from '@/components/TablaView/Ranking.js'

const registrarStore = useRegistrarstore()
const preguntasStore = usePreguntasStore()

onMounted(() => {
  preguntasStore.cargarPreguntas()
})

watch(
  () => preguntasStore.acabado,
  (nuevoValor) => {
    if (nuevoValor) {
      saveScore(registrarStore.nombre, preguntasStore.puntaje)
    }
  },
)

const totalPreguntas = computed(() => preguntasStore.preguntas.length)
const porcentaje = computed(() => {
  if (totalPreguntas.value === 0) return 0
  return Math.round((preguntasStore.aciertos / totalPreguntas.value) * 100)
})

const mensajeFeedback = computed(() => {
  const p = porcentaje.value
  if (p === 100) return 'Que bueno eres '
  if (p >= 80) return '¡Esta muy bien tu resultado chaval'
  if (p >= 50) return 'No esta nada mal'
  return 'Mejor dedicate a otra cosa'
})

function volverAJugar() {
  preguntasStore.cargarPreguntas()
}
</script>

<template>
  <div class="juego-container">
    <Nombre v-if="!registrarStore.nombre" />

    <div v-else class="contenido-juego">
      <div v-if="!preguntasStore.acabado">
        <header class="header-juego">
          <span class="jugador"> {{ registrarStore.nombre }}</span>
          <span class="puntos-live">{{ preguntasStore.puntaje }} pts</span>
        </header>
        <GameQuestions />
      </div>

      <div v-else class="tarjeta-final">
        <div class="encabezado-final">
          <h2>Resultados</h2>
          <p class="mensaje-feedback">{{ mensajeFeedback }}</p>
        </div>

        <div class="stats-grid">
          <div class="stat-box">
            <span class="label">Puntos</span>
            <span class="valor principal">{{ preguntasStore.puntaje }}</span>
          </div>

          <div class="stat-box">
            <span class="label">Aciertos</span>
            <span class="valor">{{ preguntasStore.aciertos }}/{{ totalPreguntas }}</span>
          </div>
          <div class="stat-box">
            <span class="label">Porcentaje</span>
            <span class="valor">{{ porcentaje }}%</span>
          </div>
        </div>

        <div class="acciones">
          <button @click="volverAJugar" class="btn-primary">Jugar de nuevo</button>

          <router-link to="/" class="link-secundario"> Volver al inicio </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.juego-container {
  padding: 20px;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.contenido-juego {
  width: 100%;
  max-width: 600px;
}

.header-juego {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  font-weight: bold;
  color: #555;
}

.puntos-live {
  color: #6a11cb;
}

.tarjeta-final {
  background: white;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.encabezado-final h2 {
  margin: 0;
  color: #333;
  font-size: 2rem;
}

.mensaje-feedback {
  margin-top: 5px;
  color: #6a11cb;
  font-weight: 600;
  font-size: 1.1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 30px 0;
}

.stats-grid .stat-box:last-child {
  grid-column: 1 / -1;
}

.stat-box {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.stat-box .label {
  font-size: 0.85rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-box .valor {
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
}

.stat-box .valor.principal {
  color: #e0238c;
  font-size: 1.8rem;
}

.acciones {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.btn-primary {
  background-color: #6a11cb;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #5a0eb0;
}

.link-secundario {
  color: #777;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.link-secundario:hover {
  color: #333;
  text-decoration: underline;
}
</style>
