import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarTimes, faEnvelopeOpen, faLock, faMap, faPhone, faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/index.css'

library.add(faUserSecret,faEnvelopeOpen,faUser,faCalendarTimes,faMap,faPhone,faLock)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
