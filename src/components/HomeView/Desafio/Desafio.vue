
<script setup>    
import EmpezarJuego from '../Botones/ComenzarJuego.vue'
</script>
<template>
    <div class="Desafio">
        <div>
                <img src="/Imagenes/copa-ganadora.png" alt=""></img>
        </div>
        <h1>¿Listo para el desafio?</h1>
        <p>Demuestra que eres un experto musical y alcanza el top del ranking</p>
        <EmpezarJuego Nboton="Comenzar Desafío"  Bcolor="Black" Bacolor="" Bbackgroundcolor="white" />
    </div>
    
</template>
<style scoped>
.Desafio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 700px;
    padding: 40px;
    margin: 50px auto;
    box-sizing: border-box;
    background-image: linear-gradient(110deg, #6b11cb, #e0238b); 
    border-radius: 20px;
    color: white; 
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2); 
}
.Desafio h3 {
    margin: 20px 0 10px 0;
    font-size: 1.2rem;
    font-weight: 600;
}

.Desafio p {
    margin-bottom: 30px;
    font-size: 0.95rem;
    opacity: 0.9;
    max-width: 80%;
}
img {
    width: 80px;
    height: auto;
    margin-bottom: 20px;
}


</style>