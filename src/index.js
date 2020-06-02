import Vue from 'vue'
import VueVisible from 'vue-visible'
import Router from 'vue-router'

import App from '@/App'
import Main from '@/pages/Main.vue'

import '@/assets/style.css' // Specific stylesheet for the UI kit
import initElementUI from './elementUI'

initElementUI()
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
