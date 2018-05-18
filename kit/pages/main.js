import { getSuccessMessageConfig } from '@/modules/utils/notification'
import ActionButton from '@/modules/components/ActionButton'
import ActionsDropdown from '@/src/analyst/components/ActionsDropdown'
import ColumnFilter from '@/modules/components/ColumnFilter'
import Collapsible from '@/modules/components/Collapsible'
import TransferOption from '@/modules/components/TransferOption'
import VerticalList from '@/modules/components/VerticalList'

export default {
  name: 'app',
  data() {
    return {
      longText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      formData: {
        transport: 'car',
        vegetables: ['broccoli', 'tomatoes'],
        singleOption: '',
        multipleOption: [],
        switchEnabled: 'All Enabled',
        switchDisabled: 'All Disabled',
        numberField: 88,
      },
      certifications: [
        'Start', 'CTQA', 'Aorta', 'Landmarks', 'Circularization', 'Myocardium',
        'Centerlines', 'Labeling', 'Lumen', 'Finalize', 'Pinning', 'QC', 'NCR',
      ].map((label, key) => ({
        key,
        label,
        disabled: label === 'Centerlines',
      })),
      selectedCertifications: [0, 3],
      renderTransferContent: (h, option) => {
        option.icon = `icon-standard-${this.iconsHFStandard[option.key]}`
        return h(TransferOption, { props: option })
      },
      dialogVisible: false,
      verticalListLoading: true,
      foodGroups: ['Vegetables', 'Fruits', 'Grains', 'Meats', 'Dairy'],
      secondaryDialogVisible: false,
      tableData: [{
        name: 'Doe, Jane',
        id: '1a',
        study: '2012-01-01',
        delivery: '2012-01-01',
        privilege: 'Analyst',
        qc: true,
        status: 'Processing'
      }, {
        name: 'Smith, John',
        id: '2w',
        study: '2012-01-01',
        delivery: '2012-01-01',
        privilege: null,
        qc: false,
        status: 'Uploading'
      }, {
        name: 'Presley, Elvis',
        id: '3rlongidentifier',
        study: '2012-01-01',
        delivery: '2012-01-01',
        privilege: '',
        qc: true,
        status: 'Returned'
      }, {
        name: 'Holiday, Billie',
        id: '4t',
        study: '2012-01-01',
        delivery: '2012-01-01',
        privilege: 'PQE',
        qc: false,
        status: 'Completed'
      }, {
        name: 'LongnameEarhart, Amelia',
        id: '5y',
        study: '2012-01-01',
        delivery: '2012-01-01',
        privilege: undefined,
        qc: false,
        status: 'Processing'
      }],
      states: [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
        'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
        'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
        'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
        'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ],
      selectedState: '',
      iconsElementUI: ['close', 'more', 'delete', 'edit', 'share', 'arrow-left', 'arrow-right'],
      iconsHFSmall: [
        'disclosure_left', 'disclosure_right', 'close', 'profile', 'search',
        'help', 'warning', 'mobile_close', 'filter_applied', 'billing',
        'high_priority', 'high_priority_connect', 'completed', 'public',
        'returned', 'admin', 'cath', 'credit_card', 'uploading', 'processing',
        'download', 'email', 'flag', 'groups_internal_production',
        'groups_internal_cs', 'groups_internal_admin', 'groups_internal_pqe',
        'settings', 'uprev', 'low_priority', 'deviation', 'add', 'calendar',
        'ctqa', 'delete', 'filter_idle', 'groups_internal_production_manager',
        'edit', 'ncr', 'numeric_stepper', 'pinning', 'qc', 'visibility_off',
        'visibility_on', 'workstation', 'locked', 'chevron',
      ],
      iconsHFStandard: [
        'disclosure_left', 'disclosure_right', 'info', 'add', 'add_member',
        'filter_applied', 'calendar', 'cancelled', 'close', 'collapse',
        'delete', 'deviation', 'download', 'edit', 'email', 'expand', 'flag',
        'global', 'help', 'high_priority', 'member', 'locked', 'medication',
        'filter_idle', 'neutralized_quarantine', 'occlusion', 'pdf_analysis',
        'phone', 'processing', 'profile', 'refresh', 'returned', 'search',
        'settings', 'share', 'site', 'stenosis', 'tag', 'uprev', 'warning',
        'work_instructions', 'more', 'uploading', 'public', 'comment',
        'customer_support', 'high_priority_connect', 'numeric_stepper', 'completed',
      ],
      iconsHFLarge: [
        'pdf_analysis', 'add_member', 'bypass_fill', 'bypass_stroke', 'cancel',
        'close', 'ct_scanner', 'deviation', 'duplicate', 'email', 'heart',
        'modify_ncr', 'patient', 'phone', 'profile', 'reprocess', 'revert',
        'settings', 'suspect_ncr', 'unlocked', 'workstation', 'pinning', 'ctqa',
        'customer_support', 'location', 'comment', 'files', 'qc', 'ncr', 'warning',
        'workstation_read_only',
      ],
      multipleSelection: [],
      privileges: ['Analyst', 'Analyst Manager', 'PQE'],
      dateTimeOptions: {
        shortcuts: [{
          text: '1 day',
          onClick(picker) {
            var date = new Date()
            date.setTime(date.getTime() + 3600 * 1000 * 24)
            picker.$emit('pick', date, true)
          }
        }, {
          text: '1 week',
          onClick(picker) {
            var date = new Date()
            date.setTime(date.getTime() + 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date, true)
          }
        }, {
          text: '1 month',
          onClick(picker) {
            var date = new Date()
            date.setMonth(date.getMonth() + 1)
            picker.$emit('pick', date, true)
          }
        }, {
          text: 'Cancel',
          onClick(picker) {
            picker.handleClear()
          }
        }]
      },
      dateValue: new Date(),
      dateTimeValue: new Date(),
      dateTimeRangeValue: [new Date(), new Date(new Date().setDate(new Date().getDate() + 3))],
      dateTimeRangeOptions: {
        shortcuts: [{
          text: 'Last week',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end], true)
          }
        }, {
          text: 'Last month',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end], true)
          }
        }, {
          text: 'Last 3 months',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end], true)
          }
        }]
      },
      assignOptions: [{
        label: 'Signed In',
        options: [{user: {first_name: 'John', user_id: 1, 'last_name': 'Doe'}},
          {user: {first_name: 'Tom', user_id: 2, 'last_name': 'Sawyer'}},
          {user: {first_name: 'Micky', user_id: 3, 'last_name': 'Mouse'}},
          {user: {first_name: 'Rodger', user_id: 4, 'last_name': 'Federer'}}]
      }, {
        label: 'Signed Out',
        options: [{user: {first_name: 'Johny', user_id: 5, 'last_name': 'Johnson'}},
          {user: {first_name: 'Sven', user_id: 6, 'last_name': 'Svenson'}}]
      }]
    }
  },

  methods: {
    onRefreshButtonClick() {
      setTimeout(() => {
        this.$refs.refreshButton.$emit('update', Math.random() < 0.5 ? 'success' : 'failure')
      }, 2000)
    },

    handleSelectionChange(selected) {
      this.multipleSelection = selected.map(user => user.name)
    },

    getIconClass(icon, hf) {
      return hf ? `icon-${hf}-${icon}` : `el-icon-${icon}`
    },

    showMessage() {
      this.$message(getSuccessMessageConfig({ message: 'Invalid email or password. Please try again.' }))
    },

    renderHeader(h, { column, $index }) {
      var props = null
      switch ($index) {
        case 1:
          props = {
            type: 'datetimerange',
            label: column.label,
            options: {
              pickerOptions: this.dateTimeRangeOptions
            }
          }
          break
        case 7:
          props = {
            type: 'select',
            label: column.label,
            options: {
              selectOptions: [
                'Start', 'Centerlines', 'Lumen', 'Finalize', 'Pinning', 'QC', 'Completed'
              ].map((el, i) => ({ label: el, value: i + 1 }))
            },
          }
          break
        case 8:
          props = {
            type: 'select',
            label: column.label,
            options: {
              selectOptions: [{
                label: 'One very long long long long long option',
                value: 1
              }, {
                label: 'Two',
                value: 2
              }, {
                label: 'Three',
                value: 3
              }]
            }
          }
          break
      }

      return h(ColumnFilter, { props })
    },

    notify() {
      this.retryNotify.show()
    },
  },

  mounted() {
    this.retryNotify = this.retryNotification({
      retryData: {},
      retryAction() {}
    }, () => {
      const h = this.$createElement

      return h('div', [
        'Due date change was unsuccessful for ',
        h('b', '2 out of 4 cases'),
        '. Try again?'
      ])
    })
  },

  components: {
    'hf-action-button': ActionButton,
    'hf-actions-dropdown': ActionsDropdown,
    'hf-collapsible': Collapsible,
    'hf-vertical-list': VerticalList,
  }
}
