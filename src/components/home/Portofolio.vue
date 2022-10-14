<script>
import Pagination from "../layouts/Pagination.vue";
export default { components: { Pagination } };
</script>
<template>
  <!-- Portofolio Section -->
  <section id="portofolio" class="bg-slate-100 pt-36 pb-16 dark:bg-slate-800">
    <div class="container">
      <div class="w-full px-4">
        <div class="mx-auto mb-16 max-w-xl text-center">
          <h4 class="mb-2 text-lg font-semibold uppercase text-primary">
            Portofolio
          </h4>
          <h2
            class="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl"
          >
            Project Terbaru
          </h2>
          <p class="text-md font-medium text-secondary md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            reprehenderit excepturi cupiditate eligendi ratione reiciendis
            expedita nulla eos magnam quasi. Doloribus soluta saepe repudiandae
            aperiam quidem tempora id dolor debitis.
          </p>
        </div>
      </div>

      <div
        class="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12"
      >
        <div
          class="mb-12 rounded-lg px-4 shadow-lg md:w-1/3"
          v-for="(item, index) in 4"
          :key="index"
        >
          <div class="overflow-hidden rounded-md shadow-md">
            <img
              src="../../assets/images/siakad.jpg"
              alt="Siakad"
              class="w-full"
            />
          </div>
          <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
            Siakad Project
          </h3>
          <p class="mb-3 text-base font-medium text-secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, esse
            temporibus numquam atque vel magni deserunt ea maxime quae saepe
            dolore voluptatibus libero dolor quas, veritatis eveniet vero cumque
            unde?
          </p>
        </div>
      </div>

      <Pagination />
    </div>
  </section>
  <!-- End Portofolio Section -->
</template>
