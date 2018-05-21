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
  Transfer,
} from 'element-ui'

import ActionButton from './ActionButton'
import Collapsible from './Collapsible'
import VerticalList from './VerticalList'

function init() {
  /* Inject Element UI components */
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

  Vue.prototype.$message = Message
  Vue.prototype.$notify = Notification

  /* Inject custom Heartflow componensed based on Element UI */
  Vue.use(ActionButton)
  Vue.use(Collapsible)
  Vue.use(VerticalList)
}

export default init
