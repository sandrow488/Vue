<script setup>
import EmpezarJuego from '../components/HomeView/Botones/ComenzarJuego.vue'
import VerRanking from '../components/HomeView/Botones/VerRanking.vue'
import CuantoSabes from '../components/HomeView/Textos/CuantoSabes.vue'
import ComoFunciona from '../components/HomeView/Textos/ComoFunciona.vue'
import Tarjetas from '../components/HomeView/Tarjetas/TarjetasFuncion.vue'
import Datos from '../components/HomeView/Caracteristicas/Datos.vue'
import Desafio from '../components/HomeView/Desafio/Desafio.vue'
</script>
<template>
  <div class="Principal">
    <CuantoSabes />
    <div class="Botones">
      <EmpezarJuego
        Nboton="Comenzar a Jugar"
        Bcolor="white"
        Bacolor="linear-gradient(120deg, #6a11cb, #e0238c)"
        Bbackgroundcolor="white"
      />
      <VerRanking />
    </div>
  </div>

  <ComoFunciona />
  <div class="Tarjeta">
    <Tarjetas
      RutaImg="/Imagenes/NotaMusical.png"
      Titulo="Escucha"
      Descripcion="Reproduce fragmento de 5 segundos de una canción popular"
    />
    <Tarjetas
      RutaImg="/Imagenes/diana.png"
      Titulo="Adivina"
      Descripcion="Elige la respuesta correcta entre 4 opciones posibles"
    />
    <Tarjetas
      RutaImg="/Imagenes/corona.png"
      Titulo="Compite"
      Descripcion="Gana 10 puntos por respuesta correcta y sube en el ranking"
    />
  </div>

  <div class="Detalles">
    <Datos Numero="10" Descripcion="Preguntas por partida" />
    <Datos Numero="100" Descripcion="Puntos máximos" />
    <Datos Numero="5s" Descripcion="Por canción" />
  </div>

  <div><Desafio /></div>
</template>

<style scoped>
.Tarjeta {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.Detalles {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  background-image: linear-gradient(150deg, #6a11cb, #e0238c, #fc880f);
  height: 300px;
}
.Botones {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.Principal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  background-color: #8923f55e;
  height: 500px;
  margin-top: 0;
}
</style>
