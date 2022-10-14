<script>
import Hero from "../components/home/Hero.vue";
import About from "../components/home/About.vue";
import Blog from "../components/home/Blog.vue";
import Contact from "../components/home/Contact.vue";
import Portofolio from "../components/home/Portofolio.vue";
export default { components: { Hero, About, Blog, Contact, Portofolio } };
</script>

<template>
  <Hero />
  <About />
  <Portofolio />
  <Blog />
  <Contact />
</template>

<style></style>
