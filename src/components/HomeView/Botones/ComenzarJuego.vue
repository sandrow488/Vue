<template>
  <button :style="{ color: Bcolor, backgroundImage: Bacolor, backgroundColor: Bbackgroundcolor }">
    {{ Nboton }}
  </button>
</template>

<style scoped>
button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
