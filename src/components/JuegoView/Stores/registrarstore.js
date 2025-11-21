import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRegistrarstore = defineStore('registrar', () => {
  const nombre = ref('')
  const guardarNombre = (nuevoNombre) => {
    nombre.value = nuevoNombre
  }
  return { nombre, guardarNombre }
})
