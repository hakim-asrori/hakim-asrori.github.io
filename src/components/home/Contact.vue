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

      <form class="w-full lg:mx-auto lg:w-2/4">
        <div class="mb-8 w-full px-4">
          <label for="name" class="text-base font-bold dark:text-white"
            >Name</label
          >
          <input
            type="text"
            id="name"
            class="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div class="mb-8 w-full px-4">
          <label for="name" class="text-base font-bold dark:text-white"
            >Email</label
          >
          <input
            type="email"
            id="name"
            class="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div class="mb-8 w-full px-4">
          <label for="message" class="text-base font-bold dark:text-white"
            >Pesan</label
          >
          <textarea
            id="name"
            class="h-32 w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          ></textarea>
        </div>
        <div class="w-full px-4">
          <button
            class="w-full rounded-lg bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  </section>
  <!-- End Contact Section -->
</template>
