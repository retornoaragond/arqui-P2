<template>
  <div>
    <h1 class="project-title">Proyecto 1</h1>
    <div class="row" style="margin-top: 15px">
      <NuxtLink class="menu-link" to="/">Inicio</NuxtLink>
      <NuxtLink class="menu-link" to="/albums_index">Álbumes</NuxtLink>
      <NuxtLink class="menu-link" to="/composers_index">Compositores</NuxtLink>
      <NuxtLink class="menu-link" to="/movies_index">Películas</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.project-title {
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
}

.menu-link {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  text-decoration: none;
  background-color: #3498db;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.menu-link:hover {
  background-color: #2980b9;
}
</style>