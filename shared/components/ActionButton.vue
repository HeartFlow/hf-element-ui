<template>
  <button :disabled="disabled" @click.prevent="onClick" v-hf-blur
          :class="[
            'el-button',
            type ? 'el-button--' + type : '',
            size ? 'el-button--' + size : '',
            {
              'is-disabled': disabled,
              'is-loading': loading,
              'throbbing': !loading && throbbing
            }
          ]">
    <transition name="hf-fade-in" mode="out-in">
      <!-- spinning -->
      <el-spinner v-if="loading && spinning" class="spinner" key="spinner" :radius="46" :stroke-width="4"></el-spinner>

      <!-- finished spinning; showing status animation -->
      <div v-else-if="loading" class="svg-wrapper" key="svg-wrapper">
        <svg v-if="success"><path class="success" key="success" d="M1 8.8 L4.64 12.8 L15 2.32" /></svg>
        <svg v-else-if="failure"><path class="failure" key="failure" d="M0 0 L16 16 M16 0 L0 16" /></svg>
      </div>

      <!-- not loading; icon button -->
      <div v-else-if="icon" class="icon-wrapper" key="icon"><i :class="icon"></i></div>

      <!-- not loading; text button -->
      <span v-else key="default"><slot></slot></span>
    </transition>
  </button>
</template>

<script>
const ACTION_BUTTON_TIMEOUT = 1000

export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    disabled: Boolean
  },

  data() {
    return {
      loading: false, // auto on when clicked, off _after_ success/failure animation completes
      spinning: false,
      success: false,
      failure: false,
      throbbing: false
    }
  },

  watch: {
    disabled(val) {
      val && (this.throbbing = false)
    }
  },

  mounted() {
    this.$on('update', (type, clb) => {
      switch (type) {
        case 'throb':
          this.throbbing = true
          break
        case 'success':
          this.spinning = false
          this.success = true
          setTimeout(() => {
            this.success = false
            this.loading = false
            clb && clb()
          }, ACTION_BUTTON_TIMEOUT)
          break
        case 'failure':
          this.spinning = false
          this.failure = true
          setTimeout(() => {
            this.failure = false
            this.loading = false
            clb && clb()
          }, ACTION_BUTTON_TIMEOUT)
          break
        case 'spin':
          this.spinning = true
          this.loading = true
          break
        case 'reset':
          this.loading = false
          this.spinning = false
          break
        case 'complete':
          this.spinning = false
          this.success = true
          setTimeout(() => {
            clb && clb()
          }, ACTION_BUTTON_TIMEOUT)
      }
    })
  },

  methods: {
    onClick(evt) {
      this.loading = true
      this.spinning = true
      this.throbbing = false
      this.$emit('click', evt)
    }
  },

  directives: {
    'hf-blur': {
      inserted: function(el) {
        el.addEventListener('mouseup', el.blur)
      },
      unbind(el) {
        el.removeEventListener('mouseup', el.blur)
      }
    }
  }
}
</script>

<style scoped>
button {
  min-width: 8em;
  vertical-align: top;
}

.icon-wrapper {
  height: 16px;
  position: relative;
}

.icon-wrapper i {
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.throbbing {
  animation: throb 1s infinite linear;
}

.throbbing:hover {
  animation: none;
}

@keyframes throb {
  50% { background-color: rgba(255, 255, 255, 0.15) }
}

.spinner {
  margin-top: -6px;
  margin-bottom: -4px;
  line-height: 0;
}

.svg-wrapper {
  display: inline-block;
  width: 16px;
  height: 15px;
  margin: -3px 0;
  transform: translate(2px, 2px) scale(1.4);
}

.svg-wrapper svg {
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 1.3;
}

.svg-wrapper .success {
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  animation: stroke .4s .1s forwards;
}

.svg-wrapper .failure {
  stroke-dasharray: 23;
  stroke-dashoffset: 23;
  animation: stroke .6s .1s forwards;
}

@keyframes stroke {
  100% { stroke-dashoffset: 0; }
}
</style>
