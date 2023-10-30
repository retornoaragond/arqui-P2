
<script setup>
const { data: composers } =
  await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Composers?fields={"name":true}`)
</script>

<template>
  <div class="container">
    <HeaderView />
    <h3>Compositores</h3>
    <p>Esta sección presenta información sobre composeres.</p>
    <ul class="composer-list">
      <li v-for="composer in composers" :key="composer._id" class="composer-item">
        <NuxtLink :to="`/composers/` + composer._id" class="composer-link">{{ composer.name }}</NuxtLink>
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

.composer-list {
  list-style-type: none;
  padding: 0;
}

.composer-item {
  margin-top: 10px;
  border: 1px solid #ddd;
  padding: 10px;
}

.composer-link {
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  background-color: #3498db;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.composer-link:hover {
  background-color: #2980b9;
}
</style>
