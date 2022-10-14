<script>
import Hero from "../components/home/Hero.vue";
import About from "../components/home/About.vue";
import Blog from "../components/home/Blog.vue";
import Contact from "../components/home/Contact.vue";
import Portofolio from "../components/home/Portofolio.vue";
export default { components: { Hero, About, Blog, Contact, Portofolio } };
</script>

<template>
  <div
    id="default-carousel"
    class="relative pt-[4.7rem] dark:bg-slate-800 md:pt-20"
    data-carousel="static"
  >
    <div class="relative h-56 overflow-hidden rounded-lg md:h-[30rem]">
      <div
        class="absolute inset-0 z-20 translate-x-0 transform transition-all duration-700 ease-in-out"
      >
        <span
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-white dark:text-gray-800 sm:text-3xl"
          >First Slide</span
        >
        <img
          src="../../src/assets/images/my.png"
          class="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
          alt="..."
        />
      </div>
    </div>
  </div>

  <section
    class="mx-auto flex w-full justify-center pt-5 pb-28 dark:bg-slate-800 xl:mx-auto"
  >
    <div class="max-w-3xl">
      <div class="max-w-8xl mx-auto">
        <div class="flex pt-8 pb-10 lg:px-4">
          <router-link
            class="group flex text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            to="/"
            ><svg
              viewBox="0 -9 3 24"
              class="mr-3 h-6 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
            >
              <path
                d="M3 0L0 3L3 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg
            >Go back</router-link
          >
        </div>
      </div>
      <div class="container">
        <article class="relative mb-16 pt-10">
          <h1
            class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl"
          >
            Hello World
          </h1>
          <div class="text-sm leading-6">
            <dl>
              <dt class="sr-only">Date</dt>
              <dd
                class="absolute inset-x-0 top-0 text-slate-700 dark:text-slate-400"
              >
                <time datetime="2022-09-09T16:24:00.000Z"
                  >Friday, September 9, 2022</time
                >
              </dd>
            </dl>
          </div>

          <div class="mt-6">
            <ul class="-mx-5 -mt-6 flex flex-wrap text-sm leading-6">
              <li
                class="mt-6 flex items-center whitespace-nowrap px-5 font-medium"
              >
                <img
                  src="../assets/images/my.png"
                  alt="Hakim Asrori"
                  class="mr-3 h-9 w-9 rounded-full bg-slate-50 dark:bg-slate-800"
                />
                <div class="text-sm leading-4">
                  <div class="text-slate-900 dark:text-slate-200">
                    Hakim Asrori
                  </div>
                  <div class="mt-1">
                    <a
                      href=""
                      class="text-sky-500 hover:text-sky-600 dark:text-sky-400"
                      >Hakim Asrori</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="prose prose-slate dark:prose-dark mt-12 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            rerum a delectus, cumque, nulla autem error nesciunt cum id aliquid
            eos consequuntur voluptatem, suscipit dignissimos repellendus eum
            quidem. Omnis error officia odit, quis iste ratione nulla delectus
            cupiditate deleniti a beatae ex voluptatem numquam praesentium nisi
            labore, reiciendis quisquam sed quam tempora repellat consectetur.
            Autem ad cupiditate esse! Aspernatur, iure? Molestias, quam odit
            eligendi ratione commodi tempore minima possimus reiciendis eaque
            iste eius quibusdam corrupti nihil quia ab nisi quisquam. Rem,
            accusamus. Iusto non dignissimos cumque maiores quae corporis
            voluptatum, ea facere suscipit expedita quod aspernatur culpa
            possimus temporibus commodi quos saepe voluptates officia quasi.
            Rerum repellendus soluta veniam odit saepe magni aperiam quidem
            natus ducimus a doloremque atque, id ea quibusdam aliquid culpa
            voluptatibus obcaecati beatae ad. Quis maxime sed aliquam vitae,
            nesciunt doloribus ducimus error maiores qui magni voluptates veniam
            corrupti ipsa commodi tempora hic tenetur at nulla. Cum illum facere
            sit, sint doloremque ad nisi voluptatum incidunt porro quod
            molestiae vero in fuga quisquam, quas est sed, expedita veniam
            quibusdam. Autem velit earum harum exercitationem soluta
            consequuntur, rem iure corporis veniam repellat sapiente officia
            provident dolor nihil. Iusto accusantium dignissimos necessitatibus
            error cumque recusandae ratione ut eaque minima numquam, quod
            reprehenderit nulla pariatur, deserunt suscipit sunt fuga delectus
            ipsa aperiam, similique molestias! Fugiat nesciunt deleniti, porro
            dolore magni, asperiores rem unde eius ex, quos neque. Minima eius
            commodi voluptatem expedita vero dicta harum natus ducimus
            doloremque similique vel tempora mollitia fugit sunt provident
            obcaecati neque esse reprehenderit, aspernatur ad? Nostrum, ad ea
            reprehenderit, quas temporibus impedit exercitationem non est quo
            consequatur soluta rem! Id, maxime! Quidem vero repellendus libero,
            veritatis, earum tenetur, quibusdam quo commodi eveniet ipsum
            dolores voluptates. Dignissimos, explicabo! Nihil ducimus
            perspiciatis minima aliquam dolore rem repudiandae quod temporibus
            voluptate molestias, tempore itaque culpa nemo cupiditate voluptatem
            consectetur odio iste aperiam! Ex id consectetur perferendis
            obcaecati illo rerum? Aliquid nostrum laudantium perferendis
            corrupti sequi quam consequuntur quisquam qui temporibus itaque,
            laboriosam tempora enim, voluptatem eius assumenda minus. Sint amet
            ipsa inventore esse id necessitatibus iste magnam quas. Vero nostrum
            sed repellat placeat doloremque iusto quo, numquam doloribus est
            vitae delectus ut optio consequatur deleniti similique ipsum aliquid
            unde dolorum? Dolor, inventore assumenda repellendus quod magni
            fuga, error illo molestiae, dolore ut illum exercitationem quibusdam
            temporibus. Commodi doloremque quisquam aperiam, tempora magni quae
            vero, consequatur accusamus eaque aliquid ut inventore, architecto
            minus. Consectetur asperiores laudantium voluptatum, itaque aliquam,
            aperiam quam, culpa commodi amet eveniet error pariatur alias libero
            magni? Minima aperiam eaque voluptates necessitatibus nisi veniam
            sunt libero id deserunt facilis odit cum, ea in nihil magnam
            incidunt aut quidem iure ducimus dignissimos tempore deleniti
            molestias error sit. Provident itaque fuga reprehenderit atque
            dolores voluptas omnis enim mollitia totam ipsum quo iusto soluta
            est molestiae, nostrum nam neque numquam nemo repudiandae in! Non
            accusantium nobis dicta aperiam qui aspernatur repellendus,
            voluptatibus mollitia vitae velit dignissimos eius nam, inventore
            est et quisquam ad eum itaque explicabo sit at nemo sapiente dolore
            perferendis. At, similique. Ut, ab vel.
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style></style>
