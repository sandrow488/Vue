<script setup>
import { ref, onMounted } from 'vue'
import { getRanking } from '@/components/TablaView/Ranking.js'

const listaRanking = ref([])

onMounted(() => {
  listaRanking.value = getRanking()
})
</script>

<template>
  <div class="tabla-view-container">
    <div class="ranking-simple">
      <div class="encabezado">
        <img src="/Imagenes/copa-ganadora.png" alt="Copa" class="icono-copa" />
        <h1>Ranking</h1>
      </div>

      <div v-if="listaRanking.length === 0" class="sin-datos">
        <p>No hay registros todavía.</p>
        <router-link to="/juego" class="enlace-jugar">Ir a Jugar</router-link>
      </div>

      <table v-else class="tabla-limpia">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Puntos</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(registro, index) in listaRanking" :key="index">
            <td class="col-pos">
              <span v-if="index === 0">🥇</span>
              <span v-else-if="index === 1">🥈</span>
              <span v-else-if="index === 2">🥉</span>
              <span v-else>{{ index + 1 }}</span>
            </td>
            <td>{{ registro.nombre }}</td>
            <td class="col-puntos">{{ registro.puntos }}</td>
            <td class="col-fecha">{{ registro.fecha }}</td>
          </tr>
        </tbody>
      </table>

      <div class="footer-botones">
        <router-link to="/">
          <button class="btn-simple">Volver</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tabla-view-container {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
  min-height: 80vh;
}

.ranking-simple {
  width: 100%;
  max-width: 700px;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  text-align: center;
}

.encabezado {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.icono-copa {
  width: 50px;
}

h1 {
  margin: 0;
  color: #333;
  font-size: 1.8rem;
}


.tabla-limpia {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
  color: #333;
}

.tabla-limpia th {
  text-align: left;
  padding: 12px;
  border-bottom: 2px solid #eee;
  font-weight: 600;
  color: #555;
}

.tabla-limpia td {
  padding: 12px;
  border-bottom: 1px solid #eee;
  text-align: left;
}

.tabla-limpia tr:last-child td {
  border-bottom: none;
}

.col-pos {
  font-size: 1.2rem;
  width: 50px;
  text-align: center !important; 
}
.tabla-limpia th:first-child {
  text-align: center;
}

.col-puntos {
  font-weight: bold;
}

.col-fecha {
  color: #888;
  font-size: 0.9rem;
}

.sin-datos {
  padding: 20px;
  color: #666;
}

.enlace-jugar {
  color: #6a11cb;
  text-decoration: none;
  font-weight: bold;
}

.btn-simple {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.btn-simple:hover {
  background-color: #000;
}
</style>