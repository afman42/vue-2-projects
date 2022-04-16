<template>
  <div>
    <section v-if="loading" class="section loading">
      <h1>Loading...</h1>
    </section>
    <section class="section">
      <div class="title">
        <h2>experience</h2>
        <div class="underline"></div>
      </div>
      <div class="jobs-center">
        <!-- {/* btn container */} -->
        <div className="btn-container">
          <!-- {jobs.map((item, index) => { -->
          <button
            v-for="(item, index) in jobs"
            :key="item.id"
            @click="value = index"
            class="job-btn"
            :class="{ 'active-btn': index === value }"
          >
            {{ item.company }}
          </button>
        </div>
        <article class="job-info">
          <h3>{{ jobs[value].title }}</h3>
          <h4>{{ jobs[value].company }}</h4>
          <p class="job-date">{{ jobs[value].dates }}</p>
          <div
            v-for="(duty, index) in jobs[value].duties"
            :key="index"
            class="job-desc"
          >
            <font-awesome-icon icon="angle-double-right" class="job-icon" />
            <p>{{ duty }}</p>
          </div>
        </article>
      </div>
      <button type="button" class="btn">more info</button>
    </section>
  </div>
</template>

<script>
const url = "https://course-api.com/react-tabs-project";
export default {
  name: "App",
  data() {
    return {
      loading: true,
      jobs: [],
      value: 0,
    };
  },
  created() {
      this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      const reponse = await fetch(url);
      const newJobs = await reponse.json();
      this.jobs = newJobs;
      this.loading = false;
    },
  },
};
</script>

