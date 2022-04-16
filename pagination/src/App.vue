<template>
  <main>
    <div class="section-title">
      <h1>{{ loading ? "loading..." : "pagination" }}</h1>
      <div class="underline"></div>
    </div>
    <section class="followers">
      <div class="container">
          <FollowerItem :follower="follower" :key="follower.id" v-for="follower in followers"/>
      </div>
      <div v-if="!loading" class="btn-container">
        <button class="prev-btn" @click="prevPage">prev</button>
        <button
          v-for="(item, index) in data"
          :key="index"
          class="page-btn"
          :class="{ 'active-btn': index === page ? true : null }"
          @click="handlePage(index)"
        >
          {{ index + 1 }}
        </button>
        <button class="next-btn" @click="nextPage">next</button>
      </div>
    </section>
  </main>
</template>

<script>
import FollowerItem from "./components/FollowerItem.vue";
import paginate from "./utils";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
export default {
  name: "App",
  components: {
    FollowerItem,
  },
  data() {
    return {
      page: 0,
      loading: true,
      data: [],
      followers: [],
    };
  },
  async mounted(){
    await this.getProducts()
    if (this.loading) return;
  },
  methods: {
    async getProducts() {
      const response = await fetch(url);
      const datas = await response.json();
      this.data = paginate(datas)
      this.loading = false
      this.followers = this.data[this.page]
    },
    nextPage() {
      let netPage = this.page + 1;
      if (netPage > this.data.length - 1) {
        netPage = 0;
      }
      this.followers = this.data[netPage]
      return netPage
    },
    prevPage() {

      let prevPage = this.page - 1;
      if (prevPage < 0) {
        prevPage = this.data.length - 1;
      }
      this.followers = this.data[prevPage]
      return prevPage;
    },
    handlePage(index) {
      this.page = index;
      this.followers = this.data[this.page]
    },
  },
};
</script>
