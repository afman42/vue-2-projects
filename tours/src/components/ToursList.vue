<template>
  <section>
    <div class="title">
      <h2>our tours</h2>
      <div class="underline"></div>
    </div>
    <div>
      <template v-for="tour in tours">
        <TourItem :key="tour.id" :tour="tour" @remove-tour="removeTour" />
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import TourItem from './TourItem.vue'
export default Vue.extend({
  name: "ToursList",
  components: {
    TourItem
  },
  props: ['tours','removeTour']
})
</script>