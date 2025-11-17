<template>
  <div class="Componente">
    <img :src="RutaImg" alt="" />
    <h1>{{ Titulo }}</h1>
    <p>{{ Descripcion }}</p>
  </div>
</template>

<script setup>
defineProps({
  RutaImg: String,
  Titulo: String,
  Descripcion: String,
})
</script>
<style scoped>
img {
  width: 40px;
  height: 40px;
  margin-top: 20px;
}
h1 {
  font-size: 20px;
  margin: 30px 0 30px 0;
}
p {
  font-size: 16px;
  color: #555;
  width: 80%;
}
.Componente {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  height: 250px;
  margin: 30px 0 30px 0;
}
</style>
