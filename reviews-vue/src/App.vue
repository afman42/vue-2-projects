<template>
  <main>
    <section class="container">
      <div class="title">
        <h2>our reviews</h2>
        <div class="underline"></div>
      </div>
      <ReviewItem />
    </section>
  </main>
</template>

<script>
import ReviewItem from "./components/ReviewItem.vue";

export default {
  name: "App",
  components: {
    ReviewItem,
  },
};
</script>
