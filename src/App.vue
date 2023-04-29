<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <body class="bg-neutral-100">
    <Header />
    <router-view></router-view>
    <Footer />
  </body>
</template>

<style scoped></style>
