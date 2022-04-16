<template>
  <main>
    <section class="markdown">
      <textarea class="input" v-model="markdown"></textarea>
      <article class="result">
        <vue-markdown :source="markdown"></vue-markdown>
      </article>
    </section>
  </main>
</template>

<script>

export default {
  name: "App",
  data(){
    return {
      markdown: "# markdown preview"
    }
  }
};
</script>
