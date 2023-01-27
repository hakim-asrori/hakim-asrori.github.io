<script>
import moment from "moment";
import axios from "axios";

export default {
  data() {
    return {
      skills: [],
      isLoading: false,
    };
  },
  mounted() {
    this.getSkills();
  },
  methods: {
    getSkills() {
      this.isLoading = true;
      axios
        .get("/assets/data/skills.json")
        .then((response) => {
          this.isLoading = false;
          this.skills = response.data.map((skill) => {
            return {
              ...skill,
              experience: moment(skill.experience, "YYYYMMDD").fromNow(),
            };
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {},
};
</script>
<template>
  <!-- Skill Section -->
  <section id="skill" class="bg-slate-700 pt-36 pb-16 dark:bg-slate-300">
    <div class="container">
      <div class="w-full px-4">
        <div class="mx-auto mb-16 max-w-xl text-center">
          <h4 class="mb-2 text-lg font-semibold uppercase text-primary">
            Skill
          </h4>
          <h2
            class="mb-4 text-3xl font-bold text-white dark:text-dark sm:text-4xl lg:text-5xl"
          >
            My Skill From Old To Now
          </h2>
        </div>
      </div>

      <div class="flex flex-wrap xl:mx-auto xl:w-10/12">
        <div
          class="xs:w-1/2 w-full p-4 hover:shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/4 xl:mx-auto"
          v-for="(skill, index) in skills"
          :key="index"
        >
          <div
            class="mb-1 h-full overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl"
            :class="skill.bgcolor"
          >
            <center class="pt-6">
              <div v-html="skill.icon"></div>
            </center>
            <div class="px-6 pt-8 text-center">
              <h3>
                <p
                  class="mb-3 block truncate text-xl font-semibold"
                  :class="skill.color"
                  v-html="skill.title"
                ></p>
              </h3>
              <p
                class="mb-6 text-base font-medium text-secondary"
                v-html="skill.experience"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Skill Section -->
</template>
