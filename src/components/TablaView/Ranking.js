let ranking = []
const RANKING_KEY = 'rankingJuego'

export function getRanking() {
  const almacenarRanking = localStorage.getItem(RANKING_KEY)
  if (almacenarRanking) {
    ranking = JSON.parse(almacenarRanking)
  } else {
    ranking = []
  }
  return ranking
}

export function saveScore(name, score) {
  // Aseguramos tener la lista actualizada antes de agregar
  getRanking()

  // CORRECCIÓN: Usamos las claves que espera TablaView (nombre, puntos, fecha)
  const nuevoranking = {
    nombre: name,
    puntos: score,
    fecha: new Date().toLocaleDateString(), // Formato de fecha legible
  }

  ranking.push(nuevoranking)

  // Ordenamos por puntos de mayor a menor
  ranking.sort((a, b) => b.puntos - a.puntos)

  if (ranking.length > 10) {
    ranking = ranking.slice(0, 10)
  }

  localStorage.setItem(RANKING_KEY, JSON.stringify(ranking))
}
