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
/* Contenedor principal que pone los elementos lado a lado */
.container {
  display: flex; /* Activa el modo flexible */
  align-items: center; /* Centra verticalmente (GIF y texto alineados al centro) */
  justify-content: center; /* Centra el bloque en la pantalla */
  gap: 40px; /* Espacio entre el GIF y el Texto */
  max-width: 900px; /* Ancho máximo para que no se estire demasiado */
  margin: 50px auto; /* Margen superior/inferior y centrado horizontal */
  padding: 0 20px; /* Un poco de relleno a los lados */
}

.GIF {
  flex: 0 0 auto; /* El GIF no se estira ni se encoge, mantiene su tamaño */
}

/* Estilos del Iframe (El círculo) */
iframe {
  display: block;
  width: 200px; /* Tamaño ajustado un poco más grande para que luzca */
  height: 200px;
  border-radius: 50%; /* 50% asegura que sea un círculo perfecto */
  border: none; /* Quitamos bordes feos si los hubiera */
  object-fit: cover;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* Sombra suave estética */
}

.Texto {
  flex: 1; /* El texto ocupa el espacio restante */
  text-align: left; /* Texto alineado a la izquierda para mejor lectura lateral */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-size: 28px; /* Un poco más grande para destacar */
  font-weight: 700;
  margin-bottom: 15px;
  color: rgba(207, 12, 126, 0.9);
  line-height: 1.2;
}

p {
  font-size: 18px;
  line-height: 1.6;
  color: #333; /* Color de texto base para lectura */
  margin: 0;
  width: 100%; /* Quitamos el 30% fijo, ahora usa el espacio flexible */
}
</style>
