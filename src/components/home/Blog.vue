<script>
import Pagination from "../layouts/Pagination.vue";
export default {
  components: { Pagination },
};
</script>
<template>
  <!-- Blog Section -->
  <section id="blog" class="bg-slate-700 pt-36 pb-16 dark:bg-slate-300">
    <div class="container">
      <div class="w-full px-4">
        <div class="mx-auto mb-16 max-w-xl text-center">
          <h4 class="mb-2 text-lg font-semibold uppercase text-primary">
            Blog
          </h4>
          <h2
            class="mb-4 text-3xl font-bold text-white dark:text-dark sm:text-4xl lg:text-5xl"
          >
            Tulisan Terkini
          </h2>
          <p class="text-md font-medium text-white dark:text-dark md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dignissimos nam omnis laborum quia ad sapiente! Recusandae hic
            expedita atque officiis doloremque animi excepturi enim soluta.
            Commodi non eveniet mollitia.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap xl:mx-auto xl:w-10/12">
        <div
          class="w-full p-4 lg:w-1/3 xl:mx-auto"
          v-for="(item, index) in 4"
          :key="index"
        >
          <div class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg">
            <img
              src="https://source.unsplash.com/360x200?programming"
              class="w-full"
            />
            <div class="py-8 px-6">
              <h3>
                <a
                  class="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary"
                  href="#"
                  >Tips Belajar Programming</a
                >
              </h3>
              <p class="mb-6 text-base font-medium text-secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
                aliquam tempora autem!
              </p>
              <router-link
                to="/blog"
                class="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80"
                >Baca Selengkapnya</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <Pagination />
    </div>
  </section>
  <!-- End Blog Section -->
</template>
