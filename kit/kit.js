import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'
import Main from '@/pages/Main.vue'

import '@/assets/style.css' // Specific stylesheet for the UI kit
import '@root/lib/custom/base.css'

import { registerElementUIComponents, RetryNotificationPlugin } from '@root'

registerElementUIComponents(Vue)
Vue.use(RetryNotificationPlugin)
Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', component: Main }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
