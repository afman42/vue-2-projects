import Vue from 'vue'
import App from './App.vue'
import VueMarkdown from 'vue-markdown'
import "./assets/index.css"
Vue.component('vue-markdown', VueMarkdown);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
