<script setup>
  const { data: albums } = 
    await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Albums?fields={"title":true}`)
</script>

<template>
  <div class="container">
    <HeaderView />
    <h3>Información de Álbumes</h3>
    <p>Esta sección presenta información sobre álbumes.</p>
    <ul class="album-list">
      <li v-for="album in albums" :key="album._id" class="album-item">
        <NuxtLink :to="`/albums/`+ album._id" class="album-link">{{ album.title }}</NuxtLink>
      </li>
    </ul>
    <FooterView />
  </div>
</template>

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
