// Removes focus from an element on mouseup

export default {
  inserted: function(el) {
    el.addEventListener('mouseup', el.blur)
  },
  unbind(el) {
    el.removeEventListener('mouseup', el.blur)
  }
}
