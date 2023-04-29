import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./style.css";
import About from "./views/About.vue";
import Home from "./views/Home.vue";
import Products from "./views/Products.vue";
import Services from "./views/Services.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/services",
      name: "Services",
      component: Services,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});
createApp(App).use(router).mount("#app");
