<script>
import CloudShapeIcon from "../icons/CloudShape.vue";

export default { components: { CloudShapeIcon } };
</script>
<template>
  <!-- Hero Section -->
  <section id="home" class="pt-36 dark:bg-dark">
    <div class="container">
      <div class="flex flex-wrap xl:mx-auto xl:w-10/12">
        <div class="w-full self-center px-4 lg:w-1/2">
          <h1 class="mb-5 text-base font-semibold text-primary md:text-xl">
            Halo Semua 👋, Saya
            <span
              class="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl"
              >Hakim Asrori</span
            >
          </h1>

          <h2 class="mb-5 text-lg font-medium text-secondary">
            Student & Backend Developer
          </h2>

          <p
            class="mb-10 text-justify font-medium leading-relaxed text-secondary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            quibusdam vel cupiditate quo consequuntur assumenda voluptate sit
            quos ipsum! Nam ab repellendus illo voluptas facilis porro ullam
            minus nihil impedit.
          </p>

          <a
            href="#"
            class="text-bold rounded-full bg-primary py-3 px-8 font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
            >Hubungi Saya</a
          >
        </div>
        <div class="w-full self-end px-4 lg:w-1/2">
          <div class="relative mt-10 lg:right-0 lg:mt-0">
            <img
              src="../../assets/images/my.png"
              alt="Hakim Asrori"
              class="relative z-30 mx-auto max-w-full object-fill lg:mr-0"
            />
            <span
              class="absolute bottom-0 left-1/2 top-10 -translate-x-1/2 md:scale-125"
            >
              <CloudShapeIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Hero Section -->
</template>
