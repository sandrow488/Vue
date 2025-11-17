<template>
  <div class="Datos">
    <h1>{{ Numero }}</h1>
    <p>{{ Descripcion }}</p>
  </div>
</template>
<script setup>
defineProps({
  Numero: Number,
  Descripcion: String,
})
</script>

<style scoped>
.Datos {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
  margin: 10px;
}
.Datos h1 {
  font-size: 44px;
  font-weight: 40;
  margin: 0;
  color: white;
}
.Datos p {
  font-weight: 700;
  margin: 5px 0 0 0;
  color: white;
}
</style>
