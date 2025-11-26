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
  getRanking()
  const nuevoranking = { name, score, date: new Date().toISOString() }
  ranking.push(nuevoranking)
  ranking.sort((a, b) => b.score - a.score)
  if (ranking.length > 10) {
    ranking = ranking.slice(0, 10)
  }
  localStorage.setItem(RANKING_KEY, JSON.stringify(ranking))
}
