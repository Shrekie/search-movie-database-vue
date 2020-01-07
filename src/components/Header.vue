<template>
  <div>
    <v-list-item class="ma-6 mb-2">
      <v-list-item-content>
        <v-btn text small to="/" class="pa-12">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-btn>
      </v-list-item-content>
    </v-list-item>

    <v-list-item class="ma-6 mt-0 mb-2" two-line>
      <v-list-item-content>
        <Search />
      </v-list-item-content>
    </v-list-item>

    <v-spacer></v-spacer>
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