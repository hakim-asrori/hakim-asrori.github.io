<script>
import Cookies from "js-cookie";

export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    hamburgerAction() {
      const hamburger = document.getElementById("hamburger");
      const navMenu = document.getElementById("nav-menu");

      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    },
    darkToggle() {
      const darkToggle = document.querySelector("#dark-toggle");
      const html = document.querySelector("html");

      if (darkToggle.checked) {
        html.classList.add("dark");
        Cookies.set("theme", "dark");
      } else {
        html.classList.remove("dark");
        Cookies.set("theme", "light");
      }
    },
    handleScroll() {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;
      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    },
  },
};
</script>

<template>
  <!-- Header -->
  <header
    class="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent"
  >
    <div class="container">
      <div class="relative flex items-center justify-between">
        <div class="px-4">
          <a
            href="/#home"
            v-smooth-scroll
            class="block py-6 text-lg font-bold text-primary"
            >Hakim Asrori</a
          >
        </div>
        <div class="flex items-center px-4">
          <button
            id="hamburger"
            name="hamburger"
            class="absolute right-4 block lg:hidden"
            @click="hamburgerAction"
          >
            <span
              class="hamburger-line origin-top-left transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"
            ></span>
          </button>

          <nav
            id="nav-menu"
            class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
          >
            <ul class="block lg:flex">
              <li class="group">
                <a
                  href="/#home"
                  v-smooth-scroll
                  class="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >Home</a
                >
              </li>
              <li class="group">
                <a
                  href="/#about"
                  v-smooth-scroll
                  class="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >About Me</a
                >
              </li>
              <li class="group">
                <a
                  href="/#portofolio"
                  v-smooth-scroll
                  class="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >Portfolio</a
                >
              </li>
              <li class="group">
                <a
                  href="/#blog"
                  v-smooth-scroll
                  class="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >Blog</a
                >
              </li>
              <li class="group">
                <a
                  href="/#contact"
                  v-smooth-scroll
                  class="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                  >Contact Me</a
                >
              </li>
              <li class="mt-3 flex items-center pl-8 lg:mt-0">
                <div class="flex">
                  <span class="mr-3 text-sm text-secondary dark:text-white"
                    >Light</span
                  >
                  <input
                    type="checkbox"
                    class="hidden"
                    id="dark-toggle"
                    @click="darkToggle()"
                  />
                  <label for="dark-toggle">
                    <div
                      class="flex h-5 w-9 cursor-pointer items-center rounded-full bg-secondary p-1 dark:bg-white"
                    >
                      <div
                        class="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out dark:bg-slate-700"
                      ></div>
                    </div>
                  </label>
                  <span class="ml-3 text-sm text-secondary dark:text-white"
                    >Dark</span
                  >
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- End Header -->
</template>

<style></style>
