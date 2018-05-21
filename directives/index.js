import VueVisible from 'vue-visible'
import blur from './blur'

function init(_Vue) {
  _Vue.directive('hf-blur', blur)
  _Vue.use(VueVisible)
}

export default init
