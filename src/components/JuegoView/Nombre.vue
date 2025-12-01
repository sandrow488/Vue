<template>
  <div class="Tarjeta">
    <div>
      <img src="" alt="" />
      <h1>Adivina la cancion</h1>
      <p>Escucha fragmentos de 5 segundos de una cancion y adivina el titulo correcto</p>
    </div>
    <div>
      <p>1. Escucha fragmento de la cancion</p>
      <p>2. Elige la respuesta correcta entre 4 opciones</p>
      <p>3. Gana 10 puntos por cada respuesta correcta</p>
    </div>
    <div>
      <form @submit.prevent="onsubmit">
        <label for="nombre">Tu Nombre:</label>
        <input
          v-model="nombre"
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Ingresa tu nombre"
        />
        <button type="submit">Comenzar juego</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import ComenzarB from '@/components/JuegoView/Botones/Comenzar.vue'
import { useRegistrarstore } from '@/components/JuegoView/Stores/registrarstore.js'
import { ref } from 'vue'
const registrarstore = useRegistrarstore()
const nombre = ref('')

const onsubmit = () => {
  registrarstore.guardarNombre(nombre.value)
}
</script>

<style scoped>

.Tarjeta {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 480px; 
  margin: 40px auto; 
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


.Tarjeta img {
  width: 60px;
  margin-bottom: 15px;
}


h1 {
  font-size: 26px;
  margin: 0 0 10px 0;
  color: #6a11cb;
  font-weight: 800;
}

.Tarjeta > div:first-child p {
  color: #666;
  font-size: 16px;
  margin-bottom: 25px;
  line-height: 1.4;
}


.Tarjeta > div:nth-child(2) {
  background-color: #f8f9fa; 
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 25px;
  text-align: left; 
  border-left: 4px solid #e0238c; 
}

.Tarjeta > div:nth-child(2) p {
  margin: 8px 0;
  color: #444;
  font-size: 14px;
  font-weight: 500;
}


.Tarjeta > div:nth-child(3) {
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  align-self: flex-start;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
  margin-left: 5px;
}

input {
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
}

input:focus {
  border-color: #6a11cb;
}

button {
  background-image: linear-gradient(120deg, #6a11cb, #e0238c);
  color: white;
  padding: 14px;
  border: none;
  border-radius: 30px; 
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: transform 0.2s, box-shadow 0.2s;
}

button:hover {
  transform: translateY(-2px); 
  box-shadow: 0 5px 15px rgba(224, 35, 139, 0.4); 
}
</style>