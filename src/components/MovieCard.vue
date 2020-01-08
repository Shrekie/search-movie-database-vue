<template>
  <v-card max-width="400" class="mx-auto mb-5">
    <v-img height="200px" :src="'https://image.tmdb.org/t/p/w500/' + videoData.poster_path"></v-img>

    <v-card-title v-text="videoData.title"></v-card-title>

    <v-card-subtitle v-text="videoData.overview"></v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    videoData: Object
  }
};
</script>

<style>
</style>