<template>
  <div class="section-center">
    <article v-for="menuItem in items" :key="menuItem.id" class="menu-item">
      <img :src="menuItem.img" :alt="menuItem.title" class="photo" />
      <div class="item-info">
        <header>
          <h4>{{ menuItem.title }}</h4>
          <h4 class="price">${{ menuItem.price }}</h4>
        </header>
        <p class="item-text">{{ menuItem.desc }}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: ["items"],
};
</script>