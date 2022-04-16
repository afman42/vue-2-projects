<template>
  <div>
    <template v-if="loading">
      <main>
        <LoadingItem />
      </main>
    </template>
    <template v-if="tours.length === 0">
      <main>
        <div class='title'>
          <h2>no tours left</h2>
          <button class='btn' @click="fetchTours">
            refresh
          </button>
        </div>
      </main>
    </template>
    <main>
      <ToursList :tours="tours" :removeTour="removeTour" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LoadingItem from "./components/LoadingItem.vue";
import ToursList from "./components/ToursList.vue";
const url = "https://course-api.com/react-tours-project";
export default Vue.extend({
  name: "App",
  components: {
    ToursList,
    LoadingItem,
  },
  data() {
    return {
      loading: true as boolean,
      tours: [] as any,
    };
  },
  mounted(){
    this.fetchTours()
  },
  methods: {
    removeTour(id: number) {
      this.tours = this.tours.filter((tour:any) => tour.id !== id);
    },
    async fetchTours() {
      this.loading = true;
      try {
        const response = await fetch(url);
        const tours = await response.json();
        this.loading = false;
        this.tours = tours;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
  },
});
</script>
