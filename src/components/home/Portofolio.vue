<script>
import Pagination from "../layouts/Pagination.vue";
import Loader from "../Loader.vue";

export default {
  data() {
    return {
      projects: [],
      pagination: {},

      isLoading: false,
    };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      this.projects = [
        {
          projectName: "Rumah Tahfidz Qur'an",
          projectImage: "/src/assets/images/RTQ.png",
        },
        {
          projectName: "Roketin Support System",
          projectImage: "/src/assets/images/RSS.png",
        },
        {
          projectName: "Administrasi Griya Jambudipa",
          projectImage: "/src/assets/images/AGJ.png",
        },
      ];
    },
  },
  components: { Pagination, Loader },
};
</script>
<template>
  <!-- Portofolio Section -->
  <section id="portofolio" class="bg-slate-100 pt-36 pb-16 dark:bg-slate-800">
    <div class="container">
      <div class="w-full px-4">
        <div class="mx-auto mb-16 max-w-xl text-center">
          <h4 class="mb-2 text-lg font-semibold uppercase text-primary">
            PORTFOLIO
          </h4>
          <h2
            class="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl"
          >
            Projects
          </h2>
        </div>
      </div>

      <div
        class="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12"
      >
        <div
          class="mx-5 mb-12 rounded-lg px-4 shadow-lg hover:shadow-xl md:w-96"
          v-for="(project, index) in projects"
          :key="index"
        >
          <div class="mt-2 overflow-hidden rounded-md shadow-md">
            <img :src="project.projectImage" alt="Siakad" class="w-full" />
          </div>
          <h3
            class="mt-5 mb-3 text-center text-xl font-semibold text-dark dark:text-white"
            v-html="project.projectName"
          ></h3>
        </div>
      </div>
    </div>
  </section>
  <!-- End Portofolio Section -->
</template>
