<script setup>
import { ref, onMounted } from 'vue'
// Importamos tu función de JS puro para leer los datos
import { getRanking } from '@/components/TablaView/Ranking.js'

// Variable reactiva para guardar la lista
const listaRanking = ref([])

// Cuando la pantalla carga (onMounted), pedimos los datos al localStorage
onMounted(() => {
  listaRanking.value = getRanking()
})
</script>

<template>
  <div class="tabla-view-container">
    <div class="encabezado">
      <img src="/Imagenes/corona.png" alt="Corona" class="icono-titulo" />
      <h1>Salón de la Fama</h1>
    </div>

    <p class="subtitulo">Los mejores jugadores del Ranking Musical</p>

    <div v-if="listaRanking.length === 0" class="sin-datos">
      <p>Aún no hay registros. ¡Juega una partida para estrenar la tabla!</p>
      <router-link to="/juego" class="btn-accion">Ir a Jugar</router-link>
    </div>

    <div v-else class="contenedor-tabla">
      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Jugador</th>
            <th>Puntos</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(registro, index) in listaRanking"
            :key="index"
            :class="{ 'top-1': index === 0 }"
          >
            <td class="posicion">
              <span v-if="index === 0">👑</span>
              <span v-else-if="index === 1">🥈</span>
              <span v-else-if="index === 2">🥉</span>
              <span v-else>{{ index + 1 }}</span>
            </td>
            <td class="nombre">{{ registro.nombre }}</td>
            <td class="puntos">{{ registro.puntos }}</td>
            <td class="fecha">{{ registro.fecha }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="botones-footer">
      <router-link to="/">
        <button class="btn-volver">Volver al Inicio</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.tabla-view-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

.encabezado {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
}

.icono-titulo {
  width: 50px;
  height: auto;
}

h1 {
  color: #6a11cb;
  font-size: 2.5rem;
  margin: 0;
}

.subtitulo {
  color: #666;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.contenedor-tabla {
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Para los bordes redondeados */
  margin-bottom: 30px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-image: linear-gradient(120deg, #6a11cb, #e0238c);
  color: white;
  padding: 15px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

td {
  padding: 15px;
  border-bottom: 1px solid #eee;
  color: #333;
}

tr:last-child td {
  border-bottom: none;
}

tr:hover {
  background-color: #f8f9fa;
}

/* Estilos especiales para el Top 1 */
.top-1 {
  background-color: #fffdf0;
  font-weight: bold;
  font-size: 1.1rem;
}

.top-1 .nombre {
  color: #e0238c;
}

.puntos {
  font-weight: bold;
  color: #333;
}

.fecha {
  color: #888;
  font-size: 0.85rem;
}

.sin-datos {
  background: #f0f0f0;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.botones-footer {
  display: flex;
  justify-content: center;
  gap: 20px;
}

button {
  padding: 12px 25px;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  font-weight: bold;
}

.btn-volver {
  background-color: #333;
  color: white;
}

.btn-volver:hover {
  background-color: #000;
  transform: translateY(-2px);
}

.btn-accion {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-image: linear-gradient(120deg, #6a11cb, #e0238c);
  color: white;
  text-decoration: none;
  border-radius: 20px;
  font-weight: bold;
}
</style>
