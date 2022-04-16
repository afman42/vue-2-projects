<template>
  <div>
    <article v-for="person in people" :key="person.id" class="person">
      <img :src="person.image" :alt="person.name" />
      <div>
        <h4>{{ person.name }}</h4>
        <p>{{ person.age }} years</p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
// const { id, name, age, image } = person;
export default {
  name: "ListItem",
  props: ["people"],
};
</script>