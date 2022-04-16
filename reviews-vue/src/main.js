import Vue from 'vue'
import App from './App.vue'
import './assets/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faChevronLeft, faChevronRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faChevronLeft, faChevronRight, faQuoteRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
