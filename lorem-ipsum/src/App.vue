<template>
  <section class="section-center">
    <h3>tired of boring lorem ipsum?</h3>
    <form class="lorem-form" @submit.prevent="handleSubmit">
      <label>paragraphs:</label>
      <input type='number' name='amount' id='amount' v-model="count"/>
      <button class="btn">generate</button>
    </form>
    <article class="lorem-text">
      <p v-for="(item,index) in text" :key="index">{{ item }}</p>
    </article>
  </section>
</template>

<script>
import data from './data'
export default {
  name: "App",
  data() {
    return {
      count: 0,
      text: [],
    };
  },
  methods: {
    handleSubmit() {
      let amount = parseInt(this.count);
      if (this.count <= 0) {
        amount = 1;
      }
      if (this.count > 8) {
        amount = 8;
      }
      // setText(data.slice(0, amount));
      this.text = data.slice(0, amount);
    },
  },
};
</script>
