<template>
  <div>
    <v-toolbar>
      <v-btn class="ma-5" text small to="/">
        <v-toolbar-title>{{title}}:</v-toolbar-title>
      </v-btn>
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