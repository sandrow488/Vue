import { defineStore } from 'pinia'
import preguntasData from '@/assets/data/data.json'

export const usePreguntasStore = defineStore('preguntas', {
    state: () => ({
        preguntas: [],
        index: 0, // <-- Aquí se llama 'index' en minúscula
        puntaje: 0,
        acabado: false,
    }),
    actions: {
        cargarPreguntas() {
            this.preguntas = [...preguntasData].sort(() => Math.random() - 0.5).slice(0, 10)
            this.index = 0 // <-- CORREGIDO: Antes ponía 'this.currentIndex'
            this.puntaje = 0
            this.acabado = false
        },
        respuesta(escorrecta) {
            if (escorrecta) {
                this.puntaje += 10
            } else {
                this.puntaje -= 5
            }
        },
        siguientePregunta() {
            // CORREGIDO: Usamos 'this.index' (minúscula) para que coincida con el state
            if (this.index < this.preguntas.length - 1) {
                this.index++
            } else {
                this.acabado = true
            }
        },
    },
})