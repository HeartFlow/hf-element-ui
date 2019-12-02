// Removes focus from an element on mouseup

export default {
  inserted: function(el) {
    el.addEventListener('mouseup', el.blur)
  },
  unbind: function(el) {
    el.removeEventListener('mouseup', el.blur)
  }
}
