<template>
  <article class="review">
    <!-- {{ fPeople }} -->
    <div class="img-container">
      <img
        :src="fetchPeople.image"
        :alt="fetchPeople.name"
        class="person-img"
      />
      <span class="quote-icon">
        <!-- <FaQuoteRight /> -->
        <font-awesome-icon icon="quote-right" />
      </span>
    </div>
    <h4 class="author">{{ fetchPeople.name }}</h4>
    <p class="job">{{ fetchPeople.job }}</p>
    <p class="info">{{ fetchPeople.text }}</p>
    <div class="button-container">
      <button class="prev-btn" @click="prevPerson">
        <!-- <FaChevronLeft /> -->
        <font-awesome-icon icon="chevron-left" />
      </button>
      <button class="next-btn" @click="nextPerson">
        <!-- <FaChevronRight /> -->
        <font-awesome-icon icon="chevron-right" />
      </button>
    </div>
    <button class="random-btn" @click="randomPerson">surprise me</button>
  </article>
</template>

<script>
import data from "../data";
export default {
  name: "ReviewItem",
  data() {
    return {
      index: 0,
      people: data,
    };
  },
  computed: {
    fetchPeople(){
      return this.people[this.index]
    },
  },
  methods: {
    checkNumber(number) {
      if (number > this.people.length - 1) {
        return 0;
      }
      if (number < 0) {
        return this.people.length - 1;
      }
      return number;
    },
    nextPerson() {
      let newIndex = this.index - 1;
      this.index = this.checkNumber(newIndex);
    },
    prevPerson() {
      let newIndex = this.index - 1;
      this.index = this.checkNumber(newIndex);
    },
    randomPerson() {
      let randomNumber = Math.floor(Math.random() * this.people.length);
      if (randomNumber === this.index) {
        randomNumber = this.index + 1;
      }
      this.index = this.checkNumber(randomNumber);
    },
  },
};
</script>
