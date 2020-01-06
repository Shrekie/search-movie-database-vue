import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "./plugins/vuerouter";

Vue.config.productionTip = false;

import routes from "./routes/search";

// Route init conig
const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount("#app");
