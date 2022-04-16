<template>
  <article class="card">
    <img :src="follower.avatar_url" :alt="follower.login" />
    <h4>${{ follower.login }}</h4>
    <a :href="follower.html_url" class="btn"> view profile </a>
  </article>
</template>

<script>
export default {
  name: "FollowerItem",
  props: ['follower'],
};
</script>
