<template>
  <v-app>
    <Header title="SMD" />
    <Body />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Body from "./components/Body";

export default {
  components: {
    Header,
    Body
  }
};
</script>
