<template functional>
  <div data-ft-id="transfer-option">
    <i :class="props.icon"></i>
    <span>{{ props.label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    icon: {
      type: String,
      default: '',
    },
  }
}
</script>

<style scoped>
  span {
    margin-left: 5px;
  }
</style>
