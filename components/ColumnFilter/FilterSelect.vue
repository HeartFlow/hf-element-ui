<template>
  <div class="filter-select no-select">
    <div class="input-group">
      <el-input size="mini" class="input" ref="searchInput" prefix-icon="icon-small-search" @input="onInput" />
      <div class="all-none">
        <span class="link" @click="selectVisibleOptions">All</span><!--
     --><span>|</span><span class="link" @click="deselectVisibleOptions">None</span>
      </div>
    </div>
    <div class="select" v-if="visibleOptions.length">
      <div class="option" :class="{'option-selected': isSelected(option)}" v-for="(option, i) in visibleOptions" :key="i"
           @click="optionClick(option)">
        <div class="label-wrapper">
          <span class="nowrap">{{ option.label }}</span>
        </div>
        <i v-visible="isSelected(option)" :class="icon + ' option-icon'" />
      </div>
    </div>
    <div v-else class="no-options">
      <span v-if="options.length">No options match the search</span>
      <span v-else>No options are available</span>
    </div>
  </div>
</template>

<script>
import VueVisible from 'vue-visible'
import debounce from 'lodash.debounce'

export default {
  props: {
    value: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
    icon: {
      type: String,
      default: 'icon-small-completed'
    }
  },
  data() {
    return {
      filter: '', /* always set in lowercase */
      selected: []
    }
  },
  computed: {
    visibleOptions() {
      return this.options.filter(option => (option.label.toLowerCase().includes(this.filter)))
    }
  },
  methods: {
    onChange: debounce(function(option) {
      this.$emit('input', this.value, option)
    }, 200),
    optionClick: debounce(function(option) {
      const selectedOptionIndex = this.findSelectedOptionIndex(option)
      if (selectedOptionIndex !== -1) {
        this.value.splice(selectedOptionIndex, 1)
      } else {
        this.value.push(Object.assign({}, option))
      }
      this.onChange(option)
    }, 200),
    selectVisibleOptions: debounce(function() {
      this.visibleOptions.forEach(option => {
        const selectedIndex = this.value.findIndex(item => (item.value === option.value))
        if (selectedIndex === -1) {
          this.value.push(Object.assign({}, option))
        }
      })
      this.onChange()
    }, 200),
    deselectVisibleOptions: debounce(function() {
      this.visibleOptions.forEach((option, index) => {
        const selectedOptionIndex = this.findSelectedOptionIndex(option)
        if (selectedOptionIndex !== -1) {
          this.value.splice(selectedOptionIndex, 1)
        }
      })
      this.onChange()
    }, 200),
    onInput(filter) {
      this.filter = filter.toLowerCase()
    },
    findSelectedOptionIndex(option) {
      return this.value.findIndex(item => (item.value === option.value))
    },
    isSelected(option) {
      return this.value.some(item => (item.value === option.value))
    }
  },
  directives: {
    'visible': VueVisible,
  }
}
</script>

<style scoped>
.filter-select {
  overflow-y: hidden;
  padding: 5px 0 18px 5px; /* offset scrollbar by 5px */
}

.filter-select,
.select {
  height: 270px;
}

.input-group {
  margin: 0 10px 0 5px;
}

.input {
  border-bottom: 1px solid rgba(85, 102, 118, .6);
}

.all-none {
  text-align: right;
  color: rgb(191, 203, 217);
  font-size: 12px;
  margin-top: 5px;
}

.option, .link {
  color: rgba(85, 102, 118, 0.6);
  cursor: pointer;
}

.all-none .link {
  margin: 0 5px;
}

.select {
  overflow-y: auto;
  height: 230px;
  margin-right: 2px;
}

.option {
  position: relative;
  color: rgb(191, 203, 217);
  padding: 6px 15px;
  left: 0;
  right: 0;
}

.option:hover,
.option-selected {
  color: #556676;
}

.label-wrapper {
  width: 135px;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.option-icon {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
}

.no-options {
  color: rgb(191, 203, 217);
  padding: 6px 5px;
}
</style>

<style>
.filter-select > .input-group > .input.el-input > input {
  color: rgb(114, 132, 150);
}

.filter-select .select::-webkit-scrollbar {
  background-color: #dfdfdf;
  border-radius: 3px;
}

.filter-select .select::-webkit-scrollbar-thumb {
  background: rgba(110, 128, 146, .2);
}
</style>
