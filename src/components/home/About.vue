<script>
import InstagramIcon from "../icons/Instagram.vue";
import LinkedInIcon from "../icons/LinkedIn.vue";

export default {
  name: "About",
  components: { InstagramIcon, LinkedInIcon },
};
</script>
<template>
  <!-- About Section -->
  <section id="about" class="pt-32 pb-32 dark:bg-dark">
    <div class="container">
      <div class="flex flex-wrap xl:mx-auto xl:w-10/12">
        <div class="mb-10 w-full px-4 lg:w-1/2">
          <h4 class="mb-3 text-lg font-bold uppercase text-primary">
            Tentang Saya
          </h4>
          <h2
            class="mb-3 max-w-md text-3xl font-bold text-dark dark:text-white lg:text-4xl"
          >
            Backend Engineer
          </h2>
          <p
            class="max-w-xl text-justify text-base font-medium text-secondary lg:text-lg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            obcaecati explicabo impedit recusandae tempore repellendus ipsam
            placeat a quae facere delectus architecto at exercitationem ab neque
            in, dignissimos doloremque voluptatum?
          </p>
        </div>
        <div class="w-full px-4 lg:lg:w-1/2">
          <h3
            class="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-11 lg:text-3xl"
          >
            Mari Berteman
          </h3>
          <p
            class="mb-6 text-justify text-base font-medium text-secondary lg:text-lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quas
            repellendus officiis nesciunt eos, fuga, a nostrum in optio nulla
            veritatis odio neque facilis reiciendis ipsam incidunt aliquam sit
            accusamus.
          </p>
          <div class="flex items-center">
            <!-- Instagram -->
            <a
              href=""
              target="_blank"
              class="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <InstagramIcon />
            </a>
            <!-- End Instagram -->

            <!-- LinkedIn -->
            <a
              href=""
              target="_blank"
              class="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <LinkedInIcon />
            </a>
            <!-- End LinkedIn -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Section -->
</template>
