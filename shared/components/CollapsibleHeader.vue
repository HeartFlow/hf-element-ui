<template>
  <div class="collapsible" :class="{open}">
    <div class="no-select">
      <span class="header" @click="toggle">
        <slot name="header" /><i class="header-arrow icon-small-chevron" />
      </span>
    </div>
    <el-collapse-transition>
      <slot v-if="open" />
    </el-collapse-transition>
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
      if (!val) this.$emit('collapse')
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
    margin-left: 2px;
  }

  .header-arrow:before {
    transition: transform .3s;
    transform: rotate(-90deg);
  }

  .collapsible.open .header-arrow:before {
    transform: rotate(0deg);
  }
</style>
