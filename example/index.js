import Vue from 'vue'
import Router from 'vue-router'
import VueVisible from 'vue-visible'

import App from '@/App'
import Main from '@/pages/Main.vue'

import '@/assets/style.css' // Specific stylesheet for the Example
import '@root/lib/custom/base.css' // Import styling for custom hf-element-ui components (Action button, CollapsibleHeader..)

import registerElementUIComponents from './elementUI'
import { RetryNotificationPlugin } from '@root/src'

registerElementUIComponents()
Vue.use(RetryNotificationPlugin)
Vue.use(Router)
Vue.use(VueVisible)

const router = new Router({
  routes: [
    { path: '/', component: Main }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
