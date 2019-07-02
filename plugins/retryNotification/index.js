import Retry from './Retry'

const RetryNotificationPlugin = {
  install(Vue) {
    var retryNotification_
    var config_

    function init_(self, { retryData, retryAction }, defaultSlot) {
      retryNotification_ = self.$notify({
        title: 'Oops!',
        duration: 0,
        type: 'warning',
        message: self.$createElement(Retry, {
          props: {
            retryData: retryData,
            retryAction: retryAction,
            close: () => {
              return new Promise(() => {
                config_.retryData.status = 'success'
                retryNotification_ && retryNotification_.close()
              })
            }
          },
          scopedSlots: {
            default: () => defaultSlot()
          }
        }),
        onClose: () => {
          retryNotification_ = null
        }
      })
    }

    Vue.prototype.retryNotification = function(config, defaultSlot) {
      config_ = config
      var self = this
      return {
        show() {
          if (!retryNotification_) {
            init_(self, config, defaultSlot)
          } else {
            retryNotification_.visible = true
          }
        },

        close(status) {
          return new Promise(resolve => {
            config.retryData && (config.retryData.status = status || 'success')
            resolve()
          })
        }
      }
    }
  }
}

export default RetryNotificationPlugin
