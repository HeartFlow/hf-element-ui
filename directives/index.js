import Vue from 'vue'

import VueVisible from 'vue-visible'
import blur from './blur'

function init() {
  Vue.directive('hf-blur', blur)
  Vue.use(VueVisible)
}

export default init
