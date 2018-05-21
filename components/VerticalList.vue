<template functional>
  <div class="container">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <el-spinner v-if="props.loading" :radius="40" :stroke-width="2"></el-spinner>
    <ul v-else class="list">
      <slot name="items"></slot>
    </ul>
  </div>
</template>

<script>
export default {
  install: function(Vue) {
    Vue.component('hf-vertical-list', this)
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 1em 0;
}

.list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.container ul >>> li {
  list-style: none;
  overflow-x: hidden;
  text-overflow: ellipsis;
  opacity: .6;
  margin: 0;
  font-size: 14px;
}

.title > * {
  font-size: 14px;
  padding-bottom: 5px;
  margin: 0;
}
</style>
