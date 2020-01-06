<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">{{title}}</div>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style>
</style>