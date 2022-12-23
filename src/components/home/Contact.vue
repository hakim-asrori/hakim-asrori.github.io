<script></script>
<template>
  <!-- Contact Section -->
  <section id="contact" class="pt-36 pb-32 dark:bg-slate-800">
    <div class="container">
      <div class="w-full px-4">
        <div class="mx-auto mb-16 max-w-xl text-center">
          <h4 class="mb-2 text-lg font-semibold uppercase text-primary">
            Kontak Saya
          </h4>
          <h2
            class="mb-4 text-3xl font-bold dark:text-white sm:text-4xl lg:text-5xl"
          >
            Hubungi Saya
          </h2>
          <p class="text-md font-medium dark:text-white md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, nobis.
          </p>
        </div>
      </div>

      <form class="w-full lg:mx-auto lg:w-2/4" @submit.prevent="handleContact">
        <div class="mb-8 w-full px-4">
          <label for="name" class="text-base font-bold dark:text-white"
            >Name</label
          >
          <input
            type="text"
            id="name"
            class="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            v-model="name"
          />
          <span
            v-if="errors.name"
            v-for="(error, index) in errors.name"
            :key="index"
            class="text-sm text-red-500"
          >
            {{ error }} <br />
          </span>
        </div>
        <div class="mb-8 w-full px-4">
          <label for="name" class="text-base font-bold dark:text-white"
            >Email</label
          >
          <input
            type="email"
            id="name"
            class="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            v-model="email"
          />
          <span
            v-if="errors.email"
            v-for="(error, index) in errors.email"
            :key="index"
            class="text-sm text-red-500"
          >
            {{ error }} <br />
          </span>
        </div>
        <div class="mb-8 w-full px-4">
          <label for="message" class="text-base font-bold dark:text-white"
            >Pesan</label
          >
          <textarea
            v-model="message"
            id="name"
            class="h-32 w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          ></textarea>
          <span
            v-if="errors.message"
            v-for="(error, index) in errors.message"
            :key="index"
            class="text-sm text-red-500"
          >
            {{ error }} <br />
          </span>
        </div>
        <div class="w-full px-4">
          <button
            class="w-full rounded-lg bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
            :class="{ 'cursor-no-drop': isDisabled }"
            :disabled="isDisabled"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </section>
  <!-- End Contact Section -->
  <div
    class="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-50"
    v-if="showModal"
  >
    <div class="mt-28">
      <div
        class="relative mx-auto my-0 max-w-xl overflow-hidden rounded-lg bg-white shadow-lg"
      >
        <button
          class="btn btn-red absolute top-0 right-0 m-4"
          @click="showModal = false"
        >
          &times;
        </button>
        <div class="p-8" v-html="messages"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      messages: "",

      isDisabled: false,

      errors: {},

      showModal: false,
    };
  },
  methods: {
    handleContact() {
      this.isDisabled = true;
      this.showModal = true;
      this.messages = "Mohon tunggu sebentar...";

      this.$store
        .dispatch("postData", [
          "contact",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          },
        ])
        .then((response) => {
          this.isDisabled = false;

          this.messages = "Pesan berhasil dikirim!";

          setTimeout(() => {
            this.name = "";
            this.email = "";
            this.message = "";

            this.showModal = false;
            this.errors = {};
          }, 1000);
        })
        .catch((errors) => {
          this.isDisabled = false;
          this.errors = errors.response.data.errors;
        });
    },
  },
};
</script>
