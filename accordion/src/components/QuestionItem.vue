<template>
<article class='question'>
      <header>
        <h4>{{ question.title }}</h4>
        <button class='btn' @click="setShowInfo">
          <font-awesome-icon icon="minus" v-if="showInfo" /> 
          <font-awesome-icon icon="plus" v-else/>
        </button>
      </header>
      <p v-if="showInfo">{{ question.info }}</p>
    </article>
</template>

<script>
export default {
  name: "QuestionItem",
  props: ['question'],
  data(){
    return {
      showInfo: false
    }
  },
  methods: {
    setShowInfo(){
      this.showInfo = !this.showInfo
    }
  }
};
</script>
