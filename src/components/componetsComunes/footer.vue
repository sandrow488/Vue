<template>
  <footer class="footer-musical">
    <div class="contenido-footer">
      <div class="columna">
        <h3>Concursillo Musical </h3>
        <p>Demuestra lo que sabes y sube al ranking.</p>
      </div>

      <div class="columna">
        <h4>Explorar</h4>
        <ul>
          <li><router-link to= "/">Home</router-link></li>
          <li><router-link to= "/juego">Juego</router-link></li>  
          <li><router-link to= "/tabla">Ranking</router-link></li>
        </ul>
      </div>

    </div>

    <div class="barra-inferior">
      <p>2025 Desafío Musical. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>

.footer-musical {
  background-color: #1a1a2e;
  color: #ffffff;
  padding: 40px 20px 20px;
  margin-top: auto; 
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

.columna {
  flex: 1;
  min-width: 200px;
}

.columna h3 {
  margin-top: 0;
  color: #e0238b; 
}
.columna h4 {
  margin-bottom: 15px;
  border-bottom: 2px solid #6b11cb;
  display: inline-block;
  padding-bottom: 5px;
}

.columna p {
  font-size: 0.9rem;
  opacity: 0.8;
  line-height: 1.5;
}

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


a:hover {
  color: #e0238b;
  text-shadow: 0 0 8px rgba(224, 35, 139, 0.4);
}

.redes {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


.barra-inferior {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.8rem;
  color: #888;
}
</style>
