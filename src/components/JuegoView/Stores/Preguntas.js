import { defineStore } from 'pinia'
import preguntasData from '@/assets/data/data.json'

export const usePreguntasStore = defineStore('preguntas', {
    state: () => ({
        preguntas: [],
        index: 0,
        puntaje: 0,
        aciertos: 0,
        acabado: false,
    }),
    actions: {
        cargarPreguntas() {
            this.preguntas = [...preguntasData].sort(() => Math.random() - 0.5).slice(0, 10)
            this.index = 0
            this.puntaje = 0
            this.aciertos = 0
            this.acabado = false
        },
        respuesta(escorrecta) {
            if (escorrecta) {
                this.puntaje += 10
                this.aciertos++
            } else {
                this.puntaje -= 5
            }
        },
        siguientePregunta() {
            if (this.index < this.preguntas.length - 1) {
                this.index++
            } else {
                this.acabado = true
            }
        },
    },
})