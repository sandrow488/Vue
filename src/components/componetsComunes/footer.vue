<template>
  <footer class="footer-musical">
    <div class="contenido-footer">
      <div class="columna">
        <h3>🎵 Desafío Musical</h3>
        <p>Demuestra lo que sabes y sube al ranking.</p>
      </div>

      <div class="columna">
        <h4>Explorar</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Juego</a></li>
          <li><a href="#">Ranking</a></li>
        </ul>
      </div>

      <div class="columna">
        <h4>Síguenos</h4>
        <div class="redes">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Discord</a>
        </div>
      </div>
    </div>

    <div class="barra-inferior">
      <p>2025 Desafío Musical. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
/* Contenedor principal */
.footer-musical {
  background-color: #1a1a2e; /* Un azul muy oscuro, casi negro */
  color: #ffffff;
  padding: 40px 20px 20px;
  margin-top: auto; /* Empuja el footer al fondo si usas flex en el padre */
  font-family: sans-serif;
}

.contenido-footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  gap: 30px;
}

/* Columnas */
.columna {
  flex: 1;
  min-width: 200px;
}

.columna h3 {
  margin-top: 0;
  color: #e0238b; /* Tu color rosado de marca */
}

.columna h4 {
  margin-bottom: 15px;
  border-bottom: 2px solid #6b11cb; /* Tu color morado de marca */
  display: inline-block;
  padding-bottom: 5px;
}

.columna p {
  font-size: 0.9rem;
  opacity: 0.8;
  line-height: 1.5;
}

/* Listas y Enlaces */
ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #cccccc;
  transition: color 0.3s ease;
}

/* Efecto Hover: Se ilumina con tu color principal */
a:hover {
  color: #e0238b;
  text-shadow: 0 0 8px rgba(224, 35, 139, 0.4);
}

.redes {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Barra inferior de copyright */
.barra-inferior {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.8rem;
  color: #888;
}
</style>
