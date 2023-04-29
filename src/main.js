import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./style.css";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Home from "./views/Home.vue";
import Privacy from "./views/Privacy.vue";
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
      name: "services",
      component: Services,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/privacy",
      name: "privacy",
      component: Privacy,
    },
  ],
});
createApp(App).use(router).mount("#app");
