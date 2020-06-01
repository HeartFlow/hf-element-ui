import VueVisible from 'vue-visible'
import {
  ActionButton,
  CollapsibleHeader,
  VerticalList,

  ColumnFilter,
  TransferOption,
} from '@root/src'

export default {
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
        numberField: 88
      },
      certifications: [
        'Start', 'CTQA', 'Aorta', 'Landmarks', 'Circularization', 'Myocardium',
        'Centerlines', 'Labeling', 'Lumen', 'Finalize', 'Pinning', 'QC', 'NCR'
      ].map((label, key) => ({
        key,
        label,
        disabled: label === 'Centerlines'
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
      messageType: 'success',
      activeSection: '',
      // overridden icons
      iconsElementUI: [
        'search', 'warning', 'time'
      ],
      iconsSmallCustom: [
        'soft_quarantine', 'hard_quarantine'
      ],
      iconsStandardCustom: [
        'soft_quarantine', 'hard_quarantine'
      ],
      iconsHFSmall: [
        'add', 'admin', 'billing', 'calendar', 'care_team', 'care_team_unpopulated',
        'cath', 'chevron', 'chevron_left', 'chevron_right', 'clinician', 'close',
        'completed', 'connect', 'credit_card', 'ctqa', 'delete', 'deviation',
        'disabled', 'download', 'edit', 'email', 'filter_applied', 'filter_idle',
        'flag', 'groups_billing', 'groups_cath', 'groups_internal_admin',
        'groups_internal_cs', 'groups_internal_pqe', 'groups_internal_production',
        'groups_internal_production_manager', 'hamburger', 'hap', 'help',
        'high_priority', 'high_priority_connect', 'limited_member', 'locked',
        'low_priority', 'member', 'mobile_close', 'ncr', 'pending', 'pinning',
        'processing', 'profile', 'public', 'qc', 'quarantine', 'returned', 'search',
        'settings', 'uploading', 'uprev', 'visibility_off', 'visibility_on',
        'warning', 'workstation'
      ],
      iconsHFStandard: [
        'add', 'add_member', 'all', 'billing_hap', 'calendar', 'cancel', 'care_team',
        'care_team_unpopulated', 'chevron', 'chevron_left', 'chevron_right', 'close',
        'collapse', 'comment', 'completed', 'connect', 'copy', 'cs_note',
        'customer_support', 'delete', 'deviation', 'disabled', 'download', 'edit',
        'email', 'expand', 'export', 'filter_applied', 'filter_idle', 'flag',
        'global', 'help', 'high_priority', 'high_priority_connect', 'info',
        'limited_member', 'location', 'locked', 'medication', 'member', 'more',
        'nav_window', 'neutralized_quarantine', 'occlusion', 'open', 'pdf_analysis',
        'pending', 'phone', 'preloader_failure', 'processing', 'profile', 'public',
        'quarantine', 'suspected_resubmission', 'refresh', 'resubmit', 'returned',
        'save', 'search', 'settings', 'share', 'site', 'stenosis', 'tag', 'timer',
        'undo', 'uploading', 'uprev', 'warning', 'work_instructions'
      ],
      iconsHFLarge: [
        'add_member', 'bypass_fill', 'bypass_stroke', 'cancel', 'chevron_left', 'chevron_right',
        'close', 'comment', 'completed', 'ct_scanner', 'ctqa', 'customer_support', 'deviation',
        'duplicate', 'email', 'file_download', 'files', 'global', 'heart', 'location', 'member',
        'modify_ncr', 'ncr', 'patient', 'pdf_analysis', 'phone', 'pinning', 'processing',
        'profile', 'qc', 'quick_duplicate', 'reprocess', 'returned', 'revert', 'settings',
        'suspect_ncr', 'unlocked', 'warning', 'workstation', 'workstation_read_only'
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
        options: [{ user: { first_name: 'John', user_id: 1, last_name: 'Doe' } },
          { user: { first_name: 'Tom', user_id: 2, last_name: 'Sawyer' } },
          { user: { first_name: 'Micky', user_id: 3, last_name: 'Mouse' } },
          { user: { first_name: 'Rodger', user_id: 4, last_name: 'Federer' } }]
      }, {
        label: 'Signed Out',
        options: [{ user: { first_name: 'Johny', user_id: 5, last_name: 'Johnson' } },
          { user: { first_name: 'Sven', user_id: 6, last_name: 'Svenson' } }]
      }]
    }
  },

  methods: {
    onClickActionBtn(action, refName, cb) {
      setTimeout(() => {
        this.$refs[refName].$emit('update', action, cb)
      }, 1000)
    },

    onClickThrobBtn() {
      this.onClickActionBtn('success', 'throbBtn', () => {
        this.$refs.throbBtn.$emit('update', 'throb')
      })
    },

    handleSelectionChange(selected) {
      this.multipleSelection = selected.map(user => user.name)
    },

    getIconClass(icon, hf) {
      return hf ? `icon-${hf}-${icon}` : `el-icon-${icon}`
    },

    showMessage(type) {
      this.$message({
        duration: 4000,
        type,
        showClose: true,
        message: `This is a ${type} message`
      })
    },

    showNotification(type) {
      this.$notify({
        title: 'Title',
        message: `This is ${type} message`,
        type
      })
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
            }
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
    }
  },

  mounted() {
    this.$refs.throbBtn.$emit('update', 'throb')
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
    ActionButton,
    CollapsibleHeader,
    VerticalList
  },

  directives: {
    visible: VueVisible
  }
}
