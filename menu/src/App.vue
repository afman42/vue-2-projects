<template>
  <main>
    <section class="menu section">
      <div class="title">
        <h2>our menu</h2>
        <div class="underline"></div>
      </div>
      <CategoriesList :categories="categories" :filterItems="filterItems" />
      <MenuItem :items="menuItems" />
    </section>
  </main>
</template>

<script>
import MenuItem from "./components/MenuItem.vue";
import CategoriesList from "./components/CategoriesList.vue";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
export default {
  name: "App",
  components: {
    MenuItem,
    CategoriesList
  },
  data() {
    return {
      menuItems: items,
      categories: allCategories,
    };
  },
  methods: {
    filterItems(category) {
      // console.log(category)
      if (category === "all") {
        this.menuItems = items
        // console.log(items)
        return
      }
      const newItems = items.filter((item) => item.category === category);
      this.menuItems = newItems;
    },
  },
};
</script>
