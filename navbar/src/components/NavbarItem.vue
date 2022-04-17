<template>
  <nav>
    <div class="nav-center">
      <div class="nav-header">
        <img :src="logo" class="logo" :alt="logo" />
        <button class="nav-toggle" @click="toggleLinks">
          <font-awesome-icon icon="bars" />
        </button>
      </div>
      <div class="links-container" ref="linksContainerRef">
        <ul class="links" ref="linksRef">
          <li v-for="link in links" :key="link.id">
            <a :href="link.url">{{ link.text }}</a>
          </li>
        </ul>
      </div>
      <ul class="social-icons">
        <li v-for="so in social" :key="so.id">
          <a :href="so.url"><font-awesome-icon :icon="so.icon" /> </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
/* eslint-disable */
import { links, social } from "../data";
const logo =
  "https://raw.githubusercontent.com/john-smilga/react-projects/master/11-navbar/final/src/logo.svg";
export default {
  name: "NavbarItem",
  data() {
    return {
      showLinks: false,
      links,
      social,
      logo,
    };
  },
  methods: {
    toggleLinks() {
      this.showLinks = !this.showLinks;

      const linksHeight = this.$refs["linksRef"].getBoundingClientRect().height;
      console.log(this.toggleLinks);
      if (this.showLinks) {
        this.$refs.linksContainerRef.style.height = `${linksHeight}px`;
      } else {
        // console.log(this.$refs.linksContainerRef)
        this.$refs.linksContainerRef.style.height = "0px";
      }
    },
  },
};
</script>
