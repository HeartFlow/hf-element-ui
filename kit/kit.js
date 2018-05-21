import Vue from 'vue'
import Router from 'vue-router'

// Include these two files for bootstraping Heartflow element ui
import HfElementUI from '@root'
import '@root/lib/custom/base.css'

import '@/assets/style.css' // Specific stylesheet for the UI kit

import App from '@/App'
import Main from '@/pages/Main.vue'

Vue.use(HfElementUI)
Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', component: Main }
  ]
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
