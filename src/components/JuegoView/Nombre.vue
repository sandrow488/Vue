
<template>
    <div class="Tarjeta">   
        <div>
            <img src="" alt="">
            <h1> ¡Adivina la cancion!</h1>
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
                <input v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingresa tu nombre">
                <button type="submit">Comenzar juego</button>
            </form>
        </div>

    </div>


</template>
<script setup>
 import ComenzarB from '@/components/JuegoView/Botones/Comenzar.vue';
 import { useRegistrarstore } from '@/components/JuegoView/Stores/registrarstore.js';
 import { ref } from 'vue';
 const registrarstore = useRegistrarstore();
    const nombre = ref('');

const onsubmit = () => { 
    registrarstore.guardarNombre(nombre.value);
 };
</script>



<style scoped>
.Tarjeta {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 30px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);
    width: 500px;
    margin-left: auto;
    margin-right: auto;
}   
h1 {
    font-size: 24px;
    margin-bottom: 10px;
}
p {
    font-size: 16px;
    margin: 5px 0;
}
input {
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 80%;
    font-size: 16px;
}
</style>