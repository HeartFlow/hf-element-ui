import registerElementUIComponents from './components'
import registerDirectives from './directives'
import registerPlugins from './plugins'

import ColumnFilter from './components/ColumnFilter'
import TransferOption from './components/TransferOption'

function install(Vue) {
  registerElementUIComponents(Vue)
  registerDirectives(Vue)
  registerPlugins(Vue)
}

export {
  ColumnFilter,
  TransferOption
}
export default { install }
