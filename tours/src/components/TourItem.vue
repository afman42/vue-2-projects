<template>
  <div>
    <article class="single-tour">
      <img :src="tour.image" alt="{name}" />
      <footer>
        <div class="tour-info">
          <h4>{{ tour.name }}</h4>
          <h4 class="tour-price">${{ tour.price }}</h4>
        </div>
        <p>
          <!-- {{ readMore ? tour.info : `${tour.info.substring(0, 200)}...`}} -->
          <template v-if="readMore">
            {{ tour.info }}
          </template>
          <template v-else>
            {{ `${tour.info.substring(0, 200)}...` }}
          </template>
          <button @click="setReadMore">
            {{ readMore ? "show less" : "  read more" }}
          </button>
        </p>
        <button class="delete-btn" @click="removeTour(tour.id)">
          not interested
        </button>
      </footer>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TourItem",
  props: ["tour"],
  data() {
    return {
      readMore: false as boolean,
    };
  },
  methods: {
    setReadMore() {
      this.readMore = !this.readMore;
    },
    removeTour(id: number) {
      this.$emit("remove-tour", id);
    },
  },
});
</script>