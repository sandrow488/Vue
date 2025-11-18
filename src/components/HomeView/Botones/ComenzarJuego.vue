<template>
  <router-link to="/juego">
    <button :style="{ color: Bcolor, backgroundImage: Bacolor, backgroundColor: Bbackgroundcolor }">
      {{ Nboton }}
    </button></router-link
  >
</template>

<style scoped>
button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: inherit;
  text-decoration: none;
}

button a {
  color: inherit;
  text-decoration: none;
}
button:hover {
  background-image: linear-gradient(150deg, #6b11cba6, #e0238bb0);
}
</style>

<script setup>
defineProps({
  Nboton: String,
  Bcolor: {
    type: String,
    default: 'white',
  },
  Bacolor: {
    type: String,
    default: '',
  },
  Bbackgroundcolor: {
    type: String,
    default: 'white',
  },
})
</script>
