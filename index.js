import registerElementUIComponents from '@root/components'
import registerDirectives from '@root/directives'
import registerPlugins from '@root/plugins'

import ColumnFilter from '@root/components/ColumnFilter'
import TransferOption from '@root/components/TransferOption'

function install() {
  registerElementUIComponents()
  registerDirectives()
  registerPlugins()
}

export {
  ColumnFilter,
  TransferOption
}
export default { install }
