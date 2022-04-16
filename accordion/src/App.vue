<template>
  <main>
    <div class="container">
      <h3>questions and answers about login</h3>
      <section class="info">
        <template v-for="question in questions">
        <QuestionItem :key="question.id" :question="question"></QuestionItem>
        </template>
      </section>
    </div>
  </main>
</template>

<script>
import QuestionItem from "./components/QuestionItem.vue";
import data from './data'
export default {
  name: "App",
  components: {
    QuestionItem,
  },
  data(){
    return {
      questions: data
    }
  }
};
</script>
