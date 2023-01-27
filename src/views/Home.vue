<script>
import Hero from "../components/home/Hero.vue";
import About from "../components/home/About.vue";
import Skill from "../components/home/Skill.vue";
import Contact from "../components/home/Contact.vue";
import Portofolio from "../components/home/Portofolio.vue";
export default { components: { Hero, About, Skill, Contact, Portofolio } };
</script>

<template>
  <Hero />
  <Portofolio />
  <Skill />
  <Contact />
</template>

<style></style>
