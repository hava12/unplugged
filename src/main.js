import Vue from 'vue'
import App from './App.vue'
import Router from './router.js'
import axios from 'axios'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:  Router
}).$mount('#app')
