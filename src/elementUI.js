import Vue from 'vue'
import {
  Autocomplete,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
  CheckboxGroup,
  Col,
  CollapseItem,
  DatePicker,
  Dialog,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem,
  Input,
  InputNumber,
  Message,
  Notification,
  Option,
  OptionGroup,
  Popover,
  Radio,
  RadioButton,
  RadioGroup,
  Row,
  Select,
  Spinner,
  Switch,
  Table,
  TableColumn,
  Tooltip,
  Transfer
} from 'element-ui'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

// Import stylesheet for custom element-ui components (Action button, CollapsibleHeader..) + theming colors, etc
import '@shared/lib/custom/base.css'

import ActionButton from '@shared/components/ActionButton'
import CollapsibleHeader from '@shared/components/CollapsibleHeader'
import VerticalList from '@shared/components/VerticalList'
import RetryNotificationPlugin from '@shared/plugins/retryNotification'

function init() {
  Vue.use(Autocomplete)
  Vue.use(Breadcrumb)
  Vue.use(BreadcrumbItem)
  Vue.use(Button)
  Vue.use(Checkbox)
  Vue.use(CheckboxGroup)
  Vue.use(Col)
  Vue.use(CollapseItem)
  Vue.use(DatePicker)
  Vue.use(Dialog)
  Vue.use(Dropdown)
  Vue.use(DropdownItem)
  Vue.use(DropdownMenu)
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Input)
  Vue.use(InputNumber)
  Vue.use(Option)
  Vue.use(OptionGroup)
  Vue.use(Popover)
  Vue.use(Radio)
  Vue.use(RadioButton)
  Vue.use(RadioGroup)
  Vue.use(Row)
  Vue.use(Select)
  Vue.use(Spinner)
  Vue.use(Switch)
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Tooltip)
  Vue.use(Transfer)
  Vue.component(CollapseTransition.name, CollapseTransition)

  Vue.prototype.$message = Message
  Vue.prototype.$notify = Notification

  // Custom hf-element-ui components/plugin
  Vue.use(RetryNotificationPlugin)
  Vue.component('action-button', ActionButton)
  Vue.component('collapsible-header', CollapsibleHeader)
  Vue.component('vertical-list', VerticalList)
}

export default init
