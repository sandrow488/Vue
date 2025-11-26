import { Howl } from 'howler'

let sonidoActual = null
let timeoutId = null

export function reproducirCancion(ruta) {
  detenerCancion()

  const rutaFinal = ruta.startsWith('/') ? ruta : `/${ruta}`

  sonidoActual = new Howl({
    src: [rutaFinal],
    html5: true,
    volume: 1.0,
    onloaderror: (id, err) => {
      console.error('Error cargando audio:', err, rutaFinal)
    },
    onload: function () {
      const duracion = this.duration()
      const maxInicio = Math.max(0, duracion - 5)
      const inicioRandom = Math.random() * maxInicio
      this.seek(inicioRandom)
    },
  })

  sonidoActual.play()

  timeoutId = setTimeout(() => {
    detenerCancion()
  }, 5000)
}

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
