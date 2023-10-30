<script setup>
const route = useRoute()
const { data: movie, refresh: rMovie } =
  await useFetch(`https://cms-una.000webhostapp.com/api/content/item/Movies/${route.params._slug}`)
rMovie()
const { data: albums, refresh: rAlbum } =
  await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Albums?filter={"movieId._id":"${route.params._slug}"}&fields={"title":true}`)
rAlbum()
const sanitizeHtml = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.innerText;
};
</script>

<template>
  <div class="container">
    <HeaderView />
    <div class="row">
      <div class="column image-column">
        <img class="movie-image" :src="`https://cms-una.000webhostapp.com/storage/uploads${movie.image.path}`">
      </div>
      <div class="column info-column">
        <h4>{{ movie.title }}</h4>
        <b>Año de lanzamiento:</b> {{ movie.release_year }}; <b>Géneros:</b> {{ movie.genres }}<br><br>
        <b>Sinopsis</b><br>
        <div v-html="sanitizeHtml(movie.description)"></div>
        <h5>Álbumes</h5>
        <ul class="album-list">
          <li v-for="album in albums" :key="album.id" class="album-item">
            <NuxtLink :to="`/albums/` + album._id">{{ album.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <FooterView />
  </div>
</template>

<style scoped>
.project-title {
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
}

h4 {
  margin-top: 15px;
}

.row {
  display: flex;
}

.column {
  flex: 1;
  padding: 20px;
}

.image-column {
  max-width: 400px;
}

.movie-image {
  max-width: 100%;
  height: auto;
  max-height: 400px;
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
