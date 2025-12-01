<template>
  <div class="container">
    <div class="GIF">
      <iframe
        src="https://gifer.com/embed/1kME"
        width="480"
        height="477.857"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    <div class="Texto">
      <h2>¿Cuánto sabes de música?</h2>
      <p>
        Pon a prueba tu conocimiento musical. Escucha fragmentos de 5 segundos y adivina la canción
        correcta entre 4 opciones. ¡Compite por las mejores puntuaciones!
      </p>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 40px; 
  max-width: 900px;
  margin: 50px auto; 
  padding: 0 20px;
}

.GIF {
  flex: 0 0 auto;
}


iframe {
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: none;
  object-fit: cover;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.Texto {
  flex: 1; 
  text-align: left; 
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
  color: rgba(207, 12, 126, 0.9);
  line-height: 1.2;
}

p {
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  margin: 0;
  width: 100%; 
}
</style>
