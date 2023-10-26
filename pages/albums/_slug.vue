<script>
export default {
  async asyncData({ $content, params }) {
    const album = await $content('albums', params.slug).fetch();
    const composer = await $content('composers').where({ id: album.composerId }).fetch();
    const movie = await $content('movies').where({ id: album.movieId }).fetch();
    return { album, composer, movie };
  }
};
</script>

<template>
  <div class="container">
    <HeaderView />
    <div class="row">
      <div class="three columns">
        <img class="u-max-full-width" :src="'/images/' + album.image" alt="Portada del álbum">
      </div>
      <div class="six columns">
        <h4>{{ album.title }}</h4>
        Compositor: <NuxtLink :to="'/composers/'+album.composerId">{{ composer[0].name }}</NuxtLink></br>
        Año de lanzamiento: {{ album.release_year }}; Género: {{ album.genres }}; Sello discográfico: {{ album.record_label }}</br>
        Número de pistas: {{ album.tracks }}</br></br>
        <b>Descripción</b></br>
          <nuxt-content :document="album" />
        <p>Película asociada: <NuxtLink :to="'/movies/'+album.movieId">{{ movie[0].title }}</NuxtLink></p>
      </div>
      <div class="two columns"></div>
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

.u-max-full-width {
  max-width: 100%;
  height: auto;
}

/* Agregar otros estilos personalizados aquí */

</style>
