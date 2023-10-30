<template>
  <div class="container">
    <HeaderView />
    <h3>Álbumes de Música de Películas</h3>
    <p>Esta sección presenta información sobre álbumes de música de películas.</p>
    <ul class="album-list">
      <li class="album-item">
        <NuxtLink class="menu-link" to="/albums_index">Álbumes</NuxtLink>
      </li>
      <li class="album-item">
        <NuxtLink class="menu-link" to="/composers_index">Compositores</NuxtLink>
      </li>
      <li class="album-item">
        <NuxtLink class="menu-link" to="/movies_index">Películas</NuxtLink>
      </li>
    </ul>
    <FooterView />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const albums = await $content('albums').fetch();
    return {
      albums
    };
  },
};
</script>

<style scoped>
.project-title {
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
}

h3 {
  margin-top: 15px;
}

.album-list {
  list-style-type: none;
  padding: 0;
}

.album-item {
  margin-top: 10px;
  border: 1px solid #ddd;
  padding: 10px;
}

.album-link {
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  background-color: #3498db;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.album-link:hover {
  background-color: #2980b9;
}
</style>
