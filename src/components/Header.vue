<template>
  <div>
    <v-toolbar>
      <v-toolbar-title class="pa-5">{{title}}:</v-toolbar-title>
      <Search />
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
import Search from "./Search";

export default {
  components: {
    Search
  },
  props: {
    title: String
  }
};
</script>

<style>
</style>