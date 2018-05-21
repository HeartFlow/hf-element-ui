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

function init(_Vue) {
  /* Inject Element UI components */
  _Vue.use(Autocomplete)
  _Vue.use(Breadcrumb)
  _Vue.use(BreadcrumbItem)
  _Vue.use(Button)
  _Vue.use(Checkbox)
  _Vue.use(CheckboxGroup)
  _Vue.use(Col)
  _Vue.use(CollapseItem)
  _Vue.use(DatePicker)
  _Vue.use(Dialog)
  _Vue.use(Dropdown)
  _Vue.use(DropdownItem)
  _Vue.use(DropdownMenu)
  _Vue.use(Form)
  _Vue.use(FormItem)
  _Vue.use(Input)
  _Vue.use(InputNumber)
  _Vue.use(Option)
  _Vue.use(OptionGroup)
  _Vue.use(Popover)
  _Vue.use(Radio)
  _Vue.use(RadioButton)
  _Vue.use(RadioGroup)
  _Vue.use(Row)
  _Vue.use(Select)
  _Vue.use(Spinner)
  _Vue.use(Switch)
  _Vue.use(Table)
  _Vue.use(TableColumn)
  _Vue.use(Tooltip)
  _Vue.use(Transfer)

  _Vue.prototype.$message = Message
  _Vue.prototype.$notify = Notification

  /* Inject custom Heartflow componensed based on Element UI */
  _Vue.use(ActionButton)
  _Vue.use(Collapsible)
  _Vue.use(VerticalList)
}

export default init
