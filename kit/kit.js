import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App.vue'
import Main from '@/pages/Main'
import registerElementUIComponents from '@/utils/element_ui.js'

Vue.use(Router)
registerElementUIComponents()

const routes = [{
  path: '/',
  component: Main,
}]

new Vue({
  el: '#app',
  routes,
  template: '<App/>',
  components: { App }
})
