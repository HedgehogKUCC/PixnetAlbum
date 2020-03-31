<template>
  <div id="app">
    <PhotoAlbum />
  </div>
</template>

<script>
import PhotoAlbum from './components/PhotoAlbum.vue';

export default {
  name: 'App',
  components: {
    PhotoAlbum,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/all";
</style>
