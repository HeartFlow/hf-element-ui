<template>
  <p class="hf-cell ellipsis" :class="{filtered: filterVal && filterVal.length}">
    <span class="label">{{ label }}</span>
    <el-date-picker
        popper-class="column-daterange-filter" v-if="type === 'datetimerange'" type="datetimerange"
        format="yyyy-MM-dd HH:mm" :editable="false" :clearable="false" @click.native="setDefaultRange"
        :picker-options="options.pickerOptions" v-model="filterVal" ref="dtr" class="daterange-input" @change="filterDateChange"
        @blur="onDatePickerBlur" @focus="onDatePickerFocus">
    </el-date-picker>
    <template v-else-if="type === 'select'">
      <el-popover popper-class="filter-select-parent-popper" ref="dropdown" placement="bottom" trigger="click"
                  :visible-arrow="false" @show="onFilterSelectShow">
        <hf-filter-select :options="options.selectOptions" v-model="filterVal" @input="filterSelectChange"
                          ref="filterSelect"></hf-filter-select>
      </el-popover>
      <i class="filter-toggle-button cursor-pointer" v-popover:dropdown
         :class="filterVal && filterVal.length ? 'icon-small-filter_applied' : 'icon-small-filter_idle'"></i>
    </template>
  </p>
</template>

<script>
import { DatePicker, Popover } from 'element-ui'
import debounce from 'lodash.debounce'
import FilterSelect from './FilterSelect'

export default {
  props: {
    type: String,
    label: String,
    options: {
      selectOptions: {
        type: Array,
        default: () => []
      },
      pickerOptions: Object
    },
    selectedVal: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      filterVal: this.type === 'datetimerange' ? this.selectedVal : this.selectedVal.map(val => {
        return this.options.selectOptions.find(option => option.value === val)
      })
    }
  },

  methods: {
    filterSelectChange(selected, option) {
      const filters = this.filterVal.map(item => item.value)
      this.$emit('filtered', filters)
    },
    filterDateChange() {
      // This function is call only when the user has applied filter (click on apply filter button)
      this.$emit('filtered', this.filterVal || [])
    },
    onDatePickerBlur() {
      // Set the date range selection to the previous applied date range if previous date is different then the selection
      if (this.filterVal && this.filterVal.length && this.filterVal[0] && this.filterVal[1]) {
        this.$refs.dtr.picker.minDate = this.filterVal[0]
        this.$refs.dtr.picker.maxDate = this.filterVal[1]
      }
      this.unwatchRangeSelection && this.unwatchRangeSelection()
      this.unwatchRangeSelection = null
    },
    onDatePickerFocus() {
      // 'Apply filter' button throbs when a date range is selected
      if (!this.unwatchRangeSelection) {
        this.$nextTick(() => {
          this.unwatchRangeSelection = this.$watch(
            () => [this.$refs.dtr.picker.minDate, this.$refs.dtr.picker.maxDate],
            (dateRange) => {
              if (dateRange && dateRange.length === 2 && dateRange[0] && dateRange[1]) {
                const applyFilterEl = document.querySelector('.el-button.el-picker-panel__link-btn:nth-child(2)')
                applyFilterEl.classList.add('throbbing-apply-date-range')
              }
            }
          )
        })
      }
    },
    setDefaultRange: debounce(function() {
      // hack -- manually set the dates in the component
      if (this.$refs.dtr && !this.$refs.dtr.picker.minDate) {
        this.$refs.dtr.picker.minDate = new Date()
        var nextDate = new Date()
        nextDate.setDate(nextDate.getDate() + 1)
        this.$refs.dtr.picker.maxDate = nextDate
      }
    }, 200),
    resetFilter() {
      this.filterVal = []
    },
    onFilterSelectShow() {
      if (this.$refs.filterSelect.$refs.searchInput) {
        this.$nextTick(() => {
          this.$refs.filterSelect.$refs.searchInput.focus()
        })
      }
    }
  },
  components: {
    'hf-filter-select': FilterSelect,
    [DatePicker.name]: DatePicker,
    [Popover.name]: Popover
  }
}
</script>

<style scoped>
.daterange-input {
  padding: 0;
  width: 25px;
  height: 15px;
  border: none;
  margin-left: 5px;
}

.hf-cell >>> .el-date-editor--datetimerange .el-range-input,
.hf-cell >>> .el-date-editor--datetimerange .el-range-separator {
  display: none;
}

.filter-toggle-button {
  opacity: .6;
}

.filter-toggle-button:hover { opacity: 1; }

.filter-toggle-button:focus { outline: none; }

.hf-cell >>> .el-icon-time {  /* reset input-icon inherited styles */
  opacity: 1;
  font-size: 15px;
  float: left;
}

.hf-cell >>> .el-icon-time:before {
  font-family: "heartflow_iconography";
  content: '\e85c';
  opacity: .6;
  cursor: pointer;
  margin-left: 3px;
}

.hf-cell.filtered >>> .el-icon-time:before { content: '\e86f'; }

.hf-cell >>> .el-icon-time:hover:before,
.hf-cell.filtered >>> .el-icon-time:before,
.icon-small-filter_applied {
  color: white;
  opacity: 1;
}
</style>

<style>
.filter-select-parent-popper {
  transform: translateY(-10px);
  padding: 0;
  border-radius: 0 0 3px 3px;
}

/* multiple classes to increase specificity */
.el-picker-panel.el-date-range-picker.el-popper.column-daterange-filter {
  margin-top: 10px;
}

.column-daterange-filter .popper__arrow {
  display: none;
}

.throbbing-apply-date-range {
  animation: throb 1s infinite linear;
}

.throbbing-apply-date-range:hover {
  animation: none;
}
</style>
