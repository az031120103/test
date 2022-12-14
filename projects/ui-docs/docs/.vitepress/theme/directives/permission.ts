const checkPermission = (value) => {
  console.log(value)
  return true
}

export default {
  mounted: (el, binding) => {
    const { value } = binding
    const hasPermission = checkPermission(value)
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
}
