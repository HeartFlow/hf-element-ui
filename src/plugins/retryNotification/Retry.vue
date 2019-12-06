<template>
  <div class="secondary">
    <div class="content">
      <slot></slot>
    </div>
    <div>
      <hf-action-button type="secondary" @click="retryHandler" ref="btn">Retry</hf-action-button>
      <el-button type="text-secondary" class="close-btn" @click="close">Cancel</el-button>
    </div>
  </div>
</template>

<script>
import ActionButton from '../../components/ActionButton'

export default {
  props: {
    retryData: {
      status: ''
    },
    retryAction: {
      type: Function
    },
    close: {
      type: Function
    }
  },

  watch: {
    retryData: {
      handler: function(val) {
        this.$refs.btn.$emit('update', val.status, () => {
          if (val.status === 'success') {
            this.close()
          }
        })
      },
      deep: true
    }
  },

  methods: {
    retryHandler() {
      this.loading = true
      this.retryAction()
    }
  },
  components: {
    'hf-action-button': ActionButton
  }
}
</script>

<style scoped>
.content {
  margin-bottom: 2em;
  margin-right: 1.5em;
}

.close-btn {
  width: 50%;
}
</style>
