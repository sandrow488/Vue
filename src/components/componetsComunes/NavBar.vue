<template>
  <nav class="navbar">
    <div>
      <img src="/Imagenes/Music_logo.png" alt="Logo" class="logo" />
      <router-link to="/" class="app-title">Concurso Musical</router-link>
    </div>
    <div class="navbar-brand">
      <router-link to="/">Home</router-link>
      <router-link to="/juego">Juego</router-link>
      <router-link to="/tabla">Tabla</router-link>
    </div>
  </nav>
</template>
<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 20px;
}
.navbar-brand a {
  color: rgb(0, 0, 0);
  margin-left: 15px;
  text-decoration: none;
}
.navbar-brand a:hover {
  text-decoration: underline;
}
.logo {
  height: 40px;
  margin-right: 10px;
}
.app-title {
  color: linear-gradient(20 deg, #6a11cb, #e0238c, #fc880f);
  font-size: 24px;
  text-decoration: none;
}
.app-title:hover {
  text-decoration: underline;
}
img {
  vertical-align: middle;
  width: auto;
}
</style>
