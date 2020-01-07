<template>
  <div>
    <div v-for="result in results" :key="result.id">
      <MovieCard :videoData="result" />
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard";

export default {
  components: {
    MovieCard
  },

  data: () => ({
    results: [],
    hostnameEndpoint: "http://127.0.0.1:3000/search/"
  }),

  props: {
    searchValue: String
  },

  methods: {
    fetchSearchValue() {
      fetch(this.hostnameEndpoint + this.searchValue)
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          this.results = myJson;
        });
    }
  },

  watch: {
    searchValue: {
      immediate: true,
      handler() {
        this.fetchSearchValue();
      }
    }
  }
};
</script>

<style>
</style>