<template>
  <main>
   <section class='container'>
        <h3>{{ peopleCount }} birthdays today</h3>
        <ListItem :people="people" />
        <button @click="setPeople">clear all</button>
      </section>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import ListItem from "./components/ListItem.vue";
import data from './data'
export default Vue.extend({
  name: "App",
  components: {
    ListItem,
  },
  data(){
    return {
      people: data
    }
  },
  computed: {
    peopleCount(): number{
      return this.people.length
    }
  },
  methods: {
    setPeople(){
      this.people = []
    }
  }
});
</script>

