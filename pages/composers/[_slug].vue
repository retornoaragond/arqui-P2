<script setup>
const route = useRoute()
const { data: composer, refresh: rComposer } =
  await useFetch(`https://cms-una.000webhostapp.com/api/content/item/Composers/${route.params._slug}`)
rComposer()
const { data: albums, refresh: rAlbum } =
  await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Albums?filter={"composerId._id":"${route.params._slug}"}&fields={"title":true}`)
rAlbum()
const sanitizeHtml = (html) => {
  if (process.client) { // Verifica si se está ejecutando en el cliente
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.innerText;
  } else {
    return html; // En el servidor, simplemente devuelve el HTML sin cambios
  }
};
</script>

<template>
  <div class="container">
    <HeaderView />
    <div class="row">
      <div class="column image-column">
        <img class="composer-image" :src="`https://cms-una.000webhostapp.com/storage/uploads${composer.image.path}`">
      </div>
      <div class="column info-column">
        <h4>{{ composer.name }}</h4>
        <b>Nacionalidad:</b> {{ composer.nationality }};<br> <b>Fecha de nacimiento:</b> {{ composer.birth_date }}<br>
        Géneros musicales: {{ composer.music_genres }}<br><br>
        <b>Biografía</b><br>
        <div v-html="sanitizeHtml(composer.description)"></div>
        <h5>Álbumes</h5>
        <ul class="album-list">
          <li v-for="album in albums" :key="album._id" class="album-item">
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

.composer-image {
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

