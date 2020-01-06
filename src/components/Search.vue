<template>
  <v-text-field hide-details single-line v-model="searchValue" @input="valueChange">></v-text-field>
</template>

<script>
export default {
  data: () => ({
    searchValue: "",
    searchTimeout: null
  }),

  methods: {
    pushRouterPath() {
      if (this.searchValue.length > 0)
        this.$router.push({ path: `/search/${this.searchValue}` });
      else this.$router.push({ path: `/` });
    },

    setSearchTimeout() {
      this.searchTimeout = setTimeout(() => {
        this.pushRouterPath();
        this.searchTimeout = null;
      }, 1000);
    },

    resetSearchTimeout() {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = null;
      this.setSearchTimeout();
    },

    valueChange() {
      if (this.searchTimeout == null) this.setSearchTimeout();
      else this.resetSearchTimeout();
    }
  }
};
</script>

<style>
</style>