<template>
  <div>
    <v-toolbar>
      <v-toolbar-title class="pa-5">{{title}}:</v-toolbar-title>
      <v-text-field hide-details single-line></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
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