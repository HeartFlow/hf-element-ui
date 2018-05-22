<template>
  <div class="collapsible" :class="{open}">
    <div class="no-select">
      <span class="header" @click="toggle">
        <slot name="header"></slot><i class="header-arrow el-icon-caret-right"></i>
      </span>
    </div>
    <transition name="fadeHeight">
      <div v-if="open" class="content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  data() {
    return {
      open: false
    }
  },
  watch: {
    open: debounce(function(val) {
      if (!val) {
        this.$emit('collapse')
      }
    }, 300)
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style scoped>
  .header {
    cursor: pointer;
  }
  .header-arrow {
    transition: transform .3s;
    margin-left: 10px;
  }
  .collapsible.open .header-arrow {
    transform: rotate(0deg);
  }
</style>
