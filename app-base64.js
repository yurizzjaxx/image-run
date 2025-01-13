function en64_utf8(str) {
  return window.btoa(unescape(encodeURIComponent(str)))
}

function de64_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)))
}