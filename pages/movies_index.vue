<template>
  <div class="container">
    <HeaderView />
    <h3>Películas</h3>
    <p>Esta sección presenta información sobre películas.</p>
    <ul class="movie-list">
      <li v-for="movie in movies" :key="movie.id" class="movie-item">
        <NuxtLink :to="{ name: 'movies-slug', params: { slug: movie.slug } }" class="movie-link">{{ movie.title }}</NuxtLink>
      </li>
    </ul>
    <FooterView />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    // Reemplaza 'movies' con el nombre de tu contenido de películas
    const movies = await $content('movies').fetch();
    return { movies };
  }
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

.movie-list {
  list-style-type: none;
  padding: 0;
}

.movie-item {
  margin-top: 10px;
  border: 1px solid #ddd;
  padding: 10px;
}

.movie-link {
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  background-color: #3498db;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.movie-link:hover {
  background-color: #2980b9;
}
</style>
