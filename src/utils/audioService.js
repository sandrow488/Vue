import { Howl } from 'howler'

let sonidoActual = null
let timeoutId = null

// Función para reproducir
export function reproducirCancion(ruta) {
  // 1. Si ya hay algo sonando, lo paramos primero
  detenerCancion()

  // 2. Configuramos el nuevo sonido
  sonidoActual = new Howl({
    src: [`/${ruta}`], // Añadimos la barra al inicio para ir a public
    html5: true,
    volume: 0.5,
    onload: function () {
      // Lógica del tiempo aleatorio
      const duracion = this.duration()
      // Nos aseguramos de que haya espacio para reproducir 5 seg
      const maxInicio = Math.max(0, duracion - 5)
      const inicioRandom = Math.random() * maxInicio
      this.seek(inicioRandom)
    },
  })

  // 3. Reproducir
  sonidoActual.play()

  // 4. Programar que se pare a los 5 segundos
  timeoutId = setTimeout(() => {
    detenerCancion()
  }, 5000)
}

// Función para detener
export function detenerCancion() {
  if (sonidoActual) {
    sonidoActual.stop()
    sonidoActual.unload()
    sonidoActual = null
  }
  if (timeoutId) {
    clearTimeout(timeoutId)
    timeoutId = null
  }
}
