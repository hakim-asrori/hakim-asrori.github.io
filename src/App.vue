<script>
import Header from "./components/layouts/Header.vue";
import Footer from "./components/layouts/Footer.vue";
import BackToTop from "./components/layouts/BackToTop.vue";
export default { components: { Header, Footer, BackToTop } };
</script>

<template>
  <Header />

  <router-view></router-view>

  <BackToTop />

  <Footer />
</template>

<style></style>
