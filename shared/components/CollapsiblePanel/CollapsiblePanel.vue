<template>
  <div class="el-collapse collapsible-panel full-height" role="tablist" aria-multiselectable="true"
       :class="{collapsed: !isPanelVisible}">
    <slot></slot>
  </div>
</template>

<script>
import Collapse from './collapse'
import debounce from 'lodash.debounce'

// Remove watchers from extended Element-UI Collapse to avoid conflicts
// with new declared watchers in this component
const extendedCollapse = Object.assign({}, Collapse, { watch: {} })

const TIMEOUT_COLLAPSIBLE_PANEL = 300

// Animation time: Expand/Collapse section + Reveal/Hide panel
const CLICK_DEBOUNCE_TIMEOUT = TIMEOUT_COLLAPSIBLE_PANEL * 2

export default {
  extends: extendedCollapse,
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      triggerWatcher: true,
      isPanelVisible: Boolean(this.value)
    }
  },
  watch: {
    value(newVal, oldVal) {
      if (!this.triggerWatcher) {
        this.triggerWatcher = true
        return
      }

      if (newVal === '') this.close()
      else if (oldVal === '' && newVal !== oldVal) this.open(newVal)
      else this.activeNames = [].concat(newVal)
    }
  },
  methods: {
    open(itemName) {
      this.$emit('transition', 'before-open')
      this.isPanelVisible = true
      setTimeout(() => {
        this.activeNames = [itemName]
      }, TIMEOUT_COLLAPSIBLE_PANEL)
    },
    close() {
      this.activeNames = ['']
      setTimeout(() => {
        this.isPanelVisible = false
        this.$emit('transition', 'after-collapse')
      }, TIMEOUT_COLLAPSIBLE_PANEL)
    },
    handleItemClick: debounce(function(item) {
      const clickSameItem = this.activeNames[0] === item.name
      const openPanel = this.activeNames[0] === ''

      if (clickSameItem) {
        this.close()
        this.$emit('toggle', false)
      } else if (openPanel) {
        this.open(item.name)
        this.$emit('toggle', true)
      } else { // Already opened, expand different collapse item
        this.activeNames = [].concat(item.name)
      }

      this.triggerWatcher = false
      this.$emit('input', clickSameItem ? '' : item.name)
      this.$emit('change', item.name)
    }, CLICK_DEBOUNCE_TIMEOUT, { leading: true, trailing: false })
  }
}
</script>

<style scoped>
.collapsible-panel {
  overflow: hidden;
  width: 400px;
  transition: width 300ms;
}
.el-collapse.collapsible-panel.collapsed {
  width: 50px;
}
.collapsible-panel >>> i.el-icon-arrow-right {
  display: none;
}

@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
  /* IE11 styles */
  .collapsible-panel {
    display: flex;
    flex-direction: column;
  }
}
</style>
