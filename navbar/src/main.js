import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faFaceAngry, faFaceDizzy, faFaceFrown, faFaceGrin, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/index.css'

library.add(faUserSecret,faFaceAngry,faFaceDizzy,faFaceFrown,faFaceGrin,faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
