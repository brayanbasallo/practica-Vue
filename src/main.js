import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import Charkick from 'vue-chartkick'
import Chart from 'chart.js'
import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router'
import { dollarFilter, percentFilter } from '@/filters'

Vue.use(VueSpinners)
Vue.use(Charkick.use(Chart))
Vue.filter('dollar', dollarFilter)
Vue.filter('percen', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
