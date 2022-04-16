<template>
  <div>
    <button
      v-for="(category, index) in categories"
      type="button"
      class="filter-btn"
      :key="index"
      @click="filterItems(category)"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CategoriesList",
  props: ['categories','filterItems']
};
</script>

